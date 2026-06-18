const { ipcRenderer } = require('electron');

let isSyncingScroll = false;
let scrollTimeout = null;
let syncCaptureEnabled = true;
let flowModeEnabled = false;

// Helper to generate a unique-ish CSS selector for any clicked/inputted element
function getDomPath(el) {
  if (!(el instanceof Element)) return [];
  if (el === document.documentElement) return [];

  const path = [];
  let current = el;
  while (current && current !== document.documentElement) {
    const parent = current.parentElement;
    if (!parent) break;
    const index = Array.from(parent.children).indexOf(current);
    if (index < 0) break;
    path.unshift(index);
    current = parent;
  }
  return path;
}

function resolveDomPath(path) {
  if (!Array.isArray(path) || path.length === 0) {
    return document.documentElement;
  }

  let current = document.documentElement;
  for (const index of path) {
    current = current?.children?.[index];
    if (!current) return null;
  }
  return current;
}

function resolveDomNode({ domPath, parentSelector, selector }) {
  const path = domPath || parentSelector?.domPath;
  if (Array.isArray(path)) {
    const byPath = resolveDomPath(path);
    if (byPath) return byPath;
  }
  const sel = selector || parentSelector;
  if (!sel) return null;
  try {
    return document.querySelector(sel);
  } catch {
    return null;
  }
}

function getUniqueSelector(el) {
  if (!(el instanceof Element)) return '';
  const path = [];
  let currentEl = el;

  while (currentEl && currentEl.nodeType === Node.ELEMENT_NODE) {
    let selector = currentEl.nodeName.toLowerCase();

    if (currentEl.id) {
      try {
        selector = `${selector}#${CSS.escape(currentEl.id)}`;
      } catch {
        selector = `${selector}[id="${currentEl.id.replace(/"/g, '\\"')}"]`;
      }
      path.unshift(selector);
      break;
    }

    let sibling = currentEl;
    let nth = 1;
    while (sibling = sibling.previousElementSibling) {
      if (sibling.nodeName.toLowerCase() === currentEl.nodeName.toLowerCase()) {
        nth++;
      }
    }
    selector += `:nth-of-type(${nth})`;
    path.unshift(selector);
    currentEl = currentEl.parentNode;
  }
  return path.join(' > ');
}

// -------------------------------------------------------------
// EVENT CAPTURING & FORWARDING TO HOST
// -------------------------------------------------------------

// Scroll Event
window.addEventListener('scroll', () => {
  if (!syncCaptureEnabled || isSyncingScroll) return;

  const scrollX = window.scrollX;
  const scrollY = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const docWidth = document.documentElement.scrollWidth - window.innerWidth;
  
  const pctY = docHeight > 0 ? scrollY / docHeight : 0;
  const pctX = docWidth > 0 ? scrollX / docWidth : 0;

  ipcRenderer.sendToHost('guest-scroll', { scrollX, scrollY, pctX, pctY });
}, { passive: true });

// Click Event
window.addEventListener('click', (event) => {
  if (!event.isTrusted) return;

  const selector = getUniqueSelector(event.target);
  if (!selector) return;

  if (inspectModeActive) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    clearElementHover();
    highlightElementBySelector(selector);
    ipcRenderer.sendToHost('guest-inspect-pick', { selector });
    return;
  }

  if (flowModeEnabled) {
    const anchor = event.target?.closest?.('a[href]');
    if (anchor) {
      let href = '';
      try {
        const rawHref = anchor.getAttribute('href') || '';
        href = new URL(rawHref, window.location.href).href;
      } catch {
        href = anchor.href || '';
      }
      if (
        href
        && !href.startsWith('javascript:')
        && !href.startsWith('mailto:')
        && !href.startsWith('tel:')
      ) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        ipcRenderer.sendToHost('guest-flow-navigate', {
          href,
          text: (anchor.textContent || '').trim().slice(0, 120),
        });
      }
    }
    return;
  }

  if (!syncCaptureEnabled) return;

  ipcRenderer.sendToHost('guest-click', { selector });
}, true); // Capture phase

