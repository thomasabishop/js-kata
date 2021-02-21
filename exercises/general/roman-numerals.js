/* Given a roman numeral, convert it to an integer. */

const roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function convertRoman(numeral) {
  const numeralArray = numeral.split('');
  const count = [];
  let i = 0;
  function checkAtypical(letter, subsequent) {
    if (letter === 'I' && subsequent === 'V') {
      count.push(4);
      numeralArray.splice(subsequent, 1);
    } else if (letter === 'I' && subsequent === 'X') {
      count.push(9);
      numeralArray.splice(subsequent, 1);
    } else if (letter === 'X' && subsequent === 'L') {
      count.push(40);
      numeralArray.splice(subsequent, 1);
    } else if (letter === 'X' && subsequent === 'C') {
      count.push(90);
      numeralArray.splice(subsequent, 1);
    } else if (letter === 'C' && subsequent === 'D') {
      count.push(400);
      numeralArray.splice(subsequent, 1);
    } else if (letter === 'C' && subsequent === 'M') {
      count.push(900);
      numeralArray.splice(subsequent, 1);
    } else {
      count.push(roman[numeralArray[i]]);
    }
  }
  for (i; i < numeralArray.length; i++) {
    checkAtypical(numeralArray[i], numeralArray[i + 1]);
  }
  console.log(count);
  return count.reduce((a, b) => a + b);
}

console.log(convertRoman('MCMXCIV'));
