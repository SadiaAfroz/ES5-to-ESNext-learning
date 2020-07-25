// importing from module.js
const mymodule=require('./module.js'); // 1. if normal way exported
import mymodule  from './module.js' // 2.
import {city,getcity}  from './module.js' // 3. 

console.log(mymodule.city); // 1 & 2
console.log(city); // 3

// import React , {Component} from 'react';  // for built-in module no './' not needed