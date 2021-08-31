const bottle = { color: 'yellow', hold: 'water', price: 50, isCleaned: true };
//  getting all properties names
const keys = Object.keys(bottle);
console.log(keys);

// get all property values
const values = Object.values(bottle);
console.log(values);

// collect property data by pairs
const pairs = Object.entries(bottle);
console.log(pairs);


// seal property
Object.seal(bottle);
//  delete property
delete bottle.isCleaned;
console.log(bottle);


// change the property value
bottle.price = 100;
console.log(bottle);


bootle.freeze(bootle);


