// -------------------------------------------------------------
// DOM Elements & Initial State
// -------------------------------------------------------------

const urlForm = document.getElementById('url-form');
const urlInput = document.getElementById('url-input');
const urlFavicon = document.getElementById('url-favicon');
const btnBack = document.getElementById('btn-back');
const btnForward = document.getElementById('btn-forward');
const btnReload = document.getElementById('btn-reload');

const btnToggleSync = document.getElementById('btn-toggle-sync');
const btnToggleOutline = document.getElementById('btn-toggle-outline');
const btnScreenshotAll = document.getElementById('btn-screenshot-all');
const btnSaveWorkspace = document.getElementById('btn-save-workspace');
const btnLoadWorkspace = document.getElementById('btn-load-workspace');
const btnZoomOut = document.getElementById('btn-zoom-out');
const btnZoomIn = document.getElementById('btn-zoom-in');
const zoomValueLabel = document.getElementById('zoom-value');

const btnAddViewport = document.getElementById('btn-add-viewport');
const addViewportMenu = document.getElementById('add-viewport-menu');
const btnToggleSidebar = document.getElementById('btn-toggle-sidebar');
const btnToggleLeftPanel = document.getElementById('btn-toggle-left-panel');
const leftPanel = document.getElementById('left-panel');
const leftPanelSubtitle = document.getElementById('left-panel-subtitle');
const leftPanelBody = document.getElementById('left-panel-body');
const leftPanelSplitHandle = document.getElementById('left-panel-split-handle');
const btnToggleTheme = document.getElementById('btn-toggle-theme');
const btnShortcuts = document.getElementById('btn-shortcuts');
const modalShortcuts = document.getElementById('modal-shortcuts');
const modalShortcutsClose = document.getElementById('modal-shortcuts-close');
const sidebarPanel = document.getElementById('sidebar-panel');
const browserTabsEl = document.getElementById('browser-tabs');
const browserTabPanels = document.getElementById('browser-tab-panels');
const btnNewTab = document.getElementById('btn-new-tab');
const breakpointRuler = document.getElementById('breakpoint-ruler');

// Sidebar Tabs & Panels
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');
const consoleBadge = document.getElementById('console-badge');
const consoleLogsContainer = document.getElementById('console-logs-container');
const btnClearConsole = document.getElementById('btn-clear-console');

// Design / Properties panel
const propsEmpty = document.getElementById('props-empty');
const propsForm = document.getElementById('props-form');
const propName = document.getElementById('prop-name');
const propX = document.getElementById('prop-x');
const propY = document.getElementById('prop-y');
const propW = document.getElementById('prop-w');
const propH = document.getElementById('prop-h');
const propUaProfile = document.getElementById('prop-ua-profile');
const propUa = document.getElementById('prop-ua');
const propUaCustomWrap = document.getElementById('prop-ua-custom-wrap');
const propUaHint = document.getElementById('prop-ua-hint');
const propUaApply = document.getElementById('prop-ua-apply');
const propOrientation = document.getElementById('prop-orientation');
const propDuplicate = document.getElementById('prop-duplicate');
const layersList = document.getElementById('layers-list');
const layersCount = document.getElementById('layers-count');
const btnInspectPick = document.getElementById('btn-inspect-pick');
const btnInspectOutline = document.getElementById('btn-inspect-outline');
const btnInspectCopy = document.getElementById('btn-inspect-copy');
const btnInspectCopyCss = document.getElementById('btn-inspect-copy-css');
const btnInspectDevTools = document.getElementById('btn-inspect-devtools');
const inspectorEmpty = document.getElementById('inspector-empty');
const inspectorBody = document.getElementById('inspector-body');
const inspectorSummary = document.getElementById('inspector-summary');
const inspectorBreadcrumb = document.getElementById('inspector-breadcrumb');
const inspectorTabStyles = document.getElementById('inspector-tab-styles');
const inspectorTabBox = document.getElementById('inspector-tab-box');
const inspectorTabAttrs = document.getElementById('inspector-tab-attrs');
const inspectorTabConsole = document.getElementById('inspector-tab-console');
const inspectorTabButtons = document.querySelectorAll('[data-inspector-tab]');
const urlHistoryList = document.getElementById('url-history');

const seoAuditSummary = document.getElementById('seo-audit-summary');
const seoAuditList = document.getElementById('seo-audit-list');
const seoAuditBadge = document.getElementById('seo-audit-badge');
const btnSeoAuditRefresh = document.getElementById('btn-seo-audit-refresh');

// Modal Elements
const modalAddViewport = document.getElementById('modal-add-viewport');
const modalBtnClose = document.getElementById('modal-btn-close');
const modalBtnCancel = document.getElementById('modal-btn-cancel');
const addViewportForm = document.getElementById('add-viewport-form');
const vpNameInput = document.getElementById('vp-name');
const vpWidthInput = document.getElementById('vp-width');
const vpHeightInput = document.getElementById('vp-height');
const vpUaInput = document.getElementById('vp-ua');

// Log Filters
const logFilterInfo = document.getElementById('log-filter-info');
const logFilterWarn = document.getElementById('log-filter-warn');
const logFilterError = document.getElementById('log-filter-error');

// Toasts Container
const toastContainer = document.getElementById('toast-container');

// Application State
let syncEnabled = true;
let cssOutlineEnabled = false;
let activeVisionFilter = 'normal';
let consoleLogs = [];
let allBreakpoints = new Set();
let viewportIdCounter = 0;
let browserTabIdCounter = 0;

let browserTabs = [];
let activeBrowserTabId = null;

// Active tab mirrors (updated on tab switch)
let currentURL = 'https://example.com';
let viewports = [];
let workspaceZoom = 1.0;
let panX = 0;
let panY = 0;

let canvasTool = 'select';
let spaceHandActive = false;
let isPanning = false;
let panDragStartX = 0;
let panDragStartY = 0;
let panDragOriginX = 0;
let panDragOriginY = 0;

let selectedViewportId = null;
let isDraggingFrame = false;
let frameDragVpId = null;
let frameDragStartX = 0;
let frameDragStartY = 0;
let frameDragOriginX = 0;
let frameDragOriginY = 0;
let frameDragPointerX = 0;
let frameDragPointerY = 0;
let canvasTransformRaf = null;
let transformSaveTimer = null;

let isResizingFrame = false;
let resizeVpId = null;
let resizeDir = '';
let resizeStartX = 0;
let resizeStartY = 0;
let resizeOrigin = { x: 0, y: 0, w: 0, h: 0 };
let frameResizeRaf = null;
let resizePointerX = 0;
let resizePointerY = 0;

let activePointerId = null;
let panPointerX = 0;
let panPointerY = 0;

let frameDragPending = false;
let frameDragPendingPointerId = null;
const FRAME_DRAG_THRESHOLD = 4;

const VIEWPORT_HEADER_H = 34;

let frameDragRaf = null;

let urlHistory = [];
let workspacePersistTimer = null;

const domTreeByViewport = new Map();
const domTreeExpandedFrames = new Set();
const domTreeExpandedNodes = new Set();
const domTreeLoading = new Set();
let selectedDomNode = null;
let inspectModeActive = false;
let selectedElementInfo = null;
let activeInspectorTab = 'styles';

const WORKSPACE_STORAGE_KEY = 'sashigane-workspace-v1';
const LEFT_PANEL_SPLIT_KEY = 'sashigane-left-panel-split';
const LEFT_PANEL_SPLIT_MIN = 0.22;
const LEFT_PANEL_SPLIT_MAX = 0.78;
const LEFT_PANEL_SPLIT_DEFAULT = 0.48;

let leftPanelLayersRatio = LEFT_PANEL_SPLIT_DEFAULT;
let leftPanelSplitDragging = false;
let leftPanelSplitDragStartY = 0;
let leftPanelSplitDragStartRatio = 0;
const RESIZE_HANDLE_DIRS = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'];
const MIN_VIEWPORT_SIZE = 200;
const MAX_VIEWPORT_SIZE = 3840;

let themeMode = 'dark';

function resolveTheme(mode) {
  if (mode === 'system') {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  return mode === 'light' ? 'light' : 'dark';
}

function updateThemeButton(resolved, mode) {
  if (!btnToggleTheme) return;
  const isDark = resolved === 'dark';
  btnToggleTheme.setAttribute('aria-pressed', String(isDark));
  if (mode === 'system') {
    btnToggleTheme.title = `システム設定（${isDark ? 'ダーク' : 'ライト'}）— ⌘⇧L で切替`;
  } else {
    btnToggleTheme.title = isDark
      ? 'ダークモード — クリックでライト (⌘⇧L)'
      : 'ライトモード — クリックでダーク (⌘⇧L)';
  }
}

function applyTheme(mode) {
  themeMode = mode;
  const resolved = resolveTheme(mode);
  document.body.classList.toggle('light-theme', resolved === 'light');
  localStorage.setItem('sashigane-theme', mode);
  window.electronAPI?.setNativeTheme?.(mode, resolved);
  updateThemeButton(resolved, mode);
  return resolved;
}

function toggleTheme() {
  const resolved = resolveTheme(themeMode);
  const next = resolved === 'light' ? 'dark' : 'light';
  const applied = applyTheme(next);
  showToast(applied === 'light' ? 'ライトモードに切り替えました' : 'ダークモードに切り替えました');
}

function initTheme() {
  const saved = localStorage.getItem('sashigane-theme');
  const mode = saved === 'light' || saved === 'dark' || saved === 'system' ? saved : 'system';
  applyTheme(mode);

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (themeMode !== 'system') return;
    applyTheme('system');
  });
}

const btnToolSelect = document.getElementById('btn-tool-select');
const btnToolHand = document.getElementById('btn-tool-hand');

function isTypingTarget(el) {
  if (!el) return false;
  const tag = el.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || el.isContentEditable;
}

function isHandToolActive() {
  return canvasTool === 'hand' || spaceHandActive;
}

function updateToolUI() {
  const workspaceGrid = document.getElementById('workspace-grid');
  if (!workspaceGrid) return;

  const hand = isHandToolActive();
  workspaceGrid.classList.toggle('tool-hand', hand);
  workspaceGrid.classList.toggle('tool-select', !hand);
  btnToolSelect?.classList.toggle('active', canvasTool === 'select' && !spaceHandActive);
  btnToolHand?.classList.toggle('active', canvasTool === 'hand' || spaceHandActive);
}

function setCanvasTool(tool) {
  canvasTool = tool;
  spaceHandActive = false;
  updateToolUI();
}

function clampPan() {
  const workspaceGrid = document.getElementById('workspace-grid');
  const canvas = getActiveCanvas();
  if (!workspaceGrid || !canvas) return;

  const z = workspaceZoom;
  const canvasW = canvas.offsetWidth * z;
  const canvasH = canvas.offsetHeight * z;
  const gridW = workspaceGrid.clientWidth;
  const gridH = workspaceGrid.clientHeight;

  if (canvasW <= gridW) {
    const centerX = (gridW - canvasW) / 2;
    panX = Math.min(centerX + PAN_OVERSCROLL, Math.max(centerX - PAN_OVERSCROLL, panX));
  } else {
    panX = Math.min(PAN_OVERSCROLL, Math.max(gridW - canvasW - PAN_OVERSCROLL, panX));
  }

  if (canvasH <= gridH) {
    const centerY = (gridH - canvasH) / 2;
    panY = Math.min(centerY + PAN_OVERSCROLL, Math.max(centerY - PAN_OVERSCROLL, panY));
  } else {
    panY = Math.min(PAN_OVERSCROLL, Math.max(gridH - canvasH - PAN_OVERSCROLL, panY));
  }
}

function normalizeWheelDelta(e) {
  let dx = e.deltaX;
  let dy = e.deltaY;
  if (e.deltaMode === 1) {
    dx *= 16;
    dy *= 16;
  } else if (e.deltaMode === 2) {
    const grid = document.getElementById('workspace-grid');
    dx *= grid?.clientWidth || 800;
    dy *= grid?.clientHeight || 600;
  }
  return { dx, dy };
}

function zoomAtScreenPoint(factor, clientX, clientY) {
  const workspaceGrid = document.getElementById('workspace-grid');
  if (!workspaceGrid) return;

  const rect = workspaceGrid.getBoundingClientRect();
  const mouseX = clientX - rect.left;
  const mouseY = clientY - rect.top;
  const oldZ = workspaceZoom;
  const newZ = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, oldZ * factor));
  if (Math.abs(newZ - oldZ) < 0.0001) return;

  const scale = newZ / oldZ;
  panX = mouseX - scale * (mouseX - panX);
  panY = mouseY - scale * (mouseY - panY);
  workspaceZoom = newZ;
  clampPan();
  scheduleCanvasTransform();
}

function zoomAtViewportCenter(factor) {
  const workspaceGrid = document.getElementById('workspace-grid');
  if (!workspaceGrid) return;
  const rect = workspaceGrid.getBoundingClientRect();
  zoomAtScreenPoint(factor, rect.left + rect.width / 2, rect.top + rect.height / 2);
}

function zoomToPercent(percent) {
  const workspaceGrid = document.getElementById('workspace-grid');
  if (!workspaceGrid) return;
  const rect = workspaceGrid.getBoundingClientRect();
  const target = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, percent / 100));
  const factor = target / workspaceZoom;
  zoomAtScreenPoint(factor, rect.left + rect.width / 2, rect.top + rect.height / 2);
  commitCanvasTransform();
}

function isMetaKey(e) {
  return e.metaKey || e.ctrlKey;
}

function zoomToFitBounds(minX, minY, maxX, maxY) {
  const workspaceGrid = document.getElementById('workspace-grid');
  if (!workspaceGrid) return;

  const padding = 96;
  const contentW = maxX - minX;
  const contentH = maxY - minY;
  const gridW = workspaceGrid.clientWidth;
  const gridH = workspaceGrid.clientHeight;

  if (contentW <= 0 || contentH <= 0) return;

  workspaceZoom = Math.min(
    ZOOM_MAX,
    Math.max(ZOOM_MIN, Math.min((gridW - padding * 2) / contentW, (gridH - padding * 2) / contentH))
  );

  panX = (gridW - contentW * workspaceZoom) / 2 - minX * workspaceZoom;
  panY = (gridH - contentH * workspaceZoom) / 2 - minY * workspaceZoom;
  clampPan();
  updateWorkspaceTransform();
}

function zoomToFitAll() {
  const tab = getActiveTab();
  if (!tab || tab.viewports.length === 0) return;

  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  tab.viewports.forEach(vp => {
    minX = Math.min(minX, vp.x);
    minY = Math.min(minY, vp.y);
    maxX = Math.max(maxX, vp.x + vp.width);
    maxY = Math.max(maxY, vp.y + vp.height + VIEWPORT_HEADER_H);
  });

  zoomToFitBounds(minX, minY, maxX, maxY);
}

function zoomToSelection() {
  const vp = getSelectedViewport();
  if (!vp) {
    showToast('フレームを選択してください');
    return;
  }

  zoomToFitBounds(
    vp.x,
    vp.y,
    vp.x + vp.width,
    vp.y + vp.height + VIEWPORT_HEADER_H
  );
}

function duplicateViewport(vpId = selectedViewportId) {
  const tab = getActiveTab();
  const canvas = getActiveCanvas();
  const source = tab?.viewports.find(v => v.id === vpId);
  if (!source || !tab || !canvas) {
    showToast('複製するフレームを選択してください');
    return;
  }

  const newVp = {
    id: ++viewportIdCounter,
    name: `${source.name} copy`,
    width: source.width,
    height: source.height,
    ua: source.ua || '',
    x: source.x + 48,
    y: source.y + 48,
  };

  tab.viewports.push(newVp);
  viewports = tab.viewports;
  renderViewport(newVp, tab, canvas);
  selectViewport(newVp.id);
  updateCanvasSurface(tab);
  saveActiveTabState();
  showToast(`「${newVp.name}」を複製しました`);
}

function openShortcutsModal() {
  modalShortcuts?.classList.add('active');
}

function closeShortcutsModal() {
  modalShortcuts?.classList.remove('active');
}

function showWelcomeHint() {
  if (localStorage.getItem('sashigane-welcome-shown')) return;
  localStorage.setItem('sashigane-welcome-shown', '1');
  showToast('デザインと実装のすき間を埋める — I で要素ピック、? でショートカット');
}

const INSPECTOR_STYLE_GROUPS = [
  {
    title: 'Layout',
    keys: ['display', 'position', 'top', 'right', 'bottom', 'left', 'z-index', 'overflow', 'overflow-x', 'overflow-y'],
  },
  {
    title: 'Box',
    keys: [
      'width', 'height', 'min-width', 'max-width', 'min-height', 'max-height', 'box-sizing',
      'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
      'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
      'border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width',
    ],
  },
  {
    title: 'Typography',
    keys: ['font-family', 'font-size', 'font-weight', 'line-height', 'color'],
  },
  {
    title: 'Surface',
    keys: ['background-color', 'opacity', 'cursor', 'pointer-events'],
  },
  {
    title: 'Flex / Grid',
    keys: ['flex', 'flex-direction', 'align-items', 'justify-content', 'gap', 'grid-template-columns'],
  },
];

