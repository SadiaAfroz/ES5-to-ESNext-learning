//****************************** Enhanced Object literals ******************

const city = "Dhaka";
const country = "BD";

const address = {
  ct: city,
  cntry: country
};

console.log(address);

// if key and value are same variable name
const address2 = {
  city,
  country
};
console.log(address2);

// if want to dynamically assign key name
const cityKey = "city";
const address3 = {
  [cityKey]: city,
};
console.log(address3);