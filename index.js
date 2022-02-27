const {app, BrowserWindow, ipcMain} = require('electron');

let win = null;

const createWindow = () => {
  win = new BrowserWindow({
    width: 600,
    height: 400,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadFile('app/index.html');
};


app.whenReady().then(createWindow);

ipcMain.on('generatePassword', (event, data) => {
  const randomPassword = data + Math.random().toString(36).substr(2, 5);
  win.webPreferences.send('receivePassword', randomPassword);
});
