function averagePair(arr, target) {
  const average = (x, y) => (x + y) / 2
  if (Array.isArray(arr)) {
    arr = arr.sort((a, b) => a - b)
    let left = 0
    let right = arr.length - 1
    while (left < right) {
      if (average(arr[left], arr[right]) === target) {
        return true
      } else if (!(average(arr[left], arr[right]) === target)) {
        left++
      } else {
        right--
      }
      return false
    }

    //  return false
  }
}

console.log(averagePair([1, 2, 3], 2.5))
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1))
