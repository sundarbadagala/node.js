const EventEmitter = require('events')

const appEvent = new EventEmitter()


appEvent.on('user:registered', (res)=>{
	console.log('send success mail to', res.mail)
})

appEvent.on('user:registered', res=>{
	console.log('Hi', res.name)
})

const registerUser=()=>{
	const user = {name:"ram", age:23, mail:'abc@mail.com'}
	console.log('user saved')
	appEvent.emit('user:registered', user)
	console.log('event listeners completed')
}


appEvent.once('app:start', ()=>{
	console.log('app started once')
})

const appStarted=()=>{
	appEvent.emit('app:start')
}


appStarted()
appStarted()
registerUser()

