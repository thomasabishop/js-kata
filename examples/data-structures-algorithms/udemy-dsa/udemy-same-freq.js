function sameFrequency(intOne, intTwo) {
  let a = intOne.toString()
  let b = intTwo.toString()
  if (a.length != b.length) {
    return false
  } else {
    let freqCounter1 = {}
    let freqCounter2 = {}
    for (let digit of a) {
      freqCounter1[digit] = (freqCounter1[digit] || 0) + 1
    }
    for (let digit of b) {
      freqCounter2[digit] = (freqCounter2[digit] || 0) + 1
    }
    for (let key in freqCounter1) {
      if (!(key in freqCounter2)) {
        return false
      }
      if (freqCounter2[key] != freqCounter1[key]) {
        return false
      }
    }
    return true
  }
}

console.log(sameFrequency(182, 281))
console.log(sameFrequency(34, 14))
console.log(sameFrequency(3589578, 5879385))
console.log(sameFrequency(22, 222))
