// ******************************************************** //
// var, let, const type
// ******************************************************** //

var city1='Dhaka';  
console.log(city1);

let city2='Sylhet'; //
console.log(city2);

const city3='Chitt';
console.log(city3);

//var city=undefined ....
//cz js take the var in the top and assign undefined
console.log(city4);
var city4='Comilla';

//city is not defined
// same to const
console.log(city5);
let city5='ss';


// ******************************************************** //
// var is confined into only function scoping but
// let and const are confined into every scoping
// ******************************************************* //


// cant access cityfunc variable as var is always follow function scoping but
// let and const can't be accessed out of scope
function getcity(){
  let cityfunc='dhaka';
  console.log(cityfunc);
}
console.log(cityfunc); 
getcity();

// var can be accessed from anywhere if it's not in only function scope
if(1>0){
  var cityif='rajshahi'; 
}
console.log(cityif);


// let/const can't be accessed from anywhere if it's declared in any scope
if(1>0){
  let cityiflet='rajshahi';  
}
console.log(cityiflet);