const DOM_TAG_CATEGORIES = {
  component: new Set(['div', 'section', 'article', 'main', 'header', 'footer', 'nav', 'aside', 'figure', 'dialog']),
  text: new Set(['span', 'p', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label', 'strong', 'em', 'small', 'time']),
  media: new Set(['img', 'video', 'audio', 'picture', 'canvas', 'svg', 'iframe']),
  form: new Set(['button', 'input', 'textarea', 'select', 'form', 'option']),
  list: new Set(['ul', 'ol', 'li', 'dl', 'dt', 'dd']),
};

function getDomTagCategory(tag) {
  if (tag === 'html' || tag === 'body') return 'html';
  for (const [cat, tags] of Object.entries(DOM_TAG_CATEGORIES)) {
    if (tags.has(tag)) return cat;
  }
  return 'component';
}

function getFrameDeviceKind(vp) {
  const w = vp?.width || 0;
  if (w <= 480) return 'mobile';
  if (w <= 1024) return 'tablet';
  return 'desktop';
}

function frameDeviceIcon(kind) {
  const icons = {
    mobile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="20" x="5" y="2" rx="2"/><line x1="12" x2="12.01" y1="18" y2="18"/></svg>',
    tablet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="12" x2="12.01" y1="18" y2="18"/></svg>',
    desktop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>',
  };
  return icons[kind] || icons.desktop;
}

function isCssColorValue(value) {
  if (!value) return false;
  return /^(#|rgb|hsl|hwb|lab|lch|color\(|var\()/i.test(value.trim());
}

function parseCssColorForSwatch(value) {
  const v = value.trim();
  if (!v || v === 'transparent' || v === 'inherit' || v === 'initial') return null;
  return v;
}

async function copyToClipboard(text, toastMsg = 'コピーしました') {
  try {
    await navigator.clipboard.writeText(text);
    showToast(toastMsg, 'success');
    return true;
  } catch {
    showToast('コピーに失敗しました');
    return false;
  }
}

function buildCssRuleSnippet(info) {
  const selector = info.label || info.tag || 'element';
  const lines = Object.entries(info.computed || {}).map(([k, v]) => `  ${k}: ${v};`);
  return `${selector} {\n${lines.join('\n')}\n}`;
}

function updateLeftPanelSubtitle() {
  if (!leftPanelSubtitle) return;
  const tab = getActiveTab();
  if (!tab) {
    leftPanelSubtitle.textContent = 'レスポンシブ検証';
    return;
  }
  try {
    const host = new URL(tab.url).hostname.replace(/^www\./, '');
    leftPanelSubtitle.textContent = host;
    leftPanelSubtitle.title = tab.url;
  } catch {
    leftPanelSubtitle.textContent = tab.title || 'レスポンシブ検証';
  }
}

function setupGlobalShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeViewportMenu();
      closeCustomViewportModal();
      closeShortcutsModal();
      if (inspectModeActive) {
        setInspectMode(false);
        return;
      }
      if (!isTypingTarget(e.target)) clearViewportSelection();
      return;
    }

    if (e.key === '?' && !isTypingTarget(e.target)) {
      e.preventDefault();
      openShortcutsModal();
      return;
    }

    if (isTypingTarget(e.target)) return;

    if (e.code === 'Space' && !spaceHandActive) {
      e.preventDefault();
      spaceHandActive = true;
      updateToolUI();
      return;
    }

    if (isMetaKey(e) && e.shiftKey && e.key.toLowerCase() === 'l') {
      e.preventDefault();
      toggleTheme();
      return;
    }

    if (isMetaKey(e) && e.key.toLowerCase() === 'l') {
      e.preventDefault();
      urlInput.focus();
      urlInput.select();
      return;
    }

    if (isMetaKey(e) && e.key.toLowerCase() === 't') {
      e.preventDefault();
      const tab = createBrowserTab(currentURL || 'https://example.com');
      browserTabs.push(tab);
      renderBrowserTabPanel(tab);
      setActiveBrowserTab(tab.id);
      showToast('新しいタブを開きました');
      return;
    }

    if (isMetaKey(e) && e.key.toLowerCase() === 'w') {
      e.preventDefault();
      if (activeBrowserTabId !== null) closeBrowserTab(activeBrowserTabId);
      return;
    }

    if (isMetaKey(e) && e.key.toLowerCase() === 'r') {
      e.preventDefault();
      forEachWebview(wv => wv.reload());
      return;
    }

    if (isMetaKey(e) && e.key.toLowerCase() === 'd') {
      e.preventDefault();
      duplicateViewport();
      return;
    }

    if (e.key === 'Delete' || e.key === 'Backspace') {
      if (selectedViewportId !== null) {
        e.preventDefault();
        removeViewport(selectedViewportId);
      }
      return;
    }

    if (e.key === 'v' || e.key === 'V') {
      setCanvasTool('select');
    } else if (e.key === 'h' || e.key === 'H') {
      setCanvasTool('hand');
    } else if (e.key === 'i' || e.key === 'I') {
      toggleInspectMode();
    } else if (e.shiftKey && e.code === 'Digit1') {
      e.preventDefault();
      zoomToFitAll();
    } else if (e.shiftKey && e.code === 'Digit2') {
      e.preventDefault();
      zoomToSelection();
    } else if (e.shiftKey && e.code === 'Digit0') {
      e.preventDefault();
      zoomToPercent(100);
    }
  });

  document.addEventListener('keyup', (e) => {
    if (e.code !== 'Space') return;
    spaceHandActive = false;
    updateToolUI();
    if (isPanning) endAllPointerInteractions();
  });
}

function applyCanvasTransform() {
  clampPan();
  const canvas = getActiveCanvas();
  if (canvas) {
    canvas.style.transform = `translate(${panX}px, ${panY}px) scale(${workspaceZoom})`;
    canvas.style.transformOrigin = '0 0';
    canvas.style.zoom = '';
  }
  if (zoomValueLabel) {
    zoomValueLabel.innerText = `${Math.round(workspaceZoom * 100)}%`;
  }
}

function scheduleCanvasTransform() {
  if (canvasTransformRaf) return;
  canvasTransformRaf = requestAnimationFrame(() => {
    canvasTransformRaf = null;
    applyCanvasTransform();
    if (transformSaveTimer) clearTimeout(transformSaveTimer);
    transformSaveTimer = setTimeout(() => {
      transformSaveTimer = null;
      saveActiveTabState();
    }, 400);
  });
}

function commitCanvasTransform() {
  if (canvasTransformRaf) {
    cancelAnimationFrame(canvasTransformRaf);
    canvasTransformRaf = null;
  }
  if (transformSaveTimer) {
    clearTimeout(transformSaveTimer);
    transformSaveTimer = null;
  }
  applyCanvasTransform();
  saveActiveTabState();
}

function startCanvasPan(clientX, clientY) {
  isPanning = true;
  panDragStartX = clientX;
  panDragStartY = clientY;
  panDragOriginX = panX;
  panDragOriginY = panY;
  document.getElementById('workspace-grid')?.classList.add('is-panning');
}

function endCanvasPan() {
  if (!isPanning) return;
  isPanning = false;
  document.getElementById('workspace-grid')?.classList.remove('is-panning');
  commitCanvasTransform();
}

function startPointerSession(e, target) {
  activePointerId = e.pointerId;
  try {
    (target || document.getElementById('workspace-grid'))?.setPointerCapture(e.pointerId);
  } catch {
    // ignore
  }
}

function endPointerSession(e) {
  if (activePointerId === null || e.pointerId !== activePointerId) return false;
  const grid = document.getElementById('workspace-grid');
  try {
    grid?.releasePointerCapture(e.pointerId);
  } catch {
    // ignore
  }
  activePointerId = null;
  return true;
}

function isActivePointer(e) {
  return activePointerId !== null && e.pointerId === activePointerId;
}

function resetStalePointerState() {
  if (!isPanning && !isDraggingFrame && !isResizingFrame && !frameDragPending) {
    activePointerId = null;
  }
}

function recoverStaleInteractionState(e) {
  if (e.buttons === 0) {
    endAllPointerInteractions();
    return;
  }
  if (frameDragPending && e.pointerId !== frameDragPendingPointerId) {
    cancelFrameDragPending();
    if (!isDraggingFrame && !isResizingFrame && !isPanning) {
      activePointerId = null;
    }
  }
  if (
    activePointerId !== null &&
    !isPanning &&
    !isDraggingFrame &&
    !isResizingFrame &&
    !frameDragPending
  ) {
    activePointerId = null;
  }
}

function cancelFrameDragPending() {
  frameDragPending = false;
  frameDragPendingPointerId = null;
}

function beginFrameDragPending(vp, e) {
  frameDragPending = true;
  frameDragPendingPointerId = e.pointerId;
  frameDragVpId = vp.id;
  frameDragStartX = e.clientX;
  frameDragStartY = e.clientY;
  frameDragPointerX = e.clientX;
  frameDragPointerY = e.clientY;
  frameDragOriginX = vp.x;
  frameDragOriginY = vp.y;
}

function promoteFrameDragPending(e) {
  if (!frameDragPending || e.pointerId !== frameDragPendingPointerId) return false;

  const dist = Math.hypot(e.clientX - frameDragStartX, e.clientY - frameDragStartY);
  if (dist < FRAME_DRAG_THRESHOLD) return false;

  const tab = getActiveTab();
  const shell = document.getElementById(`vp-shell-${tab?.id}-${frameDragVpId}`);
  const workspaceGrid = document.getElementById('workspace-grid');

  frameDragPending = false;
  frameDragPendingPointerId = null;
  isDraggingFrame = true;
  shell?.classList.add('is-dragging');
  workspaceGrid?.classList.add('is-frame-interacting');
  startPointerSession(e, workspaceGrid);
  return true;
}

function trySelectFrameFromEvent(e) {
  if (isHandToolActive() || isPanning) return false;
  if (e.button !== 0) return false;
  if (e.target.closest('.canvas-footer')) return false;
  if (e.target.closest('.vp-btn') || e.target.closest('.frame-resize-handle')) return false;

  ensureActiveTabViewportsLinked();
  const tab = getActiveTab();
  if (tab?.viewports.length === 0) {
    repairViewportsFromDom(tab);
    if (tab.viewports.length > 0) viewports = tab.viewports;
  }

  const shell = e.target.closest('.viewport-frame-shell');
  if (!shell) return false;

  const vpId = Number(shell.dataset.vpId);
  const vp = tab?.viewports.find(v => v.id === vpId);
  if (!vp || !tab) return false;

  if (selectedViewportId !== vp.id) {
    selectViewport(vp.id);
  }
  return true;
}

function flushFrameDrag() {
  frameDragRaf = null;
  if (!isDraggingFrame) return;

  const tab = getActiveTab();
  const vp = tab?.viewports.find(v => v.id === frameDragVpId);
  if (!vp || !tab) return;

  const dx = (frameDragPointerX - frameDragStartX) / workspaceZoom;
  const dy = (frameDragPointerY - frameDragStartY) / workspaceZoom;
  vp.x = frameDragOriginX + dx;
  vp.y = frameDragOriginY + dy;
  syncViewportFrame(vp, tab);
}

function scheduleFrameDragUpdate() {
  if (frameDragRaf) return;
  frameDragRaf = requestAnimationFrame(flushFrameDrag);
}

function flushFrameResize() {
  frameResizeRaf = null;
  if (!isResizingFrame) return;

  const tab = getActiveTab();
  const vp = tab?.viewports.find(v => v.id === resizeVpId);
  if (!vp || !tab) return;

  const dx = (resizePointerX - resizeStartX) / workspaceZoom;
  const dy = (resizePointerY - resizeStartY) / workspaceZoom;
  const next = computeResizedViewport(resizeOrigin, dx, dy, resizeDir);

  vp.x = next.x;
  vp.y = next.y;
  vp.width = next.w;
  vp.height = next.h;
  syncViewportFrame(vp, tab);
}

function scheduleFrameResizeUpdate() {
  if (frameResizeRaf) return;
  frameResizeRaf = requestAnimationFrame(flushFrameResize);
}

function scrubInteractionUiState() {
  document.querySelectorAll('.viewport-frame-shell.is-dragging').forEach(el => {
    el.classList.remove('is-dragging');
  });
  document.querySelectorAll('.viewport-frame-shell.is-resizing').forEach(el => {
    el.classList.remove('is-resizing');
  });
  const grid = document.getElementById('workspace-grid');
  grid?.classList.remove('is-frame-interacting', 'is-panning');
}

function endAllPointerInteractions(e) {
  if (e && activePointerId !== null && e.pointerId !== activePointerId) return;

  if (isPanning) endCanvasPan();
  if (isDraggingFrame) endFrameDrag(e);
  if (isResizingFrame) endFrameResize(e);
  cancelFrameDragPending();

  if (e) endPointerSession(e);
  else activePointerId = null;

  scrubInteractionUiState();
}

function endFrameDrag() {
  if (!isDraggingFrame) return;

  const tab = getActiveTab();
  const vp = tab?.viewports.find(v => v.id === frameDragVpId);
  if (vp && tab) {
    vp.x = Math.round(vp.x);
    vp.y = Math.round(vp.y);
    syncViewportFrame(vp, tab);
  }

  const shell = document.getElementById(`vp-shell-${tab?.id}-${frameDragVpId}`);
  shell?.classList.remove('is-dragging');
  document.getElementById('workspace-grid')?.classList.remove('is-frame-interacting');

  isDraggingFrame = false;
  frameDragVpId = null;
  if (frameDragRaf) {
    cancelAnimationFrame(frameDragRaf);
    frameDragRaf = null;
  }

  if (tab) updateCanvasSurface(tab);
  renderPropertiesPanel();
  renderLayersPanel();
  commitCanvasTransform();
  saveActiveTabState();
  persistWorkspaceNow().catch(() => {});
}

function endFrameResize(e) {
  if (!isResizingFrame) return;

  const tab = getActiveTab();
  const vp = tab?.viewports.find(v => v.id === resizeVpId);
  const shell = document.getElementById(`vp-shell-${tab?.id}-${resizeVpId}`);
  shell?.classList.remove('is-resizing');
  document.getElementById('workspace-grid')?.classList.remove('is-frame-interacting');

  isResizingFrame = false;
  resizeVpId = null;
  resizeDir = '';
  if (frameResizeRaf) {
    cancelAnimationFrame(frameResizeRaf);
    frameResizeRaf = null;
  }

  if (vp && tab) {
    vp.x = Math.round(vp.x);
    vp.y = Math.round(vp.y);
    if (!vp.ua || detectUaProfile(vp.ua) !== 'custom') {
      vp.ua = inferUaForSize(vp.width);
      applyViewportUserAgent(vp, tab, { reload: false });
    }
    applyViewportSize(vp, tab);
    if (vp.webContentsId) {
      window.electronAPI.setDeviceEmulation(vp.webContentsId, vp.width, vp.height);
    }
    updateCanvasSurface(tab);
    renderPropertiesPanel();
    renderLayersPanel();
    saveActiveTabState();
    persistWorkspaceNow().catch(() => {});
  }
}

function canStartCanvasPan(e) {
  if (e.target.closest('.canvas-footer')) return false;
  if (e.target.closest('.viewport-frame-shell') && !isHandToolActive()) return false;
  if (isHandToolActive()) return e.button === 0;
  return e.button === 1;
}

function setupCanvasToolInteractions(workspaceGrid) {
  btnToolSelect?.addEventListener('click', () => setCanvasTool('select'));
  btnToolHand?.addEventListener('click', () => setCanvasTool('hand'));

  workspaceGrid.addEventListener('pointerdown', (e) => {
    if (!canStartCanvasPan(e)) return;
    if (activePointerId !== null) return;
    startPointerSession(e, workspaceGrid);
    startCanvasPan(e.clientX, e.clientY);
    panPointerX = e.clientX;
    panPointerY = e.clientY;
    e.preventDefault();
  }, true);

  workspaceGrid.addEventListener('auxclick', (e) => {
    if (e.button === 1) e.preventDefault();
  });

  workspaceGrid.addEventListener('pointermove', (e) => {
    if (!isPanning || !isActivePointer(e)) return;
    if (e.buttons === 0) {
      endAllPointerInteractions(e);
      return;
    }
    panPointerX = e.clientX;
    panPointerY = e.clientY;
    panX = panDragOriginX + (panPointerX - panDragStartX);
    panY = panDragOriginY + (panPointerY - panDragStartY);
    scheduleCanvasTransform();
  });

  workspaceGrid.addEventListener('pointerup', (e) => {
    if (!isPanning || !isActivePointer(e)) return;
    endAllPointerInteractions(e);
  });

  workspaceGrid.addEventListener('pointercancel', (e) => {
    if (!isPanning || !isActivePointer(e)) return;
    endAllPointerInteractions(e);
  });

  if (zoomValueLabel) {
    zoomValueLabel.title = 'クリックで100%';
    zoomValueLabel.addEventListener('click', () => zoomToPercent(100));
  }

  window.addEventListener('blur', () => {
    spaceHandActive = false;
    updateToolUI();
    endAllPointerInteractions();
  });

  setCanvasTool('select');
}

function handleGlobalPointerMove(e) {
  if (frameDragPending && e.pointerId === frameDragPendingPointerId) {
    promoteFrameDragPending(e);
  }

  if (isDraggingFrame && isActivePointer(e)) {
    if (e.buttons === 0) {
      endAllPointerInteractions(e);
      return;
    }
    frameDragPointerX = e.clientX;
    frameDragPointerY = e.clientY;
    scheduleFrameDragUpdate();
    return;
  }

  if (isResizingFrame && isActivePointer(e)) {
    if (e.buttons === 0) {
      endAllPointerInteractions(e);
      return;
    }
    resizePointerX = e.clientX;
    resizePointerY = e.clientY;
    scheduleFrameResizeUpdate();
  }
}

function setupGlobalPointerRecovery() {
  document.addEventListener('pointerdown', recoverStaleInteractionState, true);
  document.addEventListener('pointermove', handleGlobalPointerMove, true);

  document.addEventListener('pointerup', (e) => {
    if (frameDragPending && e.pointerId === frameDragPendingPointerId) {
      cancelFrameDragPending();
      endPointerSession(e);
      return;
    }
    if (
      (isDraggingFrame || isResizingFrame || isPanning) &&
      isActivePointer(e)
    ) {
      if (isDraggingFrame) {
        frameDragPointerX = e.clientX;
        frameDragPointerY = e.clientY;
        flushFrameDrag();
      }
      if (isResizingFrame) {
        resizePointerX = e.clientX;
        resizePointerY = e.clientY;
        flushFrameResize();
      }
      endAllPointerInteractions(e);
    }
  }, true);

  document.addEventListener('pointercancel', (e) => {
    if (
      frameDragPending && e.pointerId === frameDragPendingPointerId ||
      isActivePointer(e)
    ) {
      endAllPointerInteractions(e);
    }
  }, true);
}

function setupFrameInteractions(workspaceGrid) {
  workspaceGrid.addEventListener('pointerdown', (e) => {
    resetStalePointerState();
    if (isHandToolActive() || isPanning) return;
    if (e.button !== 0) return;

    const shell = e.target.closest('.viewport-frame-shell');
    if (!shell) {
      if (
        e.target.classList.contains('workspace-canvas') ||
        e.target.classList.contains('browser-tab-panel') ||
        e.target.classList.contains('browser-tab-panels')
      ) {
        clearViewportSelection();
      }
      return;
    }

    if (!trySelectFrameFromEvent(e)) return;

    const dragHandle = e.target.closest('.vp-drag-handle');
    const onWebview = Boolean(e.target.closest('webview'));
    if (!dragHandle || !shell.contains(dragHandle) || onWebview) return;

    const tab = getActiveTab();
    const vp = tab?.viewports.find(v => v.id === Number(shell.dataset.vpId));
    if (!vp) return;

    beginFrameDragPending(vp, e);
    e.preventDefault();
  }, true);

  workspaceGrid.addEventListener('pointermove', (e) => {
    if (frameDragPending) {
      promoteFrameDragPending(e);
    }

    if (!isDraggingFrame || !isActivePointer(e)) return;
    if (e.buttons === 0) {
      endAllPointerInteractions(e);
      return;
    }
    frameDragPointerX = e.clientX;
    frameDragPointerY = e.clientY;
    scheduleFrameDragUpdate();
  });

  workspaceGrid.addEventListener('pointerup', (e) => {
    if (frameDragPending && e.pointerId === frameDragPendingPointerId) {
      cancelFrameDragPending();
      endPointerSession(e);
      return;
    }
    if (!isDraggingFrame || !isActivePointer(e)) return;
    frameDragPointerX = e.clientX;
    frameDragPointerY = e.clientY;
    flushFrameDrag();
    endAllPointerInteractions(e);
  });

  workspaceGrid.addEventListener('pointercancel', (e) => {
    if (frameDragPending && e.pointerId === frameDragPendingPointerId) {
      cancelFrameDragPending();
      endPointerSession(e);
      return;
    }
    if (!isDraggingFrame || !isActivePointer(e)) return;
    endAllPointerInteractions(e);
  });

  setupFrameResizeInteractions(workspaceGrid);
}

function bindFrameHeaderDrag(dragHandle, vp) {
  dragHandle.addEventListener('pointerdown', (e) => {
    resetStalePointerState();
    if (isHandToolActive() || isPanning) return;
    if (e.button !== 0) return;
    if (e.target.closest('.vp-btn')) return;

    if (selectedViewportId !== vp.id) {
      selectViewport(vp.id);
    }

    beginFrameDragPending(vp, e);
    e.preventDefault();
    e.stopPropagation();
  }, true);
}