// Input and Change Events (form elements)
function handleInputEvent(event) {
  if (!syncCaptureEnabled) return;
  if (!event.isTrusted) return;

  const el = event.target;
  const selector = getUniqueSelector(el);
  if (!selector) return;

  const data = {
    selector,
    value: el.value,
    checked: el.checked,
    type: el.type
  };
  ipcRenderer.sendToHost('guest-input', data);
}
window.addEventListener('input', handleInputEvent, true);
window.addEventListener('change', handleInputEvent, true);


// -------------------------------------------------------------
// RECEIVING COMMANDS FROM HOST
// -------------------------------------------------------------

ipcRenderer.on('set-sync-capture', (_event, enabled) => {
  syncCaptureEnabled = Boolean(enabled);
});

ipcRenderer.on('set-flow-mode', (_event, enabled) => {
  flowModeEnabled = Boolean(enabled);
});

ipcRenderer.on('sync-scroll', (event, data) => {
  isSyncingScroll = true;
  
  if (scrollTimeout) clearTimeout(scrollTimeout);
  
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const docWidth = document.documentElement.scrollWidth - window.innerWidth;

  const targetX = data.pctX * docWidth;
  const targetY = data.pctY * docHeight;

  window.scrollTo(targetX, targetY);

  // Buffer to ignore immediate scroll events from programmatic scrolling
  scrollTimeout = setTimeout(() => {
    isSyncingScroll = false;
  }, 50);
});

ipcRenderer.on('sync-click', (event, data) => {
  try {
    const el = document.querySelector(data.selector);
    if (el) {
      // Create a trusted click event simulation
      const clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      });
      el.dispatchEvent(clickEvent);
      if (typeof el.focus === 'function') el.focus();
    }
  } catch (e) {
    console.error('Error applying synced click', e);
  }
});

ipcRenderer.on('sync-input', (event, data) => {
  try {
    const el = document.querySelector(data.selector);
    if (el) {
      if (el.type === 'checkbox' || el.type === 'radio') {
        el.checked = data.checked;
      } else {
        el.value = data.value;
      }
      
      // Dispatch events to trigger framework listeners (React, Vue, etc.)
      el.dispatchEvent(new Event('input', { bubbles: true }));
      el.dispatchEvent(new Event('change', { bubbles: true }));
    }
  } catch (e) {
    console.error('Error applying synced input', e);
  }
});

// Apply colorblindness filter via injected SVG
ipcRenderer.on('apply-vision-filter', (event, filterId) => {
  // Ensure filters SVG is injected
  let filtersSvg = document.getElementById('sashigane-vision-filters');
  if (!filtersSvg) {
    filtersSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    filtersSvg.id = 'sashigane-vision-filters';
    filtersSvg.style.display = 'none';
    filtersSvg.innerHTML = `
      <defs>
        <filter id="protanopia">
          <feColorMatrix type="matrix" values="0.567 0.433 0 0 0 0.558 0.442 0 0 0 0 0.242 0.758 0 0 0 0 0 1 0"/>
        </filter>
        <filter id="deuteranopia">
          <feColorMatrix type="matrix" values="0.625 0.375 0 0 0 0.7 0.3 0 0 0 0 0.3 0.7 0 0 0 0 0 1 0"/>
        </filter>
        <filter id="tritanopia">
          <feColorMatrix type="matrix" values="0.95 0.05 0 0 0 0 0.433 0.567 0 0 0 0.475 0.525 0 0 0 0 0 1 0"/>
        </filter>
        <filter id="achromatopsia">
          <feColorMatrix type="matrix" values="0.299 0.587 0.114 0 0 0.299 0.587 0.114 0 0 0.299 0.587 0.114 0 0 0 0 0 1 0"/>
        </filter>
      </defs>
    `;
    document.body.appendChild(filtersSvg);
  }

  if (filterId && filterId !== 'normal') {
    document.documentElement.style.filter = `url(#${filterId})`;
  } else {
    document.documentElement.style.filter = '';
  }
});

