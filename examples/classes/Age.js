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

class FindAgeTwo extends FindAge {
  constructor(name, birthYear, birthMonth) {
    super(name, birthYear);
    this.birthMonth = birthMonth;
  }
}

const mattie = new FindAgeTwo('Mattie', 1997, 'Feb');
console.log(mattie.birthYear);
console.log(mattie.birthMonth);