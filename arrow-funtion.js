// ******************************************************** //
//   Arrow Function types and advantages
// ******************************************************** //


function getcity(){
return 'Dhaka';
}
console.log(getcity());

// saving function reference in a variable
const getcity2=function(){
return 'Dhaka2';
}
console.log(getcity2()); //calling by references


// using arrow function
// by droping function keyword
const getcity3= ()=>{
return 'Dhaka-Arrow';
}
console.log(getcity3()); 

// Advantages of arrow function
// 1. return 
// 2. variable handling 
// 3. scoping

// if function body is nothing but one return then === implicit return
// if one parameter then bracket can be dropped also
const getcityDropReturn = str => str.toLowerCase();
console.log(getcityDropReturn('Dhaka-drop-return-curlybrace')); 


//object return : first bracket is  needed
const getcityObjectReturn = str => ({city: str.toLowerCase() });
console.log(getcityObjectReturn('Dhaka-object-return-bracket'));


// *************** object containg  a function ***************** // 

const obj={
    city: 'Dhaka',
    getLocation: function (){
        return this.city;
    } 
}
console.log(obj.getLocation());


// arrow function can't define 'this' keyword, 'this' keyword doesn't refer the city object here,       
//if we dont use dynamic content then can use 'this' keyword   
const objWorng={
    city: 'Dhaka',
    getLocationWrongWay: () => {
        return this.city;            
    } 
}
console.log(objWorng.getLocationWrongWay()); // return undefined 
  