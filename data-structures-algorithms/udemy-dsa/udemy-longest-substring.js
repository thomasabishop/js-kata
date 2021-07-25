function longestSubstring(str) {
  const globalStore = []
  let temporaryStore = []
  for (let i = 0; i < str.length; i++) {
    let repeatedChars = temporaryStore.includes(str[i])
    if (!repeatedChars) {
      temporaryStore.push(str[i])
    } else {
      globalStore.push(temporaryStore)
      temporaryStore = []
    }
  }
  // Ensure last substring transfers to the global store
  globalStore.push(temporaryStore)
  console.log(globalStore)
  for (const subarr of globalStore) {
    return Math.max(subarr.length)
  }
}

const string = "abcdaaefgghijkl"
/**
 * Strings =  abcd, a, aefg, g, ghijkl
 */

//console.log(longestSubstring("")) // 0
//console.log(longestSubstring("rithmschool")) // 7
console.log(longestSubstring("thisisawesome")) // 6
console.log(longestSubstring("thecatinthehat")) // 7

/**
 * My solution works but it only works out adjacent strings.
 * There is no limitation like this, it doesn't matter if the chars in the string are not consequtive
 */