function bindFrameShellSelection(shell) {
  shell.addEventListener('pointerdown', (e) => {
    trySelectFrameFromEvent(e);
  }, true);
}

function bindFrameSelectShield(shield, vp) {
  shield.addEventListener('pointerdown', (e) => {
    if (isHandToolActive() || isPanning) return;
    if (e.button !== 0) return;
    if (e.target.closest('.vp-btn') || e.target.closest('.frame-resize-handle')) return;

    if (selectedViewportId !== vp.id) {
      selectViewport(vp.id);
    }
    e.preventDefault();
    e.stopPropagation();
  }, true);
}

function clampViewportSize(value) {
  return Math.min(MAX_VIEWPORT_SIZE, Math.max(MIN_VIEWPORT_SIZE, Math.round(value)));
}

function computeResizedViewport(origin, dx, dy, dir) {
  let x = origin.x;
  let y = origin.y;
  let w = origin.w;
  let h = origin.h;

  if (dir.includes('e')) w += dx;
  if (dir.includes('w')) {
    x += dx;
    w -= dx;
  }
  if (dir.includes('s')) h += dy;
  if (dir.includes('n')) {
    y += dy;
    h -= dy;
  }

  if (w < MIN_VIEWPORT_SIZE) {
    if (dir.includes('w')) x -= MIN_VIEWPORT_SIZE - w;
    w = MIN_VIEWPORT_SIZE;
  }
  if (h < MIN_VIEWPORT_SIZE) {
    if (dir.includes('n')) y -= MIN_VIEWPORT_SIZE - h;
    h = MIN_VIEWPORT_SIZE;
  }

  return {
    x: Math.round(x),
    y: Math.round(y),
    w: clampViewportSize(w),
    h: clampViewportSize(h),
  };
}

function appendResizeHandles(shell) {
  const container = document.createElement('div');
  container.className = 'frame-resize-handles';
  container.setAttribute('aria-hidden', 'true');

  RESIZE_HANDLE_DIRS.forEach(dir => {
    const handle = document.createElement('div');
    handle.className = `frame-resize-handle handle-${dir}`;
    handle.dataset.handle = dir;
    container.appendChild(handle);
  });

  shell.appendChild(container);
}

function setupFrameResizeInteractions(workspaceGrid) {
  workspaceGrid.addEventListener('pointerdown', (e) => {
    resetStalePointerState();
    if (isHandToolActive() || isPanning || isDraggingFrame || frameDragPending) return;
    if (e.button !== 0) return;

    const handle = e.target.closest('.frame-resize-handle');
    if (!handle) return;

    const shell = handle.closest('.viewport-frame-shell');
    if (!shell) return;

    const vpId = Number(shell.dataset.vpId);
    const tab = getActiveTab();
    const vp = tab?.viewports.find(v => v.id === vpId);
    if (!vp || !tab) return;

    selectViewport(vp.id);

    isResizingFrame = true;
    resizeVpId = vp.id;
    resizeDir = handle.dataset.handle;
    resizeStartX = e.clientX;
    resizeStartY = e.clientY;
    resizePointerX = e.clientX;
    resizePointerY = e.clientY;
    resizeOrigin = { x: vp.x, y: vp.y, w: vp.width, h: vp.height };
    shell.classList.add('is-resizing');
    workspaceGrid.classList.add('is-frame-interacting');
    startPointerSession(e, workspaceGrid);
    e.preventDefault();
    e.stopPropagation();
  }, true);

  workspaceGrid.addEventListener('pointermove', (e) => {
    if (!isResizingFrame || !isActivePointer(e)) return;
    if (e.buttons === 0) {
      endAllPointerInteractions(e);
      return;
    }
    resizePointerX = e.clientX;
    resizePointerY = e.clientY;
    scheduleFrameResizeUpdate();
  });

  workspaceGrid.addEventListener('pointerup', (e) => {
    if (!isResizingFrame || !isActivePointer(e)) return;
    resizePointerX = e.clientX;
    resizePointerY = e.clientY;
    flushFrameResize();
    endAllPointerInteractions(e);
  });

  workspaceGrid.addEventListener('pointercancel', (e) => {
    if (!isResizingFrame || !isActivePointer(e)) return;
    endAllPointerInteractions(e);
  });
}

function toggleViewportOrientation(vp, tab) {
  const prevW = vp.width;
  vp.width = vp.height;
  vp.height = prevW;

  if (!vp.ua || detectUaProfile(vp.ua) !== 'custom') {
    vp.ua = inferUaForSize(vp.width);
  }

  applyViewportSize(vp, tab);
  applyViewportUserAgent(vp, tab, { reload: false });

  const webview = document.getElementById(`wv-${tab.id}-${vp.id}`);
  if (webview) webview.reload();

  renderPropertiesPanel();
  renderLayersPanel();
  saveActiveTabState();
  showToast('向きを入れ替えました');
}

function domTreeKey(tabId, vpId) {
  return `${tabId}-${vpId}`;
}

function domTreeNodeKey(tabId, vpId, nodeOrSelector, domPath) {
  const path = domPath || (typeof nodeOrSelector === 'object' ? nodeOrSelector?.domPath : null);
  if (Array.isArray(path) && path.length) {
    return `${tabId}-${vpId}@${path.join('.')}`;
  }
  const selector = typeof nodeOrSelector === 'object' ? nodeOrSelector?.selector : nodeOrSelector;
  return `${tabId}-${vpId}:${selector || ''}`;
}

function domPathsEqual(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a.length !== b.length) return false;
  return a.every((value, index) => value === b[index]);
}

function getWebviewForViewport(vp, tab = getActiveTab()) {
  if (!vp || !tab) return null;
  return document.getElementById(`wv-${tab.id}-${vp.id}`);
}

function clearDomHighlight(vp, tab = getActiveTab()) {
  const webview = getWebviewForViewport(vp, tab);
  if (webview) {
    try {
      webview.send('clear-element-highlight');
    } catch {
      // ignore
    }
  }
}

function clearDomSelection({ clearHighlight = true } = {}) {
  if (clearHighlight && selectedDomNode) {
    const tab = browserTabs.find(t => t.id === selectedDomNode.tabId);
    const vp = tab?.viewports.find(v => v.id === selectedDomNode.vpId);
    if (vp && tab) clearDomHighlight(vp, tab);
  }
  selectedDomNode = null;
  selectedElementInfo = null;
  renderInspectorPanel();
}

function invalidateDomTree(vp, tab = getActiveTab()) {
  if (!vp || !tab) return;
  const key = domTreeKey(tab.id, vp.id);
  domTreeByViewport.delete(key);
  domTreeLoading.delete(key);

  const keyPrefix = `${tab.id}-${vp.id}`;
  for (const nodeKey of [...domTreeExpandedNodes]) {
    if (nodeKey.startsWith(`${keyPrefix}:`) || nodeKey.startsWith(`${keyPrefix}@`)) {
      domTreeExpandedNodes.delete(nodeKey);
    }
  }

  if (selectedDomNode?.tabId === tab.id && selectedDomNode?.vpId === vp.id) {
    clearDomSelection({ clearHighlight: false });
    selectedElementInfo = null;
  }
}

function requestDomTree(vp, tab = getActiveTab()) {
  const webview = getWebviewForViewport(vp, tab);
  if (!webview || !tab) return;

  const key = domTreeKey(tab.id, vp.id);
  if (domTreeLoading.has(key)) return;

  domTreeLoading.add(key);
  try {
    webview.send('request-dom-tree');
  } catch {
    domTreeLoading.delete(key);
  }
}

function requestDomChildren(vp, tab, node) {
  const webview = getWebviewForViewport(vp, tab);
  if (!webview || !node) return;

  const nodeKey = domTreeNodeKey(tab.id, vp.id, node);
  if (domTreeLoading.has(nodeKey)) return;

  domTreeLoading.add(nodeKey);
  try {
    webview.send('request-dom-children', {
      parentSelector: node.selector,
      parentDomPath: node.domPath,
    });
  } catch {
    domTreeLoading.delete(nodeKey);
  }
}

function mergeDomChildren(tree, parentSelector, parentDomPath, children) {
  if (!tree) return false;

  const isMatch = domPathsEqual(tree.domPath, parentDomPath) ||
    (parentSelector && tree.selector === parentSelector);

  if (isMatch) {
    tree.children = children;
    tree.lazy = children.some(child => child.hasChildren);
    tree.loadFailed = children.length === 0 && tree.childCount > 0;
    return true;
  }

  if (!tree.children) return false;
  for (const child of tree.children) {
    if (mergeDomChildren(child, parentSelector, parentDomPath, children)) return true;
  }
  return false;
}

function handleGuestDomTree(vp, tab, data) {
  const key = domTreeKey(tab.id, vp.id);
  domTreeLoading.delete(key);
  domTreeByViewport.set(key, data?.tree || null);

  if (data?.tree) {
    domTreeExpandedNodes.add(domTreeNodeKey(tab.id, vp.id, data.tree));
  }

  if (tab.id === activeBrowserTabId) {
    renderLayersPanel();
  }
}

function handleGuestDomChildren(vp, tab, data) {
  const nodeKey = domTreeNodeKey(
    tab.id,
    vp.id,
    data?.parentSelector,
    data?.parentDomPath
  );
  domTreeLoading.delete(nodeKey);

  const treeKey = domTreeKey(tab.id, vp.id);
  const tree = domTreeByViewport.get(treeKey);
  if (tree && (data?.parentSelector || data?.parentDomPath)) {
    mergeDomChildren(tree, data.parentSelector, data.parentDomPath, data.children || []);
    const parent = findDomTreeNode(tree, data.parentSelector, data.parentDomPath);
    if (parent) {
      if (typeof data.childCount === 'number') parent.childCount = data.childCount;
      if (data.truncated) parent.truncated = data.truncated;
      parent.loadFailed = (data.children || []).length === 0 && parent.childCount > 0;
    }
    domTreeByViewport.set(treeKey, tree);
  }

  if (tab.id === activeBrowserTabId) {
    renderLayersPanel();
  }
}

function findDomTreeNode(node, selector, domPath) {
  if (!node) return null;
  if (domPathsEqual(node.domPath, domPath) || (selector && node.selector === selector)) return node;
  if (!node.children) return null;
  for (const child of node.children) {
    const found = findDomTreeNode(child, selector, domPath);
    if (found) return found;
  }
  return null;
}

function expandDomTreeToSelector(vp, tab, selector) {
  if (!selector) return;
  domTreeExpandedFrames.add(domTreeKey(tab.id, vp.id));

  const tree = domTreeByViewport.get(domTreeKey(tab.id, vp.id));
  const parts = selector.split(' > ');
  let path = '';
  for (let i = 0; i < parts.length; i++) {
    path = i === 0 ? parts[0] : `${path} > ${parts[i]}`;

    const branch = tree ? findDomTreeNode(tree, path, null) : null;
    if (branch) {
      domTreeExpandedNodes.add(domTreeNodeKey(tab.id, vp.id, branch));
      if (branch.hasChildren && (!branch.children || branch.children.length === 0)) {
        requestDomChildren(vp, tab, branch);
      }
    } else {
      domTreeExpandedNodes.add(domTreeNodeKey(tab.id, vp.id, path));
    }
  }
}

function requestElementInfo(vp, tab, selector) {
  const webview = getWebviewForViewport(vp, tab);
  if (!webview || !selector) return;
  try {
    webview.send('request-element-info', { selector });
  } catch {
    // ignore
  }
}

function handleGuestElementInfo(vp, tab, data) {
  if (!data?.success) {
    selectedElementInfo = null;
    renderInspectorPanel();
    return;
  }

  if (
    selectedDomNode?.tabId === tab.id &&
    selectedDomNode?.vpId === vp.id &&
    selectedDomNode?.selector === data.selector
  ) {
    selectedElementInfo = data;
    renderInspectorPanel();
  }
}

function setInspectMode(enabled) {
  inspectModeActive = enabled;
  btnInspectPick?.classList.toggle('active', enabled);
  document.getElementById('workspace-grid')?.classList.toggle('inspect-mode', enabled);

  const tab = getActiveTab();
  const vp = getSelectedViewport();
  tab?.viewports.forEach(item => {
    const webview = getWebviewForViewport(item, tab);
    if (!webview) return;
    try {
      webview.send('set-inspect-mode', { enabled: enabled && item.id === vp?.id });
    } catch {
      // ignore
    }
  });

  if (!enabled && vp && tab) {
    try {
      getWebviewForViewport(vp, tab)?.send('clear-element-hover');
    } catch {
      // ignore
    }
  }
}

function toggleInspectMode() {
  const vp = getSelectedViewport();
  if (!vp) {
    showToast('要素を選択するフレームを選んでください');
    return;
  }
  setInspectMode(!inspectModeActive);
}

function renderInspectorPanel() {
  const hasSelection = Boolean(selectedDomNode);
  const hasInfo = Boolean(selectedElementInfo?.success);
  if (inspectorEmpty) inspectorEmpty.hidden = hasSelection;
  if (inspectorBody) inspectorBody.hidden = !hasSelection;
  const canCopy = Boolean(selectedDomNode?.selector && hasInfo);
  if (btnInspectCopy) btnInspectCopy.disabled = !canCopy;
  if (btnInspectCopyCss) btnInspectCopyCss.disabled = !canCopy;

  if (!hasSelection) return;

  if (!hasInfo) {
    if (inspectorSummary) inspectorSummary.innerHTML = '';
    if (inspectorBreadcrumb) inspectorBreadcrumb.textContent = '読み込み中…';
    return;
  }

  const info = selectedElementInfo;
  renderInspectorSummary(info);
  if (inspectorBreadcrumb) {
    inspectorBreadcrumb.innerHTML = `<span class="inspector-tag inspector-tag-${getDomTagCategory(info.tag)}">&lt;${escapeHTML(info.tag)}&gt;</span> <span class="inspector-crumb-label">${escapeHTML(info.label)}</span>`;
    inspectorBreadcrumb.title = info.selector;
  }

  renderInspectorStyles(info);
  renderInspectorBox(info);
  renderInspectorAttrs(info);
  renderInspectorConsole();
}

function renderInspectorSummary(info) {
  if (!inspectorSummary) return;
  inspectorSummary.innerHTML = '';

  const chips = [
    { label: 'Size', value: `${info.box?.content?.width ?? 0} × ${info.box?.content?.height ?? 0}` },
    { label: 'Position', value: `${info.position?.x ?? 0}, ${info.position?.y ?? 0}` },
    { label: 'Display', value: info.computed?.display },
    { label: 'Positioning', value: info.computed?.position },
  ];

  if (info.role) chips.push({ label: 'Role', value: info.role });
  if (info.ariaLabel) chips.push({ label: 'Aria', value: info.ariaLabel });

  chips.filter(c => c.value).forEach(chip => {
    const el = document.createElement('div');
    el.className = 'inspector-chip';
    el.innerHTML = `<span class="inspector-chip-label">${chip.label}</span><span class="inspector-chip-value">${escapeHTML(String(chip.value))}</span>`;
    inspectorSummary.appendChild(el);
  });
}

function createInspectorStyleRow(key, value) {
  const row = document.createElement('button');
  row.type = 'button';
  row.className = 'inspector-style-row';
  row.title = 'クリックでコピー';

  const keyEl = document.createElement('span');
  keyEl.className = 'inspector-style-key';
  keyEl.textContent = key;

  const valWrap = document.createElement('span');
  valWrap.className = 'inspector-style-val-wrap';

  const swatchColor = isCssColorValue(value) ? parseCssColorForSwatch(value) : null;
  if (swatchColor) {
    const swatch = document.createElement('span');
    swatch.className = 'inspector-color-swatch';
    swatch.style.background = swatchColor;
    valWrap.appendChild(swatch);
  }

  const valEl = document.createElement('span');
  valEl.className = 'inspector-style-val';
  valEl.textContent = value;
  valWrap.appendChild(valEl);

  row.appendChild(keyEl);
  row.appendChild(valWrap);
  row.addEventListener('click', () => {
    copyToClipboard(`${key}: ${value};`, `${key} をコピー`);
  });

  return row;
}

function renderInspectorStyles(info) {
  if (!inspectorTabStyles) return;
  inspectorTabStyles.innerHTML = '';

  if (info.textPreview) {
    const textBlock = document.createElement('div');
    textBlock.className = 'inspector-text-preview';
    textBlock.innerHTML = `<span class="inspector-text-label">Text</span>${escapeHTML(info.textPreview)}`;
    inspectorTabStyles.appendChild(textBlock);
  }

  const usedKeys = new Set();

  INSPECTOR_STYLE_GROUPS.forEach(group => {
    const entries = group.keys
      .map(key => [key, info.computed?.[key]])
      .filter(([, value]) => value);

    if (!entries.length) return;
    entries.forEach(([key]) => usedKeys.add(key));

    const section = document.createElement('section');
    section.className = 'inspector-style-group';

    const heading = document.createElement('h4');
    heading.className = 'inspector-style-group-title';
    heading.textContent = group.title;
    section.appendChild(heading);

    const list = document.createElement('div');
    list.className = 'inspector-style-rows';
    entries.forEach(([key, value]) => {
      list.appendChild(createInspectorStyleRow(key, value));
    });
    section.appendChild(list);
    inspectorTabStyles.appendChild(section);
  });

  const remaining = Object.entries(info.computed || {}).filter(([key]) => !usedKeys.has(key));
  if (remaining.length) {
    const section = document.createElement('section');
    section.className = 'inspector-style-group';
    const heading = document.createElement('h4');
    heading.className = 'inspector-style-group-title';
    heading.textContent = 'More';
    section.appendChild(heading);
    const list = document.createElement('div');
    list.className = 'inspector-style-rows';
    remaining.forEach(([key, value]) => list.appendChild(createInspectorStyleRow(key, value)));
    section.appendChild(list);
    inspectorTabStyles.appendChild(section);
  }
}

