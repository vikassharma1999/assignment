//An inbuilt module to handle events
const events = require("events")
let eventEmitter = new events.EventEmitter()
const connectHandler = function connected(){
	console.log("connection successful")
	eventEmitter.emit("data_recieved")

}
eventEmitter.on("connection",connectHandler)
eventEmitter.on('data_recieved',function(){
	console.log("data recieved successful")
})

eventEmitter.emit('connection')

console.log("Program ended")