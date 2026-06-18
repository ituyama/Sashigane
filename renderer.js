// -------------------------------------------------------------
// DOM Elements & Initial State
// -------------------------------------------------------------

const urlForm = document.getElementById('url-form');
const urlInput = document.getElementById('url-input');
const urlFavicon = document.getElementById('url-favicon');
const btnBack = document.getElementById('btn-back');
const btnForward = document.getElementById('btn-forward');
const btnReload = document.getElementById('btn-reload');
const btnHome = document.getElementById('btn-home');

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
const leftPanelBody = document.getElementById('left-panel-body');
const leftPanelSplitHandle = document.getElementById('left-panel-split-handle');
const leftPanelWidthHandle = document.getElementById('left-panel-width-handle');
const sidebarWidthHandle = document.getElementById('sidebar-width-handle');
const btnToggleTheme = document.getElementById('btn-toggle-theme');
const btnShortcuts = document.getElementById('btn-shortcuts');
const btnSettings = document.getElementById('btn-settings');
const modalShortcuts = document.getElementById('modal-shortcuts');
const modalShortcutsClose = document.getElementById('modal-shortcuts-close');
const modalSettings = document.getElementById('modal-settings');
const modalSettingsClose = document.getElementById('modal-settings-close');
const settingZoomToFit = document.getElementById('setting-zoom-to-fit');
const settingTabHibernation = document.getElementById('setting-tab-hibernation');
const settingFrameSnapVisual = document.getElementById('setting-frame-snap-visual');
const settingFrameSnapHaptic = document.getElementById('setting-frame-snap-haptic');
const settingBpHaptic = document.getElementById('setting-bp-haptic');
const settingBpHapticVisual = document.getElementById('setting-bp-haptic-visual');
const sidebarPanel = document.getElementById('sidebar-panel');
const browserTabsEl = document.getElementById('browser-tabs');
const browserTabPanels = document.getElementById('browser-tab-panels');
const btnNewTab = document.getElementById('btn-new-tab');
const homeScreen = document.getElementById('home-screen');
const homeUrlForm = document.getElementById('home-url-form');
const homeUrlInput = document.getElementById('home-url-input');
const homeBtnBlank = document.getElementById('home-btn-blank');
const homeBtnUrl = document.getElementById('home-btn-url');
const homeBtnLoad = document.getElementById('home-btn-load');
const homeBtnLastLayout = document.getElementById('home-btn-last-layout');
const btnAlignCenter = document.getElementById('btn-align-center');
const btnArrangeRow = document.getElementById('btn-arrange-row');
const homeRecentSection = document.getElementById('home-recent-section');
const homeRecentGrid = document.getElementById('home-recent-grid');
const homeRecentEmpty = document.getElementById('home-recent-empty');
const btnBreakpointMenu = document.getElementById('btn-breakpoint-menu');
const breakpointMenu = document.getElementById('breakpoint-menu');
const breakpointCurrent = document.getElementById('breakpoint-current');

// Sidebar — frame properties only
const btnVisionMenu = document.getElementById('btn-vision-menu');
const visionMenu = document.getElementById('vision-menu');
const workspaceModeBar = document.getElementById('workspace-mode-bar');
const workspaceModeSeg = document.getElementById('workspace-mode-seg');
const workspaceModeButtons = document.querySelectorAll('[data-workspace-mode]');
const workspaceViewCanvas = document.getElementById('workspace-view-canvas');
const workspaceViewAudit = document.getElementById('workspace-view-audit');
const workspaceViewConsole = document.getElementById('workspace-view-console');
const auditSubnavButtons = document.querySelectorAll('[data-audit-tab]');
const auditFrameSelect = document.getElementById('audit-frame-select');
const auditModeBadge = document.getElementById('audit-mode-badge');
const consoleModeBadge = document.getElementById('console-mode-badge');
const consoleLogsContainer = document.getElementById('console-logs-container');
const consoleSummary = document.getElementById('console-summary');
const consoleTruncateNotice = document.getElementById('console-truncate-notice');
const consoleFrameSelect = document.getElementById('console-frame-select');
const consoleSearch = document.getElementById('console-search');
const consoleAutoScroll = document.getElementById('console-auto-scroll');
const btnConsoleCopy = document.getElementById('btn-console-copy');
const btnConsoleErrorsOnly = document.getElementById('btn-console-errors-only');
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
const propFrameSize = document.getElementById('prop-frame-size');
const propFrameUaLabel = document.getElementById('prop-frame-ua-label');
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
const inspectorTabSeg = document.getElementById('inspector-tab-seg');
const urlHistoryList = document.getElementById('url-history');

const seoAuditSummary = document.getElementById('seo-audit-summary');
const seoAuditList = document.getElementById('seo-audit-list');
const seoAuditBadge = document.getElementById('seo-audit-subnav-badge');
const btnSeoAuditRefresh = document.getElementById('btn-seo-audit-refresh');

const layoutAuditSummary = document.getElementById('layout-audit-summary');
const layoutAuditFrames = document.getElementById('layout-audit-frames');
const layoutAuditOffenders = document.getElementById('layout-audit-offenders');
const layoutAuditBadge = document.getElementById('layout-audit-subnav-badge');
const btnLayoutAuditRefresh = document.getElementById('btn-layout-audit-refresh');
const btnLayoutOverflowOutline = document.getElementById('btn-layout-overflow-outline');

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
let zoomToFitOnOpen = true;
let tabHibernationEnabled = true;
let breakpointHapticEnabled = true;
let breakpointHapticVisualEnabled = true;
let frameSnapHapticEnabled = true;
let frameSnapVisualEnabled = true;
let consoleLogs = [];
let consoleUserScrolledUp = false;
let consoleSearchQuery = '';
const CONSOLE_LOG_CAP = 500;
let allBreakpoints = new Set();
const viewportWidthTracker = new Map();
const bpFlashTimers = new Map();
const layoutAuditByFrame = new Map();
let layoutOverflowOutlineEnabled = false;
let layoutAuditRefreshTimer = null;
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
let lastCanvasHeaderDensityKey = null;
let lastSnapGuidesKey = '';
let zoomInertiaLogVel = 0;
let zoomInertiaAnchor = null;
let zoomInertiaRaf = null;
let zoomInertiaLastTs = 0;

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
const FRAME_EDGE_AUTOPAN_MARGIN = 56;
const FRAME_EDGE_AUTOPAN_MAX_SPEED = 16;

const BASE_FRAME_HEADER_H = 36;
const MIN_FRAME_HEADER_SCREEN_H = 32;
const MAX_FRAME_HEADER_LOGICAL_H = 112;

const FRAME_HEADER_DENSITY_THRESHOLDS = [
  { density: 'full', minScreenW: 320 },
  { density: 'standard', minScreenW: 240 },
  { density: 'compact', minScreenW: 180 },
  { density: 'tight', minScreenW: 120 },
  { density: 'minimal', minScreenW: 0 },
];

const FRAME_HEADER_DENSITY_MAX_SCALE = {
  full: 1.4,
  standard: 1.55,
  compact: 1.7,
  tight: 1.9,
  minimal: 2.25,
};

const FRAME_HEADER_DENSITY_MAX_SCREEN_H = {
  full: 44,
  standard: 46,
  compact: 48,
  tight: 50,
  minimal: 52,
};

function getFrameScreenWidth(vp) {
  if (!vp) return Infinity;
  return vp.width * Math.max(workspaceZoom, 0.05);
}

function getFrameHeaderDensity(vp) {
  const screenW = getFrameScreenWidth(vp);
  for (const tier of FRAME_HEADER_DENSITY_THRESHOLDS) {
    if (screenW >= tier.minScreenW) return tier.density;
  }
  return 'minimal';
}

function getFrameHeaderPresentation(vp) {
  const density = getFrameHeaderDensity(vp);
  const z = Math.max(workspaceZoom, 0.05);
  const screenW = getFrameScreenWidth(vp);
  const maxScale = FRAME_HEADER_DENSITY_MAX_SCALE[density] || 1.4;
  const maxScreenH = FRAME_HEADER_DENSITY_MAX_SCREEN_H[density] || 44;

  let targetScreenH = BASE_FRAME_HEADER_H * z;
  if (targetScreenH < MIN_FRAME_HEADER_SCREEN_H) {
    targetScreenH = MIN_FRAME_HEADER_SCREEN_H;
  }

  if (screenW < 200) {
    targetScreenH += (1 - screenW / 200) * 10;
  }

  targetScreenH = Math.min(maxScreenH, targetScreenH);

  let scale = targetScreenH / (BASE_FRAME_HEADER_H * z);
  scale = Math.max(1, Math.min(maxScale, scale));

  const headerH = Math.min(MAX_FRAME_HEADER_LOGICAL_H, BASE_FRAME_HEADER_H * scale);
  return {
    density,
    scale: headerH / BASE_FRAME_HEADER_H,
    headerH,
  };
}

function getViewportChromeHeight(vp) {
  return getFrameHeaderPresentation(vp).headerH;
}

let frameDragRaf = null;

const SNAP_THRESHOLD_PX = 8;
const SNAP_RELEASE_FACTOR = 1.45;
let frameSnapEngaged = { x: false, y: false };
let frameSnapPrev = { x: null, y: null };

let urlHistory = [];
let faviconCache = {};
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
const URL_HISTORY_KEY = 'sashigane-url-history';
const FAVICON_CACHE_KEY = 'sashigane-favicon-cache';
const LAST_LAYOUT_KEY = 'sashigane-last-layout';
const HIBERNATION_HINT_KEY = 'sashigane-hibernation-hint-shown';
const LEFT_PANEL_SPLIT_KEY = 'sashigane-left-panel-split';
const LEFT_PANEL_WIDTH_KEY = 'sashigane-left-panel-width';
const SIDEBAR_WIDTH_KEY = 'sashigane-sidebar-width';
const LEFT_PANEL_SPLIT_MIN = 0.22;
const LEFT_PANEL_SPLIT_MAX = 0.78;
const LEFT_PANEL_SPLIT_DEFAULT = 0.48;
const LEFT_PANEL_WIDTH_MIN = 220;
const LEFT_PANEL_WIDTH_MAX = 480;
const LEFT_PANEL_WIDTH_DEFAULT = 280;
const SIDEBAR_WIDTH_MIN = 220;
const SIDEBAR_WIDTH_MAX = 520;
const SIDEBAR_WIDTH_DEFAULT = 248;
const PANEL_RESIZE_MIN_CENTER = 360;
const LEFT_PANEL_LAYERS_MIN_PX = 80;
const LEFT_PANEL_INSPECTOR_MIN_PX = 148;

let leftPanelLayersRatio = LEFT_PANEL_SPLIT_DEFAULT;
let leftPanelSplitDragging = false;
let leftPanelSplitDragStartY = 0;
let leftPanelSplitDragStartRatio = 0;
let leftPanelWidthPx = LEFT_PANEL_WIDTH_DEFAULT;
let sidebarWidthPx = SIDEBAR_WIDTH_DEFAULT;
let panelWidthDragging = null;
let panelWidthDragStartX = 0;
let panelWidthDragStartValue = 0;
const RESIZE_HANDLE_DIRS = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'];
const MIN_VIEWPORT_SIZE = 200;
const MAX_VIEWPORT_SIZE = 3840;

let themeMode = 'dark';
let workspaceMode = 'canvas';
let auditSubTab = 'tab-seo-audit';
let auditBadgeSeoCount = 0;
let auditBadgeLayoutCount = 0;
let lastAuditMetadata = null;

function resolveTheme(mode) {
  if (mode === 'system') {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  return mode === 'light' ? 'light' : 'dark';
}

function applyUiTip(el, tip) {
  if (!el || !tip) return;
  el.setAttribute('data-tip', tip);
  if (!el.getAttribute('aria-label')) el.setAttribute('aria-label', tip);
  el.removeAttribute('title');
  if (el.closest('.control-bar, .browser-tabs-bar, .viewport-controls, .global-controls, .nav-group')) {
    el.setAttribute('data-tip-pos', 'bottom');
  } else if (el.closest('.sidebar-rail')) {
    el.setAttribute('data-tip-pos', 'left');
  } else if (el.closest('.canvas-footer, .canvas-toolbar')) {
    el.setAttribute('data-tip-pos', 'top');
  } else if (el.closest('.left-panel')) {
    el.setAttribute('data-tip-pos', 'right');
  }
}

function setupUiTooltips(root = document) {
  const scope = root === document ? document : root;
  scope.querySelectorAll('[title]').forEach((el) => {
    if (el.hasAttribute('data-tip')) return;
    const tip = el.getAttribute('title')?.trim();
    if (!tip) return;
    applyUiTip(el, tip);
  });
  scope.querySelectorAll('[data-tip]:not([aria-label])').forEach((el) => {
    el.setAttribute('aria-label', el.getAttribute('data-tip'));
  });
}

let uiTooltipEl = null;
let uiTooltipTarget = null;
let uiTooltipShowTimer = null;
let uiTooltipHideTimer = null;

function ensureUiTooltipEl() {
  if (uiTooltipEl) return uiTooltipEl;
  uiTooltipEl = document.createElement('div');
  uiTooltipEl.id = 'ui-tooltip';
  uiTooltipEl.className = 'ui-tooltip';
  uiTooltipEl.setAttribute('role', 'tooltip');
  uiTooltipEl.hidden = true;
  document.body.appendChild(uiTooltipEl);
  return uiTooltipEl;
}

function resolveTooltipPlacement(el) {
  const explicit = el.getAttribute('data-tip-pos');
  if (explicit === 'top' || explicit === 'bottom' || explicit === 'left' || explicit === 'right') {
    return explicit;
  }
  if (el.closest('.control-bar, .browser-tabs-bar, .viewport-controls, .global-controls, .nav-group')) {
    return 'bottom';
  }
  if (el.closest('.sidebar-rail')) {
    return 'left';
  }
  if (el.closest('.left-panel')) {
    return 'right';
  }
  return 'top';
}

function positionUiTooltip(el) {
  const tip = ensureUiTooltipEl();
  const text = el.getAttribute('data-tip');
  if (!text) return;

  tip.textContent = text;
  tip.hidden = false;
  tip.classList.remove('visible');
  tip.style.left = '0';
  tip.style.top = '0';

  let placement = resolveTooltipPlacement(el);
  const rect = el.getBoundingClientRect();
  const gap = 8;
  const pad = 6;

  const coordsFor = (p) => {
    const tipRect = tip.getBoundingClientRect();
    let x;
    let y;
    switch (p) {
      case 'bottom':
        x = rect.left + rect.width / 2 - tipRect.width / 2;
        y = rect.bottom + gap;
        break;
      case 'left':
        x = rect.left - tipRect.width - gap;
        y = rect.top + rect.height / 2 - tipRect.height / 2;
        break;
      case 'right':
        x = rect.right + gap;
        y = rect.top + rect.height / 2 - tipRect.height / 2;
        break;
      default:
        x = rect.left + rect.width / 2 - tipRect.width / 2;
        y = rect.top - tipRect.height - gap;
    }
    return { x, y, tipRect };
  };

  let { x, y, tipRect } = coordsFor(placement);

  if (placement === 'top' && y < pad) {
    placement = 'bottom';
    ({ x, y, tipRect } = coordsFor(placement));
  } else if (placement === 'bottom' && y + tipRect.height > window.innerHeight - pad) {
    placement = 'top';
    ({ x, y, tipRect } = coordsFor(placement));
  } else if (placement === 'left' && x < pad) {
    placement = 'right';
    ({ x, y, tipRect } = coordsFor(placement));
  } else if (placement === 'right' && x + tipRect.width > window.innerWidth - pad) {
    placement = 'left';
    ({ x, y, tipRect } = coordsFor(placement));
  }

  x = Math.max(pad, Math.min(x, window.innerWidth - tipRect.width - pad));
  y = Math.max(pad, Math.min(y, window.innerHeight - tipRect.height - pad));

  tip.style.left = `${Math.round(x)}px`;
  tip.style.top = `${Math.round(y)}px`;
  tip.dataset.placement = placement;
  requestAnimationFrame(() => tip.classList.add('visible'));
}

function hideUiTooltip(immediate = false) {
  clearTimeout(uiTooltipShowTimer);
  clearTimeout(uiTooltipHideTimer);
  const run = () => {
    uiTooltipTarget = null;
    const tip = ensureUiTooltipEl();
    tip.classList.remove('visible');
    tip.hidden = true;
  };
  if (immediate) run();
  else uiTooltipHideTimer = setTimeout(run, 40);
}

function scheduleUiTooltip(el) {
  clearTimeout(uiTooltipShowTimer);
  clearTimeout(uiTooltipHideTimer);
  uiTooltipShowTimer = setTimeout(() => {
    uiTooltipTarget = el;
    positionUiTooltip(el);
  }, 280);
}

function initUiTooltipLayer() {
  ensureUiTooltipEl();

  document.addEventListener('pointerover', (e) => {
    const el = e.target.closest('[data-tip]');
    if (!el || el === uiTooltipTarget) return;
    hideUiTooltip(true);
    uiTooltipTarget = el;
    scheduleUiTooltip(el);
  });

  document.addEventListener('pointerout', (e) => {
    if (!uiTooltipTarget) return;
    const from = e.target.closest('[data-tip]');
    if (!from || from !== uiTooltipTarget) return;
    const to = e.relatedTarget;
    if (to && uiTooltipTarget.contains(to)) return;
    if (to?.closest?.('[data-tip]')) return;
    hideUiTooltip();
  });

  document.addEventListener('focusin', (e) => {
    const el = e.target.closest('[data-tip]');
    if (!el) return;
    hideUiTooltip(true);
    uiTooltipTarget = el;
    positionUiTooltip(el);
  });

  document.addEventListener('focusout', (e) => {
    if (uiTooltipTarget && e.target.closest('[data-tip]') === uiTooltipTarget) {
      hideUiTooltip();
    }
  });

  window.addEventListener('scroll', () => hideUiTooltip(true), true);
  window.addEventListener('resize', () => {
    if (uiTooltipTarget) positionUiTooltip(uiTooltipTarget);
  });
}

function updateThemeButton(resolved, mode) {
  if (!btnToggleTheme) return;
  const isDark = resolved === 'dark';
  btnToggleTheme.setAttribute('aria-pressed', String(isDark));
  let tip;
  if (mode === 'system') {
    tip = `システム設定（${isDark ? 'ダーク' : 'ライト'}）— ⌘⇧L で切替`;
  } else {
    tip = isDark
      ? 'ダークモード — クリックでライト (⌘⇧L)'
      : 'ライトモード — クリックでダーク (⌘⇧L)';
  }
  applyUiTip(btnToggleTheme, tip);
}

function applyTheme(mode) {
  themeMode = mode;
  const resolved = resolveTheme(mode);
  document.body.classList.toggle('light-theme', resolved === 'light');
  localStorage.setItem('sashigane-theme', mode);
  window.electronAPI?.setNativeTheme?.(mode, resolved);
  updateThemeButton(resolved, mode);
  if (isHomeActive()) renderHomeScreen();
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
  const mode = saved === 'light' || saved === 'dark' || saved === 'system' ? saved : 'light';
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
  scheduleWorkspacePersist();
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
  cancelZoomInertia();
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
  cancelZoomInertia();
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
    maxY = Math.max(maxY, vp.y + vp.height + getViewportChromeHeight(vp));
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
    vp.y + vp.height + getViewportChromeHeight(vp)
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
  modalShortcutsClose?.focus();
}

function closeShortcutsModal() {
  modalShortcuts?.classList.remove('active');
}

function syncSettingsUi() {
  if (settingZoomToFit) settingZoomToFit.checked = zoomToFitOnOpen;
  if (settingTabHibernation) settingTabHibernation.checked = tabHibernationEnabled;
  if (settingFrameSnapVisual) settingFrameSnapVisual.checked = frameSnapVisualEnabled;
  if (settingFrameSnapHaptic) settingFrameSnapHaptic.checked = frameSnapHapticEnabled;
  if (settingBpHaptic) settingBpHaptic.checked = breakpointHapticEnabled;
  if (settingBpHapticVisual) settingBpHapticVisual.checked = breakpointHapticVisualEnabled;
}

function openSettingsModal() {
  syncSettingsUi();
  modalSettings?.classList.add('active');
  modalSettingsClose?.focus();
}

function closeSettingsModal() {
  modalSettings?.classList.remove('active');
}

function applySettingFromUi() {
  const prefs = {
    zoomToFitOnOpen: Boolean(settingZoomToFit?.checked),
    tabHibernation: Boolean(settingTabHibernation?.checked),
    frameSnapVisual: Boolean(settingFrameSnapVisual?.checked),
    frameSnapHaptic: Boolean(settingFrameSnapHaptic?.checked),
    breakpointHaptic: Boolean(settingBpHaptic?.checked),
    breakpointHapticVisual: Boolean(settingBpHapticVisual?.checked),
  };
  applyPreferences(prefs);
  scheduleWorkspacePersist();
}

function updateWorkspaceModeBarVisibility() {
  if (workspaceModeBar) workspaceModeBar.hidden = isHomeActive();
}

function getAuditTargetViewport(tab = getActiveTab()) {
  if (!tab?.viewports?.length) return null;

  const fromSelect = auditFrameSelect?.value ? Number(auditFrameSelect.value) : null;
  if (fromSelect && tab.viewports.some(v => v.id === fromSelect)) {
    return tab.viewports.find(v => v.id === fromSelect);
  }
  if (selectedViewportId !== null) {
    return tab.viewports.find(v => v.id === selectedViewportId) || tab.viewports[0];
  }
  return tab.viewports[0];
}

function renderAuditFrameSelect() {
  if (!auditFrameSelect) return;
  const tab = getActiveTab();
  if (!tab?.viewports?.length) {
    auditFrameSelect.innerHTML = '<option value="">フレームなし</option>';
    auditFrameSelect.disabled = true;
    return;
  }

  auditFrameSelect.disabled = false;
  const target = getAuditTargetViewport(tab);
  auditFrameSelect.innerHTML = tab.viewports.map(vp => {
    const selected = vp.id === target?.id ? ' selected' : '';
    return `<option value="${vp.id}"${selected}>${escapeHTML(vp.name)} (${vp.width}px)</option>`;
  }).join('');
}

function updateAuditModeBadge() {
  const total = auditBadgeSeoCount + auditBadgeLayoutCount;
  if (!auditModeBadge) return;
  if (total > 0) {
    auditModeBadge.textContent = String(total);
    auditModeBadge.hidden = false;
    auditModeBadge.classList.toggle('is-error', auditBadgeSeoCount > 0);
  } else {
    auditModeBadge.hidden = true;
  }
}

function setAuditSubTab(tabId) {
  auditSubTab = tabId;
  auditSubnavButtons.forEach(btn => {
    const active = btn.dataset.auditTab === tabId;
    btn.classList.toggle('active', active);
  });
  document.querySelectorAll('.audit-pane').forEach(pane => {
    pane.classList.toggle('active', pane.id === tabId);
  });

  if (tabId === 'tab-seo-audit' || tabId === 'tab-outline') {
    requestSeoAuditRefresh();
  }
  if (tabId === 'tab-meta') {
    if (lastAuditMetadata) {
      renderMetadataOverview(lastAuditMetadata);
    } else {
      requestSeoAuditRefresh();
    }
  }
  if (tabId === 'tab-layout') {
    requestLayoutAuditAll();
    renderLayoutAuditPanel();
  }
  scheduleWorkspacePersist();
}

function setWorkspaceMode(mode) {
  if (!['canvas', 'audit', 'console'].includes(mode)) return;
  if (isHomeActive() && mode !== 'canvas') return;

  workspaceMode = mode;
  document.body.classList.remove('workspace-mode-canvas', 'workspace-mode-audit', 'workspace-mode-console');
  document.body.classList.add(`workspace-mode-${mode}`);

  if (workspaceViewCanvas) workspaceViewCanvas.hidden = mode !== 'canvas';
  if (workspaceViewAudit) workspaceViewAudit.hidden = mode !== 'audit';
  if (workspaceViewConsole) workspaceViewConsole.hidden = mode !== 'console';

  workspaceModeButtons.forEach(btn => {
    const active = btn.dataset.workspaceMode === mode;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-selected', active ? 'true' : 'false');
  });

  if (workspaceModeSeg) {
    const segIndex = { canvas: 0, audit: 1, console: 2 }[mode] ?? 0;
    workspaceModeSeg.style.setProperty('--workspace-mode-seg-index', String(segIndex));
  }

  if (mode === 'audit') {
    renderAuditFrameSelect();
  renderConsoleFrameSelect();
    setAuditSubTab(auditSubTab);
  } else if (mode === 'console') {
    renderConsoleFrameSelect();
    renderConsoleLogs();
  }

  scheduleWorkspacePersist();
}

function setupWorkspaceModes() {
  workspaceModeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      setWorkspaceMode(btn.dataset.workspaceMode);
    });
  });

  auditSubnavButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      setAuditSubTab(btn.dataset.auditTab);
    });
  });

  auditFrameSelect?.addEventListener('change', () => {
    const tab = getActiveTab();
    const vpId = Number(auditFrameSelect.value);
    if (tab && vpId) {
      selectViewport(vpId);
      requestSeoAuditRefresh();
      if (auditSubTab === 'tab-layout') renderLayoutAuditPanel();
    }
  });

  setWorkspaceMode(workspaceMode);
}

