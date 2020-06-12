
let promise = new Promise((resolve, reject)=> { 
  const x = "Vikas Sharma"; 
  const y = "Vikas Sharma"
  if(x === y) { 
    resolve(); 
  } else { 
    reject(); 
  } 
}); 
  
promise. 
    then( ()=> { 
        console.log('Success, Your name is Vikas Sharma'); 
    }). 
    catch(function () { 
        console.log('Some error has occured'); 
    }); 
