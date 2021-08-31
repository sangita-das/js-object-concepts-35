
const bottle = { color: 'yellow', hold: 'water', price: 50, isCleaned: true };

/* 
for (let i = 0; i < 10; i++){}

for (const num of numbers){}   //array 
for(const prop in student){}   //object
*/

for (const prop in bottle) {
  //  getting all properties names
  // console.log(prop);
  // get all property values
  // console.log(bottle[prop]);
  // collect property data by pairs
  // console.log(prop, bottle[prop]);
}


// find the array
const keys = Object.keys(bottle);
console.log(keys);

for (const prop of keys) {
  console.log(prop, bottle[prop]);
}



// advance
const entries = Object.entries(bottle);
console.log(entries);
const [key, value] = ['color', 'yellow']
for (const [key, value] of Object.entries(bottle)) {
  console.log(key, value);
}
