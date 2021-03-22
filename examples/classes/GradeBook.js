class GradeBook {
  constructor() {
    this.grades = [];
  }
  addGrade(int) {
    this.grades.push(int);
  }

  get average() {
    let average = 0;
    for (const grade of this.grades) {
      average += grade;
    }
    average = average / this.grades.length;
    return average;
  }
}

const aBook = new GradeBook();
aBook.addGrade(5);
aBook.addGrade(7);
console.log(aBook.grades);
console.log(aBook.average);
