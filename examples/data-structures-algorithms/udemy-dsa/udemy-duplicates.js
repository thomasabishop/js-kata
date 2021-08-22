// Frequency counter solution

function areThereDuplicates(...input) {
  let frequencyCounter = {}
  input.forEach((item) => {
    // If item doesn't exist as a key in the counter, make 0 the val and add one
    // If item already exists as key in the counter, increment it by one
    frequencyCounter[item] = (frequencyCounter[item] || 0) + 1
  })
  let count = Object.values(frequencyCounter)
  if (count.some((ele) => ele > 1)) {
    return true
  } else {
    return false
  }
}

//console.log(areThereDuplicates(1, 2, 3))
//console.log(areThereDuplicates(1, 2, 2))
//console.log(areThereDuplicates("a", "b", "c", "a"))

// Multiple pointers solution

function areThereDuplicatesPointer(...input) {
  let start = 0
  let next = 1
  while (next < input.length) {
    let same = input[start] === input[next]
    if (same) {
      return true
    }
    start++
    next++
  }

  return false
}
console.log(areThereDuplicatesPointer(1, 2, 3))
console.log(areThereDuplicatesPointer(1, 2, 2))
console.log(areThereDuplicatesPointer("a", "b", "c", "a"))
