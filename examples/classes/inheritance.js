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

class AgeChildClass extends Age {
  constructor(name, birthYear, birthMonth) {
    super(name, birthYear);
    this.birthMonth = birthMonth;
  }
  generateDescription() {
    return `The year is ${super.currentYear()}`;
  }
}

const mattie = new AgeChildClass('Mattie', 1997, 'Feb');
console.log(mattie);
console.log(mattie.age);
console.log(mattie.generateDescription());
