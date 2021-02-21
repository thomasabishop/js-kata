const fs = require("fs");

const data = () => {
  return fs
    .readFileSync("src/2015/05/input.txt", { encoding: "utf-8", flag: "r" })
    .toString()
    .split("\n");
};

export function partOne(arr) {
  const vowels = /[aeiou]/g;
  const banned = /(ab)|(cd)|(pq)|(xy)/g;

  const countMatches = (str, regex) => {
    let m = str.match(regex);
    return m != null ? m.length : 0;
  };

  const repeats = (str) => {
    let arr = str.split("");
    return arr.some((x, i) => x === arr[i + 1]) ? 1 : 0;
  };

  const checkNice = (str) =>
    countMatches(str, banned) === 0 &&
    countMatches(str, vowels) >= 3 &&
    repeats(str) >= 1
      ? 1
      : 0;

  return arr.map((x) => checkNice(x)).reduce((a, b) => a + b);
}

console.log(partOne(data()));