function renderInspectorBox(info) {
  if (!inspectorTabBox) return;
  inspectorTabBox.innerHTML = '';

  const box = info.box;
  if (!box) return;

  const meta = document.createElement('div');
  meta.className = 'inspector-box-meta';
  meta.innerHTML = `
    <div class="inspector-box-meta-item"><span>Content</span><strong>${box.content.width} × ${box.content.height}px</strong></div>
    <div class="inspector-box-meta-item"><span>Viewport</span><strong>${info.position?.x ?? 0}, ${info.position?.y ?? 0}</strong></div>
  `;
  inspectorTabBox.appendChild(meta);

  const copyBtn = document.createElement('button');
  copyBtn.type = 'button';
  copyBtn.className = 'inspector-box-copy';
  copyBtn.textContent = 'Spacing を CSS でコピー';
  copyBtn.addEventListener('click', () => {
    const c = info.computed || {};
    const snippet = [
      `width: ${c.width || `${box.content.width}px`};`,
      `height: ${c.height || `${box.content.height}px`};`,
      `margin: ${c['margin-top'] || 0} ${c['margin-right'] || 0} ${c['margin-bottom'] || 0} ${c['margin-left'] || 0};`,
      `padding: ${c['padding-top'] || 0} ${c['padding-right'] || 0} ${c['padding-bottom'] || 0} ${c['padding-left'] || 0};`,
      `box-sizing: ${c['box-sizing'] || 'border-box'};`,
    ].join('\n');
    copyToClipboard(snippet, 'Spacing をコピー');
  });
  inspectorTabBox.appendChild(copyBtn);

  const diagram = document.createElement('div');
  diagram.className = 'box-model-diagram';

  const renderLayer = (className, label, sides, inner) => {
    const layer = document.createElement('div');
    layer.className = `box-layer ${className}`;
    const labelEl = document.createElement('span');
    labelEl.className = 'box-layer-label';
    labelEl.textContent = label;
    layer.appendChild(labelEl);

    ['top', 'right', 'bottom', 'left'].forEach(side => {
      const val = document.createElement('span');
      val.className = `box-side box-side-${side}`;
      val.textContent = sides?.[side] || '0';
      layer.appendChild(val);
    });

    if (inner) layer.appendChild(inner);
    return layer;
  };

  const content = document.createElement('div');
  content.className = 'box-layer box-content';
  content.textContent = `${box.content.width} × ${box.content.height}`;

  const padding = renderLayer('box-padding', 'padding', box.padding, content);
  const border = renderLayer('box-border', 'border', box.border, padding);
  const margin = renderLayer('box-margin', 'margin', box.margin, border);
  diagram.appendChild(margin);
  inspectorTabBox.appendChild(diagram);
}

function renderInspectorAttrs(info) {
  if (!inspectorTabAttrs) return;
  inspectorTabAttrs.innerHTML = '';

  const attrs = info.attributes || [];
  if (!attrs.length) {
    inspectorTabAttrs.innerHTML = '<div class="inspector-muted">属性なし</div>';
    return;
  }

  const list = document.createElement('div');
  list.className = 'inspector-attr-rows';
  attrs.forEach(attr => {
    const row = document.createElement('button');
    row.type = 'button';
    row.className = 'inspector-attr-row';
    row.title = 'クリックでコピー';
    row.innerHTML = `<span class="inspector-attr-key">${escapeHTML(attr.name)}</span><span class="inspector-attr-val">${escapeHTML(attr.value)}</span>`;
    row.addEventListener('click', () => {
      const snippet = attr.name === 'class'
        ? `.${attr.value.trim().split(/\s+/).join('.')}`
        : attr.name === 'id'
          ? `#${attr.value}`
          : `[${attr.name}="${attr.value}"]`;
      copyToClipboard(snippet, `${attr.name} をコピー`);
    });
    list.appendChild(row);
  });
  inspectorTabAttrs.appendChild(list);
}

function renderInspectorConsole() {
  if (!inspectorTabConsole) return;
  inspectorTabConsole.innerHTML = '';

  const vp = getSelectedViewport();
  const frameLabel = vp ? `${getActiveTab()?.title || ''} / ${vp.name}` : '';

  const filteredLogs = consoleLogs.filter(log => {
    if (!frameLabel) return true;
    return log.source === frameLabel;
  }).slice(-80);

  if (!filteredLogs.length) {
    inspectorTabConsole.innerHTML = '<div class="inspector-muted">このフレームのログはありません</div>';
    return;
  }

  filteredLogs.forEach(log => {
    const entry = document.createElement('div');
    entry.className = `inspector-log level-${log.level}`;
    let levelName = 'LOG';
    if (log.level === 1) levelName = 'WARN';
    if (log.level === 2) levelName = 'ERROR';
    entry.innerHTML = `
      <span class="inspector-log-level">${levelName}</span>
      <span class="inspector-log-msg">${escapeHTML(log.message)}</span>
    `;
    inspectorTabConsole.appendChild(entry);
  });

  inspectorTabConsole.scrollTop = inspectorTabConsole.scrollHeight;
}

function clampLeftPanelSplitRatio(ratio) {
  return Math.min(LEFT_PANEL_SPLIT_MAX, Math.max(LEFT_PANEL_SPLIT_MIN, ratio));
}

function applyLeftPanelSplit(ratio) {
  leftPanelLayersRatio = clampLeftPanelSplitRatio(ratio);
  const layersGrow = Math.round(leftPanelLayersRatio * 100);
  const inspectorGrow = 100 - layersGrow;
  document.documentElement.style.setProperty('--left-panel-layers-grow', String(layersGrow));
  document.documentElement.style.setProperty('--left-panel-inspector-grow', String(inspectorGrow));
  leftPanelSplitHandle?.setAttribute('aria-valuenow', String(layersGrow));
}

function loadLeftPanelSplit() {
  try {
    const raw = localStorage.getItem(LEFT_PANEL_SPLIT_KEY);
    const ratio = parseFloat(raw);
    if (Number.isFinite(ratio)) {
      applyLeftPanelSplit(ratio);
      return;
    }
  } catch {
    // ignore
  }
  applyLeftPanelSplit(LEFT_PANEL_SPLIT_DEFAULT);
}

function persistLeftPanelSplit() {
  try {
    localStorage.setItem(LEFT_PANEL_SPLIT_KEY, String(leftPanelLayersRatio));
  } catch {
    // ignore
  }
}

function setupLeftPanelSplit() {
  if (!leftPanelBody || !leftPanelSplitHandle) return;

  loadLeftPanelSplit();

  const endDrag = (e) => {
    if (!leftPanelSplitDragging) return;
    leftPanelSplitDragging = false;
    leftPanelSplitHandle.classList.remove('is-dragging');
    document.body.classList.remove('left-panel-split-active');
    persistLeftPanelSplit();
    try {
      leftPanelSplitHandle.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  leftPanelSplitHandle.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;
    e.preventDefault();
    leftPanelSplitDragging = true;
    leftPanelSplitDragStartY = e.clientY;
    leftPanelSplitDragStartRatio = leftPanelLayersRatio;
    leftPanelSplitHandle.classList.add('is-dragging');
    document.body.classList.add('left-panel-split-active');
    leftPanelSplitHandle.setPointerCapture(e.pointerId);
  });

  leftPanelSplitHandle.addEventListener('pointermove', (e) => {
    if (!leftPanelSplitDragging) return;
    const rect = leftPanelBody.getBoundingClientRect();
    const trackHeight = rect.height - leftPanelSplitHandle.offsetHeight;
    if (trackHeight <= 0) return;
    const deltaRatio = (e.clientY - leftPanelSplitDragStartY) / trackHeight;
    applyLeftPanelSplit(leftPanelSplitDragStartRatio + deltaRatio);
  });

  leftPanelSplitHandle.addEventListener('pointerup', endDrag);
  leftPanelSplitHandle.addEventListener('pointercancel', endDrag);

  leftPanelSplitHandle.addEventListener('keydown', (e) => {
    const step = e.shiftKey ? 0.1 : 0.04;
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
      const direction = e.key === 'ArrowUp' ? -1 : 1;
      applyLeftPanelSplit(leftPanelLayersRatio + direction * step);
      persistLeftPanelSplit();
    }
  });
}

function setupInspectorPanel() {
  btnInspectPick?.addEventListener('click', () => toggleInspectMode());

  btnInspectOutline?.addEventListener('click', () => {
    btnToggleOutline?.click();
    btnInspectOutline.classList.toggle('active', cssOutlineEnabled);
  });

  btnInspectCopy?.addEventListener('click', async () => {
    if (!selectedDomNode?.selector) return;
    await copyToClipboard(selectedDomNode.selector, 'セレクタをコピー');
  });

  btnInspectCopyCss?.addEventListener('click', async () => {
    if (!selectedElementInfo?.success) return;
    await copyToClipboard(buildCssRuleSnippet(selectedElementInfo), 'CSSルールをコピー');
  });

  btnInspectDevTools?.addEventListener('click', () => {
    const vp = getSelectedViewport();
    if (vp?.webContentsId) {
      window.electronAPI.openWebviewDevTools(vp.webContentsId);
    } else {
      showToast('フレームを選択してください');
    }
  });

  inspectorTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      activeInspectorTab = btn.dataset.inspectorTab;
      inspectorTabButtons.forEach(b => b.classList.toggle('active', b === btn));
      document.querySelectorAll('.inspector-tab-pane').forEach(pane => {
        pane.classList.toggle('active', pane.id === `inspector-tab-${activeInspectorTab}`);
      });
      if (activeInspectorTab === 'console') renderInspectorConsole();
    });
  });

  btnInspectOutline?.classList.toggle('active', cssOutlineEnabled);
  renderInspectorPanel();
}

function highlightDomElement(vp, tab, selector) {
  const webview = getWebviewForViewport(vp, tab);
  if (!webview || !selector) return;

  selectedDomNode = { tabId: tab.id, vpId: vp.id, selector };
  expandDomTreeToSelector(vp, tab, selector);
  try {
    webview.send('highlight-element', { selector });
  } catch {
    // ignore
  }
  renderLayersPanel();
  renderInspectorPanel();
}

function selectDomNode(vp, tab, selector) {
  if (selectedViewportId !== vp.id) {
    selectViewport(vp.id);
  }
  highlightDomElement(vp, tab, selector);
}

function toggleDomFrameExpanded(vp, tab) {
  const key = domTreeKey(tab.id, vp.id);
  if (domTreeExpandedFrames.has(key)) {
    domTreeExpandedFrames.delete(key);
  } else {
    domTreeExpandedFrames.add(key);
    if (!domTreeByViewport.has(key)) {
      requestDomTree(vp, tab);
    }
  }
  renderLayersPanel();
}

function toggleDomNodeExpanded(vp, tab, node) {
  const nodeKey = domTreeNodeKey(tab.id, vp.id, node);
  const isExpanded = domTreeExpandedNodes.has(nodeKey);

  if (isExpanded) {
    domTreeExpandedNodes.delete(nodeKey);
  } else {
    domTreeExpandedNodes.add(nodeKey);
    if (node.hasChildren && (!node.children || node.children.length === 0)) {
      node.loadFailed = false;
      requestDomChildren(vp, tab, node);
    }
  }
  renderLayersPanel();
}

function ensureDomBranchLoaded(vp, tab, node) {
  if (!node?.hasChildren || node.children?.length) return;
  if (node.loadFailed) return;
  if (domTreeLoading.has(domTreeNodeKey(tab.id, vp.id, node))) return;
  requestDomChildren(vp, tab, node);
}

function renderDomTreeNodes(nodes, vp, tab, depth = 0) {
  const frag = document.createDocumentFragment();

  nodes.forEach(node => {
    const li = document.createElement('li');
    li.className = 'dom-tree-item';

    const hasChildren = node.hasChildren || (node.children && node.children.length > 0);
    const nodeKey = domTreeNodeKey(tab.id, vp.id, node);
    const isExpanded = domTreeExpandedNodes.has(nodeKey);
    const isSelected = selectedDomNode?.tabId === tab.id &&
      selectedDomNode?.vpId === vp.id &&
      selectedDomNode?.selector === node.selector;
    const isLoading = domTreeLoading.has(nodeKey);
    const needsChildren = node.hasChildren && (!node.children || node.children.length === 0);

    if (isExpanded && needsChildren && !isLoading && !node.loadFailed) {
      ensureDomBranchLoaded(vp, tab, node);
    }

    const row = document.createElement('div');
    row.className = `dom-tree-row${isSelected ? ' active' : ''}`;
    row.style.setProperty('--dom-tree-depth', String(depth));

    if (hasChildren) {
      const expandBtn = document.createElement('button');
      expandBtn.type = 'button';
      expandBtn.className = 'dom-tree-expand';
      expandBtn.setAttribute('aria-label', isExpanded ? '折りたたむ' : '展開');
      expandBtn.innerHTML = isLoading
        ? '<span class="dom-tree-spinner" aria-hidden="true"></span>'
        : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="${isExpanded ? 'expanded' : ''}"><polyline points="9 18 15 12 9 6"/></svg>`;
      expandBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDomNodeExpanded(vp, tab, node);
      });
      row.appendChild(expandBtn);
    } else {
      const spacer = document.createElement('span');
      spacer.className = 'dom-tree-expand-spacer';
      spacer.setAttribute('aria-hidden', 'true');
      row.appendChild(spacer);
    }

    const labelBtn = document.createElement('button');
    labelBtn.type = 'button';
    labelBtn.className = 'dom-tree-label';
    const tagCat = getDomTagCategory(node.tag);
    let namePart = node.label;
    if (node.label.startsWith(node.tag)) {
      namePart = node.label.slice(node.tag.length);
    }
    labelBtn.innerHTML = `<span class="dom-tag dom-tag-${tagCat}">${escapeHTML(node.tag)}</span>${namePart ? `<span class="dom-tree-label-text">${escapeHTML(namePart)}</span>` : ''}`;
    labelBtn.title = node.selector;
    labelBtn.addEventListener('click', () => selectDomNode(vp, tab, node.selector));
    labelBtn.addEventListener('mouseenter', () => {
      if (inspectModeActive) return;
      try {
        getWebviewForViewport(vp, tab)?.send('hover-element', { selector: node.selector });
      } catch {
        // ignore
      }
    });
    labelBtn.addEventListener('mouseleave', () => {
      try {
        getWebviewForViewport(vp, tab)?.send('clear-element-hover');
      } catch {
        // ignore
      }
    });
    row.appendChild(labelBtn);

    li.appendChild(row);

    if (hasChildren && isExpanded && node.children?.length) {
      const childList = document.createElement('ul');
      childList.className = 'dom-tree';
      childList.appendChild(renderDomTreeNodes(node.children, vp, tab, depth + 1));
      li.appendChild(childList);
    } else if (hasChildren && isExpanded && needsChildren) {
      const childList = document.createElement('ul');
      childList.className = 'dom-tree';
      const placeholder = document.createElement('li');
      placeholder.className = 'dom-tree-item dom-tree-placeholder';
      if (isLoading) {
        placeholder.textContent = '読み込み中…';
      } else if (node.loadFailed) {
        const retryBtn = document.createElement('button');
        retryBtn.type = 'button';
        retryBtn.className = 'dom-tree-retry';
        retryBtn.textContent = '再読み込み';
        retryBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          node.loadFailed = false;
          requestDomChildren(vp, tab, node);
          renderLayersPanel();
        });
        placeholder.appendChild(retryBtn);
      } else {
        placeholder.textContent = '読み込み中…';
      }
      childList.appendChild(placeholder);
      li.appendChild(childList);
    }

    if (node.truncated) {
      const more = document.createElement('li');
      more.className = 'dom-tree-item dom-tree-more';
      more.style.setProperty('--dom-tree-depth', String(depth + 1));
      more.textContent = `… 他 ${node.truncated} 件`;
      li.appendChild(more);
    }

    frag.appendChild(li);
  });

  return frag;
}

function renderDomTreeForFrame(vp, tab) {
  const key = domTreeKey(tab.id, vp.id);
  const tree = domTreeByViewport.get(key);
  const isLoading = domTreeLoading.has(key);

  const wrap = document.createElement('div');
  wrap.className = 'dom-tree-wrap';

  if (isLoading && !tree) {
    const loading = document.createElement('div');
    loading.className = 'dom-tree-loading';
    loading.textContent = 'DOM を読み込み中…';
    wrap.appendChild(loading);
    return wrap;
  }

  if (!tree) {
    const empty = document.createElement('div');
    empty.className = 'dom-tree-empty';
    empty.textContent = 'DOM を取得できません';
    wrap.appendChild(empty);
    return wrap;
  }

  const list = document.createElement('ul');
  list.className = 'dom-tree';
  list.appendChild(renderDomTreeNodes([tree], vp, tab, 0));
  wrap.appendChild(list);
  return wrap;
}

function renderLayersPanel() {
  if (!layersList) return;

  const tab = getActiveTab();
  if (!tab) {
    layersList.innerHTML = '';
    if (layersCount) layersCount.textContent = '0';
    return;
  }

  if (tab.viewports.length === 0) {
    repairViewportsFromDom(tab);
    if (tab.viewports.length > 0) {
      viewports = tab.viewports;
      saveActiveTabState();
    }
  } else {
    ensureActiveTabViewportsLinked();
  }

  if (layersCount) layersCount.textContent = String(tab.viewports.length);
  layersList.innerHTML = '';

  [...tab.viewports].reverse().forEach(vp => {
    const li = document.createElement('li');
    const frameKey = domTreeKey(tab.id, vp.id);
    const isFrameExpanded = domTreeExpandedFrames.has(frameKey);
    const isFrameActive = vp.id === selectedViewportId;

    li.className = `layers-item${isFrameActive ? ' active' : ''}${isFrameExpanded ? ' is-tree-open' : ''}`;

    const frameRow = document.createElement('div');
    frameRow.className = 'layers-frame-row';

    const expandBtn = document.createElement('button');
    expandBtn.type = 'button';
    expandBtn.className = 'layers-frame-expand';
    expandBtn.setAttribute('aria-label', isFrameExpanded ? 'DOMツリーを閉じる' : 'DOMツリーを開く');
    expandBtn.setAttribute('aria-expanded', String(isFrameExpanded));
    expandBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="${isFrameExpanded ? 'expanded' : ''}"><polyline points="9 18 15 12 9 6"/></svg>`;
    expandBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleDomFrameExpanded(vp, tab);
    });
    frameRow.appendChild(expandBtn);

    const deviceKind = getFrameDeviceKind(vp);
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'layers-item-btn';
    btn.innerHTML = `
      <span class="layers-item-icon layers-item-icon-${deviceKind}" aria-hidden="true">${frameDeviceIcon(deviceKind)}</span>
      <span class="layers-item-main">
        <span class="layers-item-name">${escapeHTML(vp.name)}</span>
        <span class="layers-item-meta">
          <span class="layers-device-badge">${deviceKind}</span>
          <span class="layers-item-size">${vp.width}×${vp.height}</span>
        </span>
      </span>
    `;
    btn.addEventListener('click', () => {
      selectViewport(vp.id);
      if (!domTreeExpandedFrames.has(frameKey)) {
        domTreeExpandedFrames.add(frameKey);
        if (!domTreeByViewport.has(frameKey)) {
          requestDomTree(vp, tab);
        }
      }
      renderLayersPanel();
    });
    btn.addEventListener('dblclick', (e) => {
      e.preventDefault();
      selectViewport(vp.id);
      zoomToSelection();
    });
    frameRow.appendChild(btn);
    li.appendChild(frameRow);

    if (isFrameExpanded) {
      li.appendChild(renderDomTreeForFrame(vp, tab));
    }

    layersList.appendChild(li);
  });
}

function loadUrlHistory() {
  try {
    const raw = localStorage.getItem(URL_HISTORY_KEY);
    urlHistory = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(urlHistory)) urlHistory = [];
  } catch {
    urlHistory = [];
  }
  renderUrlHistoryDatalist();
}

function pushUrlHistory(url) {
  const normalized = normalizeUserUrl(url);
  if (!normalized) return;

  urlHistory = [normalized, ...urlHistory.filter(u => u !== normalized)].slice(0, 20);
  localStorage.setItem(URL_HISTORY_KEY, JSON.stringify(urlHistory));
  renderUrlHistoryDatalist();
}

