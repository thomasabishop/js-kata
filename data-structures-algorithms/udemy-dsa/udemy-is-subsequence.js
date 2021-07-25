function isSubsequence(substring, targetString) {
  let store = []
  let firstPointer = 0
  let secondPointer = 0
  while (firstPointer < targetString.length) {
    if (targetString[firstPointer] === substring[secondPointer]) {
      store.push(targetString[firstPointer])
      secondPointer++
    }
    firstPointer++
  }
  return store.join("") === substring ? true : false
}
