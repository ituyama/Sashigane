const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  captureWebview: (webContentsId, viewportName, width, height) => 
    ipcRenderer.invoke('capture-webview', { webContentsId, viewportName, width, height }),
  openWebviewDevTools: (webContentsId) => 
    ipcRenderer.send('open-webview-devtools', webContentsId),
  setDeviceEmulation: (webContentsId, width, height) =>
    ipcRenderer.send('set-device-emulation', { webContentsId, width, height }),
  setUserAgent: (webContentsId, userAgent) =>
    ipcRenderer.send('set-user-agent', { webContentsId, userAgent }),
  saveWorkspaceFile: (json) => ipcRenderer.invoke('save-workspace-file', json),
  loadWorkspaceFile: () => ipcRenderer.invoke('load-workspace-file'),
  setNativeTheme: (mode, resolved) => ipcRenderer.send('set-native-theme', { mode, resolved }),
  readPersistedWorkspace: () => ipcRenderer.invoke('read-persisted-workspace'),
  writePersistedWorkspace: (json) => ipcRenderer.invoke('write-persisted-workspace', json),
  onBeforeQuit: (callback) => ipcRenderer.on('app-before-quit', callback),
  ackBeforeQuit: () => ipcRenderer.send('app-before-quit-done'),
  performHaptic: (pattern = 'alignment') => ipcRenderer.invoke('perform-haptic', pattern),
});
