/*
Source: https://projecteuler.net/problem=1 
Instructions:
    *If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
  * Find the sum of all the multiples of 3 or 5 below 1000.
Status: 
*/

// Non-functional destructive approach
function eulerMultiples() {
  const store = [];
  let sum = 0;
  for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      store.push(i);
    }
  }
  store.forEach((element) => {
    sum += element;
  });
  return sum;
}

console.log(eulerMultiples());

const checkMultiple = (x) => (x % 3 === 0 || x % 5 === 0 ? x : null);

let store = 0;
recurse = function (x) {
  --x;
  store += x % 3 == 0 || x % 5 === 0 ? x : null;
  if (x >= 1) {
    recurse(x);
    return x;
  }
};
recurse(1000);

console.log(store);
//console.log(checkMultiple(countDown(2)));

function eulerMultiplesTwo(int) {
  let store = 0;
  countDown = function (x) {
    --x;
    store += x % 3 === 0 || x % 5 === 0 ? x : null;
    if (x >= 1) {
      countDown(x);
      return x;
    }
  };
  countDown(int);
  return store;
}

//console.log(eulerMultiplesTwo(10));
