//BIND method() create a new function
let pokemon = {
	firstname:'Pika',
	lastname:'Chu',
	getPokeName:function(){
		let fullname = this.firstname+' '+this.lastname
		return fullname;

	}
}
let pokemonName = function(snack="cheese",hobby="play cricket"){
	console.log(this.getPokeName()+' I choose you!')
    console.log(this.getPokeName()+' loves '+snack+' and '+hobby)
}

let logPokemon = pokemonName.bind(pokemon)
console.log(logPokemon)
logPokemon()
logPokemon('sandwich','algorithms')
//Call method
pokemonName.call(pokemon,'sushi','algorithms')
pokemonName.apply(pokemon,['sushi','algorithms'])