// Toggle CSS layout outline (Pesticide effect)
ipcRenderer.on('toggle-css-outline', (event, show) => {
  let styleTag = document.getElementById('sashigane-css-outline-style');
  if (show) {
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = 'sashigane-css-outline-style';
      styleTag.innerHTML = `
        * {
          outline: 1px solid rgba(139, 92, 246, 0.4) !important;
          outline-offset: -1px !important;
        }
      `;
      document.head.appendChild(styleTag);
    }
  } else {
    if (styleTag) styleTag.remove();
  }
});

// -------------------------------------------------------------
// METADATA & MEDIA QUERY BREAKPOINTS EXTRACTION
// -------------------------------------------------------------

function extractBreakpoints() {
  const breakpoints = new Set();
  try {
    for (const sheet of document.styleSheets) {
      try {
        const rules = sheet.cssRules || sheet.rules;
        if (!rules) continue;
        for (const rule of rules) {
          if (rule.type === CSSRule.MEDIA_RULE) {
            const mediaText = rule.media.mediaText;
            const matches = mediaText.match(/(?:min|max)-width:\s*(\d+)px/g);
            if (matches) {
              for (const match of matches) {
                const val = match.match(/\d+/)[0];
                breakpoints.add(parseInt(val, 10));
              }
            }
          }
        }
      } catch (e) {
        // Cross-origin stylesheet access error (normal behavior)
      }
    }
  } catch (e) {}
  // Only return practical breakpoints (e.g. between 320px and 2560px)
  return Array.from(breakpoints)
    .filter(bp => bp >= 320 && bp <= 2560)
    .sort((a, b) => a - b);
}

function extractFaviconUrl() {
  const iconLinks = [...document.querySelectorAll('link[rel~="icon"], link[rel="apple-touch-icon"]')];
  const ranked = iconLinks
    .map(link => {
      const href = link.getAttribute('href')?.trim();
      if (!href) return null;
      try {
        const url = new URL(href, location.href).href;
        const sizesAttr = link.getAttribute('sizes') || '';
        const sizeMatch = sizesAttr.match(/(\d+)\s*x\s*(\d+)/i);
        const size = sizeMatch ? Number(sizeMatch[1]) : 0;
        return { url, size };
      } catch {
        return null;
      }
    })
    .filter(Boolean)
    .sort((a, b) => b.size - a.size);

  if (ranked.length) return ranked[0].url;

  try {
    return new URL('/favicon.ico', location.href).href;
  } catch {
    return '';
  }
}

function extractLayoutAudit() {
  const doc = document.documentElement;
  const body = document.body;
  const viewportWidth = window.innerWidth;
  const scrollWidth = Math.max(
    doc.scrollWidth,
    body?.scrollWidth || 0,
    doc.offsetWidth,
    body?.offsetWidth || 0,
  );
  const clientWidth = doc.clientWidth;
  const overflowX = Math.max(0, scrollWidth - clientWidth);
  const scrollHeight = Math.max(doc.scrollHeight, body?.scrollHeight || 0);
  const overflowY = Math.max(0, scrollHeight - doc.clientHeight);

  const offenders = [];
  const seen = new Set();

  for (const el of document.querySelectorAll('body *')) {
    if (!(el instanceof HTMLElement)) continue;
    const style = getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden') continue;

    const rect = el.getBoundingClientRect();
    if (rect.width < 1 || rect.height < 1) continue;
    if (rect.right <= viewportWidth + 1) continue;

    const selector = getUniqueSelector(el);
    if (!selector || seen.has(selector)) continue;
    seen.add(selector);

    offenders.push({
      selector,
      tag: el.tagName.toLowerCase(),
      right: Math.round(rect.right),
      overflow: Math.round(rect.right - viewportWidth),
    });
    if (offenders.length >= 8) break;
  }

  return {
    viewportWidth,
    scrollWidth,
    clientWidth,
    overflowX,
    overflowY,
    hasHorizontalOverflow: overflowX > 1,
    hasVerticalOverflow: overflowY > 1,
    offenders,
  };
}

