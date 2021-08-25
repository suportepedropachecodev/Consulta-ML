const { app, BrowserWindow, ipcMain}  = require('electron');
const consultaml = require('./src/backend/consultaml');
let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 600,
        height: 150,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    })

    mainWindow.loadFile('index.html');
    mainWindow.removeMenu();

};
ipcMain.on('canal1',(e,arqs)=>{
    if(!arqs){
        console.log('Vazio!')
    }else{
        consultaml(arqs)
    }
})

app.on('ready', () => {
    createWindow()
})