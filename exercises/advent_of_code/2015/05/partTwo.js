const testOne = "qjhvhtzxzqqjkmpb";
const testTwo = "aaa";

const repeatB = (str) => {
  let arr = str.split("");
  return arr.some((x, i) => x === arr[i]) ? 1 : 0;
};

const repeats = (str) => {
  let arr = str.split("");
  return arr.some((x, i) => x === arr[i] && x != arr[i + 1]) ? 1 : 0;
};

const repeatA = (str) => {
  const overlap = /([a-zA-Z])\1/;
  const m = str.match(/([a-zA-Z]).\1/g).length;
  if (m > 0) {
    return overlap.test(m) ? 0 : 1;
  }
};

console.log(repeatA(testTwo));
