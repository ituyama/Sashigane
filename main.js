const { app, BrowserWindow, ipcMain, webContents, dialog, nativeTheme } = require('electron');
const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');

let mainWindow = null;
let isQuitting = false;
let hapticBinaryPath = null;
let hapticLastTrigger = 0;
const HAPTIC_THROTTLE_MS = 48;

function getHapticBinaryPath() {
  if (hapticBinaryPath) return hapticBinaryPath;

  const candidates = [
    path.join(__dirname, 'build', 'HapticFeedback'),
    path.join(process.resourcesPath, 'app.asar.unpacked', 'build', 'HapticFeedback'),
    path.join(process.resourcesPath, 'app.asar.unpacked', 'node_modules', 'haptic-feedback-swift', 'HapticFeedback'),
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      hapticBinaryPath = candidate;
      return candidate;
    }
  }

  return null;
}

function performHaptic(pattern = 'alignment') {
  if (process.platform !== 'darwin') return false;

  const now = Date.now();
  if (now - hapticLastTrigger < HAPTIC_THROTTLE_MS) return false;
  hapticLastTrigger = now;

  const binary = getHapticBinaryPath();
  if (!binary) return false;

  try {
    const child = spawn(binary, [], { stdio: ['pipe', 'ignore', 'ignore'] });
    child.stdin.write(`${pattern}\n`);
    child.stdin.end();
    child.unref();
    return true;
  } catch {
    return false;
  }
}

const THEME_BG = {
  light: '#f5f5f5',
  dark: '#1e1e1e',
};

function applyNativeWindowTheme(resolved) {
  if (!mainWindow) return;
  mainWindow.setBackgroundColor(THEME_BG[resolved] || THEME_BG.dark);
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      webviewTag: true,
      backgroundThrottling: true,
    },
    // Premium macOS frameless style with traffic lights
    titleBarStyle: 'hiddenInset',
    backgroundColor: THEME_BG.dark,
  });

  mainWindow.loadFile('index.html');
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('before-quit', (event) => {
  if (isQuitting || !mainWindow || mainWindow.isDestroyed()) return;
  event.preventDefault();
  mainWindow.webContents.send('app-before-quit');
});

ipcMain.on('app-before-quit-done', () => {
  isQuitting = true;
  app.quit();
});

// IPC handler to capture screenshots of guest webcontents
ipcMain.handle('capture-webview', async (event, { webContentsId, viewportName, width, height }) => {
  try {
    const guestContents = webContents.fromId(webContentsId);
    if (!guestContents) {
      throw new Error(`WebContents not found for ID: ${webContentsId}`);
    }

    const image = await guestContents.capturePage();
    const buffer = image.toPNG();

    const desktopPath = app.getPath('desktop');
    const folderPath = path.join(desktopPath, 'Sashigane_Screenshots');
    
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-');
    const filename = `sashigane_${viewportName}_${width}x${height}_${dateStr}_${timeStr}.png`;
    const fullPath = path.join(folderPath, filename);

    fs.writeFileSync(fullPath, buffer);
    
    return { success: true, filePath: fullPath, folderPath: folderPath };
  } catch (error) {
    console.error('Failed to capture webview:', error);
    return { success: false, error: error.message };
  }
});

ipcMain.handle('capture-webview-data', async (_event, { webContentsId }) => {
  try {
    const guestContents = webContents.fromId(webContentsId);
    if (!guestContents) {
      throw new Error(`WebContents not found for ID: ${webContentsId}`);
    }
    const image = await guestContents.capturePage();
    return { success: true, dataUrl: image.toDataURL() };
  } catch (error) {
    console.error('Failed to capture webview data:', error);
    return { success: false, error: error.message };
  }
});

// IPC listener to open DevTools for individual webviews
ipcMain.on('open-webview-devtools', (event, webContentsId) => {
  const guestContents = webContents.fromId(webContentsId);
  if (guestContents) {
    guestContents.openDevTools({ mode: 'detach' });
  }
});

// IPC handler to force guest viewport size via device emulation.
// This is the ONLY reliable way to set the viewport size for <webview>
// guests — CSS layout dimensions do NOT propagate to the guest renderer.
ipcMain.on('set-device-emulation', (event, { webContentsId, width, height }) => {
  const guestContents = webContents.fromId(webContentsId);
  if (!guestContents) return;

  // screenPosition must stay 'desktop' — 'mobile' disables the webview plugin.
  guestContents.enableDeviceEmulation({
    screenPosition: 'desktop',
    screenSize: { width, height },
    viewSize: { width, height },
    viewPosition: { x: 0, y: 0 },
    deviceScaleFactor: 0,
    scale: 1,
  });
});

ipcMain.on('set-user-agent', (event, { webContentsId, userAgent }) => {
  const guestContents = webContents.fromId(webContentsId);
  if (!guestContents) return;
  guestContents.setUserAgent(userAgent || '');
});

ipcMain.on('set-native-theme', (_event, { mode, resolved }) => {
  nativeTheme.themeSource = mode === 'system' ? 'system' : resolved;
  applyNativeWindowTheme(resolved);
});

ipcMain.handle('perform-haptic', (_event, pattern = 'alignment') => {
  return { ok: performHaptic(pattern) };
});

function getWorkspaceStorePath() {
  return path.join(app.getPath('userData'), 'sashigane-workspace.json');
}

ipcMain.handle('read-persisted-workspace', () => {
  try {
    const filePath = getWorkspaceStorePath();
    if (!fs.existsSync(filePath)) {
      return { success: true, data: null };
    }
    return { success: true, data: fs.readFileSync(filePath, 'utf8') };
  } catch (error) {
    return { success: false, error: error.message, data: null };
  }
});

ipcMain.handle('write-persisted-workspace', (_event, json) => {
  try {
    const filePath = getWorkspaceStorePath();
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const tmpPath = `${filePath}.tmp`;
    fs.writeFileSync(tmpPath, json, 'utf8');
    fs.renameSync(tmpPath, filePath);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

ipcMain.handle('save-workspace-file', async (_event, json) => {
  try {
    const { filePath, canceled } = await dialog.showSaveDialog({
      defaultPath: 'sashigane-workspace.json',
      filters: [{ name: 'JSON', extensions: ['json'] }],
    });
    if (canceled || !filePath) return { success: false };
    fs.writeFileSync(filePath, json, 'utf8');
    return { success: true, filePath };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

ipcMain.handle('load-workspace-file', async () => {
  try {
    const { filePaths, canceled } = await dialog.showOpenDialog({
      filters: [{ name: 'JSON', extensions: ['json'] }],
      properties: ['openFile'],
    });
    if (canceled || !filePaths?.[0]) return { success: false };
    const data = fs.readFileSync(filePaths[0], 'utf8');
    return { success: true, data: JSON.parse(data) };
  } catch (error) {
    return { success: false, error: error.message };
  }
});
