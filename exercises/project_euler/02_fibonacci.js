/* const arr = [0, 1];

var i = 1;

while (arr.reduce((a, b) => a + b) < 200) {
  arr.push(arr[i] + arr[i - 1]);
  i++;
}

console.log(arr) */

function fibonacci(start, maxLength, arr) {
  let i = 0;

  while (arr.length < maxLength) {
    arr.push(arr[i] + arr[i - 1]);
    i++;
  }
  let countEven = 0;
  arr.forEach((element) => {
    if (element % 2 === 0) {
      countEven += element;
    }
  });
  return countEven;
}

console.log(fibonacci(1, 400, [0, 1]));