function renderUrlHistoryDatalist() {
  if (!urlHistoryList) return;

  const options = new Set();
  urlHistory.forEach(url => {
    options.add(url);
    options.add(url.replace(/^https?:\/\//i, ''));
  });

  urlHistoryList.innerHTML = '';
  options.forEach(value => {
    const opt = document.createElement('option');
    opt.value = value;
    urlHistoryList.appendChild(opt);
  });
}

function serializeWorkspace() {
  saveActiveTabState();

  return {
    version: 1,
    activeBrowserTabId,
    browserTabIdCounter,
    viewportIdCounter,
    urlHistory,
    browserTabs: browserTabs.map(tab => ({
      id: tab.id,
      title: tab.title,
      url: tab.url,
      faviconUrl: tab.faviconUrl || null,
      panX: tab.panX,
      panY: tab.panY,
      workspaceZoom: tab.workspaceZoom,
      selectedViewportId: tab.selectedViewportId,
      viewports: tab.viewports.map(vp => ({
        id: vp.id,
        name: vp.name,
        width: vp.width,
        height: vp.height,
        x: vp.x,
        y: vp.y,
        ua: vp.ua || '',
      })),
    })),
  };
}

function scheduleWorkspacePersist() {
  if (workspacePersistTimer) clearTimeout(workspacePersistTimer);
  workspacePersistTimer = setTimeout(() => {
    workspacePersistTimer = null;
    persistWorkspaceToStorage();
  }, 800);
}

function persistWorkspaceToStorage() {
  const json = JSON.stringify(serializeWorkspace());
  try {
    localStorage.setItem(WORKSPACE_STORAGE_KEY, json);
  } catch (error) {
    console.warn('Failed to persist workspace to localStorage', error);
  }

  if (window.electronAPI?.writePersistedWorkspace) {
    return window.electronAPI.writePersistedWorkspace(json);
  }
  return Promise.resolve();
}

async function persistWorkspaceNow() {
  if (workspacePersistTimer) {
    clearTimeout(workspacePersistTimer);
    workspacePersistTimer = null;
  }
  await persistWorkspaceToStorage();
}

async function readPersistedWorkspaceRaw() {
  try {
    const result = await window.electronAPI?.readPersistedWorkspace?.();
    if (result?.success && result.data) return result.data;
  } catch (error) {
    console.warn('Failed to read workspace from disk', error);
  }
  return null;
}

async function hydrateWorkspaceOnLaunch() {
  let raw = await readPersistedWorkspaceRaw();
  if (!raw) {
    raw = localStorage.getItem(WORKSPACE_STORAGE_KEY);
  }
  if (!raw) return false;

  try {
    const data = JSON.parse(raw);
    if (!rebuildWorkspaceFromData(data)) return false;
    await persistWorkspaceNow();
    return true;
  } catch (error) {
    console.warn('Failed to parse saved workspace', error);
    return false;
  }
}

function rebuildWorkspaceFromData(data) {
  if (!data?.browserTabs?.length) return false;

  browserTabPanels.innerHTML = '';
  browserTabs = [];
  browserTabIdCounter = data.browserTabIdCounter || 0;
  viewportIdCounter = data.viewportIdCounter || 0;

  data.browserTabs.forEach(tabState => {
    const tab = {
      id: tabState.id,
      title: tabState.title || tabTitleFromUrl(tabState.url),
      url: tabState.url,
      faviconUrl: tabState.faviconUrl || null,
      viewports: (tabState.viewports || []).map(vp => ({
        id: vp.id,
        name: vp.name,
        width: vp.width,
        height: vp.height,
        x: vp.x,
        y: vp.y,
        ua: vp.ua || '',
      })),
      panX: tabState.panX ?? 0,
      panY: tabState.panY ?? 0,
      workspaceZoom: tabState.workspaceZoom ?? 1,
      selectedViewportId: tabState.selectedViewportId ?? null,
    };

    tab.viewports.forEach(ensureViewportUa);
    ensureViewportPositions(tab.viewports);
    browserTabs.push(tab);
    renderBrowserTabPanel(tab);
  });

  const activeId = data.activeBrowserTabId;
  const targetId = browserTabs.some(t => t.id === activeId) ? activeId : browserTabs[0].id;

  if (Array.isArray(data.urlHistory)) {
    urlHistory = data.urlHistory;
    localStorage.setItem(URL_HISTORY_KEY, JSON.stringify(urlHistory));
    renderUrlHistoryDatalist();
  }

  setActiveBrowserTab(targetId);
  renderLayersPanel();
  return true;
}

function loadWorkspaceFromStorage() {
  try {
    const raw = localStorage.getItem(WORKSPACE_STORAGE_KEY);
    if (!raw) return false;
    return rebuildWorkspaceFromData(JSON.parse(raw));
  } catch (error) {
    console.warn('Failed to load workspace from storage', error);
    return false;
  }
}

async function saveWorkspaceToFile() {
  const json = JSON.stringify(serializeWorkspace(), null, 2);
  const result = await window.electronAPI.saveWorkspaceFile(json);
  if (result.success) {
    showToast('ワークスペースを保存しました', 'success');
  }
}

async function loadWorkspaceFromFile() {
  const result = await window.electronAPI.loadWorkspaceFile();
  if (!result.success || !result.data) return;

  if (rebuildWorkspaceFromData(result.data)) {
    persistWorkspaceNow();
    showToast('ワークスペースを読み込みました', 'success');
  } else {
    showToast('ワークスペースの形式が不正です');
  }
}

const CANVAS_PADDING = 240;
const FRAME_GAP = 96;
const MIN_CANVAS_W = 4800;
const MIN_CANVAS_H = 3600;

const ZOOM_MIN = 0.02;
const ZOOM_MAX = 8;
const ZOOM_WHEEL_SENSITIVITY = 0.0028;
const ZOOM_BUTTON_FACTOR = 1.32;
const PAN_OVERSCROLL = 1200;

const UA_IPHONE = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';
const UA_IPAD = 'Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';
const UA_ANDROID = 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36';

const VIEWPORT_PRESETS = [
  {
    category: 'Phone',
    icon: 'phone',
    items: [
      { name: 'iPhone 15', width: 393, height: 852, ua: UA_IPHONE },
      { name: 'iPhone 15 Pro Max', width: 430, height: 932, ua: UA_IPHONE },
      { name: 'iPhone SE', width: 375, height: 667, ua: UA_IPHONE },
      { name: 'Pixel 8', width: 412, height: 915, ua: UA_ANDROID },
      { name: 'Galaxy S24', width: 360, height: 780, ua: UA_ANDROID },
    ],
  },
  {
    category: 'Tablet',
    icon: 'tablet',
    items: [
      { name: 'iPad Air', width: 820, height: 1180, ua: UA_IPAD },
      { name: 'iPad Pro 12.9"', width: 1024, height: 1366, ua: UA_IPAD },
      { name: 'iPad Mini', width: 744, height: 1133, ua: UA_IPAD },
    ],
  },
  {
    category: 'Desktop',
    icon: 'desktop',
    items: [
      { name: 'MacBook Air 13"', width: 1280, height: 832, ua: '' },
      { name: 'MacBook Pro 14"', width: 1512, height: 982, ua: '' },
      { name: 'Desktop HD', width: 1280, height: 800, ua: '' },
      { name: 'Desktop FHD', width: 1920, height: 1080, ua: '' },
      { name: 'Desktop 4K', width: 2560, height: 1440, ua: '' },
    ],
  },
  {
    category: 'Social / Ads',
    icon: 'frame',
    items: [
      { name: 'Instagram Post', width: 1080, height: 1080, ua: '' },
      { name: 'Instagram Story', width: 1080, height: 1920, ua: '' },
      { name: 'X / Twitter Card', width: 1200, height: 628, ua: '' },
      { name: 'Facebook Ad', width: 1200, height: 630, ua: '' },
    ],
  },
];

const PRESET_ICONS = {
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="20" x="5" y="2" rx="2"/><line x1="12" x2="12.01" y1="18" y2="18"/></svg>',
  tablet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="12" x2="12.01" y1="18" y2="18"/></svg>',
  desktop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>',
  frame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>',
  custom: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v18"/><path d="M3 12h18"/></svg>',
};

const UA_PROFILES = [
  { id: 'desktop', label: 'Desktop', ua: '' },
  { id: 'iphone', label: 'iPhone', ua: UA_IPHONE },
  { id: 'ipad', label: 'iPad', ua: UA_IPAD },
  { id: 'android', label: 'Android', ua: UA_ANDROID },
];

function inferUaProfileForSize(width) {
  if (width < 480) return 'iphone';
  if (width < 900) return 'ipad';
  return 'desktop';
}

function inferUaForSize(width) {
  const profileId = inferUaProfileForSize(width);
  return UA_PROFILES.find(p => p.id === profileId)?.ua ?? '';
}

function detectUaProfile(ua = '') {
  if (!ua) return 'desktop';
  const match = UA_PROFILES.find(p => p.id !== 'desktop' && p.ua === ua);
  return match ? match.id : 'custom';
}

function getUaLabel(vp) {
  const profile = detectUaProfile(vp.ua || '');
  if (profile === 'custom') return 'Custom';
  return UA_PROFILES.find(p => p.id === profile)?.label || 'Desktop';
}

function ensureViewportUa(vp) {
  if (typeof vp.ua !== 'string') {
    vp.ua = inferUaForSize(vp.width);
  }
}

function updateUaHint(vp) {
  if (!propUaHint || !vp) return;
  const suggested = inferUaProfileForSize(vp.width);
  const current = detectUaProfile(vp.ua || '');
  const suggestedLabel = UA_PROFILES.find(p => p.id === suggested)?.label || 'Desktop';

  if (current === suggested) {
    propUaHint.textContent = `幅 ${vp.width}px に適したUAです`;
  } else {
    propUaHint.textContent = `幅 ${vp.width}px の推奨: ${suggestedLabel}`;
  }
}

function applyViewportUserAgent(vp, tab, { reload = true } = {}) {
  const uid = `${tab.id}-${vp.id}`;
  const webview = document.getElementById(`wv-${uid}`);
  if (!webview) return;

  const ua = vp.ua || '';
  if (ua) webview.setAttribute('useragent', ua);
  else webview.removeAttribute('useragent');

  if (vp.webContentsId) {
    window.electronAPI.setUserAgent(vp.webContentsId, ua);
  }

  syncViewportFrame(vp, tab);

  if (reload) {
    webview.reload();
    showToast(`UAを適用しました（${getUaLabel(vp)}）`);
  }
}

function applyUaProfileToViewport(profileId, { reload = true } = {}) {
  const vp = getSelectedViewport();
  const tab = getActiveTab();
  if (!vp || !tab) return;

  if (profileId === 'custom') {
    vp.ua = propUa?.value.trim() || vp.ua || '';
  } else {
    const profile = UA_PROFILES.find(p => p.id === profileId);
    vp.ua = profile ? profile.ua : '';
  }

  applyViewportUserAgent(vp, tab, { reload });
  renderPropertiesPanel();
  saveActiveTabState();
}

// Default Viewports Config (factory — new IDs per tab)
function createDefaultViewports() {
  const presets = [
    { name: 'iPhone 15', width: 393, height: 852, ua: UA_IPHONE },
    { name: 'iPad Air', width: 820, height: 1180, ua: UA_IPAD },
    { name: 'Desktop HD', width: 1280, height: 800, ua: '' },
  ];

  let x = CANVAS_PADDING;
  const y = CANVAS_PADDING;

  return presets.map(preset => {
    const vp = { id: ++viewportIdCounter, ...preset, x, y };
    x += preset.width + FRAME_GAP;
    return vp;
  });
}

function normalizeUserUrl(raw) {
  const url = raw.trim();
  if (!url) return '';

  if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url)) {
    return url;
  }

  if (url.startsWith('//')) {
    return `https:${url}`;
  }

  return `https://${url}`;
}

function tabTitleFromUrl(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return 'New Tab';
  }
}

