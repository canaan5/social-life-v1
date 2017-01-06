// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const fs = require('fs');
const {remote} = require('electron');
const {Menu, MenuItem} = remote;
const {ipcMain} = remote;


// Context menu
    ipcMain.removeAllListeners(['open-in-new-window']);
ipcMain.removeAllListeners(['app-home']);

ipcMain.on('app-home', (event) => {
    let app_home = new CustomEvent('current-app-home');
    document.dispatchEvent(app_home);
    // remote.webContents().loadURL('http://www.google.com');
});

ipcMain.on('open-in-new-window', (event, link) => {
    let win = new remote.BrowserWindow({width: 800, height: 600});
    win.loadURL(link);

    win.on('closed', () => {
        win = null
    })
});