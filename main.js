const { app, BrowserWindow, Notification, ipcMain } = require('electron')

let win
app.on('ready', createWindow)

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

//通知栏
function handleIPC() {
	ipcMain.handle('work-notification', async function() {
		let res = await new Promise((resolve, reject) => {
			let notification = new Notification({
				title: '任务结束',
				body: '是否开始休息',
				actions: [{ text: '开始休息', type: 'button' }],
				closeButtonText: '继续工作'
			})
			notification.show()
			// click '开始休息'
			notification.on('action', () => {
				resolve('relex')
			})
			notification.on('close', () => {
				resolve('work')
			})
		})

		return res
	})
}
