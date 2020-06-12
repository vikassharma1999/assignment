const _ = require('lodash');
let arr = ['dog', 'cat', 'bird', 'hamster'];
arr = _.concat(arr, 'zebra', 'snake');
console.log(arr);

let friendlist = [
  { firstName: 'Jennifer', lastName: 'Lawrece', age: 28, gender: 'female' },
  { firstName: 'Brad', lastName: 'Pitt', age: 5, gender: 'male' },
  { firstName: 'Quentin', lastName: 'Tarantino', age: 54, gender: 'male' },
  { firstName: 'Kate', lastName: 'Winslet', age: 40, gender: 'female' },
];
let user = _.find(friendlist, { lastName: 'Pitt' });
console.log(user);

let overFifty = _.find(friendlist, (user) => user.age > 50);
console.log(overFifty);

let arr1 = ['football', 'cricket', 'tennis', 'squash'];
let arr2 = ['cricket', 'rugby', 'badminton', 'tennis'];

let commonElements = _.intersection(arr1, arr2);
// commonElements-> ["cricket", "tennis"]
console.log(commonElements);
