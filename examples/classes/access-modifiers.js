class GradeBook {
  #grades = [];

  addGrade(int) {
    this.#grades.push(int);
  }

  get average() {
    let average = 0;
    for (const grade of this.#grades) {
      average += grade;
    }
    average = average / this.#grades.length;
    return average;
  }
}

const book = new GradeBook();
book.addGrade(45);
book.addGrade(56);

console.log(book.average);
