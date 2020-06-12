let map = new Map()
map.set("1","one string")
map.set(1,"one integer")
map.set(false,"false")
map.set("Age",18)

console.log(map.size)
console.log(map.get("1"))
console.log(map.get(1))
console.log(map.get(false))
console.log(map.get("Age"))

console.log(map["1"])

const  obj = {
	"name": "Vikas "
}
map.set(obj,123)
console.log(map.get(obj))

console.log(map.keys())
console.log(map.values())
console.log(map.entries())