function extractPageMetadata() {
  const title = document.title.trim();
  
  const descEl = document.querySelector('meta[name="description"]');
  const description = descEl ? (descEl.getAttribute('content') || '').trim() : '';

  // OpenGraph
  const ogTitleEl = document.querySelector('meta[property="og:title"]');
  const ogTitle = ogTitleEl ? (ogTitleEl.getAttribute('content') || '').trim() : '';
  const ogDescEl = document.querySelector('meta[property="og:description"]');
  const ogDesc = ogDescEl ? (ogDescEl.getAttribute('content') || '').trim() : '';
  const ogImageEl = document.querySelector('meta[property="og:image"]');
  const ogImage = ogImageEl ? (ogImageEl.getAttribute('content') || '').trim() : '';
  const ogTypeEl = document.querySelector('meta[property="og:type"]');
  const ogType = ogTypeEl ? (ogTypeEl.getAttribute('content') || '').trim() : '';
  const ogUrlEl = document.querySelector('meta[property="og:url"]');
  const ogUrl = ogUrlEl ? (ogUrlEl.getAttribute('content') || '').trim() : '';

  // Twitter
  const twitterTitleEl = document.querySelector('meta[name="twitter:title"]');
  const twitterTitle = twitterTitleEl ? (twitterTitleEl.getAttribute('content') || '').trim() : '';
  const twitterDescEl = document.querySelector('meta[name="twitter:description"]');
  const twitterDesc = twitterDescEl ? (twitterDescEl.getAttribute('content') || '').trim() : '';
  const twitterImageEl = document.querySelector('meta[name="twitter:image"]');
  const twitterImage = twitterImageEl ? (twitterImageEl.getAttribute('content') || '').trim() : '';
  const twitterCardEl = document.querySelector('meta[name="twitter:card"]');
  const twitterCard = twitterCardEl ? (twitterCardEl.getAttribute('content') || '').trim() : '';

  const canonicalEl = document.querySelector('link[rel="canonical"]');
  const canonical = canonicalEl ? (canonicalEl.getAttribute('href') || '').trim() : '';
  const robotsEl = document.querySelector('meta[name="robots"]');
  const robots = robotsEl ? (robotsEl.getAttribute('content') || '').trim().toLowerCase() : '';
  const viewportMetaEl = document.querySelector('meta[name="viewport"]');
  const viewportMeta = viewportMetaEl ? (viewportMetaEl.getAttribute('content') || '').trim() : '';
  const lang = (document.documentElement.getAttribute('lang') || '').trim();
  const charset = document.characterSet || '';
  const hasFavicon = Boolean(document.querySelector('link[rel~="icon"], link[rel="shortcut icon"]'));
  const faviconUrl = extractFaviconUrl();

  // Headers Outline
  const headers = [];
  const headerElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  headerElements.forEach(el => {
    headers.push({
      level: parseInt(el.tagName.substring(1), 10),
      text: el.innerText.trim()
    });
  });

  const h1Count = headers.filter(h => h.level === 1).length;

  // Images Alt Audit
  const images = [];
  const imageElements = document.querySelectorAll('img');
  imageElements.forEach(el => {
    const alt = el.getAttribute('alt');
    images.push({
      src: el.src,
      alt,
      hasAlt: el.hasAttribute('alt'),
      altEmpty: el.hasAttribute('alt') && !(alt || '').trim(),
      width: el.naturalWidth || el.width || 0,
      height: el.naturalHeight || el.height || 0,
    });
  });

  return {
    title,
    description,
    ogTitle,
    ogDesc,
    ogImage,
    ogType,
    ogUrl,
    twitterTitle,
    twitterDesc,
    twitterImage,
    twitterCard,
    canonical,
    robots,
    viewportMeta,
    lang,
    charset,
    hasFavicon: hasFavicon || Boolean(faviconUrl),
    faviconUrl,
    h1Count,
    headers,
    images,
    breakpoints: extractBreakpoints()
  };
}

// Send page audits and discovered breakpoints immediately when loaded
window.addEventListener('DOMContentLoaded', () => {
  // Let page render fully, then gather metadata
  setTimeout(() => {
    ipcRenderer.sendToHost('guest-metadata', extractPageMetadata());
  }, 1000);
});

