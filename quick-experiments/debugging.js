function debugExperiment(n) {
  let x = n * 5;
  return x * x;
}

let arr = [1, 2, 3, 4, 5, 6];

for (let ele of arr) {
  console.log(debugExperiment(ele));
}
