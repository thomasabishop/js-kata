/* Keeping a running count */

// Instead of:

function longWinded() {
  const store = [];
  for (let i = 0; i <= 3; i++) {
    store.push(i);
    // i.e some iterative process
  }
  return store.reduce((a, b) => a + b);
}

// Do

function concise() {
  let store = 0;
  for (let i = 0; i <= 3; i++) {
    store++;
  }
  return store;
}

console.log(concise());

// Or more concisely still:
function concise2() {
  let store = 0;
  while (store <= 5) {
    store++;
  }
  return store;
}

console.log(concise2());

///////////////////////////////////////

// For concision or ad hoc things, you can include declarations as parameters
function declarationAsParameter(inp, val = 3) {
  return inp * val;
}

console.log(declarationAsParameter(3));

// Rather than:

function declarationAsVariable(inp) {
  const val = 3;
  return inp * val;
}

class Age {
  name;
  birthYear;
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }

  currentYear() {
    return new Date().getFullYear();
  }

  get age() {
    return this.currentYear() - this.birthYear;
  }
}

const me = new Age('Benny Harvey', 1988);
//console.log(me.age);

const age = {
  name: 'Thomas',
  yearOfBirth: 1988,
  currentYear: 2021,
  ageNow: function () {
    return this.currentYear - this.yearOfBirth;
  },
};

//console.log(age.ageNow());

const sampleArr = [1, 2, 3];
const emptyArr = [];

const mapFunc = (arr) => {
  if (Array.isArray(arr) && arr.length) {
    return arr.map((x) => x + 1);
  } else {
    throw 'Array is empty';
  }
};

console.log(mapFunc(true));

console.log(mapFunc(emptyArr));
