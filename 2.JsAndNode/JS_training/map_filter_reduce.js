
var officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
];

//using forEach()
let officersIds = []
officers.forEach(officer=>officersIds.push(officer.id))
console.log(officersIds)


//map
let officersId = officers.map(officer=>officer.id)
console.log(officersId)


//reduce
let pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  }
];
let totalExp = pilots.reduce((accumulator,pilot)=>{
   return accumulator+pilot.years
},0)
console.log(totalExp)

//which pilot is most experienced
let mostExp = pilots.reduce((accumulator,pilot)=>{
   return (accumulator.years || 0)>pilot.years ? accumulator:pilot
},{})
console.log(mostExp)


//filter
let newPilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  }
];

let rebels = newPilots.filter((pilot)=>{
	return pilot.faction === 'Rebels'
})
console.log(rebels)

let empire = newPilots.filter((pilot)=>{
	return pilot.faction === 'Empire'
})
console.log(empire)



//exercise

let personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

//objective: get the total score of force users only.
let forceUsers = personnel.filter(p=>p.isForceUser===true)
console.log(forceUsers)

let scores = forceUsers.map(force=>force.pilotingScore+force.shootingScore)
console.log(scores)
let totalScore = scores.reduce((acc,score)=>acc+score,0)
console.log(totalScore)