function pickFaviconUrl(favicons) {
  if (!Array.isArray(favicons) || favicons.length === 0) return null;
  const normalized = favicons.filter(Boolean);
  if (!normalized.length) return null;
  const httpsIcons = normalized.filter(url => /^https:\/\//i.test(url));
  const pool = httpsIcons.length ? httpsIcons : normalized;
  return pool[pool.length - 1];
}

function getHostnameInitial(url) {
  try {
    const host = new URL(url).hostname.replace(/^www\./, '');
    return host.charAt(0).toUpperCase() || '?';
  } catch {
    return '?';
  }
}

function renderFaviconFallback(container, pageUrl, className = 'favicon-fallback') {
  container.replaceChildren();
  const fallback = document.createElement('span');
  fallback.className = className;
  fallback.textContent = getHostnameInitial(pageUrl);
  try {
    fallback.title = new URL(pageUrl).hostname;
  } catch {
    // ignore
  }
  container.appendChild(fallback);
}

function applyFaviconToContainer(container, faviconUrl, pageUrl, {
  imgClass = 'favicon-img',
  fallbackClass = 'favicon-fallback',
} = {}) {
  if (!container) return;
  container.replaceChildren();

  if (!faviconUrl) {
    renderFaviconFallback(container, pageUrl, fallbackClass);
    return;
  }

  const img = document.createElement('img');
  img.className = imgClass;
  img.src = faviconUrl;
  img.alt = '';
  img.draggable = false;
  img.decoding = 'async';
  img.referrerPolicy = 'no-referrer';
  img.addEventListener('dragstart', (event) => event.preventDefault());
  img.addEventListener('error', () => {
    renderFaviconFallback(container, pageUrl, fallbackClass);
  }, { once: true });
  container.appendChild(img);
}

function setTabFavicon(tab, faviconUrl) {
  if (!tab) return;
  const next = faviconUrl || null;
  if (tab.faviconUrl === next) return;
  tab.faviconUrl = next;
  renderBrowserTabs();
  syncAllViewportFavicons(tab);
  if (tab.id === activeBrowserTabId) {
    updateUrlBarFavicon(tab);
  }
}

function updateUrlBarFavicon(tab) {
  if (!urlForm) return;

  if (!tab?.faviconUrl) {
    urlForm.classList.remove('has-favicon');
    if (urlFavicon) {
      urlFavicon.hidden = true;
      urlFavicon.removeAttribute('src');
    }
    return;
  }

  if (!urlFavicon) return;

  urlForm.classList.add('has-favicon');
  urlFavicon.hidden = false;
  urlFavicon.draggable = false;
  urlFavicon.referrerPolicy = 'no-referrer';
  urlFavicon.onerror = () => {
    urlForm.classList.remove('has-favicon');
    urlFavicon.hidden = true;
    urlFavicon.removeAttribute('src');
  };
  if (urlFavicon.src !== tab.faviconUrl) {
    urlFavicon.src = tab.faviconUrl;
  }
}

function syncViewportFavicon(vp, tab) {
  const icon = document.querySelector(`#vp-card-${tab.id}-${vp.id} .vp-frame-icon`);
  applyFaviconToContainer(icon, tab.faviconUrl, tab.url, {
    imgClass: 'vp-favicon-img',
    fallbackClass: 'vp-favicon-fallback',
  });
}

function syncAllViewportFavicons(tab) {
  if (!tab) return;
  tab.viewports.forEach(vp => syncViewportFavicon(vp, tab));
}

function createBrowserTab(url = 'https://example.com') {
  return {
    id: ++browserTabIdCounter,
    title: tabTitleFromUrl(url),
    url,
    faviconUrl: null,
    viewports: createDefaultViewports(),
    panX: 0,
    panY: 0,
    workspaceZoom: 1.0,
    selectedViewportId: null,
  };
}

function getActiveTab() {
  return browserTabs.find(t => t.id === activeBrowserTabId) || null;
}

function getActiveCanvas() {
  if (!activeBrowserTabId) return null;
  return document.getElementById(`workspace-canvas-${activeBrowserTabId}`);
}

function saveActiveTabState() {
  const tab = getActiveTab();
  if (!tab) return;

  ensureActiveTabViewportsLinked();

  tab.url = currentURL;
  tab.panX = panX;
  tab.panY = panY;
  tab.workspaceZoom = workspaceZoom;
  tab.selectedViewportId = selectedViewportId;
  scheduleWorkspacePersist();
}

function ensureActiveTabViewportsLinked() {
  const tab = getActiveTab();
  if (!tab) return;

  if (viewports === tab.viewports) return;

  if (viewports.length === 0 && tab.viewports.length > 0) {
    viewports = tab.viewports;
    return;
  }

  if (tab.viewports.length === 0 && viewports.length > 0) {
    tab.viewports = viewports;
    return;
  }

  tab.viewports = viewports;
}

function repairViewportsFromDom(tab) {
  const canvas = document.getElementById(`workspace-canvas-${tab.id}`);
  if (!canvas || tab.viewports.length > 0) return false;

  const shells = [...canvas.querySelectorAll('.viewport-frame-shell')];
  if (shells.length === 0) return false;

  tab.viewports = shells.map(shell => {
    const vpId = Number(shell.dataset.vpId);
    const webview = shell.querySelector('webview');
    const name = shell.querySelector('.vp-name')?.textContent?.trim() || `Frame ${vpId}`;
    const sizeText = shell.querySelector('.vp-size')?.textContent || '';
    const sizeMatch = sizeText.match(/(\d+)\s*×\s*(\d+)/);
    const width = sizeMatch
      ? Number(sizeMatch[1])
      : Number.parseInt(webview?.style.width, 10) || 390;
    const height = sizeMatch
      ? Number(sizeMatch[2])
      : Number.parseInt(webview?.style.height, 10) || 844;

    const vp = {
      id: vpId,
      name,
      width,
      height,
      x: Number.parseInt(shell.style.left, 10) || 0,
      y: Number.parseInt(shell.style.top, 10) || 0,
      ua: webview?.getAttribute('useragent') || '',
    };

    try {
      if (webview) vp.webContentsId = webview.getWebContentsId();
    } catch {
      // ignore
    }

    return vp;
  });

  viewportIdCounter = Math.max(viewportIdCounter, ...tab.viewports.map(vp => vp.id));
  return true;
}

function loadActiveTabState() {
  const tab = getActiveTab();
  if (!tab) return;

  repairViewportsFromDom(tab);

  currentURL = tab.url;
  viewports = tab.viewports;
  ensureViewportPositions(viewports);
  viewports.forEach(ensureViewportUa);
  panX = Number(tab.panX) || 0;
  panY = Number(tab.panY) || 0;
  workspaceZoom = Number(tab.workspaceZoom) || 1;
  selectedViewportId = tab.selectedViewportId ?? null;
  urlInput.value = tab.url;
  updateUrlBarFavicon(tab);
}

function ensureViewportPositions(vps) {
  let cursorX = CANVAS_PADDING;
  const baseY = CANVAS_PADDING;
  vps.forEach(vp => {
    if (typeof vp.x !== 'number' || typeof vp.y !== 'number') {
      vp.x = cursorX;
      vp.y = baseY;
      cursorX += vp.width + FRAME_GAP;
    }
  });
}

function getCanvasContentBounds(tab) {
  let width = MIN_CANVAS_W;
  let height = MIN_CANVAS_H;

  tab.viewports.forEach(vp => {
    width = Math.max(width, vp.x + vp.width + CANVAS_PADDING);
    height = Math.max(height, vp.y + vp.height + VIEWPORT_HEADER_H + CANVAS_PADDING);
  });

  return { width, height };
}

function updateCanvasSurface(tab = getActiveTab()) {
  if (!tab) return;
  const canvas = document.getElementById(`workspace-canvas-${tab.id}`);
  if (!canvas) return;
  const bounds = getCanvasContentBounds(tab);
  canvas.style.width = `${bounds.width}px`;
  canvas.style.height = `${bounds.height}px`;
}

function getWebviewAtPoint(clientX, clientY) {
  const tab = getActiveTab();
  if (!tab) return null;

  for (const vp of tab.viewports) {
    const webview = document.getElementById(`wv-${tab.id}-${vp.id}`);
    if (!webview) continue;
    const rect = webview.getBoundingClientRect();
    if (
      clientX >= rect.left && clientX <= rect.right &&
      clientY >= rect.top && clientY <= rect.bottom
    ) {
      return webview;
    }
  }
  return null;
}

function isPointInWorkspace(clientX, clientY) {
  const workspaceGrid = document.getElementById('workspace-grid');
  if (!workspaceGrid) return false;

  const rect = workspaceGrid.getBoundingClientRect();
  if (
    clientX < rect.left || clientX > rect.right ||
    clientY < rect.top || clientY > rect.bottom
  ) {
    return false;
  }

  if (getWebviewAtPoint(clientX, clientY)) return true;

  const hit = document.elementFromPoint(clientX, clientY);
  return Boolean(hit && workspaceGrid.contains(hit));
}

function panCanvasBy(dx, dy) {
  panX -= dx;
  panY -= dy;
  scheduleCanvasTransform();
}

function scrollWebviewBy(webview, dx, dy) {
  if (!webview) return false;

  const applyOverflow = (consumedX, consumedY) => {
    const rx = dx - consumedX;
    const ry = dy - consumedY;
    if (Math.abs(rx) > 0.5 || Math.abs(ry) > 0.5) {
      panCanvasBy(rx, ry);
    }
  };

  const script = `(() => {
    const x0 = window.scrollX;
    const y0 = window.scrollY;
    const root = document.scrollingElement || document.documentElement;
    const maxX = Math.max(0, root.scrollWidth - window.innerWidth);
    const maxY = Math.max(0, root.scrollHeight - window.innerHeight);
    const nextX = Math.min(maxX, Math.max(0, x0 + ${dx}));
    const nextY = Math.min(maxY, Math.max(0, y0 + ${dy}));
    window.scrollTo(nextX, nextY);
    return {
      consumedX: window.scrollX - x0,
      consumedY: window.scrollY - y0,
    };
  })()`;

  if (typeof webview.executeJavaScript === 'function') {
    webview.executeJavaScript(script)
      .then(({ consumedX, consumedY }) => applyOverflow(consumedX, consumedY))
      .catch(() => {
        try {
          webview.send('wheel-scroll', { deltaX: dx, deltaY: dy });
        } catch {
          panCanvasBy(dx, dy);
        }
      });
    return true;
  }

  try {
    webview.send('wheel-scroll', { deltaX: dx, deltaY: dy });
    return true;
  } catch {
    return false;
  }
}

function handleWorkspaceWheel(e) {
  if (isTypingTarget(e.target)) return;
  if (e.target.closest('.left-panel, .sidebar-panel, .control-bar, .browser-tabs-bar, .modal-overlay, .canvas-footer')) {
    return;
  }
  if (!isPointInWorkspace(e.clientX, e.clientY)) return;

  const { dx, dy } = normalizeWheelDelta(e);
  if (!dx && !dy) return;

  const isZoomGesture = e.ctrlKey || e.metaKey;
  if (isZoomGesture) {
    e.preventDefault();
    const factor = Math.exp(-dy * ZOOM_WHEEL_SENSITIVITY);
    zoomAtScreenPoint(factor, e.clientX, e.clientY);
    commitCanvasTransform();
    return;
  }

  e.preventDefault();

  const wantsCanvasPan = isHandToolActive() || e.shiftKey;
  const webview = wantsCanvasPan ? null : getWebviewAtPoint(e.clientX, e.clientY);

  if (webview && scrollWebviewBy(webview, dx, dy)) {
    return;
  }

  panCanvasBy(dx, dy);
}

function getSpawnPosition(width, height) {
  const grid = document.getElementById('workspace-grid');
  if (!grid) return { x: CANVAS_PADDING, y: CANVAS_PADDING };

  const z = workspaceZoom;
  const cx = (-panX + grid.clientWidth / 2) / z;
  const cy = (-panY + grid.clientHeight / 2) / z;
  const tab = getActiveTab();
  const stack = (tab?.viewports.length || 0) * 40;

  return {
    x: Math.round(cx - width / 2) + stack,
    y: Math.round(cy - height / 2 - VIEWPORT_HEADER_H) + stack,
  };
}

function selectViewport(vpId) {
  const tab = getActiveTab();
  if (
    selectedDomNode &&
    (vpId === null || selectedDomNode.vpId !== vpId || selectedDomNode.tabId !== tab?.id)
  ) {
    clearDomSelection();
  }

  selectedViewportId = vpId;
  if (!tab) return;
  tab.selectedViewportId = vpId;
  tab.viewports.forEach(vp => syncViewportFrame(vp, tab));
  renderPropertiesPanel();
  renderLayersPanel();
  if (inspectModeActive) setInspectMode(true);
  if (vpId !== null) activateDesignTab();
}

function clearViewportSelection() {
  if (selectedViewportId === null) return;
  clearDomSelection();
  selectViewport(null);
}

function getSelectedViewport() {
  const tab = getActiveTab();
  if (!tab || selectedViewportId === null) return null;
  return tab.viewports.find(v => v.id === selectedViewportId) || null;
}

function activateDesignTab() {
  const designBtn = document.querySelector('.rail-btn[data-tab="tab-design"]');
  const designPane = document.getElementById('tab-design');
  if (!designBtn || !designPane) return;

  tabButtons.forEach(b => b.classList.remove('active'));
  tabPanes.forEach(p => p.classList.remove('active'));
  designBtn.classList.add('active');
  designPane.classList.add('active');
}

function renderPropertiesPanel() {
  if (!propsEmpty || !propsForm) return;

  const vp = getSelectedViewport();
  if (!vp) {
    propsEmpty.hidden = false;
    propsForm.hidden = true;
    return;
  }

  propsEmpty.hidden = true;
  propsForm.hidden = false;
  propName.value = vp.name;
  propX.value = vp.x;
  propY.value = vp.y;
  propW.value = vp.width;
  propH.value = vp.height;

  const profile = detectUaProfile(vp.ua || '');
  if (propUaProfile) propUaProfile.value = profile;
  if (propUa) propUa.value = vp.ua || '';
  if (propUaCustomWrap) propUaCustomWrap.hidden = profile !== 'custom';
  updateUaHint(vp);
}

function applyViewportFromProperties(field, rawValue) {
  const vp = getSelectedViewport();
  const tab = getActiveTab();
  if (!vp || !tab) return;

  if (field === 'name') {
    vp.name = String(rawValue).trim() || vp.name;
  } else {
    const num = Math.round(Number(rawValue));
    if (!Number.isFinite(num)) return;

    if (field === 'x') vp.x = num;
    if (field === 'y') vp.y = num;
    if (field === 'w') {
      vp.width = Math.min(3840, Math.max(200, num));
      if (!vp.ua) {
        vp.ua = inferUaForSize(vp.width);
        applyViewportUserAgent(vp, tab, { reload: false });
      }
    }
    if (field === 'h') vp.height = Math.min(3840, Math.max(200, num));
  }

  applyViewportSize(vp, tab);
  renderPropertiesPanel();
  saveActiveTabState();
}

function applyViewportSize(vp, tab) {
  const uid = `${tab.id}-${vp.id}`;
  const card = document.getElementById(`vp-card-${uid}`);
  const wrapper = document.getElementById(`wv-wrapper-${uid}`);
  const webview = document.getElementById(`wv-${uid}`);
  if (!card) return;

  card.style.width = `${vp.width}px`;
  if (wrapper) {
    wrapper.style.width = `${vp.width}px`;
    wrapper.style.height = `${vp.height}px`;
  }
  if (webview) {
    webview.style.width = `${vp.width}px`;
    webview.style.height = `${vp.height}px`;
  }

  syncViewportFrame(vp, tab);
  updateCanvasSurface(tab);

  if (vp.webContentsId) {
    window.electronAPI.setDeviceEmulation(vp.webContentsId, vp.width, vp.height);
  }
}

function setupPropertiesPanel() {
  if (!propsForm) return;

  propName?.addEventListener('change', (e) => {
    applyViewportFromProperties('name', e.target.value);
  });

  propX?.addEventListener('change', (e) => {
    applyViewportFromProperties('x', e.target.value);
    updateWorkspaceTransform();
  });

  propY?.addEventListener('change', (e) => {
    applyViewportFromProperties('y', e.target.value);
    updateWorkspaceTransform();
  });

  propW?.addEventListener('change', (e) => {
    applyViewportFromProperties('w', e.target.value);
  });

  propH?.addEventListener('change', (e) => {
    applyViewportFromProperties('h', e.target.value);
  });

  propUaProfile?.addEventListener('change', (e) => {
    const profileId = e.target.value;
    if (propUaCustomWrap) propUaCustomWrap.hidden = profileId !== 'custom';
    if (profileId !== 'custom') {
      applyUaProfileToViewport(profileId);
    } else if (propUa) {
      propUa.focus();
    }
  });

  propUaApply?.addEventListener('click', () => {
    applyUaProfileToViewport('custom');
  });

  propOrientation?.addEventListener('click', () => {
    const vp = getSelectedViewport();
    const tab = getActiveTab();
    if (!vp || !tab) return;
    toggleViewportOrientation(vp, tab);
  });

  propDuplicate?.addEventListener('click', () => {
    duplicateViewport();
  });
}

function addViewport({ name, width, height, ua }) {
  const tab = getActiveTab();
  const canvas = getActiveCanvas();
  if (!tab || !canvas) return;

  const resolvedUa = (ua === undefined || ua === '') ? inferUaForSize(width) : ua;
  const { x, y } = getSpawnPosition(width, height);
  const newVp = { id: ++viewportIdCounter, name, width, height, ua: resolvedUa, x, y };
  tab.viewports.push(newVp);
  viewports = tab.viewports;
  renderViewport(newVp, tab, canvas);
  selectViewport(newVp.id);
  updateCanvasSurface(tab);
  saveActiveTabState();
  persistWorkspaceNow().catch(() => {});
  showToast(`フレーム 「${name}」 を追加しました`);
}

function buildViewportMenu() {
  if (!addViewportMenu) return;

  addViewportMenu.innerHTML = '';

  VIEWPORT_PRESETS.forEach(group => {
    const category = document.createElement('div');
    category.className = 'viewport-menu-category';
    category.textContent = group.category;
    addViewportMenu.appendChild(category);

    group.items.forEach(preset => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'viewport-menu-item';
      btn.setAttribute('role', 'menuitem');
      btn.innerHTML = `
        <span class="viewport-menu-icon">${PRESET_ICONS[group.icon] || PRESET_ICONS.frame}</span>
        <span class="viewport-menu-info">
          <span class="viewport-menu-name">${escapeHTML(preset.name)}</span>
          <span class="viewport-menu-size">${preset.width} × ${preset.height}</span>
        </span>
      `;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        addViewport(preset);
        closeViewportMenu();
      });
      addViewportMenu.appendChild(btn);
    });
  });

  const footer = document.createElement('div');
  footer.className = 'viewport-menu-footer';

  const customBtn = document.createElement('button');
  customBtn.type = 'button';
  customBtn.className = 'viewport-menu-item viewport-menu-item-custom';
  customBtn.setAttribute('role', 'menuitem');
  customBtn.innerHTML = `
    <span class="viewport-menu-icon">${PRESET_ICONS.custom}</span>
    <span class="viewport-menu-info">
      <span class="viewport-menu-name">カスタムサイズ…</span>
      <span class="viewport-menu-size">幅・高さを指定</span>
    </span>
  `;
  customBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    closeViewportMenu();
    openCustomViewportModal();
  });
  footer.appendChild(customBtn);
  addViewportMenu.appendChild(footer);
}

function openCustomViewportModal() {
  modalAddViewport.classList.add('active');
  vpNameInput.focus();
}

function closeCustomViewportModal() {
  modalAddViewport.classList.remove('active');
  addViewportForm.reset();
}

function toggleViewportMenu(forceOpen) {
  if (!addViewportMenu || !btnAddViewport) return;

  const willOpen = forceOpen ?? addViewportMenu.hidden;
  addViewportMenu.hidden = !willOpen;
  btnAddViewport.classList.toggle('active', willOpen);
  btnAddViewport.setAttribute('aria-expanded', String(willOpen));
}

function closeViewportMenu() {
  toggleViewportMenu(false);
}

function setupViewportMenu() {
  buildViewportMenu();

  btnAddViewport?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleViewportMenu(addViewportMenu.hidden);
  });

  document.addEventListener('click', (e) => {
    if (e.target.closest('.add-viewport-wrap')) return;
    closeViewportMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeViewportMenu();
  });
}

// -------------------------------------------------------------
// App Initialization
// -------------------------------------------------------------

async function init() {
  loadUrlHistory();
  initTheme();

  if (!(await hydrateWorkspaceOnLaunch())) {
    const firstTab = createBrowserTab('https://example.com');
    browserTabs.push(firstTab);
    renderBrowserTabPanel(firstTab);
    setActiveBrowserTab(firstTab.id);
    await persistWorkspaceNow();
  }

  updateWorkspaceZoom();
  setupEventListeners();
  setupGlobalShortcuts();
  setupViewportMenu();
  setupPropertiesPanel();
  setupLeftPanelSplit();
  setupInspectorPanel();
  renderPropertiesPanel();
  renderLayersPanel();
  updateLeftPanelSubtitle();
  showWelcomeHint();

  window.addEventListener('beforeunload', () => {
    persistWorkspaceToStorage();
  });

  window.electronAPI?.onBeforeQuit?.(() => {
    persistWorkspaceNow()
      .catch((error) => console.warn('Failed to save workspace on quit', error))
      .finally(() => window.electronAPI?.ackBeforeQuit?.());
  });
}

// -------------------------------------------------------------
// Event Listeners Setup
// -------------------------------------------------------------

function setupEventListeners() {
  // Navigation Bar
  urlForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = normalizeUserUrl(urlInput.value);
    if (!url) return;
    navigateAll(url);
  });

  btnBack.addEventListener('click', () => {
    forEachWebview(wv => { if (wv.canGoBack()) wv.goBack(); });
  });

  btnForward.addEventListener('click', () => {
    forEachWebview(wv => { if (wv.canGoForward()) wv.goForward(); });
  });

  btnReload.addEventListener('click', () => {
    forEachWebview(wv => wv.reload());
  });

  btnNewTab?.addEventListener('click', () => {
    const tab = createBrowserTab('https://example.com');
    browserTabs.push(tab);
    renderBrowserTabPanel(tab);
    setActiveBrowserTab(tab.id);
    showToast('新しいタブを開きました');
  });

  // Sync Toggle
  btnToggleSync.addEventListener('click', () => {
    syncEnabled = !syncEnabled;
    btnToggleSync.classList.toggle('active', syncEnabled);
    showToast(syncEnabled ? 'イベント同期を有効化しました' : 'イベント同期を無効化しました');
  });

  // Theme Toggle
  btnToggleTheme?.addEventListener('click', () => toggleTheme());

  // CSS Outline Toggle
  btnToggleOutline.addEventListener('click', () => {
    cssOutlineEnabled = !cssOutlineEnabled;
    btnToggleOutline.classList.toggle('active', cssOutlineEnabled);
    btnInspectOutline?.classList.toggle('active', cssOutlineEnabled);
    forEachWebview(wv => {
      wv.send('toggle-css-outline', cssOutlineEnabled);
    });
    showToast(cssOutlineEnabled ? 'アウトライン表示をONにしました' : 'アウトライン表示をOFFにしました');
  });

  // Screen Capture All Button
  btnScreenshotAll.addEventListener('click', captureAllViewports);

  btnSaveWorkspace?.addEventListener('click', () => saveWorkspaceToFile());
  btnLoadWorkspace?.addEventListener('click', () => loadWorkspaceFromFile());

  btnShortcuts?.addEventListener('click', () => openShortcutsModal());
  modalShortcutsClose?.addEventListener('click', () => closeShortcutsModal());
  modalShortcuts?.addEventListener('click', (e) => {
    if (e.target === modalShortcuts) closeShortcutsModal();
  });

  // Zoom controls
  btnZoomIn.addEventListener('click', () => {
    zoomAtViewportCenter(ZOOM_BUTTON_FACTOR);
    commitCanvasTransform();
  });

  btnZoomOut.addEventListener('click', () => {
    zoomAtViewportCenter(1 / ZOOM_BUTTON_FACTOR);
    commitCanvasTransform();
  });

  // ── Transform-based pan (replaces overflow:auto scroll) ──────
  const workspaceGrid = document.getElementById('workspace-grid');
  // capture フェーズで受信（webview 上の wheel はバブリングしないため）
  document.addEventListener('wheel', handleWorkspaceWheel, { passive: false, capture: true });

  setupCanvasToolInteractions(workspaceGrid);
  setupGlobalPointerRecovery();
  setupFrameInteractions(workspaceGrid);


  const closeModal = closeCustomViewportModal;

  // Add Viewport — custom size modal
  modalBtnClose.addEventListener('click', closeModal);
  modalBtnCancel.addEventListener('click', closeModal);

  addViewportForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = vpNameInput.value.trim();
    const width = parseInt(vpWidthInput.value, 10);
    const height = parseInt(vpHeightInput.value, 10);
    const ua = vpUaInput.value.trim();

    addViewport({ name, width, height, ua });
    closeModal();
  });

  modalAddViewport.addEventListener('click', (e) => {
    if (e.target === modalAddViewport) closeModal();
  });

  // Toggle Left Panel
  btnToggleLeftPanel?.addEventListener('click', () => {
    const isCollapsed = leftPanel?.classList.toggle('collapsed');
    btnToggleLeftPanel.classList.toggle('active', !isCollapsed);
  });

  // Toggle Sidebar
  btnToggleSidebar.addEventListener('click', () => {
    const isCollapsed = sidebarPanel.classList.toggle('collapsed');
    btnToggleSidebar.classList.toggle('active', !isCollapsed);
  });

  // Sidebar Tabs
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const paneId = btn.dataset.tab;
      document.getElementById(paneId).classList.add('active');
    });
  });

  // Vision Filter Selection
  const visionRadioButtons = document.querySelectorAll('input[name="vision-filter"]');
  visionRadioButtons.forEach(radio => {
    radio.addEventListener('change', (e) => {
      activeVisionFilter = e.target.value;
      
      // Update radio UI cards
      document.querySelectorAll('.vision-card').forEach(card => card.classList.remove('active'));
      e.target.closest('.vision-card').classList.add('active');

      // Apply vision filter to all viewports
      forEachWebview(wv => {
        wv.send('apply-vision-filter', activeVisionFilter);
      });
      showToast(`視覚特性フィルター: ${e.target.closest('.vision-card').querySelector('.vision-title').innerText}`);
    });
  });

  // Clear Console Button
  btnClearConsole.addEventListener('click', () => {
    consoleLogs = [];
    renderConsoleLogs();
  });

  btnSeoAuditRefresh?.addEventListener('click', () => {
    requestSeoAuditRefresh();
    showToast('SEO 監査を更新しています…');
  });

  // Console Filters
  [logFilterInfo, logFilterWarn, logFilterError].forEach(filter => {
    filter.addEventListener('change', renderConsoleLogs);
  });
}

