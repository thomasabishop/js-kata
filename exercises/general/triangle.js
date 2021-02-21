/*
let hash = '#';
console.log(hash);
hash += hash[0];
console.log(hash);
hash += hash[1];
console.log(hash);
*/



for (let hash = '#'; hash.length <= 7; hash+= '#') {
    console.log(hash);
}


/* Equivalent, without+ shorthand */
for (let hash = '#'; hash.length <= 7; hash = hash + '#') {
    console.log(hash);
}