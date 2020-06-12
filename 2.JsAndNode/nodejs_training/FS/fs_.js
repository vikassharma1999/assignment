/*It is a in-built nodejs module which is useful to work with file 
system in computer. And do some operation like: create file,read file,
rename file,delete file etc.
*/
const fs = require("fs")

//for write into a file
fs.writeFile('writeMe.txt','Hello World',(err)=>{
	if(err) throw err
	console.log("Content written into \"writeMe.txt\" file")
})

//for append into a file
fs.appendFile('appendMe.txt',"Hello Ji ",(err)=>{
	if(err) throw err;
	console.log('Content append into \"appendMe.txt\" file')
})

//for rename a file
fs.rename('rename.txt','newFile.txt',(err)=>{
	// console.log(err.errno)
	if(err.errno==-2){
		fs.open('rename.txt','w',(err)=>{
           if(err) throw err;
           fs.rename('rename.txt','newFile.txt',(err)=>{
           	if(err) throw err;
           	console.log('rename success')
           })
		})
	}
	console.log('Rename success...')
})

//for read a file
fs.readFile('readMe.html','utf-8',(err,data)=>{
	if(err) throw err;
	fs.writeFile('html.txt',data,(err)=>{
		if(err) throw err;
		console.log("written success...")
	})
})

// for unlink/delete a file
fs.unlink('deleteMe.txt',(err)=>{
	if(err) throw err;
	console.log("Deleted success")
})