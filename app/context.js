const {remote} = require('electron');
const {Menu, MenuItem} = remote;
const {ipcRenderer} = require('electron');

let url = null;

const menu = new Menu();
menu.append(new MenuItem({label: 'Home', click(menuItem, browserWindow, event) {
    ipcRenderer.send('app-home', event);
}}));

const linkMenu = new Menu();
linkMenu.append(new MenuItem({label: 'Open in new Window', click(menuItem, browserWindow, event) {
    ipcRenderer.send('open-in-new-window', url);
}}));

window.addEventListener('contextmenu', (e) => {
    e.preventDefault();

    let href = e.target.href;

    if ( typeof href === 'undefined')
    {
        return menu.popup(remote.getCurrentWindow())
    }
    else {
        url = href;
        return linkMenu.popup(remote.getCurrentWindow())
    }

}, false);

document.addEventListener('click', function(e) {
    ipcRenderer.send('click-event', e.target);
    return false;
});