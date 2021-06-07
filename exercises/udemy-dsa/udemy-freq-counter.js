const arr = [1, 2, 3]
const arr2 = [9, 1, 4, 4]
let freqCounter = {}

for (let val of arr2) {
  freqCounter[val] = (freqCounter[val] || 0) + 1
}

console.log(freqCounter)

console.log(3 + 2)
