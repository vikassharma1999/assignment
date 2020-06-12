//A nodejs module which used to clearely read web address
const url = require("url")
const adr = 'http://localhost:8080/default.htm?year=2017&month=february';
let q = url.parse(adr,true)
console.log(q)
console.log(q.host)
console.log(q.pathname)
console.log(q.search)

const qdata = q.query
console.log(qdata)
console.log(`${qdata.year} ${qdata.month}`)