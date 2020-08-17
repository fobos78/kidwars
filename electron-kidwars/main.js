const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  let window = new BrowserWindow({
    width: 1600,
    height: 800,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    },
    alwaysOnTop: true,
    frame: false
  });
  window.webContents.openDevTools();
  //window.loadFile('http://localhost:3000');
  window.loadURL('http://localhost:3000');
});
