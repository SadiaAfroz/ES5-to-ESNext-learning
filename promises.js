//****************************** Promises ******************
// for database call or API use

console.log("something1");
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 1");
  }, 5000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 2");
  }, 3000);
});
console.log(p1);
// console:
// Promise {<pending>}
// __proto__: Promise
// [[PromiseStatus]]: "pending"
// [[PromiseValue]]: undefined

console.log("something2");

p1.then((data) => data.toLowerCase())  // if resolved then
  .then((data) => console.log(data[0])) 
  .catch((err) => console.error(err)); // if rejected catch
console.log("something3");

Promise.all([p1, p2]).then((data) => console.log(data)); // all promise resolved
Promise.race([p1, p2]).then((data) => console.log(data)); // use race for only fast one to be resolved
console.log("something4");