function updateNavigationButtons() {
  if (!btnBack || !btnForward) return;

  if (isHomeActive()) {
    btnBack.disabled = true;
    btnForward.disabled = true;
    return;
  }

  let canBack = false;
  let canForward = false;
  const canvas = getActiveCanvas();
  canvas?.querySelectorAll('webview').forEach(wv => {
    try {
      if (wv.canGoBack()) canBack = true;
      if (wv.canGoForward()) canForward = true;
    } catch {
      // ignore
    }
  });

  btnBack.disabled = !canBack;
  btnForward.disabled = !canForward;
}

function showWelcomeHint() {
  if (localStorage.getItem('sashigane-welcome-shown')) return;
  localStorage.setItem('sashigane-welcome-shown', '1');
  if (isHomeActive()) return;
  showToast('ボードを開きました — フレームをドラッグして配置、? でショートカット一覧');
}

function isHomeActive() {
  return activeBrowserTabId === null;
}

function updateHomeScreenState() {
  const onHome = isHomeActive();
  document.body.classList.toggle('home-active', onHome);
  if (homeScreen) homeScreen.hidden = !onHome;

  if (urlInput) {
    urlInput.disabled = onHome;
    urlForm?.classList.toggle('is-disabled', onHome);
  }
  if (btnReload) btnReload.disabled = onHome;
  if (btnHome) {
    btnHome.classList.toggle('active', onHome);
    btnHome.setAttribute('aria-pressed', onHome ? 'true' : 'false');
  }
  updateNavigationButtons();
  updateWorkspaceModeBarVisibility();

  if (onHome && workspaceMode !== 'canvas') {
    setWorkspaceMode('canvas');
  }

  if (onHome) {
    renderHomeScreen();
    requestAnimationFrame(() => homeUrlInput?.focus());
  }
}

