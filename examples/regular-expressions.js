const str = "Today is Monday";
const regex = new RegExp("y");

console.log(str.match(/(y)/)[0]);
const textNumbersChars = '128AEc01Jc';
const regex = /\d+/g;
const integers = textNumbersChars.match(regex);
//console.log(integers);

const str = 'the time is near';
console.log(str.indexOf('i')); // 5
console.log(str.indexOf('time')); // 4
console.log(str.indexOf('i', 8)); // 9
console.log(str.lastIndexOf('i')); // 9inputArr = [
  "ugknbfddgicrmopn",
  "aaa",
  "jchzalrnumimnmhp",
  "haegwjzuvuyypxyu",
  "dvszwmarrgswjxmb",
];

const vowels = /[aeiou]/g;
const banned = /(ab)|(cd)|(pq)|(xy)/g;

function parseStringArr(arr) {
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
    countMatches(str, banned) != 1 &&
    countMatches(str, vowels) >= 3 &&
    repeats(str) >= 1
      ? 1
      : 0;

  return arr.map((x) => checkNice(x)).reduce((a, b) => a + b);
}

console.log(parseStringArr(inputArr));

//console.log(inputArr.map((x) => checkNice(x)).reduce((a, b) => a + b));
// Inputs
// Data
const str = "aaiiab";
const strTwo = "efsfcdweffdxysdffpq";

const vowels = [/a/g, /e/g, /i/g, /o/g, /u/g];
const banned = [/ab/g, /cd/g, /pq/g, /xy/g];

// Functions
const split = (str) => str.split("");

const filterString = (properties, inpString) =>
  properties.map((x) => inpString.match(x));

const countMatches = (arr) =>
  arr
    .filter((x) => x != null)
    .map((y) => y.length)
    .reduce((a, b) => a + b);

// Outputs

const vowelTest = filterString(vowels, str);
const bannedTest = filterString(banned, str);

console.log(bannedTest);
const repeatTest = split(str);
//console.log(split(str).some((x, index) => x === repeatTest[index + 1]));

function combinedParse(inp) {
  if (
    countMatches(filterString(banned, inp)) === 0 &&
    countMatches(filterString(vowels, inp)) >= 3 &&
    split(inp).some((x, index) => x === repeatTest[index + 1])
  ) {
    return 1;
  } else {
    return 0;
  }
}

console.log(combinedParse(str));
