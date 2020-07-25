const getcity=function(city){
    return city.toLowerCase();
}
console.log(getcity('Dhaka')); 


const getcityDefault1=function(city){
    city=city || 'Dhaka'
    return city.toLowerCase();
}
console.log(getcityDefault1()); 


const getcityDefault2=function(city='Sylhet'){
    return city.toLowerCase();
}
console.log(getcityDefault2()); 
//if null passed then it will not be considered for default value
console.log(getcityDefault2(null)); 


const getAddress=function(city='Sylhet', country='Bd'){
    return city.toLowerCase()+ country.toUpperCase();
}
console.log(getAddress()); 