// Also respond to manual request for audits
ipcRenderer.on('request-metadata', () => {
  ipcRenderer.sendToHost('guest-metadata', extractPageMetadata());
});

ipcRenderer.on('request-layout-audit', () => {
  ipcRenderer.sendToHost('guest-layout-audit', extractLayoutAudit());
});

const LAYOUT_OVERFLOW_STYLE_ID = 'sashigane-layout-overflow-style';

ipcRenderer.on('toggle-layout-overflow-outline', (_event, show) => {
  let styleTag = document.getElementById(LAYOUT_OVERFLOW_STYLE_ID);
  if (show) {
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = LAYOUT_OVERFLOW_STYLE_ID;
      styleTag.textContent = `
        html body * {
          outline: 1px solid rgba(239, 68, 68, 0.45) !important;
          outline-offset: -1px !important;
        }
      `;
      document.head.appendChild(styleTag);
    }
  } else if (styleTag) {
    styleTag.remove();
  }
});

function isScrollableElement(el) {
  if (!(el instanceof Element)) return false;

  const root = document.scrollingElement || document.documentElement;
  if (el === root || el === document.documentElement || el === document.body) {
    return root.scrollHeight > root.clientHeight + 1 || root.scrollWidth > root.clientWidth + 1;
  }

  const style = getComputedStyle(el);
  const canScrollY = (style.overflowY === 'auto' || style.overflowY === 'scroll' || style.overflowY === 'overlay')
    && el.scrollHeight > el.clientHeight + 1;
  const canScrollX = (style.overflowX === 'auto' || style.overflowX === 'scroll' || style.overflowX === 'overlay')
    && el.scrollWidth > el.clientWidth + 1;
  return canScrollY || canScrollX;
}

function findScrollableTargetAt(x, y) {
  if (typeof x === 'number' && typeof y === 'number') {
    let el = document.elementFromPoint(x, y);
    while (el) {
      if (isScrollableElement(el)) return el;
      if (el === document.body || el === document.documentElement) break;
      el = el.parentElement;
    }
  }
  return document.scrollingElement || document.documentElement;
}

function scrollElementBy(el, dx, dy) {
  const root = document.scrollingElement || document.documentElement;
  if (el === root || el === document.documentElement || el === document.body) {
    const x0 = window.scrollX;
    const y0 = window.scrollY;
    const maxX = Math.max(0, root.scrollWidth - window.innerWidth);
    const maxY = Math.max(0, root.scrollHeight - window.innerHeight);
    const nextX = Math.min(maxX, Math.max(0, x0 + dx));
    const nextY = Math.min(maxY, Math.max(0, y0 + dy));
    window.scrollTo(nextX, nextY);
    return {
      consumedX: window.scrollX - x0,
      consumedY: window.scrollY - y0,
    };
  }

  const x0 = el.scrollLeft;
  const y0 = el.scrollTop;
  const maxX = Math.max(0, el.scrollWidth - el.clientWidth);
  const maxY = Math.max(0, el.scrollHeight - el.clientHeight);
  el.scrollLeft = Math.min(maxX, Math.max(0, x0 + dx));
  el.scrollTop = Math.min(maxY, Math.max(0, y0 + dy));
  return {
    consumedX: el.scrollLeft - x0,
    consumedY: el.scrollTop - y0,
  };
}

ipcRenderer.on('wheel-scroll', (_event, { deltaX, deltaY, x, y }) => {
  const dx = Number(deltaX) || 0;
  const dy = Number(deltaY) || 0;
  if (!dx && !dy) return;

  const target = findScrollableTargetAt(
    typeof x === 'number' ? x : undefined,
    typeof y === 'number' ? y : undefined,
  );
  const { consumedX, consumedY } = scrollElementBy(target, dx, dy);
  const rx = dx - consumedX;
  const ry = dy - consumedY;

  if (Math.abs(rx) > 0.5 || Math.abs(ry) > 0.5) {
    ipcRenderer.sendToHost('wheel-scroll-overflow', { deltaX: rx, deltaY: ry });
  }
});

// -------------------------------------------------------------
// DOM INSPECTOR — tree extraction & DevTools-style highlight
// -------------------------------------------------------------

