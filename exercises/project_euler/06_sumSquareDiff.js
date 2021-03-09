class squareSumDifference {
  constructor(maximum) {
    this.maximum = maximum;
    this.sumOfSquares = 0;
    this.squareOfSum = 0;
  }
  data() {
    const arr = [];
    const store = [];
    while (this.maximum > 0) {
      arr.push(this.maximum--);
    }
    return arr;
  }

  square(x) {
    return x * x;
  }
}

const test = new squareSumDifference(10);
console.log(test.data());
