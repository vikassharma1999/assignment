//A nodejs inbuilt model which use to data transfer on http

const http = require('http')
const url = require("url")
const fs = require("fs")
http.createServer((req,res)=>{
	res.writeHead(200,{'Content-Type':'text/html'})
    let q = url.parse(req.url,true)
    fs.readFile(__dirname+q.pathname,'utf8',(err,data)=>{
    	res.write(data)
	    res.end()
    })
	
}).listen(3000)