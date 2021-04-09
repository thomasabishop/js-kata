const thomas = {
  name: 'Thomas',
  yearOfBirth: 1988,
  currentYear: 2021,
  age() {
    return this.currentYear - this.yearOfBirth;
  },
};

// FOR IN LOOP

for (const prop in thomas) {
  console.log(thomas[prop]);
}

// OBJECT.KEYS OBJECT.VALUES

// Object keys/values
// Returns data in array format

console.log(Object.keys(thomas)); //[ 'name', 'yearOfBirth', 'currentYear', 'age' ]
console.log(Object.values(thomas)); // [ 'Thomas', 1988, 2021, [Function: age]

// Returns an array of two-value sub arrays, one for each key-value pair
console.log(Object.entries(thomas));

// [
//   [ 'name', 'Thomas' ],
//   [ 'yearOfBirth', 1988 ],
//   [ 'currentYear', 2021 ],
//   [ 'age', [Function: age] ]
// ]

// OBJECT.CREATE

//  This allows us to create a new object based on a previously created object's template, without classes.

const martha = Object.create(thomas);
console.log(martha);
martha.yearOfBirth = 1997;

console.log(martha);
// This can be used to refer to an objects context outside of the object viz
martha.retrieveName = retrieveName;
function retrieveName() {
  console.log(this.name);
}

console.log(martha.retrieveName());

// Add define properties method
