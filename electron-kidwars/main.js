const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  let window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    alwaysOnTop: true,
    frame: false
  });
  //window.loadFile('http://localhost:3000');
  window.loadURL('http://localhost:3000');
});