// -------------------------------------------------------------
// Workspace UI Helper Functions
// -------------------------------------------------------------

function syncViewportFrame(vp, tab) {
  const uid = `${tab.id}-${vp.id}`;
  const shell = document.getElementById(`vp-shell-${uid}`);
  const card = document.getElementById(`vp-card-${uid}`);
  const wrapper = document.getElementById(`wv-wrapper-${uid}`);
  const webview = document.getElementById(`wv-${uid}`);
  if (!shell || !card || !wrapper || !webview) return;

  const totalH = vp.height + VIEWPORT_HEADER_H;

  shell.style.left = `${vp.x}px`;
  shell.style.top = `${vp.y}px`;
  shell.style.width = `${vp.width}px`;
  shell.style.height = `${totalH}px`;
  shell.classList.toggle('is-selected', vp.id === selectedViewportId);

  card.style.width = `${vp.width}px`;
  card.style.transform = '';
  card.style.transformOrigin = '';

  wrapper.style.width = `${vp.width}px`;
  wrapper.style.height = `${vp.height}px`;

  webview.style.width = `${vp.width}px`;
  webview.style.height = `${vp.height}px`;
  webview.style.transform = '';
  webview.style.transformOrigin = '';

  const sizeEl = card.querySelector('.vp-size');
  if (sizeEl) sizeEl.innerText = `${vp.width} × ${vp.height} px`;

  const uaBadge = card.querySelector('.vp-ua-badge');
  if (uaBadge) {
    const label = getUaLabel(vp);
    uaBadge.textContent = label;
    uaBadge.classList.toggle('is-desktop', label === 'Desktop');
  }
}

function syncAllViewportFrames() {
  const tab = getActiveTab();
  if (!tab) return;
  tab.viewports.forEach(vp => syncViewportFrame(vp, tab));
}

function setActiveBrowserTab(id) {
  if (!browserTabs.some(t => t.id === id)) return;

  const previousId = activeBrowserTabId;
  if (previousId !== null && previousId !== id) {
    setInspectMode(false);
    clearDomSelection();
    saveActiveTabState();
  }

  activeBrowserTabId = id;
  loadActiveTabState();

  document.querySelectorAll('.browser-tab-panel').forEach(panel => {
    panel.classList.toggle('active', Number(panel.dataset.tabId) === id);
  });

  renderBrowserTabs();
  updateLeftPanelSubtitle();
  updateWorkspaceTransform();
  syncAllViewportFavicons(getActiveTab());
  renderPropertiesPanel();
  renderLayersPanel();
  persistWorkspaceNow().catch(() => {});
}

function closeBrowserTab(tabId) {
  const idx = browserTabs.findIndex(t => t.id === tabId);
  if (idx === -1) return;

  const tab = browserTabs[idx];
  const panel = document.getElementById(`bt-panel-${tabId}`);
  if (panel) panel.remove();

  browserTabs = browserTabs.filter(t => t.id !== tabId);

  if (browserTabs.length === 0) {
    const newTab = createBrowserTab('https://example.com');
    browserTabs.push(newTab);
    renderBrowserTabPanel(newTab);
    setActiveBrowserTab(newTab.id);
    return;
  }

  if (activeBrowserTabId === tabId) {
    const next = browserTabs[Math.min(idx, browserTabs.length - 1)];
    setActiveBrowserTab(next.id);
  } else {
    renderBrowserTabs();
  }

  persistWorkspaceNow().catch(() => {});
  showToast(`タブ「${tab.title}」を閉じました`);
}