function getHostnameLabel(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

function hashString(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = value.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

function getBoardThumbColor(url) {
  const hues = [262, 228, 198, 168, 28, 340, 12, 290];
  const host = getHostnameLabel(url);
  const hue = hues[hashString(host) % hues.length];
  const isLight = document.body.classList.contains('light-theme');
  return isLight
    ? `hsl(${hue} 62% 90%)`
    : `hsl(${hue} 38% 28%)`;
}

function getRemoteFaviconUrl(url) {
  try {
    const host = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=128`;
  } catch {
    return null;
  }
}

function loadFaviconCache() {
  try {
    const raw = localStorage.getItem(FAVICON_CACHE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    faviconCache = parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    faviconCache = {};
  }
}

function rememberBoardMeta(url, { faviconUrl, title } = {}) {
  const normalized = normalizeUserUrl(url);
  if (!normalized) return;

  const prev = faviconCache[normalized] || {};
  faviconCache[normalized] = {
    faviconUrl: faviconUrl || prev.faviconUrl || null,
    title: title || prev.title || tabTitleFromUrl(normalized),
  };
  localStorage.setItem(FAVICON_CACHE_KEY, JSON.stringify(faviconCache));
}

function getBoardMeta(url) {
  const normalized = normalizeUserUrl(url) || url;
  const cached = faviconCache[normalized] || {};
  return {
    url: normalized,
    title: cached.title || tabTitleFromUrl(normalized),
    faviconUrl: cached.faviconUrl || getRemoteFaviconUrl(normalized),
  };
}

function renderHomeScreen() {
  if (!homeRecentGrid) return;

  const hasLastLayout = Boolean(loadLastLayout());
  if (homeBtnLastLayout) {
    homeBtnLastLayout.disabled = !hasLastLayout;
    homeBtnLastLayout.classList.toggle('is-disabled', !hasLastLayout);
  }

  const recent = urlHistory.slice(0, 12);
  homeRecentGrid.innerHTML = '';

  if (homeRecentEmpty) {
    homeRecentEmpty.hidden = recent.length > 0;
  }

  recent.forEach(url => {
    const meta = getBoardMeta(url);
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'home-file-card';
    card.title = meta.url;

    const thumb = document.createElement('div');
    thumb.className = 'home-file-thumb';
    thumb.style.setProperty('--thumb-bg', getBoardThumbColor(meta.url));

    const faviconWrap = document.createElement('span');
    faviconWrap.className = 'home-file-favicon';
    applyFaviconToContainer(faviconWrap, meta.faviconUrl, meta.url, {
      imgClass: 'home-file-favicon-img',
      fallbackClass: 'home-file-favicon-fallback',
    });
    thumb.appendChild(faviconWrap);

    const info = document.createElement('span');
    info.className = 'home-file-info';

    const title = document.createElement('span');
    title.className = 'home-file-title';
    title.textContent = meta.title;

    const host = document.createElement('span');
    host.className = 'home-file-host';
    host.textContent = getHostnameLabel(meta.url);

    info.appendChild(title);
    info.appendChild(host);
    card.appendChild(thumb);
    card.appendChild(info);
    card.addEventListener('click', () => openNewBrowserTab(meta.url));
    homeRecentGrid.appendChild(card);
  });
}

function enterHomeScreen({ persist = true } = {}) {
  if (activeBrowserTabId !== null) {
    saveLastLayout();
    setInspectMode(false);
    clearDomSelection();
    saveActiveTabState();
  }

  if (tabHibernationEnabled) {
    suspendAllBrowserTabs();
  }

  activeBrowserTabId = null;
  viewports = [];
  selectedViewportId = null;
  currentURL = '';
  if (urlInput) urlInput.value = '';

  document.querySelectorAll('.browser-tab-panel').forEach(panel => {
    panel.classList.remove('active');
  });

  renderBrowserTabs();
  renderLayersPanel();
  renderPropertiesPanel();
  renderInspectorPanel();
  updateHomeScreenState();
  closeBreakpointMenu();
  updateBreakpointTrigger();

  if (persist) persistWorkspaceNow().catch(() => {});
}

function goHome() {
  if (isHomeActive()) {
    renderHomeScreen();
    requestAnimationFrame(() => homeUrlInput?.focus());
    return;
  }
  enterHomeScreen();
}

function openNewBrowserTab(url = 'https://example.com', { viewports: customViewports, boardMode = 'canvas' } = {}) {
  const normalized = normalizeUserUrl(url) || url;
  const tab = createBrowserTab(normalized, { viewports: customViewports, boardMode });
  browserTabs.push(tab);
  renderBrowserTabPanel(tab);
  setActiveBrowserTab(tab.id);
  showWelcomeHint();
  if (boardMode === 'flow') {
    showToast('Flow: ページ内のリンクをクリックすると導線を記録します');
  }
  if (zoomToFitOnOpen) {
    requestAnimationFrame(() => zoomToFitAll());
  }
  return tab;
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

const DEVICE_KIND_LABELS = {
  mobile: 'モバイル',
  tablet: 'タブレット',
  desktop: 'デスクトップ',
};

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

function setupGlobalShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeViewportMenu();
      closeCustomViewportModal();
      closeShortcutsModal();
      closeSettingsModal();
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

    if (!isTypingTarget(e.target) && !isHomeActive() && !e.metaKey && !e.ctrlKey && !e.altKey) {
      if (e.key === '1') {
        e.preventDefault();
        setWorkspaceMode('canvas');
        return;
      }
      if (e.key === '2') {
        e.preventDefault();
        setWorkspaceMode('audit');
        return;
      }
      if (e.key === '3') {
        e.preventDefault();
        setWorkspaceMode('console');
        return;
      }
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

    if (isMetaKey(e) && e.shiftKey && e.key.toLowerCase() === 'h') {
      e.preventDefault();
      goHome();
      return;
    }

    if (isMetaKey(e) && e.key.toLowerCase() === 'l') {
      e.preventDefault();
      if (isHomeActive()) {
        homeUrlInput?.focus();
        homeUrlInput?.select();
      } else {
        urlInput.focus();
        urlInput.select();
      }
      return;
    }

    if (isMetaKey(e) && e.key.toLowerCase() === 't') {
      e.preventDefault();
      openNewBrowserTab(currentURL || urlHistory[0] || 'https://example.com');
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

    if (selectedViewportId !== null && ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      e.preventDefault();
      nudgeSelectedViewport(e.key, e.shiftKey ? 10 : 1);
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
    } else if (e.shiftKey && (e.key === '+' || e.key === '=' || e.code === 'Equal')) {
      e.preventDefault();
      stepZoomPreset(1);
    } else if (e.shiftKey && (e.key === '-' || e.key === '_' || e.code === 'Minus')) {
      e.preventDefault();
      stepZoomPreset(-1);
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
  if (lastCanvasHeaderDensityKey !== `${getActiveTab()?.id ?? ''}:${workspaceZoom}`) {
    lastCanvasHeaderDensityKey = `${getActiveTab()?.id ?? ''}:${workspaceZoom}`;
    updateFrameHeaderDensity();
  }
}

function updateFrameHeaderDensity() {
  const tab = getActiveTab();
  if (!tab?.viewports?.length || isHomeActive()) return;

  tab.viewports.forEach(vp => {
    const uid = `${tab.id}-${vp.id}`;
    const shell = document.getElementById(`vp-shell-${uid}`);
    const card = document.getElementById(`vp-card-${uid}`);
    const header = card?.querySelector('.viewport-header.frame-bar');
    if (!shell || !card || !header) return;
    applyFrameHeaderChrome(vp, shell, card, header);
  });
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
    }, 800);
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
  cancelZoomInertia();
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

function resetFrameSnapState() {
  frameSnapEngaged = { x: false, y: false };
  frameSnapPrev = { x: null, y: null };
}

function getFrameShellHeight(vp) {
  return vp.height + getViewportChromeHeight(vp);
}

function getFrameBounds(vp) {
  const shellH = getFrameShellHeight(vp);
  return {
    left: vp.x,
    right: vp.x + vp.width,
    top: vp.y,
    bottom: vp.y + shellH,
    centerX: vp.x + vp.width / 2,
    centerY: vp.y + shellH / 2,
    width: vp.width,
    height: shellH,
  };
}

function buildSnapLines(viewports, excludeVpId) {
  const x = [0];
  const y = [0];

  for (const vp of viewports) {
    if (vp.id === excludeVpId) continue;
    const b = getFrameBounds(vp);
    x.push(b.left, b.right, b.centerX);
    y.push(b.top, b.bottom, b.centerY);
  }

  return {
    x: [...new Set(x.map(v => Math.round(v * 100) / 100))],
    y: [...new Set(y.map(v => Math.round(v * 100) / 100))],
  };
}

function snapAxisPosition(pos, size, lines, prevSnap) {
  const threshold = SNAP_THRESHOLD_PX / workspaceZoom;
  const release = threshold * SNAP_RELEASE_FACTOR;
  const refs = [
    { edge: pos, delta: 0 },
    { edge: pos + size, delta: -size },
    { edge: pos + size / 2, delta: -size / 2 },
  ];

  let bestPos = pos;
  let bestLine = null;
  let bestDist = Infinity;

  for (const ref of refs) {
    for (const line of lines) {
      const dist = Math.abs(ref.edge - line);
      const wasSnapped = prevSnap?.line === line;
      const limit = wasSnapped ? release : threshold;
      if (dist <= limit && dist < bestDist) {
        bestDist = dist;
        bestPos = line + ref.delta;
        bestLine = line;
      }
    }
  }

  return {
    value: bestPos,
    snapped: bestLine !== null,
    line: bestLine,
  };
}

function snapFramePosition(x, y, vp, tab) {
  const lines = buildSnapLines(tab.viewports, vp.id);
  const shellH = getFrameShellHeight(vp);
  const xResult = snapAxisPosition(x, vp.width, lines.x, frameSnapPrev.x);
  const yResult = snapAxisPosition(y, shellH, lines.y, frameSnapPrev.y);

  const snapState = {
    x: xResult.snapped ? { line: xResult.line } : null,
    y: yResult.snapped ? { line: yResult.line } : null,
  };

  return {
    x: xResult.value,
    y: yResult.value,
    guides: { x: xResult.line, y: yResult.line },
    snapState,
    newlySnapped: {
      x: xResult.snapped && !frameSnapEngaged.x,
      y: yResult.snapped && !frameSnapEngaged.y,
    },
  };
}

function ensureSnapGuidesLayer(tab) {
  const canvas = document.getElementById(`workspace-canvas-${tab.id}`);
  if (!canvas) return null;

  let layer = canvas.querySelector('.snap-guides-layer');
  if (!layer) {
    layer = document.createElement('div');
    layer.className = 'snap-guides-layer';
    layer.setAttribute('aria-hidden', 'true');
    canvas.appendChild(layer);
  }
  return layer;
}

function computeSnapGuideSpan(tab, guides, draggedBounds) {
  const eps = 0.75;
  let minX = draggedBounds.left;
  let maxX = draggedBounds.right;
  let minY = draggedBounds.top;
  let maxY = draggedBounds.bottom;

  for (const vp of tab.viewports) {
    const b = getFrameBounds(vp);
    if (guides.x !== null && guides.x !== undefined) {
      if (
        Math.abs(b.left - guides.x) <= eps ||
        Math.abs(b.right - guides.x) <= eps ||
        Math.abs(b.centerX - guides.x) <= eps
      ) {
        minY = Math.min(minY, b.top);
        maxY = Math.max(maxY, b.bottom);
      }
    }
    if (guides.y !== null && guides.y !== undefined) {
      if (
        Math.abs(b.top - guides.y) <= eps ||
        Math.abs(b.bottom - guides.y) <= eps ||
        Math.abs(b.centerY - guides.y) <= eps
      ) {
        minX = Math.min(minX, b.left);
        maxX = Math.max(maxX, b.right);
      }
    }
  }

  const pad = 12;
  return {
    minX: minX - pad,
    maxX: maxX + pad,
    minY: minY - pad,
    maxY: maxY + pad,
  };
}

function renderSnapGuides(tab, guides, draggedVp) {
  if (!frameSnapVisualEnabled) return;

  const layer = ensureSnapGuidesLayer(tab);
  if (!layer) return;

  const guideKey = `${guides?.x ?? ''}:${guides?.y ?? ''}`;
  if (guideKey === lastSnapGuidesKey) return;
  lastSnapGuidesKey = guideKey;

  layer.replaceChildren();
  if (!guides || (guides.x == null && guides.y == null)) return;

  const draggedBounds = getFrameBounds(draggedVp);
  const span = computeSnapGuideSpan(tab, guides, draggedBounds);

  if (guides.x != null) {
    const line = document.createElement('div');
    line.className = 'snap-guide snap-guide-vertical';
    line.style.left = `${guides.x}px`;
    line.style.top = `${span.minY}px`;
    line.style.height = `${Math.max(1, span.maxY - span.minY)}px`;
    layer.appendChild(line);
  }

  if (guides.y != null) {
    const line = document.createElement('div');
    line.className = 'snap-guide snap-guide-horizontal';
    line.style.top = `${guides.y}px`;
    line.style.left = `${span.minX}px`;
    line.style.width = `${Math.max(1, span.maxX - span.minX)}px`;
    layer.appendChild(line);
  }
}

function clearSnapGuides(tab = getActiveTab()) {
  if (!tab) return;
  lastSnapGuidesKey = '';
  document.querySelector(`#workspace-canvas-${tab.id} .snap-guides-layer`)?.replaceChildren();
}

function triggerFrameSnapHaptic() {
  if (!frameSnapHapticEnabled) return;
  window.electronAPI?.performHaptic?.('alignment');
}

function updateFrameSnapFeedback(tab, vp, snapResult) {
  const shell = document.getElementById(`vp-shell-${tab.id}-${vp.id}`);
  const isSnapped = Boolean(snapResult.snapState.x || snapResult.snapState.y);
  shell?.classList.toggle('is-snap-active', isSnapped && frameSnapVisualEnabled);

  if (snapResult.newlySnapped.x || snapResult.newlySnapped.y) {
    triggerFrameSnapHaptic();
  }

  frameSnapEngaged = {
    x: Boolean(snapResult.snapState.x),
    y: Boolean(snapResult.snapState.y),
  };
  frameSnapPrev = snapResult.snapState;
  renderSnapGuides(tab, snapResult.guides, vp);
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
  resetFrameSnapState();
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

function computeEdgeAutoPanDelta(clientX, clientY) {
  const grid = document.getElementById('workspace-grid');
  if (!grid) return { panDx: 0, panDy: 0 };

  const rect = grid.getBoundingClientRect();
  const footer = grid.querySelector('.canvas-footer');
  const bottomLimit = footer
    ? footer.getBoundingClientRect().top
    : rect.bottom;

  let panDx = 0;
  let panDy = 0;
  const margin = FRAME_EDGE_AUTOPAN_MARGIN;
  const maxSpeed = FRAME_EDGE_AUTOPAN_MAX_SPEED;

  const edgeFactor = (distance) => 1 - Math.max(0, distance) / margin;

  const leftDist = clientX - rect.left;
  const rightDist = rect.right - clientX;
  const topDist = clientY - rect.top;
  const bottomDist = bottomLimit - clientY;

  if (leftDist < margin) {
    panDx = maxSpeed * edgeFactor(leftDist);
  } else if (rightDist < margin) {
    panDx = -maxSpeed * edgeFactor(rightDist);
  }

  if (topDist < margin) {
    panDy = maxSpeed * edgeFactor(topDist);
  } else if (bottomDist < margin) {
    panDy = -maxSpeed * edgeFactor(bottomDist);
  }

  return { panDx, panDy };
}

function applyEdgeAutoPan(clientX, clientY, adjustStart) {
  const { panDx, panDy } = computeEdgeAutoPanDelta(clientX, clientY);
  if (!panDx && !panDy) return;

  panX += panDx;
  panY += panDy;
  adjustStart.x += panDx;
  adjustStart.y += panDy;
  scheduleCanvasTransform();
}

function flushFrameDrag() {
  frameDragRaf = null;
  if (!isDraggingFrame) return;

  const tab = getActiveTab();
  const vp = tab?.viewports.find(v => v.id === frameDragVpId);
  if (!vp || !tab) return;

  applyEdgeAutoPan(frameDragPointerX, frameDragPointerY, {
    get x() { return frameDragStartX; },
    set x(v) { frameDragStartX = v; },
    get y() { return frameDragStartY; },
    set y(v) { frameDragStartY = v; },
  });

  const dx = (frameDragPointerX - frameDragStartX) / workspaceZoom;
  const dy = (frameDragPointerY - frameDragStartY) / workspaceZoom;
  const rawX = frameDragOriginX + dx;
  const rawY = frameDragOriginY + dy;
  const snapResult = snapFramePosition(rawX, rawY, vp, tab);

  vp.x = snapResult.x;
  vp.y = snapResult.y;
  updateFrameSnapFeedback(tab, vp, snapResult);
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

  applyEdgeAutoPan(resizePointerX, resizePointerY, {
    get x() { return resizeStartX; },
    set x(v) { resizeStartX = v; },
    get y() { return resizeStartY; },
    set y(v) { resizeStartY = v; },
  });

  const dx = (resizePointerX - resizeStartX) / workspaceZoom;
  const dy = (resizePointerY - resizeStartY) / workspaceZoom;
  const next = computeResizedViewport(resizeOrigin, dx, dy, resizeDir);

  const prevWidth = vp.width;
  vp.x = next.x;
  vp.y = next.y;
  vp.width = next.w;
  vp.height = next.h;
  if (next.w !== prevWidth) {
    notifyBreakpointCrossings(vp.id, prevWidth, next.w);
  }
  syncViewportFrame(vp, tab);
  applyViewportDeviceEmulation(vp);
  updatePropertiesPanelSize(vp);
  updateCanvasSurface(tab);
  scheduleLayoutAuditRefresh(vp, tab);
}

function scheduleFrameResizeUpdate() {
  if (frameResizeRaf) return;
  frameResizeRaf = requestAnimationFrame(flushFrameResize);
}

function scrubInteractionUiState() {
  document.querySelectorAll('.viewport-frame-shell.is-dragging').forEach(el => {
    el.classList.remove('is-dragging', 'is-snap-active');
  });
  document.querySelectorAll('.viewport-frame-shell.is-resizing').forEach(el => {
    el.classList.remove('is-resizing');
  });
  const grid = document.getElementById('workspace-grid');
  grid?.classList.remove('is-frame-interacting', 'is-panning');
  resetFrameSnapState();
  clearSnapGuides();
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
  shell?.classList.remove('is-dragging', 'is-snap-active');
  document.getElementById('workspace-grid')?.classList.remove('is-frame-interacting');
  resetFrameSnapState();
  clearSnapGuides(tab);

  isDraggingFrame = false;
  frameDragVpId = null;
  if (frameDragRaf) {
    cancelAnimationFrame(frameDragRaf);
    frameDragRaf = null;
  }

  if (tab) {
    updateCanvasSurface(tab);
    if (isFlowTab(tab)) renderFlowEdges(tab);
  }
  renderPropertiesPanel();
  renderLayersPanel();
  commitCanvasTransform();
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
    applyUiTip(zoomValueLabel, 'クリックで100%');
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
  if (inspectorBreadcrumb) {
    const w = info.box?.content?.width ?? 0;
    const h = info.box?.content?.height ?? 0;
    const display = info.computed?.display || '';
    const meta = [w && h ? `${w}×${h}` : '', display].filter(Boolean).join(' · ');
    inspectorBreadcrumb.innerHTML = `
      <span class="inspector-tag inspector-tag-${getDomTagCategory(info.tag)}">&lt;${escapeHTML(info.tag)}&gt;</span>
      <span class="inspector-crumb-label">${escapeHTML(info.label)}</span>
      ${meta ? `<span class="inspector-crumb-meta">${escapeHTML(meta)}</span>` : ''}
    `;
    inspectorBreadcrumb.title = info.selector;
  }
  if (inspectorSummary) inspectorSummary.innerHTML = '';

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
  const frameId = vp?.id;

  const filteredLogs = consoleLogs.filter(log => {
    if (frameId && log.vpId) return log.vpId === frameId;
    if (!frameId) return false;
    const frameLabel = `${getActiveTab()?.title || ''} / ${vp.name}`;
    return log.source === frameLabel;
  }).slice(-80);

  if (!filteredLogs.length) {
    inspectorTabConsole.innerHTML = '<div class="inspector-muted">このフレームのログはありません</div>';
    return;
  }

  filteredLogs.forEach(log => {
    const entry = document.createElement('div');
    entry.className = `inspector-log level-${log.level}`;
    entry.innerHTML = `
      <span class="inspector-log-level">${getConsoleLevelName(log.level)}</span>
      <span class="inspector-log-msg">${escapeHTML(log.message)}</span>
    `;
    inspectorTabConsole.appendChild(entry);
  });

  inspectorTabConsole.scrollTop = inspectorTabConsole.scrollHeight;
}

function getLeftPanelSplitBounds() {
  let min = LEFT_PANEL_SPLIT_MIN;
  let max = LEFT_PANEL_SPLIT_MAX;

  if (!leftPanelBody) return { min, max };

  const bodyHeight = leftPanelBody.clientHeight;
  const handleH = leftPanelSplitHandle?.offsetHeight ?? 14;
  const track = bodyHeight - handleH;
  if (track <= 0) return { min, max };

  const layersMin = window.matchMedia('(max-height: 820px)').matches ? 68 : LEFT_PANEL_LAYERS_MIN_PX;
  const inspectorMin = window.matchMedia('(max-height: 820px)').matches ? 120 : LEFT_PANEL_INSPECTOR_MIN_PX;

  const minRatio = layersMin / track;
  const maxRatio = 1 - inspectorMin / track;

  if (minRatio <= maxRatio) {
    min = Math.max(min, minRatio);
    max = Math.min(max, maxRatio);
  } else {
    // 極端に低い画面では検証エリアを優先
    const preferred = inspectorMin / (layersMin + inspectorMin);
    min = max = Math.min(LEFT_PANEL_SPLIT_MAX, Math.max(LEFT_PANEL_SPLIT_MIN, 1 - preferred));
  }

  return { min, max };
}

function getMainWorkspaceWidth() {
  return document.querySelector('.main-workspace')?.clientWidth || window.innerWidth;
}

function isLeftPanelVisible() {
  return Boolean(leftPanel && !leftPanel.classList.contains('collapsed'));
}

function isSidebarVisible() {
  return Boolean(sidebarPanel && !sidebarPanel.classList.contains('collapsed'));
}

function getLeftPanelWidthBounds() {
  const total = getMainWorkspaceWidth();
  const sidebarW = isSidebarVisible() ? sidebarWidthPx : 0;
  const max = Math.min(
    LEFT_PANEL_WIDTH_MAX,
    Math.max(LEFT_PANEL_WIDTH_MIN, total - sidebarW - PANEL_RESIZE_MIN_CENTER)
  );
  return { min: LEFT_PANEL_WIDTH_MIN, max };
}

function getSidebarWidthBounds() {
  const total = getMainWorkspaceWidth();
  const leftW = isLeftPanelVisible() ? leftPanelWidthPx : 0;
  const max = Math.min(
    SIDEBAR_WIDTH_MAX,
    Math.max(SIDEBAR_WIDTH_MIN, total - leftW - PANEL_RESIZE_MIN_CENTER)
  );
  return { min: SIDEBAR_WIDTH_MIN, max };
}

function clampLeftPanelWidth(width) {
  const { min, max } = getLeftPanelWidthBounds();
  return Math.round(Math.min(max, Math.max(min, width)));
}

function clampSidebarWidth(width) {
  const { min, max } = getSidebarWidthBounds();
  return Math.round(Math.min(max, Math.max(min, width)));
}

function applyLeftPanelWidth(width, { persist = false } = {}) {
  leftPanelWidthPx = clampLeftPanelWidth(width);
  document.documentElement.style.setProperty('--left-panel-width', `${leftPanelWidthPx}px`);
  leftPanelWidthHandle?.setAttribute('aria-valuenow', String(leftPanelWidthPx));
  if (persist) persistPanelWidths();
}

function applySidebarWidth(width, { persist = false } = {}) {
  sidebarWidthPx = clampSidebarWidth(width);
  document.documentElement.style.setProperty('--sidebar-width', `${sidebarWidthPx}px`);
  sidebarWidthHandle?.setAttribute('aria-valuenow', String(sidebarWidthPx));
  if (persist) persistPanelWidths();
}

function loadPanelWidths() {
  try {
    const leftRaw = localStorage.getItem(LEFT_PANEL_WIDTH_KEY);
    const sidebarRaw = localStorage.getItem(SIDEBAR_WIDTH_KEY);
    if (leftRaw) {
      const left = parseInt(leftRaw, 10);
      if (Number.isFinite(left)) applyLeftPanelWidth(left);
    } else {
      applyLeftPanelWidth(LEFT_PANEL_WIDTH_DEFAULT);
    }
    if (sidebarRaw) {
      const sidebar = parseInt(sidebarRaw, 10);
      if (Number.isFinite(sidebar)) applySidebarWidth(sidebar);
    } else {
      applySidebarWidth(SIDEBAR_WIDTH_DEFAULT);
    }
  } catch {
    applyLeftPanelWidth(LEFT_PANEL_WIDTH_DEFAULT);
    applySidebarWidth(SIDEBAR_WIDTH_DEFAULT);
  }
}

function persistPanelWidths() {
  try {
    localStorage.setItem(LEFT_PANEL_WIDTH_KEY, String(leftPanelWidthPx));
    localStorage.setItem(SIDEBAR_WIDTH_KEY, String(sidebarWidthPx));
  } catch {
    // ignore
  }
  scheduleWorkspacePersist();
}

function reflowPanelWidths() {
  applyLeftPanelWidth(leftPanelWidthPx);
  applySidebarWidth(sidebarWidthPx);
}

function setupPanelWidthResize() {
  const handles = [
    {
      el: leftPanelWidthHandle,
      panel: leftPanel,
      side: 'left',
      getValue: () => leftPanelWidthPx,
      apply: (value) => applyLeftPanelWidth(value),
      deltaSign: 1,
    },
    {
      el: sidebarWidthHandle,
      panel: sidebarPanel,
      side: 'sidebar',
      getValue: () => sidebarWidthPx,
      apply: (value) => applySidebarWidth(value),
      deltaSign: -1,
    },
  ];

  const endDrag = (e) => {
    if (!panelWidthDragging) return;
    const active = panelWidthDragging;
    panelWidthDragging = null;
    active.el.classList.remove('is-dragging');
    active.panel?.classList.remove('is-resizing-width');
    document.body.classList.remove('panel-width-resize-active');
    persistPanelWidths();
    try {
      active.el.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  handles.forEach((handle) => {
    if (!handle.el) return;

    handle.el.setAttribute('aria-valuemin', String(handle.side === 'left' ? LEFT_PANEL_WIDTH_MIN : SIDEBAR_WIDTH_MIN));
    handle.el.setAttribute('aria-valuemax', String(handle.side === 'left' ? LEFT_PANEL_WIDTH_MAX : SIDEBAR_WIDTH_MAX));
    handle.el.setAttribute('aria-valuenow', String(handle.getValue()));

    handle.el.addEventListener('pointerdown', (e) => {
      if (e.button !== 0) return;
      if (handle.panel?.classList.contains('collapsed')) return;
      e.preventDefault();
      panelWidthDragging = handle;
      panelWidthDragStartX = e.clientX;
      panelWidthDragStartValue = handle.getValue();
      handle.el.classList.add('is-dragging');
      handle.panel?.classList.add('is-resizing-width');
      document.body.classList.add('panel-width-resize-active');
      handle.el.setPointerCapture(e.pointerId);
    });

    handle.el.addEventListener('pointermove', (e) => {
      if (panelWidthDragging !== handle) return;
      const delta = (e.clientX - panelWidthDragStartX) * handle.deltaSign;
      handle.apply(panelWidthDragStartValue + delta);
    });

    handle.el.addEventListener('pointerup', endDrag);
    handle.el.addEventListener('pointercancel', endDrag);

    handle.el.addEventListener('keydown', (e) => {
      if (handle.panel?.classList.contains('collapsed')) return;
      const step = e.shiftKey ? 24 : 8;
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
        const direction = e.key === 'ArrowRight' ? 1 : -1;
        const signed = direction * step * handle.deltaSign;
        handle.apply(handle.getValue() + signed, { persist: true });
      }
    });
  });

  window.addEventListener('resize', reflowPanelWidths);
}

function clampLeftPanelSplitRatio(ratio) {
  const { min, max } = getLeftPanelSplitBounds();
  return Math.min(max, Math.max(min, ratio));
}

function applyLeftPanelSplit(ratio) {
  leftPanelLayersRatio = clampLeftPanelSplitRatio(ratio);
  const layersGrow = Math.round(leftPanelLayersRatio * 100);
  const inspectorGrow = 100 - layersGrow;
  document.documentElement.style.setProperty('--left-panel-layers-grow', String(layersGrow));
  document.documentElement.style.setProperty('--left-panel-inspector-grow', String(inspectorGrow));
  leftPanelSplitHandle?.setAttribute('aria-valuenow', String(layersGrow));
}

function reflowLeftPanelSplit() {
  if (!leftPanelBody) return;
  applyLeftPanelSplit(leftPanelLayersRatio);
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

  window.addEventListener('resize', reflowLeftPanelSplit);
  requestAnimationFrame(reflowLeftPanelSplit);
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
      setInspectorTab(btn.dataset.inspectorTab);
    });
  });

  btnInspectOutline?.classList.toggle('active', cssOutlineEnabled);
  renderInspectorPanel();
}

function setInspectorTab(tabId) {
  if (!['styles', 'box', 'attrs', 'console'].includes(tabId)) return;
  activeInspectorTab = tabId;
  const segIndex = { styles: 0, box: 1, attrs: 2, console: 3 }[tabId] ?? 0;
  inspectorTabButtons.forEach(btn => {
    const active = btn.dataset.inspectorTab === tabId;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-selected', active ? 'true' : 'false');
  });
  if (inspectorTabSeg) {
    inspectorTabSeg.style.setProperty('--inspector-tab-seg-index', String(segIndex));
  }
  document.querySelectorAll('.inspector-tab-pane').forEach(pane => {
    pane.classList.toggle('active', pane.id === `inspector-tab-${tabId}`);
  });
  if (tabId === 'console') renderInspectorConsole();
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

  if (tab.viewports.length === 0) {
    layersList.innerHTML = `
      <li class="lpane-layers-empty">
        <p>フレームがありません</p>
        <span>キャンバス下部の + から追加できます</span>
      </li>`;
    return;
  }

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
      <span class="layers-item-name">${escapeHTML(vp.name)}</span>
      <span class="layers-item-size">${vp.width}×${vp.height}</span>
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
  loadFaviconCache();
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
  const tab = getActiveTab();
  if (tab && normalizeUserUrl(tab.url) === normalized) {
    rememberBoardMeta(normalized, { faviconUrl: tab.faviconUrl, title: tab.title });
  }
  renderUrlHistoryDatalist();
  if (isHomeActive()) renderHomeScreen();
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

function capturePreferences() {
  return {
    syncEnabled,
    cssOutlineEnabled,
    activeVisionFilter,
    canvasTool,
    zoomToFitOnOpen,
    tabHibernation: tabHibernationEnabled,
    breakpointHaptic: breakpointHapticEnabled,
    breakpointHapticVisual: breakpointHapticVisualEnabled,
    frameSnapHaptic: frameSnapHapticEnabled,
    frameSnapVisual: frameSnapVisualEnabled,
    leftPanelWidth: leftPanelWidthPx,
    sidebarWidth: sidebarWidthPx,
    workspaceMode,
    auditSubTab,
    consoleLogFilters: {
      info: logFilterInfo?.checked ?? true,
      warn: logFilterWarn?.checked ?? true,
      error: logFilterError?.checked ?? true,
    },
    consoleAutoScroll: consoleAutoScroll?.checked ?? true,
    leftPanelCollapsed: Boolean(leftPanel?.classList.contains('collapsed')),
    sidebarCollapsed: Boolean(sidebarPanel?.classList.contains('collapsed')),
  };
}

function applyPreferences(prefs) {
  if (!prefs || typeof prefs !== 'object') return;

  if (typeof prefs.syncEnabled === 'boolean') {
    syncEnabled = prefs.syncEnabled;
    btnToggleSync?.classList.toggle('active', syncEnabled);
    applyUiTip(btnToggleSync, syncEnabled
      ? '同期 ON — スクロール・クリック・入力を全フレームへ'
      : '同期 OFF — クリックで有効化');
    applySyncCaptureToAllWebviews();
  }

  if (typeof prefs.cssOutlineEnabled === 'boolean') {
    cssOutlineEnabled = prefs.cssOutlineEnabled;
    btnToggleOutline?.classList.toggle('active', cssOutlineEnabled);
    btnInspectOutline?.classList.toggle('active', cssOutlineEnabled);
    forEachWebview(wv => wv.send('toggle-css-outline', cssOutlineEnabled));
  }

  if (typeof prefs.activeVisionFilter === 'string') {
    activeVisionFilter = prefs.activeVisionFilter;
    document.querySelectorAll('input[name="vision-filter"]').forEach(radio => {
      radio.checked = radio.value === activeVisionFilter;
    });
    document.querySelectorAll('.vision-option').forEach(card => {
      card.classList.toggle('active', card.dataset.vision === activeVisionFilter);
    });
    forEachWebview(wv => wv.send('apply-vision-filter', activeVisionFilter));
    updateVisionMenuButton();
  }

  if (prefs.canvasTool === 'hand' || prefs.canvasTool === 'select') {
    setCanvasTool(prefs.canvasTool);
  }

  if (typeof prefs.zoomToFitOnOpen === 'boolean') {
    zoomToFitOnOpen = prefs.zoomToFitOnOpen;
  }

  if (typeof prefs.tabHibernation === 'boolean') {
    const wasEnabled = tabHibernationEnabled;
    tabHibernationEnabled = prefs.tabHibernation;
    if (!tabHibernationEnabled && wasEnabled) {
      browserTabs.forEach(resumeBrowserTab);
    } else if (tabHibernationEnabled && !wasEnabled && activeBrowserTabId !== null) {
      browserTabs.forEach(tab => {
        if (tab.id !== activeBrowserTabId) suspendBrowserTab(tab);
      });
    }
  }

  if (typeof prefs.breakpointHaptic === 'boolean') {
    breakpointHapticEnabled = prefs.breakpointHaptic;
  }

  if (typeof prefs.breakpointHapticVisual === 'boolean') {
    breakpointHapticVisualEnabled = prefs.breakpointHapticVisual;
  }

  if (typeof prefs.frameSnapHaptic === 'boolean') {
    frameSnapHapticEnabled = prefs.frameSnapHaptic;
  }

  if (typeof prefs.frameSnapVisual === 'boolean') {
    frameSnapVisualEnabled = prefs.frameSnapVisual;
  }

  if (typeof prefs.leftPanelWidth === 'number' && Number.isFinite(prefs.leftPanelWidth)) {
    applyLeftPanelWidth(prefs.leftPanelWidth);
  }

  if (typeof prefs.sidebarWidth === 'number' && Number.isFinite(prefs.sidebarWidth)) {
    applySidebarWidth(prefs.sidebarWidth);
  }

  if (prefs.workspaceMode === 'canvas' || prefs.workspaceMode === 'audit' || prefs.workspaceMode === 'console') {
    workspaceMode = prefs.workspaceMode;
  }

  if (
    prefs.auditSubTab === 'tab-seo-audit'
    || prefs.auditSubTab === 'tab-seo'
    || prefs.auditSubTab === 'tab-meta'
    || prefs.auditSubTab === 'tab-outline'
    || prefs.auditSubTab === 'tab-layout'
  ) {
    auditSubTab = prefs.auditSubTab;
  }

  if (prefs.consoleLogFilters && typeof prefs.consoleLogFilters === 'object') {
    if (typeof prefs.consoleLogFilters.info === 'boolean' && logFilterInfo) {
      logFilterInfo.checked = prefs.consoleLogFilters.info;
    }
    if (typeof prefs.consoleLogFilters.warn === 'boolean' && logFilterWarn) {
      logFilterWarn.checked = prefs.consoleLogFilters.warn;
    }
    if (typeof prefs.consoleLogFilters.error === 'boolean' && logFilterError) {
      logFilterError.checked = prefs.consoleLogFilters.error;
    }
  }

  if (typeof prefs.consoleAutoScroll === 'boolean' && consoleAutoScroll) {
    consoleAutoScroll.checked = prefs.consoleAutoScroll;
  }

  if (leftPanel && btnToggleLeftPanel) {
    const collapsed = Boolean(prefs.leftPanelCollapsed);
    leftPanel.classList.toggle('collapsed', collapsed);
    btnToggleLeftPanel.classList.toggle('active', !collapsed);
  }

  if (sidebarPanel && btnToggleSidebar) {
    const collapsed = Boolean(prefs.sidebarCollapsed);
    sidebarPanel.classList.toggle('collapsed', collapsed);
    btnToggleSidebar.classList.toggle('active', !collapsed);
  }
}

function saveLastLayout() {
  const tab = getActiveTab();
  if (!tab?.viewports?.length) return;

  const layout = tab.viewports.map(vp => ({
    name: vp.name,
    width: vp.width,
    height: vp.height,
    x: vp.x,
    y: vp.y,
    ua: vp.ua || '',
  }));

  try {
    localStorage.setItem(LAST_LAYOUT_KEY, JSON.stringify(layout));
  } catch (error) {
    console.warn('Failed to save last layout', error);
  }
}

function loadLastLayout() {
  try {
    const raw = localStorage.getItem(LAST_LAYOUT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : null;
  } catch {
    return null;
  }
}

function cloneViewportsFromTemplate(template) {
  return template.map(vp => ({
    id: ++viewportIdCounter,
    name: vp.name || 'Frame',
    width: vp.width,
    height: vp.height,
    x: vp.x,
    y: vp.y,
    ua: vp.ua || '',
  }));
}

function nudgeSelectedViewport(key, step) {
  const tab = getActiveTab();
  const vp = tab?.viewports.find(v => v.id === selectedViewportId);
  if (!vp || !tab) return;

  if (key === 'ArrowLeft') vp.x -= step;
  else if (key === 'ArrowRight') vp.x += step;
  else if (key === 'ArrowUp') vp.y -= step;
  else if (key === 'ArrowDown') vp.y += step;

  syncViewportFrame(vp, tab);
  updateCanvasSurface(tab);
  renderPropertiesPanel();
  renderLayersPanel();
  saveActiveTabState();
}

function alignSelectedViewportCenter() {
  const tab = getActiveTab();
  const vp = tab?.viewports.find(v => v.id === selectedViewportId);
  const grid = document.getElementById('workspace-grid');
  if (!vp || !tab || !grid) {
    showToast('中央へ移動するフレームを選択してください');
    return;
  }

  const z = workspaceZoom;
  const cx = (-panX + grid.clientWidth / 2) / z;
  const cy = (-panY + grid.clientHeight / 2) / z;
  vp.x = Math.round(cx - vp.width / 2);
  vp.y = Math.round(cy - (vp.height + getViewportChromeHeight(vp)) / 2);

  syncViewportFrame(vp, tab);
  updateCanvasSurface(tab);
  renderPropertiesPanel();
  renderLayersPanel();
  saveActiveTabState();
  showToast(`「${vp.name}」を中央へ移動しました`);
}

function arrangeViewportsInRow() {
  const tab = getActiveTab();
  if (!tab?.viewports.length) return;

  let x = CANVAS_PADDING;
  const y = CANVAS_PADDING;
  tab.viewports.forEach(vp => {
    vp.x = x;
    vp.y = y;
    x += vp.width + FRAME_GAP;
    syncViewportFrame(vp, tab);
  });

  updateCanvasSurface(tab);
  renderLayersPanel();
  saveActiveTabState();
  if (zoomToFitOnOpen) zoomToFitAll();
  showToast('フレームを横一列に整列しました');
}

function setFrameLoadError(vp, tab, errorCode, description) {
  const uid = `${tab.id}-${vp.id}`;
  const shell = document.getElementById(`vp-shell-${uid}`);
  const banner = shell?.querySelector('.vp-error-banner');
  const text = shell?.querySelector('.vp-error-text');
  if (!shell || !banner || !text) return;

  const code = errorCode ? ` (${errorCode})` : '';
  text.textContent = `${description || 'ページを読み込めませんでした'}${code}`;
  banner.hidden = false;
  shell.classList.add('has-error');
}

function clearFrameLoadError(vp, tab) {
  const uid = `${tab.id}-${vp.id}`;
  const shell = document.getElementById(`vp-shell-${uid}`);
  const banner = shell?.querySelector('.vp-error-banner');
  if (!shell || !banner) return;

  banner.hidden = true;
  shell.classList.remove('has-error');
}

function reloadViewport(vp, tab = getActiveTab()) {
  if (!vp || !tab) return;
  clearFrameLoadError(vp, tab);
  const webview = document.getElementById(`wv-${tab.id}-${vp.id}`);
  if (webview) webview.reload();
}

function serializeWorkspace({ includeFlowScreenshots = true } = {}) {
  persistActiveTabFields();

  return {
    version: 2,
    activeBrowserTabId,
    browserTabIdCounter,
    viewportIdCounter,
    urlHistory,
    preferences: capturePreferences(),
    browserTabs: browserTabs.map(tab => ({
      id: tab.id,
      title: tab.title,
      url: tab.url,
      faviconUrl: tab.faviconUrl || null,
      panX: tab.panX,
      panY: tab.panY,
      workspaceZoom: tab.workspaceZoom,
      selectedViewportId: tab.selectedViewportId,
      boardMode: tab.boardMode || 'canvas',
      flow: tab.flow || null,
      viewports: tab.viewports.map(vp => ({
        id: vp.id,
        name: vp.name,
        width: vp.width,
        height: vp.height,
        x: vp.x,
        y: vp.y,
        ua: vp.ua || '',
        flowFrozen: Boolean(vp.flowFrozen),
        flowNodeId: vp.flowNodeId || null,
        flowUrl: vp.flowUrl || null,
        flowTitle: vp.flowTitle || null,
        flowScreenshot: includeFlowScreenshots ? (vp.flowScreenshot || null) : null,
      })),
    })),
  };
}

function scheduleWorkspacePersist() {
  if (workspacePersistTimer) clearTimeout(workspacePersistTimer);
  workspacePersistTimer = setTimeout(() => {
    workspacePersistTimer = null;
    persistWorkspaceToStorage({ includeFlowScreenshots: false });
  }, 2000);
}

function persistWorkspaceToStorage({ includeFlowScreenshots = true } = {}) {
  const json = JSON.stringify(serializeWorkspace({ includeFlowScreenshots }));
  try {
    localStorage.setItem(WORKSPACE_STORAGE_KEY, json);
  } catch (error) {
    console.warn('Failed to persist workspace to localStorage', error);
    showToast('ワークスペースの自動保存に失敗しました（ストレージ容量を確認してください）', 'error');
  }

  if (window.electronAPI?.writePersistedWorkspace) {
    return window.electronAPI.writePersistedWorkspace(json).catch((error) => {
      console.warn('Failed to persist workspace to disk', error);
      showToast('ワークスペースのディスク保存に失敗しました', 'error');
    });
  }
  return Promise.resolve();
}

async function persistWorkspaceNow() {
  if (workspacePersistTimer) {
    clearTimeout(workspacePersistTimer);
    workspacePersistTimer = null;
  }
  await persistWorkspaceToStorage({ includeFlowScreenshots: true });
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
    if (!rebuildWorkspaceFromData(data)) {
      showToast('保存データの形式が不正です。ホームから新しく始めます', 'warning');
      return false;
    }
    await persistWorkspaceNow();
    return true;
  } catch (error) {
    console.warn('Failed to parse saved workspace', error);
    showToast('保存データを読み込めませんでした。ホームから新しく始めます', 'warning');
    return false;
  }
}

function rebuildWorkspaceFromData(data) {
  if (!data || !Array.isArray(data.browserTabs)) return false;

  browserTabPanels.innerHTML = '';
  browserTabs = [];
  browserTabIdCounter = data.browserTabIdCounter || 0;
  viewportIdCounter = data.viewportIdCounter || 0;

  if (Array.isArray(data.urlHistory)) {
    urlHistory = data.urlHistory;
    localStorage.setItem(URL_HISTORY_KEY, JSON.stringify(urlHistory));
    renderUrlHistoryDatalist();
  }

  if (data.browserTabs.length === 0) {
    applyPreferences(data.preferences);
    enterHomeScreen({ persist: false });
    return true;
  }

  if (data.preferences && typeof data.preferences.tabHibernation === 'boolean') {
    tabHibernationEnabled = data.preferences.tabHibernation;
  }

  const activeId = data.activeBrowserTabId;
  const targetId = data.browserTabs.some(t => t.id === activeId) ? activeId : data.browserTabs[0].id;

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
        flowFrozen: Boolean(vp.flowFrozen),
        flowNodeId: vp.flowNodeId || null,
        flowUrl: vp.flowUrl || null,
        flowTitle: vp.flowTitle || null,
        flowScreenshot: vp.flowScreenshot || null,
      })),
      panX: tabState.panX ?? 0,
      panY: tabState.panY ?? 0,
      workspaceZoom: tabState.workspaceZoom ?? 1,
      selectedViewportId: tabState.selectedViewportId ?? null,
      hibernated: false,
      boardMode: tabState.boardMode === 'flow' ? 'flow' : 'canvas',
      flow: tabState.flow || (tabState.boardMode === 'flow' ? { nodes: [], edges: [] } : null),
    };

    tab.viewports.forEach(ensureViewportUa);
    ensureViewportPositions(tab.viewports);
    browserTabs.push(tab);
    const hibernated = tabHibernationEnabled && tab.id !== targetId;
    renderBrowserTabPanel(tab, { hibernated });
  });

  if (Array.isArray(data.urlHistory)) {
    urlHistory = data.urlHistory;
    localStorage.setItem(URL_HISTORY_KEY, JSON.stringify(urlHistory));
    renderUrlHistoryDatalist();
  }

  setActiveBrowserTab(targetId);
  renderLayersPanel();
  applyPreferences(data.preferences);
  if (zoomToFitOnOpen && !isHomeActive()) {
    requestAnimationFrame(() => zoomToFitAll());
  }
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
  } else if (result.error && result.error !== 'cancelled') {
    showToast(`保存に失敗しました: ${result.error}`, 'error');
  }
}

