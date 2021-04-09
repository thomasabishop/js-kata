export default class CastHexagram {
  #states = [2, 3];
  #hexagramNumbers = [];

  randomInteger() {
    return Math.floor(Math.random() * Math.floor(2));
  }

  get line() {
    let line = [];
    for (let i = 1; i <= 3; i++) {
      line.push(this.#states[this.randomInteger()]);
    }
    //console.log(line);
    line = line.reduce((value, accumulator) => value + accumulator);
    return line;
  }

  get lineTwo() {
    let line;
    for (let i = 1; i <= 3; i++) {
      line += this.#states[this.randomInteger()];
      console.log(line);
    }
    //line = line.reduce((value, accumulator) => value + accumulator);
    return line;
  }

  hexagram() {
    for (let i = 1; i <= 6; i++) {
      this.#hexagramNumbers.unshift(this.line);
    }
    return this.#hexagramNumbers;
  }
}

let test;
let test = new CastHexagram();

console.log(test.lineTwo);
