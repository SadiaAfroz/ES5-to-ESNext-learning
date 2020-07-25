//************ Spread & Rest ******************
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6]; // catenation
console.log(arr2);

const arr3 = [...arr1]; // copy
console.log(arr3);

const str = "My name is Sadia";
const str2 = [1, 2, ...str]; // string concatanation by character
console.log(str2);

const obj = {
  city: "dhaka",
  country: "BD"
};

const obj1 = {
  ...obj,
  address: "Dhanmondi"
};

console.log(obj1);

const [first, second, ...others] = [1, 2, 3, 4, 5]; // rest operator comes as an array
console.log(first, second);
console.log(others);

const { a, b, ...others3 } = {
  // rest operator comes as an object
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
console.log(others3);
