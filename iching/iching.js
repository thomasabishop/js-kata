const castIChing = {
  states: [2, 3],
  hexagramNumbers: [],
  lineRepresentations: {
    6: '-x-',
    7: '---',
    8: '- -',
    9: '-o-',
  },
  get random() {
    return Math.floor(Math.random() * Math.floor(2));
  },
  get line() {
    let line = [];
    for (let i = 1; i <= 3; i++) {
      line.push(this.states[this.random]);
    }
    console.log(line);
    line = line.reduce((value, accumulator) => value + accumulator);
    return line;
  },
  get castHexagram() {
    for (let i = 1; i <= 6; i++) {
      this.hexagramNumbers.push(this.line);
    }
    return this.hexagramNumbers;
  },
  get hexagramGraphic() {
    for (const line of this.hexagramNumbers) {
      console.log(this.lineRepresentations[line.toString()]);
    }
  },
};

//castIChing.castHexagram;
//console.log(castIChing.hexagramGraphic);

class castHexagram {
  #states = [2, 3];
  #hexagramNumbers = [];

  get randomInteger() {
    return Math.floor(Math.random() * Math.floor(2));
  }

  get line() {
    let line = [];
    for (let i = 1; i <= 3; i++) {
      line.push(this.#states[this.randomInteger]);
    }

    console.log(line);
    line = line.reduce((value, accumulator) => value + accumulator);
    return line;
  }
  get hexagram() {
    for (let i = 1; i <= 6; i++) {
      this.#hexagramNumbers.push(this.line);
    }
    return this.#hexagramNumbers;
  }
}

const test = new castHexagram();

console.log(test.hexagram);
