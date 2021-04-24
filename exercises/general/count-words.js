/*
 * For paragraph string, return:
 *  (a) total word count (including repeated words)
 *  (b) total number of words that occur more than once
 *  (c) the number of unique words overall
 *  (d) first, second, third most repeated words, in order
 *  (e) a list of the words that are only used once
 * (Words must be parsed as case insensitive.)
 */

let paragraph =
  "The boy walked down the street in a    carefree way, playing   without notice of what was about him. He didn't hear the sound of the car as his ball careened into the road. He took a step toward it, and in doing so sealed his fate.It was a concerning development that he couldn't get out of his mind. He'd had many friends throughout his early years and had fond memories of playing with them, but he couldn't understand how it had all stopped. There was some point as he grew up that he played with each of his friends for the very last time, and he had no idea that it would be the last.";

// Capture punctuation and double-spacing:
const strip = [/\.|\,/gi, /\s{2,}/gi];

// Remove punctuation and double-spacing (for a clean array and also to avoid problems when converting to regex later):
strip.forEach((target) => (paragraph = paragraph.replace(target, ' ')));
paragraph = paragraph.replace(/[A-Z]/gi, (match) => match.toLowerCase());

// Create array of all words:
const wordArrayAll = paragraph.split(/\s/);

// Calculate Task (a)
const solutionA = wordArrayAll.length;

// Strip duplicates from word array, by converting from array to set reference type
const wordArrayUnique = new Set();
for (const word of wordArrayAll) {
  wordArrayUnique.add(word);
}
// Unfortunate hack to remove the false entry of apostrophied words
wordArrayUnique.delete('');

// Calculate Task (c)
const solutionC = wordArrayUnique.size;

function countRepeatedWords(arrayOfWords, para) {
  const stringToRegex = (str) => new RegExp(str, 'g');
  const countInstances = (regex) => para.match(regex);
  const wordIndex = [];
  for (const ele of arrayOfWords) {
    let word = ele;
    let wordAsRegex = stringToRegex(word);
    wordIndex.push({
      word: word,
      count: countInstances(wordAsRegex).length,
    });
  }
  return wordIndex;
}

// Generate index of count for each word
const wordIndex = countRepeatedWords(wordArrayUnique, paragraph);

// Calculate Tasks (b) and (e)
let solutionB = 0;
let solutionE = 0;

for (const word of wordIndex) {
  if (word.count === 1) {
    solutionE++;
  } else if (word.count > 1) {
    solutionB++;
  }
}

// Sort by most most repeated
let sorted = wordIndex.sort((a, b) => b.count - a.count);

// Calculate Task (d)
const solutionD = [sorted[0].word, sorted[1].word, sorted[2].word];

const solution = {
  totalWordCount: solutionA,
  totalWordsOccuringMoreThanOnce: solutionB,
  uniqueWordsCount: solutionC,
  mostRepeatedWords: solutionD,
  totalWordsOccuringOnlyOnce: solutionE,
};

console.log(solution);
