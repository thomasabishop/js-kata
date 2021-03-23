/* Using prototypes */
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

class Dummy {
  aNum = 4;
  get square() {
    return this.aNum * this.aNum;
  }
}

let dummer = new Dummy();
console.log(dummer.square);
