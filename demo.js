const Timer = require('timer.js')
function startWork() {
	let workTimer = new Timer({
		ontick: (ms) => {
			console.log(ms)
		},
		onend: null
	})

	workTimer.start(10)
}

startWork()