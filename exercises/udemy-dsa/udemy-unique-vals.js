const test1 = [1, 1, 1, 1, 1, 2] // 2
const test2 = [-2, -1, 0, 1] // 4
const test3 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13] // 7
const test4 = [] // 0

function uniqueValues(arr) {
  if (!arr.length) {
    return 0
  } else {
    let count = 1
    let left = 0
    let right = 1
    for (right; right < arr.length; right++) {
      if (arr[left] !== arr[right]) {
        count++
      }
      left++
    }

    return count
  }
}

console.log(uniqueValues(test1))
console.log(uniqueValues(test2))
console.log(uniqueValues(test3))
console.log(uniqueValues(test4))
