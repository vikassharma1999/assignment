
// normal array concat() method 
let arr = [1,2,3]; 
let arr2 = [4,5]; 
  
arr = arr.concat(arr2); 
  
console.log(arr); // [ 1, 2, 3, 4, 5 ] 


// spread operator doing the concat job 
let arrnew = [1,2,3]; 
let arrnew2 = [4,5]; 
  
arrnew = [...arrnew,...arrnew2]; 
console.log(arrnew); // [ 1, 2, 3, 4, 5 ] 



// copying without the spread operator 
let arr_ = ['a','b','c']; 
let arr_2 = arr_; 
  
console.log(arr_2); // [ 'a', 'b', 'c' ] 

// changed the original array 
  
arr_2.push('d'); 
  
console.log(arr_2); 
console.log(arr_); // even affected the original array(arr)  


// spread operator for copying  
let arrs = ['a','b','c']; 
let arrs2 = [...arrs]; 
  
console.log(arrs); // [ 'a', 'b', 'c' ] 
console.log(arrs2)
arrs2.push('d'); //inserting an element at the end of arr2 
  
console.log(arrs2); // [ 'a', 'b', 'c', 'd' ] 
console.log(arrs); // [ 'a', 'b', 'c' ] 


// normally used expand method 
let arre = ['a','b']; 
let arre2 = [arre,'c','d']; 
  
console.log(arre2); // [ [ 'a', 'b' ], 'c', 'd' ] 


// expand using spread operator 
  
let arres = ['a','b']; 
let arres2 = [...arres,'c','d']; 
  
console.log(arres2); // [ 'a', 'b', 'c', 'd' ] 



const user1 = { 
    name: 'Jen', 
    age: 22 
}; 
  
const clonedUser = { ...user1 }; 
console.log(clonedUser); 
const user2 = { 
    name: "Andrew", 
    location: "Philadelphia" 
}; 
  
const mergedUsers = {...user1, ...user2}; 
console.log(mergedUsers) 