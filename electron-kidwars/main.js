const { app, BrowserWindow, globalShortcut } = require('electron');

app.on('ready', () => {
  const window = new BrowserWindow({
    width: 1920,
    height: 1080,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    },
    alwaysOnTop: true,
    frame: false,
  });
  // window.setMenuBarVisibility(false);
  // window.webContents.openDevTools();
  // window.loadFile('http://localhost:3000');
  window.loadURL('http://localhost:3000');
  const showNow = globalShortcut.register('alt+f4', () => {
    window.show();
  });
  // const showNow2 = globalShortcut.register('super', () => {
  //   console.log('Работает');
  //   window.show();
  // });
});
