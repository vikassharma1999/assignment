let user = {
	'firstname':"Vikas",
	"lastname":"Sharma"
}

const handler = {
	get(target,property){
		console.log(`Property ${property} has been read`)
		return target[property]
	}
}
let proxyUser = new Proxy(user,handler)

console.log(proxyUser.firstname)
console.log(proxyUser.lastname)
user.firstname="Vicky"

console.log(proxyUser.firstname)
console.log(proxyUser.lastname)
proxyUser.firstname="cky"

console.log(proxyUser.firstname)
console.log(proxyUser.lastname)
console.log(user.firstname)