const SASHIGANE_IGNORE_IDS = new Set([
  'sashigane-element-highlight',
  'sashigane-element-highlight-label',
  'sashigane-element-hover',
  'sashigane-vision-filters',
  'sashigane-css-outline-style',
]);

const DOM_TREE_SKIP_TAGS = new Set([
  'script', 'style', 'link', 'meta', 'noscript', 'head',
]);

let highlightedSelector = null;
let highlightRaf = null;
let hoveredSelector = null;
let inspectModeActive = false;

function clearElementHover() {
  hoveredSelector = null;
  document.getElementById('sashigane-element-hover')?.remove();
}

function updateHoverOverlay(el) {
  if (!el || !(el instanceof Element)) return;

  const rect = el.getBoundingClientRect();
  let overlay = document.getElementById('sashigane-element-hover');

  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'sashigane-element-hover';
    overlay.style.cssText = `
      position: fixed;
      pointer-events: none;
      z-index: 2147483645;
      background: rgba(46, 181, 255, 0.08);
      border: 1px dashed #2eb5ff;
      box-sizing: border-box;
    `;
    document.documentElement.appendChild(overlay);
  }

  overlay.style.top = `${rect.top}px`;
  overlay.style.left = `${rect.left}px`;
  overlay.style.width = `${rect.width}px`;
  overlay.style.height = `${rect.height}px`;
}

function hoverElementBySelector(selector) {
  clearElementHover();
  if (!selector || inspectModeActive) return;

  let el;
  try {
    el = document.querySelector(selector);
  } catch {
    return;
  }

  if (!el || !isInspectableElement(el)) return;
  hoveredSelector = selector;
  updateHoverOverlay(el);
}

function parseBoxSides(cs, type) {
  if (type === 'border') {
    return {
      top: cs.borderTopWidth,
      right: cs.borderRightWidth,
      bottom: cs.borderBottomWidth,
      left: cs.borderLeftWidth,
    };
  }
  const base = type;
  return {
    top: cs[`${base}Top`],
    right: cs[`${base}Right`],
    bottom: cs[`${base}Bottom`],
    left: cs[`${base}Left`],
  };
}

const COMPUTED_STYLE_KEYS = [
  'display', 'position', 'top', 'right', 'bottom', 'left', 'z-index',
  'width', 'height', 'min-width', 'max-width', 'min-height', 'max-height',
  'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
  'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
  'border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width',
  'box-sizing', 'overflow', 'overflow-x', 'overflow-y',
  'font-family', 'font-size', 'font-weight', 'line-height', 'color',
  'background-color', 'opacity', 'flex', 'flex-direction', 'grid-template-columns',
  'align-items', 'justify-content', 'gap', 'cursor', 'pointer-events',
];

function extractElementInfo(selector) {
  let el;
  try {
    el = document.querySelector(selector);
  } catch {
    return { success: false, selector };
  }

  if (!el || !isInspectableElement(el)) {
    return { success: false, selector };
  }

  const cs = getComputedStyle(el);
  const rect = el.getBoundingClientRect();
  const computed = {};

  COMPUTED_STYLE_KEYS.forEach(key => {
    const value = cs.getPropertyValue(key);
    if (value) computed[key] = value;
  });

  const attributes = Array.from(el.attributes).map(attr => ({
    name: attr.name,
    value: attr.value,
  }));

  let textPreview = '';
  if (el.childNodes.length === 1 && el.childNodes[0].nodeType === Node.TEXT_NODE) {
    textPreview = el.textContent.trim().slice(0, 160);
  }

  const role = el.getAttribute('role') || '';
  const ariaLabel = el.getAttribute('aria-label') || '';

  return {
    success: true,
    selector,
    label: formatDomLabel(el),
    tag: el.tagName.toLowerCase(),
    textPreview,
    role,
    ariaLabel,
    attributes,
    computed,
    position: {
      x: Math.round(rect.x),
      y: Math.round(rect.y),
    },
    box: {
      content: {
        width: Math.round(rect.width),
        height: Math.round(rect.height),
      },
      margin: parseBoxSides(cs, 'margin'),
      border: parseBoxSides(cs, 'border'),
      padding: parseBoxSides(cs, 'padding'),
    },
  };
}

