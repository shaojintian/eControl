const { ipcRenderer } = require('electron')
const Timer = require('timer.js')

function startWork() {
	let workTimer = new Timer({
		ontick: ms => {
			updateTime(ms)
		},
		onend: () => {
			notification()
		}
	})

	workTimer.start(1)
}

function updateTime(ms) {
	let timerContainer = document.getElementById('timer-container')
	let s = (ms / 1000).toFixed(0)
	timerContainer.innerText = s
}

async function notification() {
	let res = await ipcRenderer.invoke('work-notification')
	if (res === 'relex') {
		setTimeout(() => {
			alert('休息结束！')
		}, 5 * 1000)
	} else if (res === 'work') {
		startWork()
	}
}
// do startWork()
startWork()
