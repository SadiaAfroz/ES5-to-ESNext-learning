//************************* Destructuring assignments *********************************//

const address = {
    house: {
      no: 44,
      village: "somewhere"
    },
    city: "Dhaka",
    country: "BD",
    region: "Asia"
  };
  
  const cityvar = address.city;
  
  // object destructuring....
  const { country } = address;
  console.log(country);
  
  const { city: currentCity } = address; // can do this if want to assign any property in another variable
  console.log(currentCity, country);
  
  const {
    house: { village }
  } = address;
  console.log(village);
  //console.log(house); // willn't work
  
  const { house } = address;
  console.log(house); // will work
  
  //****************************** Array destructuring ******************8
  const arr = ["dhaka", 1, 2, 3, 4, 5];
  
  const [first, second] = arr;
  console.log(first, second);
  
  const [fst1, , thrd3] = arr; // skipping 2nd element
  console.log(fst1, thrd3);
  
  //****************************** Function destructuring ******************8
  
  function printCity({ city }) {
    // parameter level destructuring
    console.log(city);
  }
  
  printCity(address);
  
  function printNumber([first = "sylhet", second]) {
    // parameter level destructuring
    console.log(first, second);
  }
  
  printNumber(arr);
  
  const arr2 = [undefined, 4, 5]; //array with undefined element
  printNumber(arr2);