const _ = require('lodash');
/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

/* First solution */
function program(x) {
  const divisors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sum = (arr) => arr.reduce((a, b) => a + b);
  var store = [];
  divisors.forEach((ele) => {
    if (x % ele === 0) {
      store.push(ele);
    }
  });
  if (sum(divisors) === sum(store)) {
    console.log([store, x]);
  }
}

function runProgram() {
  for (var i = 1; i < 580000000; i++) {
    program(i);
  }
}

//runProgram();
//console.log(Math.min(232792560, 465585120));
// Solution = 232792560

/* Second, better solution */

const divisors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function recurse(integer) {
  //  const divisors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sum = (arr) => arr.reduce((a, b) => a + b);
  const pass = divisors.filter((divisor) => integer % divisor === 0);
  if (_.isEqual(sum(divisors), sum(pass))) {
    console.log(integer);
  } else {
    recurse(integer + 1);
  }
}

recurse(1);
/*
const runAsync = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(recurse(1)), 30000);
});

runAsync.then((value) => console.log(value));
*/