function isInspectableElement(el) {
  if (!(el instanceof Element)) return false;
  if (el.id && SASHIGANE_IGNORE_IDS.has(el.id)) return false;
  return !DOM_TREE_SKIP_TAGS.has(el.nodeName.toLowerCase());
}

function formatDomLabel(el) {
  const tag = el.tagName.toLowerCase();
  if (el.id) return `${tag}#${el.id}`;
  const classes = typeof el.className === 'string'
    ? el.className.trim().split(/\s+/).filter(Boolean).slice(0, 2)
    : [];
  if (classes.length) return `${tag}.${classes.join('.')}`;
  return tag;
}

const DOM_TREE_INITIAL_DEPTH = 6;
const DOM_TREE_MAX_CHILDREN = 80;
const DOM_TREE_EXPAND_DEPTH = 1;

function buildDomTreeNode(el, depth, maxDepth, maxChildren) {
  if (!isInspectableElement(el)) return null;

  const childEls = Array.from(el.children).filter(isInspectableElement);
  const selector = getUniqueSelector(el);
  const domPath = getDomPath(el);
  const node = {
    selector,
    domPath,
    tag: el.tagName.toLowerCase(),
    label: formatDomLabel(el),
    childCount: childEls.length,
    hasChildren: childEls.length > 0,
    lazy: childEls.length > 0 && depth >= maxDepth,
  };

  if (depth < maxDepth && childEls.length > 0) {
    const children = childEls
      .slice(0, maxChildren)
      .map(child => buildDomTreeNode(child, depth + 1, maxDepth, maxChildren))
      .filter(Boolean);
    if (children.length) node.children = children;
    if (childEls.length > maxChildren) {
      node.truncated = childEls.length - maxChildren;
    }
  }

  return node;
}

function buildDomTreeChildren(parentEl, maxChildren, maxDepth) {
  if (!isInspectableElement(parentEl)) return [];
  return Array.from(parentEl.children)
    .filter(isInspectableElement)
    .slice(0, maxChildren)
    .map(child => buildDomTreeNode(child, 0, maxDepth, maxChildren))
    .filter(Boolean);
}

function clearElementHighlight() {
  highlightedSelector = null;
  document.getElementById('sashigane-element-highlight')?.remove();
  document.getElementById('sashigane-element-highlight-label')?.remove();
}

function updateHighlightOverlay(el) {
  if (!el || !(el instanceof Element)) return false;

  const rect = el.getBoundingClientRect();
  if (rect.width === 0 && rect.height === 0) return false;

  let overlay = document.getElementById('sashigane-element-highlight');
  let label = document.getElementById('sashigane-element-highlight-label');

  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'sashigane-element-highlight';
    overlay.style.cssText = `
      position: fixed;
      pointer-events: none;
      z-index: 2147483646;
      background: rgba(46, 181, 255, 0.18);
      border: 2px solid #2eb5ff;
      box-sizing: border-box;
      transition: top 0.05s linear, left 0.05s linear, width 0.05s linear, height 0.05s linear;
    `;
    document.documentElement.appendChild(overlay);
  }

  if (!label) {
    label = document.createElement('div');
    label.id = 'sashigane-element-highlight-label';
    label.style.cssText = `
      position: fixed;
      pointer-events: none;
      z-index: 2147483647;
      background: #2eb5ff;
      color: #0b1f2a;
      font: 600 11px/18px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      padding: 0 6px;
      border-radius: 2px;
      white-space: nowrap;
      max-width: min(320px, 90vw);
      overflow: hidden;
      text-overflow: ellipsis;
    `;
    document.documentElement.appendChild(label);
  }

  overlay.style.top = `${rect.top}px`;
  overlay.style.left = `${rect.left}px`;
  overlay.style.width = `${rect.width}px`;
  overlay.style.height = `${rect.height}px`;

  const labelText = formatDomLabel(el);
  const dims = `${Math.round(rect.width)} × ${Math.round(rect.height)}`;
  label.textContent = `${labelText}  ${dims}`;
  label.style.top = `${Math.max(0, rect.top - 20)}px`;
  label.style.left = `${rect.left}px`;

  return true;
}