async function loadWorkspaceFromFile({ skipConfirm = false } = {}) {
  if (!skipConfirm) {
    const ok = window.confirm('現在のボードとタブをすべて置き換えます。よろしいですか？');
    if (!ok) return;
  }

  const result = await window.electronAPI.loadWorkspaceFile();
  if (!result.success || !result.data) return;

  if (rebuildWorkspaceFromData(result.data)) {
    persistWorkspaceNow();
    showToast('ワークスペースを読み込みました', 'success');
  } else {
    showToast('ワークスペースの形式が不正です', 'error');
  }
}

const CANVAS_PADDING = 240;
const FRAME_GAP = 96;
const FLOW_FRAME_GAP = 80;
const MIN_CANVAS_W = 4800;
const MIN_CANVAS_H = 3600;

const ZOOM_MIN = 0.02;
const ZOOM_MAX = 8;
const FIGMA_ZOOM_PRESETS = [
  0.02, 0.03, 0.05, 0.08, 0.10, 0.13, 0.20, 0.25, 0.33, 0.50, 0.67, 0.75,
  0.80, 0.90, 1.00, 1.10, 1.25, 1.50, 1.75, 2.00, 2.50, 3.00, 4.00, 5.00, 6.00, 8.00,
];
const FIGMA_WHEEL_GAIN = 1.30;
const FIGMA_WHEEL_EXPONENT = 0.012;
const FIGMA_WHEEL_DELTA_CAP = 150;
const ZOOM_INERTIA_COAST_GAIN = 0.72;
const ZOOM_INERTIA_APPLY = 0.34;
const ZOOM_INERTIA_FRICTION = 0.90;
const ZOOM_INERTIA_STOP = 0.0002;
const PAN_OVERSCROLL = 1200;

