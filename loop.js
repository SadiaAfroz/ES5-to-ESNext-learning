//****************************** Loop ******************

// ES5-> for each loop
// ES2015-> for of loop

const arr = ["dhaka", 1, 2, 3, 4, 5];
arr.forEach((el) => console.log(el));
// inside forEach no break applicable
// here it comes for of loop
for (const el of arr) {
  if (el == 2) break;
  console.log(el);
}

//ES2017 -> arr.entries()
// elements with index
for (const el of arr.entries()) {
  console.log(el);
}

// if want to access index and element separately
for (const [i, el] of arr.entries()) {
  console.log(i, el);
}
