const { app, BrowserWindow, Notification, ipcMain } = require('electron')

let win
app.on('ready', createWindow())

function createWindow() {
	win = new BrowserWindow({
		width: 800,
		height: 800,
		webPreferences: {
			nodeIntegration: true
		}
	})
	win.loadFile('index.html')
	handleIPC()
}

function handleIPC() {}
