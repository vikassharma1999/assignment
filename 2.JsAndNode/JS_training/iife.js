//An IIFE (Immediately Invoked Function Expression)
// is a JavaScript function that runs as soon as it
// is defined.

(function(){
	let counter=0;

counter++;
console.log(counter)})()

function inc_counter(){
	let counter=0;
	counter++;
	console.log(counter)
}
inc_counter()