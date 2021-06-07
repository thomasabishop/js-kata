function charCountFirst(word) {
  const chars = word.split('');
  const characterCount = new Map();
  for (const char of chars) {
    characterCount.set(char, 0);
  }
  for (const char of chars) {
    if (characterCount.has(char)) {
      characterCount.set(char, characterCount.get(char) + 1);
    }
  }
  return Object.fromEntries(characterCount);
}

const input = 'Hi 324, how are you?!';

function characterCount(str) {
  const charCount = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      charCount[char] = ++charCount[char] || 1;
    }
  }
  return charCount;
}
console.log(characterCount(input));