function renderBrowserTabs() {
  if (!browserTabsEl) return;
  browserTabsEl.innerHTML = '';

  browserTabs.forEach(tab => {
    const el = document.createElement('div');
    el.className = `browser-tab${tab.id === activeBrowserTabId ? ' active' : ''}`;
    el.setAttribute('role', 'tab');
    el.setAttribute('aria-selected', tab.id === activeBrowserTabId ? 'true' : 'false');

    const labelBtn = document.createElement('button');
    labelBtn.type = 'button';
    labelBtn.className = 'browser-tab-label';

    const faviconEl = document.createElement('span');
    faviconEl.className = 'browser-tab-favicon';
    applyFaviconToContainer(faviconEl, tab.faviconUrl, tab.url, {
      imgClass: 'browser-tab-favicon-img',
      fallbackClass: 'browser-tab-favicon-fallback',
    });

    const titleEl = document.createElement('span');
    titleEl.className = 'browser-tab-title';
    titleEl.textContent = tab.title;

    labelBtn.appendChild(faviconEl);
    labelBtn.appendChild(titleEl);
    labelBtn.addEventListener('click', () => setActiveBrowserTab(tab.id));
    el.appendChild(labelBtn);

    if (browserTabs.length > 1) {
      const closeBtn = document.createElement('button');
      closeBtn.type = 'button';
      closeBtn.className = 'browser-tab-close';
      closeBtn.title = 'タブを閉じる';
      closeBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>`;
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeBrowserTab(tab.id);
      });
      el.appendChild(closeBtn);
    }

    browserTabsEl.appendChild(el);
  });
}

function renderBrowserTabPanel(tab) {
  const panel = document.createElement('div');
  panel.className = 'browser-tab-panel';
  panel.id = `bt-panel-${tab.id}`;
  panel.dataset.tabId = tab.id;

  const canvas = document.createElement('div');
  canvas.className = 'workspace-canvas';
  canvas.id = `workspace-canvas-${tab.id}`;
  panel.appendChild(canvas);

  browserTabPanels.appendChild(panel);
  ensureViewportPositions(tab.viewports);
  tab.viewports.forEach(vp => renderViewport(vp, tab, canvas));
  updateCanvasSurface(tab);
}

function removeViewport(vpId) {
  const tab = getActiveTab();
  if (!tab) return;
  const vp = tab.viewports.find(v => v.id === vpId);
  if (!vp) return;

  const uid = `${tab.id}-${vpId}`;
  const shell = document.getElementById(`vp-shell-${uid}`);
  if (shell) shell.remove();

  tab.viewports = tab.viewports.filter(v => v.id !== vpId);
  viewports = tab.viewports;

  invalidateDomTree(vp, tab);
  domTreeExpandedFrames.delete(domTreeKey(tab.id, vpId));
  if (selectedDomNode?.vpId === vpId && selectedDomNode?.tabId === tab.id) {
    selectedDomNode = null;
  }

  if (selectedViewportId === vpId) {
    selectedViewportId = null;
    tab.selectedViewportId = null;
  }

  updateCanvasSurface(tab);
  renderPropertiesPanel();
  renderLayersPanel();
  saveActiveTabState();
  persistWorkspaceNow().catch(() => {});
  showToast(`フレーム 「${vp.name}」 を削除しました`);
}

function updateWorkspaceTransform() {
  const canvas = getActiveCanvas();
  const tab = getActiveTab();

  if (tab) {
    ensureViewportPositions(tab.viewports);
    updateCanvasSurface(tab);
    syncAllViewportFrames();
  }

  clampPan();
  commitCanvasTransform();
}
// Keep legacy alias
const updateWorkspaceZoom = updateWorkspaceTransform;


function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast ${type === 'success' ? 'success' : ''}`;
  toast.innerHTML = `
    <div class="toast-title">${type === 'success' ? '完了' : '情報'}</div>
    <div class="toast-msg">${message}</div>
  `;
  toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'none'; // Clear animation
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
}

function forEachWebview(callback) {
  const canvas = getActiveCanvas();
  if (!canvas) return;
  canvas.querySelectorAll('webview').forEach(wv => {
    try {
      callback(wv);
    } catch (e) {
      console.error('Error applying to webview', e);
    }
  });
}

// -------------------------------------------------------------
// Navigation Sync Logic
// -------------------------------------------------------------

function navigateAll(url) {
  const normalized = normalizeUserUrl(url);
  if (!normalized) return;

  const tab = getActiveTab();
  if (!tab) return;

  currentURL = normalized;
  tab.url = normalized;
  setTabFavicon(tab, null);
  urlInput.value = normalized;
  pushUrlHistory(normalized);

  tab.viewports.forEach(vp => {
    invalidateDomTree(vp, tab);
    const webview = document.getElementById(`wv-${tab.id}-${vp.id}`);
    if (webview) webview.src = normalized;
  });
  clearDomSelection();
  updateLeftPanelSubtitle();
}

// -------------------------------------------------------------
// Render Viewports Dynamically
// -------------------------------------------------------------

function renderViewport(vp, tab, canvas) {
  const uid = `${tab.id}-${vp.id}`;

  const card = document.createElement('div');
  card.className = 'viewport-card';
  card.id = `vp-card-${uid}`;
  card.style.width = `${vp.width}px`;

  const header = document.createElement('div');
  header.className = 'viewport-header frame-bar';
  header.innerHTML = `
    <div class="vp-drag-handle" title="ドラッグして移動">
      <span class="vp-frame-icon" aria-hidden="true"></span>
      <span class="vp-name">${escapeHTML(vp.name)}</span>
      <span class="vp-ua-badge ${getUaLabel(vp) === 'Desktop' ? 'is-desktop' : ''}">${escapeHTML(getUaLabel(vp))}</span>
      <span class="vp-size">${vp.width} × ${vp.height} px</span>
    </div>
    <div class="vp-actions">
      <button type="button" class="vp-btn screenshot" title="スクリーンショット">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
      </button>
      <button type="button" class="vp-btn devtools" title="DevTools">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21 16-4 4-4-4"/><path d="m11 20-4-4 4-4"/><path d="m15 4-4 12"/></svg>
      </button>
      <button type="button" class="vp-btn close" title="削除">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
      </button>
    </div>
  `;

  const wrapper = document.createElement('div');
  wrapper.className = 'webview-wrapper';
  wrapper.id = `wv-wrapper-${uid}`;
  wrapper.style.width = `${vp.width}px`;
  wrapper.style.height = `${vp.height}px`;

  const loading = document.createElement('div');
  loading.className = 'vp-loading';
  loading.hidden = true;
  loading.innerHTML = '<div class="vp-loading-spinner" aria-hidden="true"></div>';
  wrapper.appendChild(loading);

  const webview = document.createElement('webview');
  webview.id = `wv-${uid}`;
  webview.setAttribute('preload', 'preload-webview.js');
  webview.setAttribute('webpreferences', 'contextIsolation=true, nodeIntegration=false');
  webview.setAttribute('allowpopups', '');
  if (vp.ua) webview.setAttribute('useragent', vp.ua);

  webview.style.width  = `${vp.width}px`;
  webview.style.height = `${vp.height}px`;

  wrapper.appendChild(webview);

  const selectShield = document.createElement('div');
  selectShield.className = 'frame-select-shield';
  selectShield.setAttribute('aria-hidden', 'true');
  wrapper.appendChild(selectShield);
  bindFrameSelectShield(selectShield, vp);

  card.appendChild(wrapper);
  card.appendChild(header);

  const shell = document.createElement('div');
  shell.className = 'viewport-frame-shell';
  shell.id = `vp-shell-${uid}`;
  shell.dataset.vpId = String(vp.id);
  shell.style.left = `${vp.x}px`;
  shell.style.top = `${vp.y}px`;
  shell.appendChild(card);
  appendResizeHandles(shell);
  bindFrameShellSelection(shell);
  const dragHandle = header.querySelector('.vp-drag-handle');
  if (dragHandle) bindFrameHeaderDrag(dragHandle, vp);
  canvas.appendChild(shell);

  syncViewportFrame(vp, tab);
  syncViewportFavicon(vp, tab);
  webview.src = tab.url;

  setupWebviewHooks(webview, vp, tab);

  header.querySelector('.screenshot').addEventListener('click', () => captureSingleViewport(vp));
  header.querySelector('.devtools').addEventListener('click', () => {
    if (vp.webContentsId) window.electronAPI.openWebviewDevTools(vp.webContentsId);
  });
  header.querySelector('.close').addEventListener('click', () => removeViewport(vp.id));

  header.addEventListener('dblclick', (e) => {
    e.preventDefault();
    selectViewport(vp.id);
    zoomToSelection();
  });
}


// -------------------------------------------------------------
// Webview Hooks & Event Relays
// -------------------------------------------------------------

function setupWebviewHooks(webview, vp, tab) {
  const shellId = `vp-shell-${tab.id}-${vp.id}`;

  const setLoading = (loading) => {
    const shell = document.getElementById(shellId);
    const overlay = document.getElementById(`wv-wrapper-${tab.id}-${vp.id}`)?.querySelector('.vp-loading');
    if (shell) shell.classList.toggle('is-loading', loading);
    if (overlay) overlay.hidden = !loading;
  };

  webview.addEventListener('did-start-loading', () => {
    setLoading(true);
    invalidateDomTree(vp, tab);
    if (tab.viewports[0]?.id === vp.id) {
      setTabFavicon(tab, null);
    }
  });
  webview.addEventListener('did-stop-loading', () => {
    setLoading(false);
    if (tab.viewports[0]?.id === vp.id) {
      webview.send('request-metadata');
    }
    const frameKey = domTreeKey(tab.id, vp.id);
    if (domTreeExpandedFrames.has(frameKey)) {
      requestDomTree(vp, tab);
    }
  });
  webview.addEventListener('did-fail-load', () => setLoading(false));

  // DOM Ready
  webview.addEventListener('dom-ready', () => {
    vp.webContentsId = webview.getWebContentsId();

    window.electronAPI.setDeviceEmulation(
      vp.webContentsId, vp.width, vp.height
    );

    window.electronAPI.setUserAgent(vp.webContentsId, vp.ua || '');

    if (cssOutlineEnabled) {
      webview.send('toggle-css-outline', true);
    }
    if (activeVisionFilter !== 'normal') {
      webview.send('apply-vision-filter', activeVisionFilter);
    }
  });

  webview.addEventListener('page-title-updated', (e) => {
    tab.title = e.title || tabTitleFromUrl(tab.url);
    renderBrowserTabs();
    if (tab.id === activeBrowserTabId) {
      updateLeftPanelSubtitle();
    }
  });

  webview.addEventListener('page-favicon-updated', (e) => {
    if (tab.viewports[0]?.id !== vp.id) return;
    const faviconUrl = pickFaviconUrl(e.favicons);
    if (faviconUrl) setTabFavicon(tab, faviconUrl);
  });

  // Navigation — sync viewports within this browser tab only
  webview.addEventListener('did-navigate', (event) => {
    const newURL = event.url;
    if (newURL !== tab.url) {
      if (tab.viewports[0]?.id === vp.id) {
        setTabFavicon(tab, null);
      }
      tab.url = newURL;
      if (tab.id === activeBrowserTabId) {
        currentURL = newURL;
        urlInput.value = newURL;
      }

      tab.viewports.forEach(otherVp => {
        if (otherVp.id !== vp.id) {
          const otherWv = document.getElementById(`wv-${tab.id}-${otherVp.id}`);
          if (otherWv && otherWv.src !== newURL) {
            otherWv.src = newURL;
          }
        }
      });
    }
  });

  // IPC messages from preload-webview
  webview.addEventListener('ipc-message', (event) => {
    const channel = event.channel;
    const data = event.args[0];

    if (channel === 'guest-dom-tree') {
      handleGuestDomTree(vp, tab, data);
      return;
    }
    if (channel === 'guest-dom-children') {
      handleGuestDomChildren(vp, tab, data);
      return;
    }
    if (channel === 'guest-element-highlighted') {
      if (data?.success && tab.id === activeBrowserTabId) {
        renderLayersPanel();
      }
      return;
    }
    if (channel === 'guest-element-info') {
      handleGuestElementInfo(vp, tab, data);
      return;
    }
    if (channel === 'guest-inspect-pick') {
      if (tab.id === activeBrowserTabId) {
        selectDomNode(vp, tab, data?.selector);
        setInspectMode(false);
      }
      return;
    }

    if (tab.id !== activeBrowserTabId) return;

    if (channel === 'guest-scroll') {
      if (!syncEnabled) return;
      tab.viewports.forEach(otherVp => {
        if (otherVp.id !== vp.id) {
          const otherWv = document.getElementById(`wv-${tab.id}-${otherVp.id}`);
          if (otherWv) otherWv.send('sync-scroll', data);
        }
      });
    } else if (channel === 'wheel-scroll-overflow') {
      if (typeof data?.deltaX === 'number' || typeof data?.deltaY === 'number') {
        panCanvasBy(data.deltaX || 0, data.deltaY || 0);
      }
    } else if (channel === 'guest-click') {
      if (data?.selector && vp.id === selectedViewportId && !inspectModeActive) {
        highlightDomElement(vp, tab, data.selector);
      }
      if (!syncEnabled) return;
      tab.viewports.forEach(otherVp => {
        if (otherVp.id !== vp.id) {
          const otherWv = document.getElementById(`wv-${tab.id}-${otherVp.id}`);
          if (otherWv) otherWv.send('sync-click', data);
        }
      });
    } else if (channel === 'guest-input') {
      if (!syncEnabled) return;
      tab.viewports.forEach(otherVp => {
        if (otherVp.id !== vp.id) {
          const otherWv = document.getElementById(`wv-${tab.id}-${otherVp.id}`);
          if (otherWv) otherWv.send('sync-input', data);
        }
      });
    } else if (channel === 'guest-metadata') {
      const primaryViewport = tab.viewports[0];
      if (primaryViewport && primaryViewport.id === vp.id) {
        if (data?.faviconUrl) {
          setTabFavicon(tab, data.faviconUrl);
        }
        updateSidebarAudits(data);
        updateBreakpointsRuler(data.breakpoints);
      }
    }
  });

  webview.addEventListener('console-message', (e) => {
    if (tab.id !== activeBrowserTabId) return;

    const log = {
      level: e.level,
      message: e.message,
      source: `${tab.title} / ${vp.name}`,
      time: new Date().toLocaleTimeString(),
      id: Date.now() + Math.random()
    };

    consoleLogs.push(log);
    if (consoleLogs.length > 500) consoleLogs.shift();
    renderConsoleLogs();
    if (activeInspectorTab === 'console') renderInspectorConsole();
  });
}

// -------------------------------------------------------------
// Breakpoint Ruler Logic
// -------------------------------------------------------------

function updateBreakpointsRuler(breakpoints) {
  if (!breakpoints || breakpoints.length === 0) return;

  // Add new breakpoints to global set
  breakpoints.forEach(bp => allBreakpoints.add(bp));

  // Render rulers
  breakpointRuler.innerHTML = '';
  
  if (allBreakpoints.size === 0) {
    breakpointRuler.innerHTML = '<div class="ruler-helper-text">ロードされたWebページのメディアクエリがここに表示されます</div>';
    return;
  }

  const sortedBreakpoints = Array.from(allBreakpoints).sort((a, b) => a - b);
  sortedBreakpoints.forEach(bp => {
    const badge = document.createElement('button');
    badge.className = 'bp-marker';
    badge.innerHTML = `<span>${bp}px</span>`;
    badge.title = `幅を ${bp}px にリサイズ`;
    
    badge.addEventListener('click', () => {
      // Resize the first viewport to match this breakpoint
      const primaryVp = viewports[0];
      if (primaryVp) {
        resizeViewport(primaryVp.id, bp);
        showToast(`ビューポート「${primaryVp.name}」の幅を ${bp}px にリサイズしました`);
      }
    });

    breakpointRuler.appendChild(badge);
  });
}

function resizeViewport(vpId, width) {
  const tab = getActiveTab();
  if (!tab) return;
  const vp = tab.viewports.find(v => v.id === vpId);
  if (!vp) return;

  vp.width = width;
  applyViewportSize(vp, tab);
  renderPropertiesPanel();
}

// -------------------------------------------------------------
// SEO Audit
// -------------------------------------------------------------

const SEO_SEVERITY_ORDER = { error: 0, warning: 1, info: 2 };
const SEO_SEVERITY_LABELS = { error: 'エラー', warning: '警告', info: '情報' };
const SEO_CATEGORY_LABELS = {
  meta: 'メタデータ',
  headings: '見出し',
  social: 'SNS / OGP',
  images: '画像',
  technical: 'テクニカル',
};

function pushSeoIssue(issues, { id, severity, category, title, message }) {
  issues.push({ id, severity, category, title, message });
}

function buildSeoAuditIssues(metadata = {}) {
  const issues = [];
  const title = metadata.title || '';
  const description = metadata.description || '';
  const titleLen = title.length;
  const descLen = description.length;
  const images = metadata.images || [];
  const headers = metadata.headers || [];
  const missingAlt = images.filter(img => !img.hasAlt).length;
  const emptyAlt = images.filter(img => img.altEmpty).length;
  const h1Count = metadata.h1Count ?? headers.filter(h => h.level === 1).length;

  if (!title) {
    pushSeoIssue(issues, {
      id: 'missing-title',
      severity: 'error',
      category: 'meta',
      title: 'title が未設定',
      message: '<title> タグが空です。検索結果に表示されるタイトルを設定してください。',
    });
  } else {
    if (titleLen < 30) {
      pushSeoIssue(issues, {
        id: 'title-short',
        severity: 'warning',
        category: 'meta',
        title: 'title が短い',
        message: `現在 ${titleLen} 文字です。30〜60 文字程度が推奨されます。`,
      });
    } else if (titleLen > 60) {
      pushSeoIssue(issues, {
        id: 'title-long',
        severity: 'warning',
        category: 'meta',
        title: 'title が長い',
        message: `現在 ${titleLen} 文字です。検索結果で切れる可能性があります（目安 60 文字以内）。`,
      });
    }
  }

  if (!description) {
    pushSeoIssue(issues, {
      id: 'missing-description',
      severity: 'error',
      category: 'meta',
      title: 'meta description が未設定',
      message: '検索スニペット用の description を設定してください。',
    });
  } else {
    if (descLen < 70) {
      pushSeoIssue(issues, {
        id: 'description-short',
        severity: 'warning',
        category: 'meta',
        title: 'description が短い',
        message: `現在 ${descLen} 文字です。70〜160 文字程度が推奨されます。`,
      });
    } else if (descLen > 160) {
      pushSeoIssue(issues, {
        id: 'description-long',
        severity: 'warning',
        category: 'meta',
        title: 'description が長い',
        message: `現在 ${descLen} 文字です。スニペットで省略される可能性があります。`,
      });
    }
  }

  if (h1Count === 0) {
    pushSeoIssue(issues, {
      id: 'missing-h1',
      severity: 'error',
      category: 'headings',
      title: 'h1 がない',
      message: 'ページに h1 見出しがありません。主題を示す h1 を 1 つ設置してください。',
    });
  } else if (h1Count > 1) {
    pushSeoIssue(issues, {
      id: 'multiple-h1',
      severity: 'warning',
      category: 'headings',
      title: 'h1 が複数ある',
      message: `h1 が ${h1Count} 個あります。原則 1 ページ 1 つの h1 が推奨されます。`,
    });
  }

  let prevLevel = 0;
  headers.forEach((header, index) => {
    if (prevLevel && header.level > prevLevel + 1) {
      pushSeoIssue(issues, {
        id: `heading-skip-${index}`,
        severity: 'warning',
        category: 'headings',
        title: '見出しレベルが飛んでいる',
        message: `h${prevLevel} の次に h${header.level} があります。階層を順番にしてください。`,
      });
    }
    prevLevel = header.level;
  });

  if (!metadata.lang) {
    pushSeoIssue(issues, {
      id: 'missing-lang',
      severity: 'warning',
      category: 'technical',
      title: 'html lang が未設定',
      message: '<html lang="ja"> のように言語を指定してください。',
    });
  }

  if (!metadata.viewportMeta) {
    pushSeoIssue(issues, {
      id: 'missing-viewport',
      severity: 'error',
      category: 'technical',
      title: 'viewport が未設定',
      message: 'モバイル表示に必須の viewport メタタグを追加してください。',
    });
  }

  if (!metadata.canonical) {
    pushSeoIssue(issues, {
      id: 'missing-canonical',
      severity: 'warning',
      category: 'technical',
      title: 'canonical が未設定',
      message: '重複コンテンツ対策のため link[rel=canonical] の設定を検討してください。',
    });
  }

  if (metadata.robots && /noindex/i.test(metadata.robots)) {
    pushSeoIssue(issues, {
      id: 'noindex',
      severity: 'error',
      category: 'technical',
      title: 'noindex が設定されている',
      message: `robots メタに「${metadata.robots}」が指定されています。インデックスされない可能性があります。`,
    });
  }

  if (!metadata.ogTitle && !title) {
    pushSeoIssue(issues, {
      id: 'missing-og-title',
      severity: 'warning',
      category: 'social',
      title: 'og:title が未設定',
      message: 'SNS シェア用の og:title を設定してください。',
    });
  } else if (!metadata.ogTitle) {
    pushSeoIssue(issues, {
      id: 'missing-og-title-fallback',
      severity: 'info',
      category: 'social',
      title: 'og:title が未設定',
      message: 'title タグがフォールバックとして使われます。明示的な og:title を推奨します。',
    });
  }

  if (!metadata.ogDesc && !description) {
    pushSeoIssue(issues, {
      id: 'missing-og-desc',
      severity: 'warning',
      category: 'social',
      title: 'og:description が未設定',
      message: 'SNS シェア用の og:description を設定してください。',
    });
  }

  if (!metadata.ogImage) {
    pushSeoIssue(issues, {
      id: 'missing-og-image',
      severity: 'warning',
      category: 'social',
      title: 'og:image が未設定',
      message: 'シェア時のサムネイル用 og:image を設定してください。',
    });
  }

  if (!metadata.twitterCard) {
    pushSeoIssue(issues, {
      id: 'missing-twitter-card',
      severity: 'info',
      category: 'social',
      title: 'twitter:card が未設定',
      message: 'Twitter / X のカード表示用に twitter:card を設定することを推奨します。',
    });
  }

  if (missingAlt > 0) {
    pushSeoIssue(issues, {
      id: 'images-missing-alt',
      severity: 'error',
      category: 'images',
      title: 'alt 属性のない画像',
      message: `${missingAlt} 枚の img に alt 属性がありません。アクセシビリティと SEO の両方に影響します。`,
    });
  }

  if (emptyAlt > 0) {
    pushSeoIssue(issues, {
      id: 'images-empty-alt',
      severity: 'warning',
      category: 'images',
      title: 'alt が空の画像',
      message: `${emptyAlt} 枚の img で alt="" です。装飾画像以外は説明を入れてください。`,
    });
  }

  if (!metadata.hasFavicon && !metadata.faviconUrl) {
    pushSeoIssue(issues, {
      id: 'missing-favicon',
      severity: 'info',
      category: 'technical',
      title: 'favicon が見つからない',
      message: 'link[rel="icon"] によるファビコンの設定を検討してください。',
    });
  }

  if (issues.length === 0) {
    pushSeoIssue(issues, {
      id: 'all-clear',
      severity: 'info',
      category: 'meta',
      title: '重大な問題は見つかりませんでした',
      message: '基本的な SEO チェックをパスしています。引き続きコンテンツ品質も確認してください。',
    });
  }

  return issues.sort((a, b) => SEO_SEVERITY_ORDER[a.severity] - SEO_SEVERITY_ORDER[b.severity]);
}

function renderSeoAuditPanel(metadata) {
  if (!seoAuditSummary || !seoAuditList) return;

  const issues = buildSeoAuditIssues(metadata);
  const counts = { error: 0, warning: 0, info: 0 };
  issues.forEach(issue => {
    if (issue.id !== 'all-clear') counts[issue.severity] += 1;
  });

  seoAuditSummary.innerHTML = '';
  if (issues.length === 1 && issues[0].id === 'all-clear') {
    const ok = document.createElement('div');
    ok.className = 'seo-audit-stat is-ok';
    ok.textContent = '問題なし';
    seoAuditSummary.appendChild(ok);
  } else {
    if (counts.error) {
      const el = document.createElement('div');
      el.className = 'seo-audit-stat is-error';
      el.textContent = `エラー ${counts.error}`;
      seoAuditSummary.appendChild(el);
    }
    if (counts.warning) {
      const el = document.createElement('div');
      el.className = 'seo-audit-stat is-warning';
      el.textContent = `警告 ${counts.warning}`;
      seoAuditSummary.appendChild(el);
    }
    if (counts.info) {
      const el = document.createElement('div');
      el.className = 'seo-audit-stat is-info';
      el.textContent = `情報 ${counts.info}`;
      seoAuditSummary.appendChild(el);
    }
  }

  seoAuditList.innerHTML = '';
  issues.forEach(issue => {
    const li = document.createElement('li');
    li.className = `seo-audit-item is-${issue.severity}`;
    li.innerHTML = `
      <div class="seo-audit-item-head">
        <span class="seo-audit-severity">${SEO_SEVERITY_LABELS[issue.severity]}</span>
        <span class="seo-audit-item-title">${escapeHTML(issue.title)}</span>
      </div>
      <p class="seo-audit-item-msg">${escapeHTML(issue.message)}</p>
      <div class="seo-audit-item-cat">${escapeHTML(SEO_CATEGORY_LABELS[issue.category] || issue.category)}</div>
    `;
    seoAuditList.appendChild(li);
  });

  if (seoAuditBadge) {
    const badgeCount = counts.error + counts.warning;
    if (badgeCount > 0) {
      seoAuditBadge.textContent = String(badgeCount);
      seoAuditBadge.style.display = '';
      seoAuditBadge.classList.toggle('is-error', counts.error > 0);
    } else {
      seoAuditBadge.style.display = 'none';
    }
  }
}

function requestSeoAuditRefresh() {
  const tab = getActiveTab();
  if (!tab || tab.viewports.length === 0) return;
  const vp = tab.viewports[0];
  const webview = document.getElementById(`wv-${tab.id}-${vp.id}`);
  if (webview) webview.send('request-metadata');
}

// -------------------------------------------------------------
// SEO & Audits Sidebar Updates
// -------------------------------------------------------------

function updateSidebarAudits(metadata) {
  renderSeoAuditPanel(metadata);

  let domain = 'example.com';
  try {
    domain = new URL(currentURL).hostname;
  } catch {
    // keep fallback
  }

  // Update SEO/Social Panel Mocks
  // 1. Google
  document.getElementById('seo-google-url').innerText = currentURL;
  document.getElementById('seo-google-title').innerText = metadata.title || '無題のページ';
  document.getElementById('seo-google-desc').innerText = metadata.description || 'メタ記述が設定されていません。検索エンジンのスニペット用にdescriptionタグを設定してください。';

  // 2. Facebook
  document.getElementById('seo-fb-domain').innerText = domain.toUpperCase();
  document.getElementById('seo-fb-title').innerText = metadata.ogTitle || metadata.title || '無題のページ';
  document.getElementById('seo-fb-desc').innerText = metadata.ogDesc || metadata.description || 'Facebookシェア用のog:descriptionがありません。';
  
  const fbImg = document.getElementById('seo-fb-image');
  const fbPlaceholder = document.getElementById('seo-fb-image-placeholder');
  if (metadata.ogImage) {
    fbImg.src = metadata.ogImage;
    fbImg.style.display = 'block';
    fbPlaceholder.style.display = 'none';
  } else {
    fbImg.style.display = 'none';
    fbPlaceholder.style.display = 'flex';
  }

  // 3. Twitter
  document.getElementById('seo-tw-domain').innerText = domain.toLowerCase();
  document.getElementById('seo-tw-title').innerText = metadata.twitterTitle || metadata.title || '無題のページ';
  document.getElementById('seo-tw-desc').innerText = metadata.twitterDesc || metadata.description || 'Twitter用のtwitter:descriptionがありません。';

  const twImg = document.getElementById('seo-tw-image');
  const twPlaceholder = document.getElementById('seo-tw-image-placeholder');
  if (metadata.twitterImage || metadata.ogImage) {
    twImg.src = metadata.twitterImage || metadata.ogImage;
    twImg.style.display = 'block';
    twPlaceholder.style.display = 'none';
  } else {
    twImg.style.display = 'none';
    twPlaceholder.style.display = 'flex';
  }

  // 4. Slack
  document.getElementById('seo-slack-domain').innerText = domain.toLowerCase();
  document.getElementById('seo-slack-title').innerText = metadata.ogTitle || metadata.title || '無題のページ';
  document.getElementById('seo-slack-desc').innerText = metadata.ogDesc || metadata.description || 'Slack表示用の記述が設定されていません。';

  const slackImg = document.getElementById('seo-slack-image');
  if (metadata.ogImage) {
    slackImg.src = metadata.ogImage;
    slackImg.style.display = 'block';
  } else {
    slackImg.style.display = 'none';
  }

  // Update HTML Outline Tree
  const outlineTree = document.getElementById('outline-tree');
  outlineTree.innerHTML = '';
  
  if (!metadata.headers || metadata.headers.length === 0) {
    outlineTree.innerHTML = '<div class="audit-empty">見出しタグ（h1〜h6）が見つかりません。</div>';
  } else {
    metadata.headers.forEach(h => {
      const item = document.createElement('div');
      item.className = `outline-item h${h.level}`;
      item.innerHTML = `
        <span class="outline-badge">H${h.level}</span>
        <span class="outline-text">${escapeHTML(h.text)}</span>
      `;
      outlineTree.appendChild(item);
    });
  }

  // Update Images Alt Checklist
  const imageAuditList = document.getElementById('image-audit-list');
  imageAuditList.innerHTML = '';

  if (!metadata.images || metadata.images.length === 0) {
    imageAuditList.innerHTML = '<div class="audit-empty">画像要素（img）が見つかりません。</div>';
  } else {
    metadata.images.forEach(img => {
      const card = document.createElement('div');
      card.className = 'img-audit-card';
      
      const cleanSrc = escapeHTML(img.src);
      
      card.innerHTML = `
        <div class="img-audit-thumb">
          <img src="${cleanSrc}" alt="Audit preview" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;100&quot; height=&quot;100&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;%2364748b&quot; stroke-width=&quot;2&quot;><rect width=&quot;18&quot; height=&quot;18&quot; x=&quot;3&quot; y=&quot;3&quot; rx=&quot;2&quot;/><circle cx=&quot;9&quot; cy=&quot;9&quot; r=&quot;2&quot;/><path d=&quot;m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21&quot;/></svg>'">
        </div>
        <div class="img-audit-info">
          <span class="img-audit-src">${cleanSrc}</span>
          ${img.hasAlt && !img.altEmpty
            ? `<span class="img-audit-status ok">Alt: "${escapeHTML(img.alt)}"</span>`
            : img.altEmpty
              ? `<span class="img-audit-status missing">Alt が空です</span>`
              : `<span class="img-audit-status missing">Alt属性なし！ (警告)</span>`}
        </div>
      `;
      imageAuditList.appendChild(card);
    });
  }
}

function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

// -------------------------------------------------------------
// Consolidated Console Log Rendering
// -------------------------------------------------------------

function renderConsoleLogs() {
  consoleLogsContainer.innerHTML = '';

  const showInfo = logFilterInfo.checked;
  const showWarn = logFilterWarn.checked;
  const showError = logFilterError.checked;

  const filteredLogs = consoleLogs.filter(log => {
    if (log.level === 0 && !showInfo) return false;
    if (log.level === 1 && !showWarn) return false;
    if (log.level === 2 && !showError) return false;
    return true;
  });

  // Update badge counter
  consoleBadge.innerText = filteredLogs.length;
  consoleBadge.style.display = filteredLogs.length > 0 ? '' : 'none';

  if (filteredLogs.length === 0) {
    consoleLogsContainer.innerHTML = '<div class="console-empty">表示可能なログはありません。</div>';
    return;
  }

  filteredLogs.forEach(log => {
    const entry = document.createElement('div');
    entry.className = `log-entry level-${log.level}`;
    
    let levelName = 'LOG';
    if (log.level === 1) levelName = 'WARN';
    if (log.level === 2) levelName = 'ERROR';

    entry.innerHTML = `
      <div class="log-meta">
        <span class="log-badge">${log.source}</span>
        <span class="log-time">[${log.time}]</span>
        <span class="log-level">${levelName}</span>
      </div>
      <div class="log-msg">${escapeHTML(log.message)}</div>
    `;

    consoleLogsContainer.appendChild(entry);
  });

  // Scroll to bottom of logs on new inputs
  consoleLogsContainer.scrollTop = consoleLogsContainer.scrollHeight;
}

// -------------------------------------------------------------
// Screenshot Engine
// -------------------------------------------------------------

async function captureSingleViewport(vp) {
  if (!vp.webContentsId) {
    showToast('エラー: ビューポートがまだ初期化されていません。', 'error');
    return;
  }

  showToast(`${vp.name} のスクリーンショットを保存中...`);
  
  const result = await window.electronAPI.captureWebview(
    vp.webContentsId,
    vp.name.replace(/\s+/g, '_'),
    vp.width,
    vp.height
  );

  if (result.success) {
    showToast(`保存完了: ${result.filePath}`, 'success');
  } else {
    showToast(`撮影失敗: ${result.error}`, 'error');
  }
}

async function captureAllViewports() {
  if (viewports.length === 0) {
    showToast('撮影するビューポートがありません', 'error');
    return;
  }

  showToast(`全 ${viewports.length} 件のビューポートを一括撮影しています...`);
  
  let successCount = 0;
  let lastFolderPath = '';

  for (const vp of viewports) {
    if (vp.webContentsId) {
      const result = await window.electronAPI.captureWebview(
        vp.webContentsId,
        vp.name.replace(/\s+/g, '_'),
        vp.width,
        vp.height
      );
      if (result.success) {
        successCount++;
        lastFolderPath = result.folderPath;
      }
    }
  }

  if (successCount === viewports.length) {
    showToast(`一括保存完了 (${successCount}/${viewports.length}個): ${lastFolderPath}`, 'success');
  } else if (successCount > 0) {
    showToast(`一部保存完了 (${successCount}/${viewports.length}個成功)`, 'success');
  } else {
    showToast('一括撮影に失敗しました。', 'error');
  }
}

// -------------------------------------------------------------
// Initialize App
// -------------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
  init().catch((error) => console.error('Failed to initialize app', error));
});
