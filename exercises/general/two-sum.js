/*
 * Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */

// Example [2,7,11,15], target: 9;
// For each element in the array, subtract element from target, filter for match

function twoSum(nums, target) {
  // Populate hash table with element, index key-value pairs
  const hashTable = new Map();
  for (let i = 0; i < nums.length; i++) {
    hashTable.set(nums[i], i);
  }

  for (let j = 0; j < nums.length; j++) {
    let diff = target - nums[j];
    if (hashTable.has(diff) && hashTable.get(diff) != j) {
      return [j, hashTable.get(diff)];
    }
  }
}

const testArrOne = [2, 7, 11, 15];
const testArrTwo = [3, 2, 4];
const testArrThree = [3, 3];

// Test one
console.log(twoSum(testArrOne, 9)); //  [0,1] correct
console.log(twoSum(testArrTwo, 6)); // [0,0] incorrect
console.log(twoSum(testArrThree, 6)); // [0,0] incorrect