function getWheelZoomFactor(deltaY) {
  if (!deltaY) return 1;
  const sign = Math.sign(-deltaY);
  const magnitude = Math.min(Math.abs(deltaY), FIGMA_WHEEL_DELTA_CAP);
  const scaledDelta = sign * Math.sqrt(magnitude) * FIGMA_WHEEL_GAIN;
  return Math.exp(scaledDelta * FIGMA_WHEEL_EXPONENT);
}

function cancelZoomInertia() {
  zoomInertiaLogVel = 0;
  zoomInertiaAnchor = null;
  if (zoomInertiaRaf) {
    cancelAnimationFrame(zoomInertiaRaf);
    zoomInertiaRaf = null;
  }
}

function tickZoomInertia(now) {
  if (!zoomInertiaAnchor) {
    cancelZoomInertia();
    return;
  }

  const dt = Math.min(48, now - zoomInertiaLastTs) / 16.67;
  zoomInertiaLastTs = now;

  if (Math.abs(zoomInertiaLogVel) < ZOOM_INERTIA_STOP) {
    cancelZoomInertia();
    commitCanvasTransform();
    return;
  }

  const step = zoomInertiaLogVel * ZOOM_INERTIA_APPLY * dt;
  zoomAtScreenPoint(Math.exp(step), zoomInertiaAnchor.x, zoomInertiaAnchor.y);
  zoomInertiaLogVel *= Math.pow(ZOOM_INERTIA_FRICTION, dt);

  zoomInertiaRaf = requestAnimationFrame(tickZoomInertia);
}

function addZoomWheelInertia(dy, clientX, clientY) {
  const factor = getWheelZoomFactor(dy);
  if (Math.abs(factor - 1) < 0.0001) return;

  zoomAtScreenPoint(factor, clientX, clientY);
  zoomInertiaLogVel += Math.log(factor) * ZOOM_INERTIA_COAST_GAIN;
  zoomInertiaAnchor = { x: clientX, y: clientY };

  if (!zoomInertiaRaf) {
    zoomInertiaLastTs = performance.now();
    zoomInertiaRaf = requestAnimationFrame(tickZoomInertia);
  }
}

function stepZoomPreset(direction) {
  cancelZoomInertia();
  const current = workspaceZoom;
  if (direction > 0) {
    const next = FIGMA_ZOOM_PRESETS.find((preset) => preset > current + 0.0005);
    if (next) zoomToPercent(next * 100);
    return;
  }
  const prev = [...FIGMA_ZOOM_PRESETS].reverse().find((preset) => preset < current - 0.0005);
  if (prev) zoomToPercent(prev * 100);
}

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
    return '新しいタブ';
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
  rememberBoardMeta(tab.url, { faviconUrl: next, title: tab.title });
  renderBrowserTabs();
  syncAllViewportFavicons(tab);
  if (tab.id === activeBrowserTabId) {
    updateUrlBarFavicon(tab);
  }
  if (isHomeActive()) renderHomeScreen();
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

function createBrowserTab(url = 'https://example.com', { viewports: customViewports, boardMode = 'canvas' } = {}) {
  const isFlow = boardMode === 'flow';
  const viewportsList = customViewports?.length
    ? cloneViewportsFromTemplate(customViewports)
    : isFlow
      ? createFlowViewports()
      : createDefaultViewports();

  return {
    id: ++browserTabIdCounter,
    title: tabTitleFromUrl(url),
    url,
    faviconUrl: null,
    viewports: viewportsList,
    panX: 0,
    panY: 0,
    workspaceZoom: 1.0,
    selectedViewportId: null,
    hibernated: false,
    boardMode: isFlow ? 'flow' : 'canvas',
    flow: isFlow ? { nodes: [], edges: [] } : null,
  };
}

function createFlowViewports() {
  const id = ++viewportIdCounter;
  return [{
    id,
    name: 'Start',
    width: 1280,
    height: 800,
    x: CANVAS_PADDING,
    y: CANVAS_PADDING,
    ua: '',
    flowNodeId: `flow-node-${id}`,
  }];
}

function isFlowTab(tab) {
  return Boolean(tab && tab.boardMode === 'flow');
}

function getFlowActiveViewport(tab = getActiveTab()) {
  if (!isFlowTab(tab)) return null;
  return tab.viewports.find(vp => !vp.flowFrozen) || null;
}

function getActiveTab() {
  return browserTabs.find(t => t.id === activeBrowserTabId) || null;
}

function getActiveCanvas() {
  if (!activeBrowserTabId) return null;
  return document.getElementById(`workspace-canvas-${activeBrowserTabId}`);
}

function persistActiveTabFields() {
  const tab = getActiveTab();
  if (!tab) return;

  ensureActiveTabViewportsLinked();

  tab.url = currentURL;
  tab.panX = panX;
  tab.panY = panY;
  tab.workspaceZoom = workspaceZoom;
  tab.selectedViewportId = selectedViewportId;
}

function saveActiveTabState({ schedulePersist = true } = {}) {
  persistActiveTabFields();
  saveLastLayout();
  if (schedulePersist) scheduleWorkspacePersist();
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
    height = Math.max(height, vp.y + vp.height + getViewportChromeHeight(vp) + CANVAS_PADDING);
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

function guestPointFromClient(webview, clientX, clientY) {
  const rect = webview.getBoundingClientRect();
  if (!rect.width || !rect.height) return { x: 0, y: 0 };

  const x = ((clientX - rect.left) / rect.width) * webview.clientWidth;
  const y = ((clientY - rect.top) / rect.height) * webview.clientHeight;
  return { x, y };
}

function scrollWebviewBy(webview, dx, dy, clientX, clientY) {
  if (!webview) return false;

  const { x, y } = guestPointFromClient(webview, clientX, clientY);
  try {
    webview.send('wheel-scroll', { deltaX: dx, deltaY: dy, x, y });
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
    addZoomWheelInertia(dy, e.clientX, e.clientY);
    return;
  }

  cancelZoomInertia();
  e.preventDefault();

  const selectedVp = getSelectedViewport();
  const wantsCanvasPan = isHandToolActive() || e.shiftKey || !selectedVp;
  let webview = wantsCanvasPan ? null : getWebviewAtPoint(e.clientX, e.clientY);

  if (webview && selectedVp) {
    const expectedId = `wv-${getActiveTab()?.id}-${selectedVp.id}`;
    if (webview.id !== expectedId) webview = null;
  }

  if (webview && scrollWebviewBy(webview, dx, dy, e.clientX, e.clientY)) {
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
    y: Math.round(cy - height / 2 - BASE_FRAME_HEADER_H) + stack,
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
  if (isLayoutAuditPanelVisible()) renderLayoutAuditPanel();
  if (workspaceMode === 'audit') renderAuditFrameSelect();
  if (workspaceMode === 'console') renderConsoleFrameSelect();
  if (inspectModeActive) setInspectMode(true);
  if (vpId !== null) activateDesignTab();
  closeBreakpointMenu();
  updateBreakpointMenuActiveStates();
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
  // Right panel is properties-only; no tab switching.
}

const VISION_FILTER_LABELS = {
  normal: '標準',
  protanopia: '1型2色覚',
  deuteranopia: '2型2色覚',
  tritanopia: '3型2色覚',
  achromatopsia: '全色盲',
};

function updateVisionMenuButton() {
  if (!btnVisionMenu) return;
  const label = VISION_FILTER_LABELS[activeVisionFilter] || '標準';
  const isActive = activeVisionFilter !== 'normal';
  btnVisionMenu.classList.toggle('active', isActive);
  applyUiTip(btnVisionMenu, isActive ? `色覚: ${label}` : '色覚シミュレータ');
}

function toggleVisionMenu(forceOpen) {
  if (!visionMenu || !btnVisionMenu) return;
  const willOpen = forceOpen ?? visionMenu.hidden;
  visionMenu.hidden = !willOpen;
  btnVisionMenu.classList.toggle('active', willOpen || activeVisionFilter !== 'normal');
  btnVisionMenu.setAttribute('aria-expanded', String(willOpen));
}

function closeVisionMenu() {
  toggleVisionMenu(false);
  updateVisionMenuButton();
}

function setupVisionMenu() {
  btnVisionMenu?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleVisionMenu(visionMenu.hidden);
  });

  document.addEventListener('click', (e) => {
    if (e.target.closest('.vision-menu-wrap')) return;
    closeVisionMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeVisionMenu();
  });

  updateVisionMenuButton();
}

