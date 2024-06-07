const { app, BrowserWindow,Tray, Menu  } = require('electron/main')
const path = require('node:path')
let tray;
let win;
function createWindow () {
  win = new BrowserWindow({
    width: 1280,
    height: 720,
    autoHideMenuBar: true,
    icon:  path.join(__dirname,'favicon.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  

  win.loadFile('../Phone/index.html')

  // Hide the window instead of closing
  /*win.on('close', (event) => {
    if (!app.isQuiting) {
      event.preventDefault();
      win.hide();
    }
    return true;
  });*/
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })

  tray = new Tray(path.join(__dirname,'favicon.ico')); // Your tray icon path
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Abrir Telefone', click: () => {
        win.show();
      }
    },
    {
      label: 'Fechar', click: () => {
        app.isQuiting = true;
        app.quit();
      }
    }
  ]);

  tray.setToolTip('VKonekta');
  tray.setContextMenu(contextMenu);

  // Restore window on tray icon click
  tray.on('click', () => {
    win.show();
  });
  
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})