/*
 * Given an integer array `nums`, return true if any value appears at least twice in the array,and return false if every element is distinct.
 * Examples:
 *  [1,2,3,1] = true
 *  [1,2,3,4] = false
 */

function containsDuplicate(arr) {
  for (let i = 0; i <= arr.length; i++) {
    return arr.includes(arr[i], i + 1);
  }
}

const testOne = [1, 2, 3, 1];
const testTwo = [1, 2, 3, 4];
const testThree = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(testOne));
console.log(containsDuplicate(testTwo));
console.log(containsDuplicate(testThree));
