import btoa from 'btoa';

let testRawArr = [7, 6, 8, 8, 9, 10].toString();
let anotherArr = [6, 7, 9, 9, 7, 7].toString();
console.log(testRawArr);
let newHash = btoa(testRawArr);
let anotherHash = btoa(anotherArr);
console.log(newHash);
console.log(typeof newHash);
console.log(anotherHash);
