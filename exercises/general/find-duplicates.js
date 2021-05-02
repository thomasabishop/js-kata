
const deck = [1,2,3,4,4,3,2,1];
const deck2 = [1,1,1,2,2,2,3,3];
const deck3 = [1];
const deck4 = [1,1];
const deck5 = [1,1,2,2,2,2];

let sorted = deck.sort((a,b) => a - b);
console.log(sorted);

const set = new Set();
for (let i = 0;i < deck.length; i++){
  set.add(deck[i]);
}

console.log(deck.length - set.size);
function experiment(arr){
  const deckLength = arr.length;

  function getSet(){
    let set = new Set();
    for (let i = 0;i < arr.length; i++){
      set.add(arr[i]);
    }
    return set.size;
  }
  console.log([deckLength, getSet()]);
}

experiment(deck);
experiment(deck2);

experiment(deck3);

experiment(deck4);

experiment(deck5);