const ar = ["2x2x2", "5x6x2"];

const split = ar.map((ele) => ele.split("x"));

/* const splitDestructure = (ar) => {
  const test = ar.map((x) => (let[(a, b, c)] = x));
  return test;
}; */

const destructureInLoopDemo = (arr) => {
  const result = [];
  for (const element of arr) {
    const [a, b, c] = element;
    result.push((a * b) / c);
  }
  return result;
};

console.log(destructureInLoopDemo(split));

//console.log(split);
//console.log(splitDestructure(split));