function highlightElementBySelector(selector) {
  clearElementHighlight();
  if (!selector) return { success: false };

  let el;
  try {
    el = document.querySelector(selector);
  } catch {
    return { success: false, selector };
  }

  if (!el || !isInspectableElement(el)) {
    return { success: false, selector };
  }

  highlightedSelector = selector;
  updateHighlightOverlay(el);
  el.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });

  return { success: true, selector, label: formatDomLabel(el) };
}

function scheduleHighlightUpdate() {
  if (!highlightedSelector) return;
  if (highlightRaf) return;
  highlightRaf = requestAnimationFrame(() => {
    highlightRaf = null;
    try {
      const el = document.querySelector(highlightedSelector);
      if (el) updateHighlightOverlay(el);
    } catch {
      clearElementHighlight();
    }
    if (hoveredSelector) {
      try {
        const hoverEl = document.querySelector(hoveredSelector);
        if (hoverEl) updateHoverOverlay(hoverEl);
      } catch {
        clearElementHover();
      }
    }
  });
}

window.addEventListener('mousemove', (event) => {
  if (!inspectModeActive) return;
  let el = event.target;
  while (el && !isInspectableElement(el)) {
    el = el.parentElement;
  }
  if (!el) return;
  const selector = getUniqueSelector(el);
  if (selector && selector !== hoveredSelector) {
    hoveredSelector = selector;
    updateHoverOverlay(el);
  }
}, true);

window.addEventListener('scroll', scheduleHighlightUpdate, true);
window.addEventListener('resize', scheduleHighlightUpdate);

ipcRenderer.on('request-dom-tree', () => {
  const tree = buildDomTreeNode(
    document.documentElement,
    0,
    DOM_TREE_INITIAL_DEPTH,
    DOM_TREE_MAX_CHILDREN
  );
  ipcRenderer.sendToHost('guest-dom-tree', { tree });
});

ipcRenderer.on('request-dom-children', (_event, data) => {
  const parentDomPath = data?.parentDomPath;
  const parentSelector = data?.parentSelector;
  let children = [];
  let truncated = 0;
  let childCount = 0;

  const parent = resolveDomNode({ domPath: parentDomPath, selector: parentSelector });
  if (parent && isInspectableElement(parent)) {
    const childEls = Array.from(parent.children).filter(isInspectableElement);
    childCount = childEls.length;
    children = buildDomTreeChildren(parent, DOM_TREE_MAX_CHILDREN, DOM_TREE_EXPAND_DEPTH);
    if (childEls.length > DOM_TREE_MAX_CHILDREN) {
      truncated = childEls.length - DOM_TREE_MAX_CHILDREN;
    }
  }

  ipcRenderer.sendToHost('guest-dom-children', {
    parentSelector,
    parentDomPath,
    children,
    truncated,
    childCount,
  });
});

ipcRenderer.on('highlight-element', (_event, data) => {
  const result = highlightElementBySelector(data?.selector);
  if (data?.selector) {
    const info = extractElementInfo(data.selector);
    ipcRenderer.sendToHost('guest-element-info', info);
  }
  ipcRenderer.sendToHost('guest-element-highlighted', result);
});

ipcRenderer.on('clear-element-highlight', () => {
  clearElementHighlight();
  clearElementHover();
});

ipcRenderer.on('hover-element', (_event, data) => {
  hoverElementBySelector(data?.selector);
});

ipcRenderer.on('clear-element-hover', () => {
  clearElementHover();
});

ipcRenderer.on('request-element-info', (_event, data) => {
  ipcRenderer.sendToHost('guest-element-info', extractElementInfo(data?.selector));
});

ipcRenderer.on('set-inspect-mode', (_event, data) => {
  inspectModeActive = Boolean(data?.enabled);
  document.documentElement.style.cursor = inspectModeActive ? 'crosshair' : '';
  if (!inspectModeActive) {
    clearElementHover();
  }
});
