const fs = require("fs");

const data = () => {
  return fs
    .readFileSync("src/2015/02/input.txt", { encoding: "utf-8", flag: "r" })
    .toString()
    .split("\n");
};

export function partOne(input)

{
  const calculateArea = function (w, h, l) {
    const a = l * w;
    

	  const b = w * h;
    const c = h * l;
    const surplus = Math.min(a, b, c);
    return 2 * (a + b + c) + surplus;
  };

  return input
    .map((x) => x.split("x"))
    .map((x) => calculateArea(...x))
    .reduce((a, b) => a + b);
}
