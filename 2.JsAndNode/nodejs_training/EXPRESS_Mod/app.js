// A framework which is work with nodejs to
//1) create server
//2) for validation
//3)for creating api
//In this part we look into how to create a server using express
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000

//Test route
app.get("/",(req,res)=>{
	res.send("API.....")
})
//api create using router
app.use('/api/homepage',require("./home"))
app.listen(PORT,()=>{
	console.log(`Server is running on ${PORT}`)
})