function renderPropertiesPanel() {
  if (!propsForm) return;

  const vp = getSelectedViewport();
  if (!vp) {
    propsForm.hidden = true;
    if (propsEmpty) propsEmpty.hidden = false;
    return;
  }

  if (propsEmpty) propsEmpty.hidden = true;
  propsForm.hidden = false;
  propName.value = vp.name;
  propX.value = vp.x;
  propY.value = vp.y;
  propW.value = vp.width;
  propH.value = vp.height;

  if (propFrameSize) {
    propFrameSize.textContent = `${vp.width} × ${vp.height}`;
  }
  if (propFrameUaLabel) {
    propFrameUaLabel.textContent = getUaLabel(vp);
    propFrameUaLabel.classList.toggle('is-desktop', getUaLabel(vp) === 'Desktop');
  }

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
      const prevWidth = vp.width;
      vp.width = Math.min(3840, Math.max(200, num));
      if (vp.width !== prevWidth) {
        notifyBreakpointCrossings(vp.id, prevWidth, vp.width);
      }
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

function applyViewportDeviceEmulation(vp) {
  if (!vp?.webContentsId) return;
  const sizeKey = `${vp.width}:${vp.height}`;
  if (vp._deviceEmulationKey === sizeKey) return;
  vp._deviceEmulationKey = sizeKey;
  window.electronAPI.setDeviceEmulation(vp.webContentsId, vp.width, vp.height);
}

function updatePropertiesPanelSize(vp) {
  if (!propsForm || !vp || vp.id !== selectedViewportId) return;
  if (propW) propW.value = vp.width;
  if (propH) propH.value = vp.height;
  if (propFrameSize) {
    propFrameSize.textContent = `${vp.width} × ${vp.height}`;
  }
  updateBreakpointTrigger();
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
    applyViewportDeviceEmulation(vp);
  }

  scheduleLayoutAuditRefresh(vp, tab);
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
  loadPanelWidths();

  if (!(await hydrateWorkspaceOnLaunch())) {
    enterHomeScreen({ persist: true });
  }

  updateWorkspaceZoom();
  setupEventListeners();
  setupGlobalShortcuts();
  setupViewportMenu();
  setupVisionMenu();
  setupBreakpointMenu();
  setupPropertiesPanel();
  setupLeftPanelSplit();
  setupPanelWidthResize();
  setupWorkspaceModes();
  setupInspectorPanel();
  initUiTooltipLayer();
  setupUiTooltips();
  renderPropertiesPanel();
  renderLayersPanel();
  showWelcomeHint();
  updateNavigationButtons();

  const rawPrefs = localStorage.getItem(WORKSPACE_STORAGE_KEY);
  if (rawPrefs && isHomeActive()) {
    try {
      applyPreferences(JSON.parse(rawPrefs).preferences);
    } catch {
      // ignore
    }
  } else {
    applyUiTip(btnToggleSync, syncEnabled
      ? '同期 ON — スクロール・クリック・入力を全フレームへ'
      : '同期 OFF — クリックで有効化');
  }
  applySyncCaptureToAllWebviews();

  window.addEventListener('beforeunload', () => {
    persistWorkspaceToStorage({ includeFlowScreenshots: true });
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

  btnHome?.addEventListener('click', () => {
    goHome();
  });

  btnNewTab?.addEventListener('click', () => {
    openNewBrowserTab(urlHistory[0] || 'https://example.com');
    showToast('新しいタブを開きました');
  });

  homeUrlForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = normalizeUserUrl(homeUrlInput?.value);
    if (!url) return;
    openNewBrowserTab(url);
  });

  homeBtnBlank?.addEventListener('click', () => {
    openNewBrowserTab(urlHistory[0] || 'https://example.com');
  });

  homeBtnLastLayout?.addEventListener('click', () => {
    const layout = loadLastLayout();
    if (!layout) {
      showToast('保存された構成がありません');
      return;
    }
    const url = normalizeUserUrl(homeUrlInput?.value) || urlHistory[0] || 'https://example.com';
    openNewBrowserTab(url, { viewports: layout });
  });

  homeBtnUrl?.addEventListener('click', () => {
    homeUrlInput?.focus();
    homeUrlInput?.select();
  });

  homeBtnLoad?.addEventListener('click', () => {
    loadWorkspaceFromFile();
  });

  // Sync Toggle
  btnToggleSync.addEventListener('click', () => {
    if (isFlowTab(getActiveTab())) return;
    syncEnabled = !syncEnabled;
    btnToggleSync.classList.toggle('active', syncEnabled);
    applyUiTip(btnToggleSync, syncEnabled
      ? '同期 ON — スクロール・クリック・入力を全フレームへ'
      : '同期 OFF — クリックで有効化');
    applySyncCaptureToAllWebviews();
    showToast(syncEnabled ? 'イベント同期を有効化しました' : 'イベント同期を無効化しました');
    scheduleWorkspacePersist();
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
    scheduleWorkspacePersist();
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

  btnSettings?.addEventListener('click', () => openSettingsModal());
  modalSettingsClose?.addEventListener('click', () => closeSettingsModal());
  modalSettings?.addEventListener('click', (e) => {
    if (e.target === modalSettings) closeSettingsModal();
  });
  [
    settingZoomToFit,
    settingTabHibernation,
    settingFrameSnapVisual,
    settingFrameSnapHaptic,
    settingBpHaptic,
    settingBpHapticVisual,
  ].forEach(el => {
    el?.addEventListener('change', () => applySettingFromUi());
  });

  // Zoom controls
  btnZoomIn.addEventListener('click', () => {
    stepZoomPreset(1);
  });

  btnZoomOut.addEventListener('click', () => {
    stepZoomPreset(-1);
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
    reflowPanelWidths();
    scheduleWorkspacePersist();
  });

  // Toggle Sidebar
  btnToggleSidebar.addEventListener('click', () => {
    const isCollapsed = sidebarPanel.classList.toggle('collapsed');
    btnToggleSidebar.classList.toggle('active', !isCollapsed);
    reflowPanelWidths();
    scheduleWorkspacePersist();
  });

  btnAlignCenter?.addEventListener('click', () => alignSelectedViewportCenter());
  btnArrangeRow?.addEventListener('click', () => arrangeViewportsInRow());

  btnLayoutAuditRefresh?.addEventListener('click', () => {
    requestLayoutAuditAll();
    showToast('レイアウト監査を更新しています…');
  });

  btnLayoutOverflowOutline?.addEventListener('click', () => {
    layoutOverflowOutlineEnabled = !layoutOverflowOutlineEnabled;
    btnLayoutOverflowOutline.classList.toggle('active', layoutOverflowOutlineEnabled);
    forEachWebview(wv => {
      wv.send('toggle-layout-overflow-outline', layoutOverflowOutlineEnabled);
    });
    showToast(layoutOverflowOutlineEnabled ? 'はみ出しアウトラインを表示' : 'はみ出しアウトラインを非表示');
  });

  // Vision Filter Selection
  const visionRadioButtons = document.querySelectorAll('input[name="vision-filter"]');
  visionRadioButtons.forEach(radio => {
    radio.addEventListener('change', (e) => {
      activeVisionFilter = e.target.value;

      document.querySelectorAll('.vision-option').forEach(card => card.classList.remove('active'));
      e.target.closest('.vision-option')?.classList.add('active');

      forEachWebview(wv => {
        wv.send('apply-vision-filter', activeVisionFilter);
      });
      const label = e.target.closest('.vision-option')?.querySelector('.vision-title')?.textContent || '';
      if (label) showToast(`視覚特性フィルター: ${label}`);
      scheduleWorkspacePersist();
      closeVisionMenu();
      updateVisionMenuButton();
    });
  });

  // Clear Console Button
  btnClearConsole?.addEventListener('click', () => {
    consoleLogs = [];
    consoleUserScrolledUp = false;
    renderConsoleLogs();
    showToast('ログをクリアしました');
  });

  btnConsoleCopy?.addEventListener('click', () => {
    copyConsoleLogsToClipboard();
  });

  btnConsoleErrorsOnly?.addEventListener('click', () => {
    if (logFilterInfo) logFilterInfo.checked = false;
    if (logFilterWarn) logFilterWarn.checked = false;
    if (logFilterError) logFilterError.checked = true;
    renderConsoleLogs();
    scheduleWorkspacePersist();
  });

  consoleFrameSelect?.addEventListener('change', () => {
    const vpId = Number(consoleFrameSelect.value);
    if (vpId) selectViewport(vpId);
    renderConsoleLogs();
  });

  consoleSearch?.addEventListener('input', () => {
    consoleSearchQuery = consoleSearch.value.trim().toLowerCase();
    renderConsoleLogs();
  });

  consoleAutoScroll?.addEventListener('change', () => {
    if (consoleAutoScroll.checked) {
      consoleUserScrolledUp = false;
      renderConsoleLogs();
    }
    scheduleWorkspacePersist();
  });

  consoleLogsContainer?.addEventListener('scroll', () => {
    if (!consoleLogsContainer) return;
    const nearBottom = consoleLogsContainer.scrollHeight - consoleLogsContainer.scrollTop - consoleLogsContainer.clientHeight < 48;
    consoleUserScrolledUp = !nearBottom;
  });

  // Console Filters
  [logFilterInfo, logFilterWarn, logFilterError].forEach(filter => {
    filter?.addEventListener('change', () => {
      renderConsoleLogs();
      scheduleWorkspacePersist();
    });
  });

  btnSeoAuditRefresh?.addEventListener('click', () => {
    requestSeoAuditRefresh();
    showToast('SEO 監査を更新しています…');
  });
}

// -------------------------------------------------------------
// Workspace UI Helper Functions
// -------------------------------------------------------------

function applyFrameHeaderChrome(vp, shell, card, header) {
  const { density, scale, headerH } = getFrameHeaderPresentation(vp);

  shell.style.height = `${vp.height + headerH}px`;
  shell.style.setProperty('--frame-header-h', `${headerH}px`);
  shell.style.setProperty('--frame-header-scale', String(scale));
  shell.dataset.headerDensity = density;

  card.style.paddingTop = `${headerH}px`;
  header.style.height = `${headerH}px`;
  header.style.minHeight = `${headerH}px`;
}

function syncViewportFrame(vp, tab) {
  const uid = `${tab.id}-${vp.id}`;
  const shell = document.getElementById(`vp-shell-${uid}`);
  const card = document.getElementById(`vp-card-${uid}`);
  const wrapper = document.getElementById(`wv-wrapper-${uid}`);
  const webview = document.getElementById(`wv-${uid}`);
  if (!shell || !card || !wrapper || !webview) return;

  const header = card.querySelector('.viewport-header.frame-bar');
  if (header) applyFrameHeaderChrome(vp, shell, card, header);

  shell.style.left = `${vp.x}px`;
  shell.style.top = `${vp.y}px`;
  shell.style.width = `${vp.width}px`;
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

  const primaryBadge = card.querySelector('.vp-primary-badge');
  if (primaryBadge) {
    const isPrimary = tab.viewports[0]?.id === vp.id;
    primaryBadge.hidden = !isPrimary;
  }
}

function syncAllViewportFrames() {
  const tab = getActiveTab();
  if (!tab) return;
  tab.viewports.forEach(vp => syncViewportFrame(vp, tab));
}

function suspendBrowserTab(tab) {
  if (!tab || tab.hibernated) return;

  const canvas = document.getElementById(`workspace-canvas-${tab.id}`);
  if (canvas) canvas.innerHTML = '';

  tab.viewports.forEach(vp => {
    vp.webContentsId = undefined;
  });
  tab.hibernated = true;
}

function suspendAllBrowserTabs() {
  browserTabs.forEach(suspendBrowserTab);
}

function maybeShowHibernationHint() {
  if (!tabHibernationEnabled || localStorage.getItem(HIBERNATION_HINT_KEY)) return;
  localStorage.setItem(HIBERNATION_HINT_KEY, '1');
  showToast('メモリ節約のため、非表示タブは休止しています');
}

function resumeBrowserTab(tab) {
  if (!tab || !tab.hibernated) return;

  const canvas = document.getElementById(`workspace-canvas-${tab.id}`);
  if (!canvas) return;

  ensureViewportPositions(tab.viewports);
  renderTabViewports(tab, canvas);
  tab.hibernated = false;
  applySyncCaptureToTab(tab);
  maybeShowHibernationHint();
}

function applySyncCaptureToWebview(webview, { flowMode = false } = {}) {
  if (!webview) return;
  try {
    webview.send('set-sync-capture', !flowMode && syncEnabled);
    webview.send('set-flow-mode', flowMode);
  } catch {
    // webview may not be ready yet
  }
}

function applySyncCaptureToTab(tab) {
  if (!tab) return;
  const flowOn = isFlowTab(tab) && tab.id === activeBrowserTabId;
  tab.viewports.forEach(vp => {
    if (vp.flowFrozen) return;
    applySyncCaptureToWebview(
      document.getElementById(`wv-${tab.id}-${vp.id}`),
      { flowMode: flowOn },
    );
  });
}

function applySyncCaptureToAllWebviews() {
  browserTabs.forEach(tab => applySyncCaptureToTab(tab));
}

function isSeoMetadataPanelVisible() {
  if (workspaceMode === 'audit') return true;
  return false;
}

function requestPrimaryMetadataIfNeeded(tab = getActiveTab()) {
  if (!isSeoMetadataPanelVisible() || !tab?.viewports?.length) return;
  const vp = workspaceMode === 'audit' ? getAuditTargetViewport(tab) : tab.viewports[0];
  if (!vp) return;
  const webview = document.getElementById(`wv-${tab.id}-${vp.id}`);
  if (webview) webview.send('request-metadata');
}

function layoutAuditKey(tabId, vpId) {
  return `${tabId}-${vpId}`;
}

function isLayoutAuditPanelVisible() {
  return workspaceMode === 'audit' && auditSubTab === 'tab-layout';
}

function requestLayoutAuditForViewport(vp, tab = getActiveTab()) {
  if (!vp || !tab) return;
  const webview = document.getElementById(`wv-${tab.id}-${vp.id}`);
  if (webview) webview.send('request-layout-audit');
}

function requestLayoutAuditAll(tab = getActiveTab()) {
  if (!tab?.viewports?.length) return;
  tab.viewports.forEach(vp => requestLayoutAuditForViewport(vp, tab));
}

function scheduleLayoutAuditRefresh(vp, tab = getActiveTab()) {
  if (!isLayoutAuditPanelVisible() || !vp || !tab) return;
  if (layoutAuditRefreshTimer) clearTimeout(layoutAuditRefreshTimer);
  layoutAuditRefreshTimer = setTimeout(() => {
    layoutAuditRefreshTimer = null;
    requestLayoutAuditForViewport(vp, tab);
  }, 300);
}

function handleGuestLayoutAudit(vp, tab, data) {
  if (!vp || !tab || !data) return;
  layoutAuditByFrame.set(layoutAuditKey(tab.id, vp.id), data);
  if (tab.id === activeBrowserTabId) {
    renderLayoutAuditPanel();
  }
}

function renderLayoutAuditPanel() {
  const tab = getActiveTab();
  if (!layoutAuditSummary || !layoutAuditFrames || !layoutAuditOffenders) return;

  if (!tab?.viewports?.length) {
    layoutAuditSummary.innerHTML = '<div class="sidebar-empty sidebar-empty-compact"><p class="sidebar-empty-desc">フレームがありません</p></div>';
    layoutAuditFrames.innerHTML = '';
    layoutAuditOffenders.innerHTML = '';
    auditBadgeLayoutCount = 0;
    if (layoutAuditBadge) layoutAuditBadge.hidden = true;
    updateAuditModeBadge();
    return;
  }

  let overflowCount = 0;
  layoutAuditFrames.innerHTML = '';

  tab.viewports.forEach(vp => {
    const audit = layoutAuditByFrame.get(layoutAuditKey(tab.id, vp.id));
    const hasOverflow = Boolean(audit?.hasHorizontalOverflow);
    if (hasOverflow) overflowCount += 1;

    const row = document.createElement('button');
    row.type = 'button';
    row.className = `layout-audit-frame${hasOverflow ? ' has-overflow' : ''}${vp.id === selectedViewportId ? ' is-selected' : ''}`;
    const status = audit
      ? (hasOverflow ? `+${audit.overflowX}px` : 'OK')
      : '—';
    row.innerHTML = `
      <span class="layout-audit-frame-name">${escapeHTML(vp.name)}</span>
      <span class="layout-audit-frame-size">${vp.width}px</span>
      <span class="layout-audit-frame-status">${status}</span>
    `;
    row.addEventListener('click', () => {
      selectViewport(vp.id);
      renderLayoutAuditPanel();
    });
    layoutAuditFrames.appendChild(row);
  });

  layoutAuditSummary.innerHTML = '';
  if (overflowCount === 0) {
    const ok = document.createElement('div');
    ok.className = 'layout-audit-stat is-ok';
    ok.textContent = '全フレームで横スクロールなし';
    layoutAuditSummary.appendChild(ok);
  } else {
    const err = document.createElement('div');
    err.className = 'layout-audit-stat is-error';
    err.textContent = `${overflowCount} フレームで横スクロールを検出`;
    layoutAuditSummary.appendChild(err);
  }

  auditBadgeLayoutCount = overflowCount;
  if (layoutAuditBadge) {
    if (overflowCount > 0) {
      layoutAuditBadge.textContent = String(overflowCount);
      layoutAuditBadge.hidden = false;
      layoutAuditBadge.classList.add('is-error');
    } else {
      layoutAuditBadge.hidden = true;
      layoutAuditBadge.classList.remove('is-error');
    }
  }
  updateAuditModeBadge();

  if (auditSubTab === 'tab-meta' && lastAuditMetadata) {
    renderMetadataOverview(lastAuditMetadata);
  }

  const selectedVp = tab.viewports.find(v => v.id === selectedViewportId) || tab.viewports[0];
  const selectedAudit = layoutAuditByFrame.get(layoutAuditKey(tab.id, selectedVp.id));
  layoutAuditOffenders.innerHTML = '';

  if (!selectedAudit) {
    const li = document.createElement('li');
    li.className = 'layout-audit-empty';
    li.textContent = '監査データがありません。再監査を実行してください。';
    layoutAuditOffenders.appendChild(li);
    return;
  }

  if (!selectedAudit.hasHorizontalOverflow) {
    const li = document.createElement('li');
    li.className = 'layout-audit-empty';
    li.textContent = `「${selectedVp.name}」に横スクロールはありません。`;
    layoutAuditOffenders.appendChild(li);
    return;
  }

  const offenders = selectedAudit.offenders || [];
  if (!offenders.length) {
    const li = document.createElement('li');
    li.className = 'layout-audit-empty';
    li.textContent = `横スクロール ${selectedAudit.overflowX}px（原因要素は特定できませんでした）`;
    layoutAuditOffenders.appendChild(li);
    return;
  }

  offenders.forEach(item => {
    const li = document.createElement('li');
    li.className = 'layout-audit-offender';
    li.innerHTML = `
      <span class="layout-audit-offender-tag">&lt;${escapeHTML(item.tag)}&gt;</span>
      <span class="layout-audit-offender-meta">+${item.overflow}px はみ出し</span>
      <code class="layout-audit-offender-sel">${escapeHTML(item.selector)}</code>
    `;
    li.addEventListener('click', () => {
      selectViewport(selectedVp.id);
      highlightDomElement(selectedVp, tab, item.selector);
    });
    layoutAuditOffenders.appendChild(li);
  });
}

function setActiveBrowserTab(id) {
  if (!browserTabs.some(t => t.id === id)) return;

  const previousId = activeBrowserTabId;
  if (previousId !== null && previousId !== id) {
    setInspectMode(false);
    clearDomSelection();
    saveActiveTabState();
    if (tabHibernationEnabled) {
      const prevTab = browserTabs.find(t => t.id === previousId);
      if (prevTab) suspendBrowserTab(prevTab);
    }
  }

  activeBrowserTabId = id;
  const tab = getActiveTab();
  if (tabHibernationEnabled && tab) {
    resumeBrowserTab(tab);
  }
  loadActiveTabState();

  document.querySelectorAll('.browser-tab-panel').forEach(panel => {
    panel.classList.toggle('active', Number(panel.dataset.tabId) === id);
  });

  renderBrowserTabs();
  updateWorkspaceTransform();
  syncAllViewportFavicons(getActiveTab());
  renderPropertiesPanel();
  renderLayersPanel();
  updateHomeScreenState();
  updateNavigationButtons();
  renderAuditFrameSelect();
  renderConsoleFrameSelect();
  updateFlowChrome(tab);
  syncFlowModeForTab(tab);
  closeBreakpointMenu();
  updateBreakpointMenuActiveStates();
  persistWorkspaceNow().catch(() => {});
}

function closeBrowserTab(tabId) {
  const idx = browserTabs.findIndex(t => t.id === tabId);
  if (idx === -1) return;

  const tab = browserTabs[idx];
  if (tab.viewports?.length) {
    try {
      localStorage.setItem(LAST_LAYOUT_KEY, JSON.stringify(tab.viewports.map(vp => ({
        name: vp.name,
        width: vp.width,
        height: vp.height,
        x: vp.x,
        y: vp.y,
        ua: vp.ua || '',
      }))));
    } catch {
      // ignore
    }
  }
  const panel = document.getElementById(`bt-panel-${tabId}`);
  if (panel) panel.remove();

  browserTabs = browserTabs.filter(t => t.id !== tabId);

  if (browserTabs.length === 0) {
    enterHomeScreen();
    showToast(`タブ「${tab.title}」を閉じました`);
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
    el.className = `browser-tab${tab.id === activeBrowserTabId ? ' active' : ''}${isFlowTab(tab) ? ' is-flow' : ''}`;
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

    browserTabsEl.appendChild(el);
  });

  setupUiTooltips(browserTabsEl);
}

function renderBrowserTabPanel(tab, { hibernated = false } = {}) {
  const panel = document.createElement('div');
  panel.className = 'browser-tab-panel';
  panel.id = `bt-panel-${tab.id}`;
  panel.dataset.tabId = tab.id;

  const canvas = document.createElement('div');
  canvas.className = 'workspace-canvas';
  canvas.id = `workspace-canvas-${tab.id}`;
  panel.appendChild(canvas);

  browserTabPanels.appendChild(panel);
  tab.hibernated = hibernated;

  if (!hibernated) {
    renderTabViewports(tab, canvas);
  }
}

function renderTabViewports(tab, canvas) {
  ensureViewportPositions(tab.viewports);
  tab.viewports.forEach(vp => {
    if (vp.flowFrozen) renderFlowFrozenViewport(vp, tab, canvas);
    else renderViewport(vp, tab, canvas);
  });
  if (isFlowTab(tab)) {
    renderFlowEdges(tab);
    syncFlowModeForTab(tab);
  }
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
  const titles = {
    success: '完了',
    error: 'エラー',
    warning: '注意',
    info: '情報',
  };
  const toastClass = ['success', 'error', 'warning'].includes(type) ? type : '';
  const toast = document.createElement('div');
  toast.className = `toast ${toastClass}`.trim();
  toast.innerHTML = `
    <div class="toast-title">${titles[type] || titles.info}</div>
    <div class="toast-msg">${escapeHTML(message)}</div>
  `;
  toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'none';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, type === 'error' ? 6000 : 4000);
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

function navigateWebview(webview, url) {
  if (!webview || !url) return;
  try {
    if (typeof webview.loadURL === 'function') {
      webview.loadURL(url);
    } else {
      webview.src = url;
    }
  } catch {
    webview.src = url;
  }
}

function resolveNavigationUrl(raw) {
  if (!raw) return '';
  try {
    return new URL(raw).href;
  } catch {
    return normalizeUserUrl(raw) || raw;
  }
}

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

  if (isFlowTab(tab)) {
    const activeVp = getFlowActiveViewport(tab);
    if (activeVp) {
      clearFrameLoadError(activeVp, tab);
      invalidateDomTree(activeVp, tab);
      const webview = document.getElementById(`wv-${tab.id}-${activeVp.id}`);
      if (webview) navigateWebview(webview, normalized);
    }
    clearDomSelection();
    return;
  }

  tab.viewports.forEach(vp => {
    clearFrameLoadError(vp, tab);
    invalidateDomTree(vp, tab);
    const webview = document.getElementById(`wv-${tab.id}-${vp.id}`);
    if (webview) navigateWebview(webview, normalized);
  });
  clearDomSelection();
}

// -------------------------------------------------------------
// Render Viewports Dynamically
// -------------------------------------------------------------

