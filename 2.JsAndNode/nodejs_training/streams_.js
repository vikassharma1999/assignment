const fs = require("fs")
const http = require("http")

let myReadStream = fs.createReadStream(__dirname+'/input.txt','utf-8')
let myWriteStream = fs.createWriteStream(__dirname+'/output.txt')
myReadStream.on('data',(chunk)=>{
	console.log('new chunk recieved...')
    myWriteStream.write(chunk)	
})
// myReadStream.pipe(myWriteStream)