const fs = require("fs");

const data = () => {
  return fs
    .readFileSync("src/2015/02/input.txt", { encoding: "utf-8", flag: "r" })
    .toString()
    .split("\n");
};

export function partTwo(input) {
  const calc = (arr) => {
    let sorted = arr.sort((a, b) => a - b);
    return sorted.reduce((a, b) => a * b) + (sorted[0] * 2 + sorted[1] * 2);
  };
  return input
    .map((x) => x.split("x"))
    .map((x) => calc(x))
    .reduce((a, b) => a + b);
}