function renderViewport(vp, tab, canvas, { initialUrl } = {}) {
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
      <span class="vp-primary-badge"${tab.viewports[0]?.id === vp.id ? '' : ' hidden'}>プライマリ</span>
      <span class="vp-name">${escapeHTML(vp.name)}</span>
      <span class="vp-ua-badge ${getUaLabel(vp) === 'Desktop' ? 'is-desktop' : ''}">${escapeHTML(getUaLabel(vp))}</span>
      <span class="vp-size">${vp.width} × ${vp.height} px</span>
    </div>
    <div class="vp-actions">
      <button type="button" class="vp-btn screenshot" title="スクリーンショット">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
      </button>
      <button type="button" class="vp-btn devtools" title="開発者ツール">
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

  const errorBanner = document.createElement('div');
  errorBanner.className = 'vp-error-banner';
  errorBanner.hidden = true;
  errorBanner.innerHTML = `
    <span class="vp-error-text">ページを読み込めませんでした</span>
    <button type="button" class="vp-error-retry">再読み込み</button>
  `;
  wrapper.appendChild(errorBanner);

  const webview = document.createElement('webview');
  webview.id = `wv-${uid}`;
  webview.setAttribute('preload', 'preload-webview.js');
  webview.setAttribute('webpreferences', 'contextIsolation=true, nodeIntegration=false,backgroundThrottling=true');
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

  setupWebviewHooks(webview, vp, tab);

  navigateWebview(webview, initialUrl || tab.url);

  header.querySelector('.screenshot').addEventListener('click', () => captureSingleViewport(vp));
  header.querySelector('.devtools').addEventListener('click', () => {
    if (vp.webContentsId) window.electronAPI.openWebviewDevTools(vp.webContentsId);
  });
  header.querySelector('.close').addEventListener('click', () => removeViewport(vp.id));
  errorBanner.querySelector('.vp-error-retry')?.addEventListener('click', (e) => {
    e.stopPropagation();
    reloadViewport(vp, tab);
  });

  header.addEventListener('dblclick', (e) => {
    e.preventDefault();
    selectViewport(vp.id);
    zoomToSelection();
  });

  setupUiTooltips(header);
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
    clearFrameLoadError(vp, tab);
    invalidateDomTree(vp, tab);
    if (tab.viewports[0]?.id === vp.id) {
      setTabFavicon(tab, null);
    }
  });
  webview.addEventListener('did-stop-loading', () => {
    setLoading(false);
    clearFrameLoadError(vp, tab);
    if (tab.viewports[0]?.id === vp.id) {
      requestPrimaryMetadataIfNeeded(tab);
    }
    if (isLayoutAuditPanelVisible()) {
      requestLayoutAuditForViewport(vp, tab);
    }
    const frameKey = domTreeKey(tab.id, vp.id);
    if (domTreeExpandedFrames.has(frameKey)) {
      requestDomTree(vp, tab);
    }
  });
  webview.addEventListener('did-fail-load', (e) => {
    setLoading(false);
    if (e.isMainFrame === false) return;
    if (e.errorCode === -3) return;
    setFrameLoadError(vp, tab, e.errorCode, e.errorDescription);
  });

  // DOM Ready
  webview.addEventListener('dom-ready', () => {
    vp.webContentsId = webview.getWebContentsId();
    vp._deviceEmulationKey = null;

    applyViewportDeviceEmulation(vp);

    window.electronAPI.setUserAgent(vp.webContentsId, vp.ua || '');

    applySyncCaptureToWebview(webview, {
      flowMode: isFlowTab(tab) && tab.id === activeBrowserTabId && !vp.flowFrozen,
    });

    if (cssOutlineEnabled) {
      webview.send('toggle-css-outline', true);
    }
    if (activeVisionFilter !== 'normal') {
      webview.send('apply-vision-filter', activeVisionFilter);
    }
    if (layoutOverflowOutlineEnabled) {
      webview.send('toggle-layout-overflow-outline', true);
    }
  });

  webview.addEventListener('page-title-updated', (e) => {
    tab.title = e.title || tabTitleFromUrl(tab.url);
    rememberBoardMeta(tab.url, { faviconUrl: tab.faviconUrl, title: tab.title });
    renderBrowserTabs();
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

      if (!isFlowTab(tab)) {
        tab.viewports.forEach(otherVp => {
          if (otherVp.id !== vp.id && !otherVp.flowFrozen) {
            const otherWv = document.getElementById(`wv-${tab.id}-${otherVp.id}`);
            if (otherWv && otherWv.getURL?.() !== newURL && otherWv.src !== newURL) {
              navigateWebview(otherWv, newURL);
            }
          }
        });
      }
    }
    if (tab.id === activeBrowserTabId) {
      requestAnimationFrame(() => updateNavigationButtons());
    }
  });

  webview.addEventListener('did-navigate-in-page', () => {
    if (tab.id === activeBrowserTabId) {
      requestAnimationFrame(() => updateNavigationButtons());
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
    if (channel === 'guest-layout-audit') {
      handleGuestLayoutAudit(vp, tab, data);
      return;
    }
    if (channel === 'guest-inspect-pick') {
      if (tab.id === activeBrowserTabId) {
        selectDomNode(vp, tab, data?.selector);
        setInspectMode(false);
      }
      return;
    }

    if (channel === 'wheel-scroll-overflow') {
      if (typeof data?.deltaX === 'number' || typeof data?.deltaY === 'number') {
        panCanvasBy(data.deltaX || 0, data.deltaY || 0);
      }
      return;
    }

    if (channel === 'guest-flow-navigate') {
      if (
        isFlowTab(tab)
        && tab.id === activeBrowserTabId
        && vp.id === getFlowActiveViewport(tab)?.id
        && data?.href
      ) {
        handleFlowNavigate(tab, vp, data);
      }
      return;
    }

    if (tab.id !== activeBrowserTabId) return;

    if (channel === 'guest-scroll') {
      if (!syncEnabled || isFlowTab(tab)) return;
      tab.viewports.forEach(otherVp => {
        if (otherVp.id !== vp.id) {
          const otherWv = document.getElementById(`wv-${tab.id}-${otherVp.id}`);
          if (otherWv) otherWv.send('sync-scroll', data);
        }
      });
    } else if (channel === 'guest-click') {
      if (data?.selector && vp.id === selectedViewportId && !inspectModeActive) {
        highlightDomElement(vp, tab, data.selector);
      }
      if (!syncEnabled || isFlowTab(tab)) return;
      tab.viewports.forEach(otherVp => {
        if (otherVp.id !== vp.id) {
          const otherWv = document.getElementById(`wv-${tab.id}-${otherVp.id}`);
          if (otherWv) otherWv.send('sync-click', data);
        }
      });
    } else if (channel === 'guest-input') {
      if (!syncEnabled || isFlowTab(tab)) return;
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
        updateBreakpointsRuler(data.breakpoints);
      }
      const auditVp = getAuditTargetViewport(tab);
      if (auditVp && auditVp.id === vp.id) {
        updateSidebarAudits(data);
      }
    }
  });

  webview.addEventListener('console-message', (e) => {
    if (tab.id !== activeBrowserTabId) return;

    const log = {
      level: e.level,
      message: e.message,
      source: `${tab.title} / ${vp.name}`,
      tabId: tab.id,
      vpId: vp.id,
      time: new Date().toLocaleTimeString(),
      id: Date.now() + Math.random()
    };

    consoleLogs.push(log);
    if (consoleLogs.length > CONSOLE_LOG_CAP) consoleLogs.shift();
    renderConsoleLogs();
    if (activeInspectorTab === 'console') renderInspectorConsole();
  });
}

// -------------------------------------------------------------
// Breakpoint Ruler Logic
// -------------------------------------------------------------

function getCrossedBreakpoints(prevWidth, newWidth, breakpoints) {
  const prev = Math.round(prevWidth);
  const next = Math.round(newWidth);
  if (prev === next || !breakpoints?.size) return [];
  return [...breakpoints].filter(bp =>
    (prev < bp && next >= bp) || (prev >= bp && next < bp)
  );
}

function flashBreakpointMarkers(bps) {
  if (!breakpointHapticVisualEnabled || !bps.length) return;

  btnBreakpointMenu?.classList.add('is-flash');
  const triggerKey = 'trigger';
  if (bpFlashTimers.has(triggerKey)) clearTimeout(bpFlashTimers.get(triggerKey));
  bpFlashTimers.set(triggerKey, setTimeout(() => {
    btnBreakpointMenu?.classList.remove('is-flash');
    bpFlashTimers.delete(triggerKey);
  }, 400));

  bps.forEach(bp => {
    const marker = breakpointMenu?.querySelector(`.breakpoint-menu-item[data-bp="${bp}"]`);
    if (!marker) return;

    marker.classList.add('is-flash');
    const key = String(bp);
    if (bpFlashTimers.has(key)) clearTimeout(bpFlashTimers.get(key));
    const timer = setTimeout(() => {
      marker.classList.remove('is-flash');
      bpFlashTimers.delete(key);
    }, 400);
    bpFlashTimers.set(key, timer);
  });
}

function triggerBreakpointHaptic() {
  if (!breakpointHapticEnabled) return;
  window.electronAPI?.performHaptic?.('alignment');
}

function notifyBreakpointCrossings(vpId, prevWidth, newWidth) {
  if (isHomeActive() || !allBreakpoints.size) return;

  const crossed = getCrossedBreakpoints(prevWidth, newWidth, allBreakpoints);
  viewportWidthTracker.set(vpId, Math.round(newWidth));

  if (!crossed.length) return;

  triggerBreakpointHaptic();
  flashBreakpointMarkers(crossed);
}

function updateBreakpointTrigger() {
  const vp = getSelectedViewport();
  if (!breakpointCurrent || !btnBreakpointMenu) return;

  if (!vp) {
    breakpointCurrent.textContent = '—';
    btnBreakpointMenu.disabled = true;
    btnBreakpointMenu.title = 'フレームを選択してください';
    return;
  }

  breakpointCurrent.textContent = String(vp.width);
  const hasBreakpoints = allBreakpoints.size > 0;
  btnBreakpointMenu.disabled = !hasBreakpoints;
  btnBreakpointMenu.title = hasBreakpoints
    ? `ブレークポイント — 選択中「${vp.name}」${vp.width}px`
    : `選択中「${vp.name}」— メディアクエリ未検出`;
}

function updateBreakpointMenuActiveStates() {
  const vp = getSelectedViewport();
  breakpointMenu?.querySelectorAll('.breakpoint-menu-item').forEach((btn) => {
    btn.classList.toggle('is-active', Boolean(vp && Number(btn.dataset.bp) === vp.width));
  });
  updateBreakpointTrigger();
}

function renderBreakpointMenu() {
  if (!breakpointMenu) return;

  breakpointMenu.innerHTML = '';

  if (allBreakpoints.size === 0) {
    breakpointMenu.innerHTML = '<p class="breakpoint-menu-empty">メディアクエリ未検出</p>';
    updateBreakpointTrigger();
    return;
  }

  const sortedBreakpoints = Array.from(allBreakpoints).sort((a, b) => a - b);
  const vp = getSelectedViewport();

  sortedBreakpoints.forEach((bp) => {
    const item = document.createElement('button');
    item.type = 'button';
    item.className = 'breakpoint-menu-item';
    item.dataset.bp = String(bp);
    item.setAttribute('role', 'menuitem');
    item.textContent = `${bp}px`;
    if (vp && vp.width === bp) item.classList.add('is-active');
    item.addEventListener('click', () => {
      applyBreakpointWidth(bp);
      closeBreakpointMenu();
    });
    breakpointMenu.appendChild(item);
  });

  updateBreakpointTrigger();
}

function applyBreakpointWidth(bp) {
  const vp = getSelectedViewport();
  if (!vp) {
    showToast('フレームを選択してください');
    return;
  }
  resizeViewport(vp.id, bp);
  showToast(`「${vp.name}」の幅を ${bp}px に変更しました`);
}

function toggleBreakpointMenu(forceOpen) {
  if (!breakpointMenu || !btnBreakpointMenu || btnBreakpointMenu.disabled) return;
  const willOpen = forceOpen ?? breakpointMenu.hidden;
  breakpointMenu.hidden = !willOpen;
  btnBreakpointMenu.setAttribute('aria-expanded', String(willOpen));
  btnBreakpointMenu.classList.toggle('is-open', willOpen);
  if (willOpen) updateBreakpointMenuActiveStates();
}

function closeBreakpointMenu() {
  if (!breakpointMenu || breakpointMenu.hidden) return;
  breakpointMenu.hidden = true;
  btnBreakpointMenu?.setAttribute('aria-expanded', 'false');
  btnBreakpointMenu?.classList.remove('is-open');
}

function setupBreakpointMenu() {
  btnBreakpointMenu?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (btnBreakpointMenu.disabled) return;
    toggleBreakpointMenu(breakpointMenu.hidden);
  });

  document.addEventListener('click', (e) => {
    if (e.target.closest('.breakpoint-menu-wrap')) return;
    closeBreakpointMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeBreakpointMenu();
  });

  updateBreakpointTrigger();
}

function updateBreakpointsRuler(breakpoints) {
  if (!breakpoints || breakpoints.length === 0) return;

  breakpoints.forEach(bp => allBreakpoints.add(bp));
  renderBreakpointMenu();
}

function resizeViewport(vpId, width) {
  const tab = getActiveTab();
  if (!tab) return;
  const vp = tab.viewports.find(v => v.id === vpId);
  if (!vp) return;

  const prevWidth = vp.width;
  vp.width = width;
  if (width !== prevWidth) {
    notifyBreakpointCrossings(vp.id, prevWidth, width);
  }
  applyViewportSize(vp, tab);
  renderPropertiesPanel();
  updateBreakpointMenuActiveStates();
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

  auditBadgeSeoCount = counts.error + counts.warning;
  if (seoAuditBadge) {
    if (auditBadgeSeoCount > 0) {
      seoAuditBadge.textContent = String(auditBadgeSeoCount);
      seoAuditBadge.hidden = false;
      seoAuditBadge.classList.toggle('is-error', counts.error > 0);
    } else {
      seoAuditBadge.hidden = true;
    }
  }
  updateAuditModeBadge();
}

function requestSeoAuditRefresh() {
  const tab = getActiveTab();
  const vp = getAuditTargetViewport(tab);
  if (!vp || !tab) return;
  const webview = document.getElementById(`wv-${tab.id}-${vp.id}`);
  if (webview) webview.send('request-metadata');
}

function getLayoutOverflowFrameCount(tab = getActiveTab()) {
  if (!tab?.viewports?.length) return 0;
  let count = 0;
  tab.viewports.forEach(vp => {
    const audit = layoutAuditByFrame.get(layoutAuditKey(tab.id, vp.id));
    if (audit?.hasHorizontalOverflow) count += 1;
  });
  return count;
}

function metaCharStatus(len, min, max) {
  if (!len) return 'is-error';
  if (len < min || len > max) return 'is-warning';
  return 'is-ok';
}

function formatMetaValue(value) {
  if (value === null || value === undefined || value === '') {
    return '<span class="meta-field-empty">（未設定）</span>';
  }
  if (typeof value === 'boolean') {
    return escapeHTML(value ? 'あり' : 'なし');
  }
  return escapeHTML(String(value));
}

function renderMetaFieldRow(label, value, meta = '') {
  const metaHtml = meta ? `<span class="meta-field-meta">${escapeHTML(meta)}</span>` : '';
  return `
    <div class="meta-field-row">
      <dt class="meta-field-label">${escapeHTML(label)}</dt>
      <dd class="meta-field-value-wrap">
        <span class="meta-field-value">${formatMetaValue(value)}</span>
        ${metaHtml}
      </dd>
    </div>
  `;
}

function renderMetadataOverview(metadata) {
  const container = document.getElementById('meta-overview');
  if (!container) return;

  if (!metadata) {
    container.innerHTML = '<div class="sidebar-empty sidebar-empty-compact"><p class="sidebar-empty-desc">ページを読み込むとメタデータが表示されます</p></div>';
    return;
  }

  const titleLen = (metadata.title || '').length;
  const descLen = (metadata.description || '').length;
  const images = metadata.images || [];
  const missingAlt = images.filter(img => !img.hasAlt).length;
  const emptyAlt = images.filter(img => img.altEmpty).length;
  const okAlt = images.length - missingAlt - emptyAlt;
  const headerCount = metadata.headers?.length || 0;
  const breakpointCount = metadata.breakpoints?.length || 0;
  const issues = buildSeoAuditIssues(metadata);
  const seoProblems = issues.filter(i => i.id !== 'all-clear' && (i.severity === 'error' || i.severity === 'warning')).length;
  const layoutOverflow = getLayoutOverflowFrameCount();

  const stats = [
    { label: 'タイトル', value: titleLen, unit: '文字', status: metaCharStatus(titleLen, 10, 60) },
    { label: 'description', value: descLen, unit: '文字', status: metaCharStatus(descLen, 50, 160) },
    { label: 'H1', value: metadata.h1Count ?? 0, unit: '件', status: metadata.h1Count === 1 ? 'is-ok' : 'is-warning' },
    { label: '見出し', value: headerCount, unit: '件', status: headerCount ? 'is-ok' : 'is-warning' },
    { label: '画像', value: images.length, unit: '件', status: images.length ? 'is-ok' : 'is-info' },
    { label: 'alt 未設定', value: missingAlt, unit: '件', status: missingAlt ? 'is-error' : 'is-ok' },
    { label: 'alt 空', value: emptyAlt, unit: '件', status: emptyAlt ? 'is-warning' : 'is-ok' },
    { label: 'alt OK', value: okAlt, unit: '件', status: okAlt ? 'is-ok' : 'is-info' },
    { label: 'ブレークポイント', value: breakpointCount, unit: '件', status: breakpointCount ? 'is-ok' : 'is-info' },
    { label: 'SEO 問題', value: seoProblems, unit: '件', status: seoProblems ? 'is-error' : 'is-ok' },
    { label: '横スクロール', value: layoutOverflow, unit: 'フレーム', status: layoutOverflow ? 'is-error' : 'is-ok' },
  ];

  const statsHtml = stats.map(s => `
    <div class="meta-stat-card ${s.status}">
      <span class="meta-stat-value">${s.value}<span class="meta-stat-unit">${s.unit}</span></span>
      <span class="meta-stat-label">${escapeHTML(s.label)}</span>
    </div>
  `).join('');

  const sections = [
    {
      title: 'ページ基本',
      rows: [
        ['title', metadata.title, `${titleLen} 文字`],
        ['description', metadata.description, `${descLen} 文字`],
        ['lang', metadata.lang],
        ['charset', metadata.charset],
        ['canonical', metadata.canonical],
        ['robots', metadata.robots],
        ['viewport', metadata.viewportMeta],
        ['favicon', metadata.hasFavicon, metadata.faviconUrl || ''],
      ],
    },
    {
      title: 'Open Graph',
      rows: [
        ['og:title', metadata.ogTitle],
        ['og:description', metadata.ogDesc],
        ['og:image', metadata.ogImage],
        ['og:type', metadata.ogType],
        ['og:url', metadata.ogUrl],
      ],
    },
    {
      title: 'Twitter Card',
      rows: [
        ['twitter:card', metadata.twitterCard],
        ['twitter:title', metadata.twitterTitle],
        ['twitter:description', metadata.twitterDesc],
        ['twitter:image', metadata.twitterImage],
      ],
    },
    {
      title: '構造・メディア',
      rows: [
        ['h1 数', metadata.h1Count],
        ['見出し総数', headerCount],
        ['画像総数', images.length],
        ['alt 未設定', missingAlt],
        ['alt 空文字', emptyAlt],
        ['alt OK', okAlt],
        ['メディアクエリ', breakpointCount],
      ],
    },
  ];

  const sectionsHtml = sections.map(section => `
    <section class="meta-overview-section">
      <h4 class="meta-overview-section-title">${escapeHTML(section.title)}</h4>
      <dl class="meta-field-list">
        ${section.rows.map(([label, value, meta]) => renderMetaFieldRow(label, value, meta)).join('')}
      </dl>
    </section>
  `).join('');

  container.innerHTML = `
    <div class="meta-stats-grid" aria-label="数値サマリー">${statsHtml}</div>
    <div class="meta-sections-grid">${sectionsHtml}</div>
  `;
}

// -------------------------------------------------------------
// SEO & Audits Sidebar Updates
// -------------------------------------------------------------

function updateSidebarAudits(metadata) {
  lastAuditMetadata = metadata;
  renderSeoAuditPanel(metadata);
  renderMetadataOverview(metadata);

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
    outlineTree.innerHTML = '<div class="sidebar-empty sidebar-empty-compact"><p class="sidebar-empty-desc">見出しタグ（h1〜h6）が見つかりません。</p></div>';
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

  renderImageAltAudit(metadata);
}

