/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

function largestPalindrome() {
  const rgx = new RegExp('\\[|\\,|\\]|\\"', 'g');
  const isPalindrome = (int) =>
    JSON.stringify(int) ===
    JSON.stringify(JSON.stringify(int).split('').reverse()).replace(rgx, '');
  let store = [];
  let i = 99;
  while (i >= 10) {
    store.push(i * i);
    store.push(i * i - 1);
    i--;
  }
  //  return Math.max(...store.filter((x) => isPalindrome(x)));
  return store.filter((x) => isPalindrome(x));
}

console.log(largestPalindrome());
