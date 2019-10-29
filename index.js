//ch-14 Electron dowload manager part 1
const {app,BrowserWindow} = require('electron');

app.on("ready",build_app);

function build_app(){
  var app_window = new BrowserWindow({
    webPreferences : {
      nodeIntegration : true,
      webviewTag : true //to access the webview tag in index.html
    },
    //icon:
    title : 'Download Manager',
    
  });

  app_window.setAutoHideMenuBar(true);//to hide the menu

  app_window.loadFile("./app/index.html");
}