function renderImageAltAudit(metadata) {
  const imageAuditList = document.getElementById('image-audit-list');
  const imageAuditSummary = document.getElementById('image-audit-summary');
  if (!imageAuditList) return;

  const images = metadata?.images || [];
  imageAuditList.innerHTML = '';

  if (!images.length) {
    if (imageAuditSummary) imageAuditSummary.hidden = true;
    imageAuditList.innerHTML = '<div class="sidebar-empty sidebar-empty-compact"><p class="sidebar-empty-desc">画像要素（img）が見つかりません。</p></div>';
    return;
  }

  const missingAlt = images.filter(img => !img.hasAlt).length;
  const emptyAlt = images.filter(img => img.altEmpty).length;
  const okAlt = images.length - missingAlt - emptyAlt;

  if (imageAuditSummary) {
    imageAuditSummary.hidden = false;
    imageAuditSummary.innerHTML = '';
    if (okAlt) {
      const pill = document.createElement('span');
      pill.className = 'image-audit-summary-pill is-ok';
      pill.textContent = `OK ${okAlt}`;
      imageAuditSummary.appendChild(pill);
    }
    if (emptyAlt) {
      const pill = document.createElement('span');
      pill.className = 'image-audit-summary-pill is-warn';
      pill.textContent = `空 alt ${emptyAlt}`;
      imageAuditSummary.appendChild(pill);
    }
    if (missingAlt) {
      const pill = document.createElement('span');
      pill.className = 'image-audit-summary-pill is-error';
      pill.textContent = `未設定 ${missingAlt}`;
      imageAuditSummary.appendChild(pill);
    }
  }

  const placeholderSvg = encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="%2364748b" stroke-width="1.5"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>'
  );

  images.forEach(img => {
    const status = img.hasAlt && !img.altEmpty
      ? 'ok'
      : img.altEmpty
        ? 'empty'
        : 'missing';

    const badgeLabel = status === 'ok'
      ? 'OK'
      : status === 'empty'
        ? 'alt 空'
        : 'alt なし';

    const altValue = status === 'ok'
      ? escapeHTML(img.alt)
      : status === 'empty'
        ? '（空の alt — 装飾画像以外は説明を入れてください）'
        : '（alt 属性がありません）';

    const dims = img.width && img.height
      ? `${img.width} × ${img.height}`
      : '';

    const card = document.createElement('article');
    card.className = `img-audit-card is-${status}`;

    const cleanSrc = escapeHTML(img.src);
    card.innerHTML = `
      <div class="img-audit-media">
        <img src="${cleanSrc}" alt="" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='data:image/svg+xml,${placeholderSvg}'">
        <span class="img-audit-badge is-${status}">${badgeLabel}</span>
      </div>
      <div class="img-audit-body">
        <p class="img-audit-alt-label">代替テキスト</p>
        <p class="img-audit-alt-value is-${status}">${altValue}</p>
        <div class="img-audit-meta">
          ${dims ? `<span class="img-audit-dims">${dims}px</span>` : ''}
          <span class="img-audit-src" title="${cleanSrc}">${cleanSrc}</span>
        </div>
      </div>
    `;
    imageAuditList.appendChild(card);
  });
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

function getConsoleLevelName(level) {
  if (level === 1) return 'WARN';
  if (level === 2) return 'ERROR';
  return 'LOG';
}

function getConsoleLogCounts(logs = consoleLogs) {
  const counts = { info: 0, warn: 0, error: 0 };
  logs.forEach(log => {
    if (log.level === 0) counts.info += 1;
    else if (log.level === 1) counts.warn += 1;
    else if (log.level === 2) counts.error += 1;
  });
  return counts;
}

function getConsoleFilteredLogs() {
  const showInfo = logFilterInfo?.checked ?? true;
  const showWarn = logFilterWarn?.checked ?? true;
  const showError = logFilterError?.checked ?? true;
  const frameId = consoleFrameSelect?.value ? Number(consoleFrameSelect.value) : null;

  return consoleLogs.filter(log => {
    if (log.level === 0 && !showInfo) return false;
    if (log.level === 1 && !showWarn) return false;
    if (log.level === 2 && !showError) return false;
    if (frameId && log.vpId !== frameId) return false;
    if (consoleSearchQuery && !log.message.toLowerCase().includes(consoleSearchQuery)) return false;
    return true;
  });
}

function renderConsoleFrameSelect() {
  if (!consoleFrameSelect) return;
  const tab = getActiveTab();
  const previous = consoleFrameSelect.value;

  if (!tab?.viewports?.length) {
    consoleFrameSelect.innerHTML = '<option value="">全フレーム</option>';
    consoleFrameSelect.disabled = true;
    return;
  }

  consoleFrameSelect.disabled = false;
  consoleFrameSelect.innerHTML = '<option value="">全フレーム</option>' + tab.viewports.map(vp => {
    return `<option value="${vp.id}">${escapeHTML(vp.name)} (${vp.width}px)</option>`;
  }).join('');

  if (previous && tab.viewports.some(vp => String(vp.id) === previous)) {
    consoleFrameSelect.value = previous;
  }
}

function updateConsoleModeBadge(filteredLogs) {
  if (!consoleModeBadge) return;
  const errorCount = consoleLogs.filter(log => log.level === 2).length;
  const badgeCount = errorCount || filteredLogs.length;

  if (badgeCount === 0) {
    consoleModeBadge.hidden = true;
    consoleModeBadge.classList.remove('is-error');
    return;
  }

  consoleModeBadge.textContent = String(badgeCount);
  consoleModeBadge.hidden = false;
  consoleModeBadge.classList.toggle('is-error', errorCount > 0);
}

function renderConsoleSummary(filteredLogs) {
  if (!consoleSummary) return;

  const counts = getConsoleLogCounts();
  consoleSummary.innerHTML = '';

  const pills = [
    { label: '表示', value: filteredLogs.length, className: 'console-summary-pill' },
    { label: '合計', value: consoleLogs.length, className: 'console-summary-pill' },
    { label: '情報', value: counts.info, className: 'console-summary-pill is-info' },
    { label: '警告', value: counts.warn, className: `console-summary-pill${counts.warn ? ' is-warning' : ''}` },
    { label: 'エラー', value: counts.error, className: `console-summary-pill${counts.error ? ' is-error' : ''}` },
  ];

  pills.forEach(pill => {
    const el = document.createElement('span');
    el.className = pill.className;
    el.textContent = `${pill.label} ${pill.value}`;
    consoleSummary.appendChild(el);
  });
}

function copyConsoleLogsToClipboard() {
  const logs = getConsoleFilteredLogs();
  if (!logs.length) {
    showToast('コピーするログがありません', 'warning');
    return;
  }

  const text = logs.map(log =>
    `[${log.time}] [${getConsoleLevelName(log.level)}] ${log.source}: ${log.message}`
  ).join('\n');
  copyToClipboard(text, `${logs.length} 件のログをコピーしました`);
}

function renderConsoleLogs() {
  if (!consoleLogsContainer) return;

  const filteredLogs = getConsoleFilteredLogs();
  renderConsoleSummary(filteredLogs);
  updateConsoleModeBadge(filteredLogs);

  if (consoleTruncateNotice) {
    consoleTruncateNotice.hidden = consoleLogs.length < CONSOLE_LOG_CAP;
  }

  consoleLogsContainer.innerHTML = '';

  if (consoleLogs.length === 0) {
    consoleLogsContainer.innerHTML = '<div class="console-empty">まだログはありません。ページを操作するとここに表示されます。</div>';
    return;
  }

  if (filteredLogs.length === 0) {
    consoleLogsContainer.innerHTML = '<div class="console-empty">フィルターに一致するログがありません。</div>';
    return;
  }

  filteredLogs.forEach(log => {
    const entry = document.createElement('div');
    entry.className = `log-entry level-${log.level}`;

    const meta = document.createElement('div');
    meta.className = 'log-meta';

    const badge = document.createElement('button');
    badge.type = 'button';
    badge.className = 'log-badge log-badge-btn';
    badge.textContent = log.source;
    badge.title = 'このフレームを選択';
    badge.addEventListener('click', () => {
      if (log.vpId) {
        selectViewport(log.vpId);
        if (consoleFrameSelect) consoleFrameSelect.value = String(log.vpId);
        renderConsoleLogs();
      }
    });

    const time = document.createElement('span');
    time.className = 'log-time';
    time.textContent = `[${log.time}]`;

    const level = document.createElement('span');
    level.className = 'log-level';
    level.textContent = getConsoleLevelName(log.level);

    meta.append(badge, time, level);

    const msg = document.createElement('div');
    msg.className = 'log-msg';
    msg.textContent = log.message;
    msg.title = 'クリックでコピー';
    msg.addEventListener('click', () => {
      copyToClipboard(log.message, 'ログメッセージをコピーしました');
    });

    entry.append(meta, msg);
    consoleLogsContainer.appendChild(entry);
  });

  const shouldAutoScroll = consoleAutoScroll?.checked !== false && !consoleUserScrolledUp;
  if (shouldAutoScroll) {
    consoleLogsContainer.scrollTop = consoleLogsContainer.scrollHeight;
  }
}

// -------------------------------------------------------------
// Flow mode — journey recording
// -------------------------------------------------------------

function updateFlowChrome(tab = getActiveTab()) {
  const workspaceGrid = document.getElementById('workspace-grid');
  const isFlow = isFlowTab(tab) && tab?.id === activeBrowserTabId;
  workspaceGrid?.classList.toggle('flow-board-active', isFlow);
  btnToggleSync?.classList.toggle('disabled', isFlow);
  if (isFlow && syncEnabled) {
    syncEnabled = false;
    btnToggleSync?.classList.remove('active');
  }
}

function syncFlowModeForTab(tab = getActiveTab()) {
  applySyncCaptureToTab(tab);
  updateFlowChrome(tab);
}

function getFlowShellAnchor(tab, vp, side = 'right') {
  const headerH = getViewportChromeHeight(vp);
  const x = side === 'right' ? vp.x + vp.width : vp.x;
  const y = vp.y + headerH + vp.height / 2;
  return { x, y };
}

function ensureFlowEdgesLayer(tab) {
  const canvas = document.getElementById(`workspace-canvas-${tab.id}`);
  if (!canvas) return null;
  let layer = canvas.querySelector('.flow-edges-layer');
  if (!layer) {
    layer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    layer.classList.add('flow-edges-layer');
    layer.setAttribute('aria-hidden', 'true');
    canvas.insertBefore(layer, canvas.firstChild);
  }
  return layer;
}

function renderFlowEdges(tab) {
  if (!isFlowTab(tab) || !tab.flow?.edges?.length) {
    const canvas = document.getElementById(`workspace-canvas-${tab.id}`);
    canvas?.querySelector('.flow-edges-layer')?.replaceChildren();
    return;
  }

  const layer = ensureFlowEdgesLayer(tab);
  if (!layer) return;

  const bounds = getCanvasContentBounds(tab);
  layer.setAttribute('viewBox', `0 0 ${bounds.width} ${bounds.height}`);
  layer.style.width = `${bounds.width}px`;
  layer.style.height = `${bounds.height}px`;
  layer.replaceChildren();

  tab.flow.edges.forEach(edge => {
    const fromVp = tab.viewports.find(vp => vp.flowNodeId === edge.from);
    const toVp = tab.viewports.find(vp => vp.flowNodeId === edge.to);
    if (!fromVp || !toVp) return;

    const from = getFlowShellAnchor(tab, fromVp, 'right');
    const to = getFlowShellAnchor(tab, toVp, 'left');
    const dx = Math.max(48, (to.x - from.x) * 0.45);

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('class', 'flow-edge-path');
    path.setAttribute('d', `M ${from.x} ${from.y} C ${from.x + dx} ${from.y}, ${to.x - dx} ${to.y}, ${to.x} ${to.y}`);
    layer.appendChild(path);

    const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    arrow.setAttribute('fill', 'var(--accent)');
    arrow.setAttribute('opacity', '0.85');
    arrow.setAttribute('points', `${to.x},${to.y} ${to.x - 8},${to.y - 4} ${to.x - 8},${to.y + 4}`);
    layer.appendChild(arrow);

    if (edge.label) {
      const midX = (from.x + to.x) / 2;
      const midY = (from.y + to.y) / 2 - 10;
      const bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      bg.setAttribute('class', 'flow-edge-label-bg');
      bg.setAttribute('x', String(midX - 40));
      bg.setAttribute('y', String(midY - 10));
      bg.setAttribute('width', '80');
      bg.setAttribute('height', '18');
      bg.setAttribute('rx', '6');
      layer.appendChild(bg);

      const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      label.setAttribute('class', 'flow-edge-label');
      label.setAttribute('x', String(midX));
      label.setAttribute('y', String(midY + 3));
      label.setAttribute('text-anchor', 'middle');
      label.textContent = edge.label.slice(0, 24);
      layer.appendChild(label);
    }
  });
}

function buildFlowFrozenHeader(vp, tab) {
  const header = document.createElement('div');
  header.className = 'viewport-header frame-bar';
  const title = vp.flowTitle || tabTitleFromUrl(vp.flowUrl || tab.url);
  header.innerHTML = `
    <div class="vp-drag-handle" title="ドラッグして移動">
      <span class="flow-frozen-chip">固定</span>
      <span class="vp-name">${escapeHTML(title)}</span>
      <span class="vp-size">${vp.width} × ${vp.height} px</span>
    </div>
  `;
  return header;
}

function renderFlowFrozenViewport(vp, tab, canvas) {
  const uid = `${tab.id}-${vp.id}`;
  const card = document.createElement('div');
  card.className = 'viewport-card';
  card.id = `vp-card-${uid}`;
  card.style.width = `${vp.width}px`;

  const header = buildFlowFrozenHeader(vp, tab);

  const wrapper = document.createElement('div');
  wrapper.className = 'webview-wrapper';
  wrapper.id = `wv-wrapper-${uid}`;
  wrapper.style.width = `${vp.width}px`;
  wrapper.style.height = `${vp.height}px`;

  const img = document.createElement('img');
  img.className = 'flow-snapshot-img';
  img.src = vp.flowScreenshot || '';
  img.alt = vp.flowUrl || tab.url;
  wrapper.appendChild(img);

  card.appendChild(wrapper);
  card.appendChild(header);

  const shell = document.createElement('div');
  shell.className = 'viewport-frame-shell flow-frozen';
  shell.id = `vp-shell-${uid}`;
  shell.dataset.vpId = String(vp.id);
  shell.style.left = `${vp.x}px`;
  shell.style.top = `${vp.y}px`;
  shell.appendChild(card);
  bindFrameShellSelection(shell);
  const dragHandle = header.querySelector('.vp-drag-handle');
  if (dragHandle) bindFrameHeaderDrag(dragHandle, vp);
  canvas.appendChild(shell);
  syncViewportFrame(vp, tab);
}

function freezeViewportShell(tab, vp, dataUrl) {
  const uid = `${tab.id}-${vp.id}`;
  const shell = document.getElementById(`vp-shell-${uid}`);
  const webview = document.getElementById(`wv-${uid}`);
  const wrapper = document.getElementById(`wv-wrapper-${uid}`);
  if (!shell || !wrapper) return;

  vp.flowFrozen = true;
  vp.flowScreenshot = dataUrl;
  vp.webContentsId = undefined;

  shell.classList.add('flow-frozen');
  webview?.remove();

  wrapper.querySelector('.vp-loading')?.remove();
  wrapper.querySelector('.vp-error-banner')?.remove();
  wrapper.querySelector('.frame-select-shield')?.remove();

  let img = wrapper.querySelector('.flow-snapshot-img');
  if (!img) {
    img = document.createElement('img');
    img.className = 'flow-snapshot-img';
    wrapper.insertBefore(img, wrapper.firstChild);
  }
  img.src = dataUrl;
  img.alt = vp.flowUrl || tab.url;

  const header = shell.querySelector('.viewport-header');
  if (header) {
    header.innerHTML = buildFlowFrozenHeader(vp, tab).innerHTML;
    const dragHandle = header.querySelector('.vp-drag-handle');
    if (dragHandle) bindFrameHeaderDrag(dragHandle, vp);
  }
}

async function handleFlowNavigate(tab, vp, { href, text }) {
  if (!isFlowTab(tab) || vp.flowFrozen || !href) return;
  if (!vp.webContentsId) {
    showToast('ページの読み込み完了を待ってください');
    return;
  }

  const normalizedHref = resolveNavigationUrl(href);
  const fromNodeId = vp.flowNodeId || `flow-node-${vp.id}`;
  vp.flowNodeId = fromNodeId;
  vp.flowUrl = tab.url;
  vp.flowTitle = tab.title;

  const capture = await window.electronAPI.captureWebviewData(vp.webContentsId);
  if (!capture?.success || !capture.dataUrl) {
    showToast('スクリーンショットの取得に失敗しました', 'error');
    return;
  }

  if (!tab.flow) tab.flow = { nodes: [], edges: [] };
  if (!tab.flow.nodes.some(node => node.id === fromNodeId)) {
    tab.flow.nodes.push({
      id: fromNodeId,
      vpId: vp.id,
      url: vp.flowUrl,
      title: vp.flowTitle,
      screenshot: capture.dataUrl,
    });
  }

  freezeViewportShell(tab, vp, capture.dataUrl);

  const stepIndex = tab.viewports.filter(v => v.flowFrozen).length + 1;
  const newId = ++viewportIdCounter;
  const newVp = {
    id: newId,
    name: `Step ${stepIndex}`,
    width: vp.width,
    height: vp.height,
    x: vp.x + vp.width + FLOW_FRAME_GAP,
    y: vp.y,
    ua: vp.ua || '',
    flowNodeId: `flow-node-${newId}`,
  };

  tab.flow.edges.push({
    from: fromNodeId,
    to: newVp.flowNodeId,
    label: text || '',
    href: normalizedHref,
  });

  tab.viewports.push(newVp);
  viewports = tab.viewports;

  tab.url = normalizedHref;
  currentURL = normalizedHref;
  urlInput.value = normalizedHref;
  setTabFavicon(tab, null);
  tab.title = tabTitleFromUrl(normalizedHref);

  const canvas = document.getElementById(`workspace-canvas-${tab.id}`);
  renderViewport(newVp, tab, canvas, { initialUrl: normalizedHref });
  selectViewport(newVp.id);

  renderFlowEdges(tab);
  updateCanvasSurface(tab);
  renderLayersPanel();
  renderBrowserTabs();
  saveActiveTabState();
  syncFlowModeForTab(tab);
  if (zoomToFitOnOpen) requestAnimationFrame(() => zoomToFitAll());
  showToast(`導線を記録: ${tabTitleFromUrl(normalizedHref)}`);
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
