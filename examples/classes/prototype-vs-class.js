/* Using prototypes */

function FindAge(name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
  this.currentYear = function () {
    return new Date().getFullYear();
  };
  this.age = function () {
    return this.currentYear() - this.birthYear;
  };
  this.isMillenial =
    this.birthYear > 1981 && this.birthYear < 1994 ? true : false;
}

const martha = new FindAge('Martha', 1997);
const thomas = new FindAge('Thomas', 1988);

// Add an additonal property to the constructor, available to all subsequent and preexisting instances of the Objects created from the constructor function:

FindAge.prototype.surname = null;
martha.surname = 'Cronin';

console.log(martha);

console.log(martha.isMillenial);

/* Using class */

class Age {
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

const mary = new Age('Mary', 1959);

/* Comparing object */
// Everything we can do with a class, we can now do with an object:
// get, set, methods without explicit keys etc
const objectAge = {
  name: 'Thomas',
  yearOfBirth: 1988,
  currentYear: function () {
    return new Date().getFullYear();
  },
  currentYearClassStyle() {
    return new Date().getFullYear();
  },
  get age() {
    return this.currentYear() - this.yearOfBirth;
  },
};

console.log(objectAge.currentYear());
console.log(objectAge.currentYearClassStyle());
console.log(objectAge.age);
