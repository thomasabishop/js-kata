let arrayOne = ['A', 'B', 'C', 'D'];
let arrayTwo = [1, 2, 3];

// Print each element of inner array with each element of outer array

console.log(
  'Print each element of inner array with each element of outer array'
);
for (let i = 0; i < arrayOne.length; i++) {
  for (let j = 0; j < arrayTwo.length; j++) {
    console.log([arrayOne[i], arrayTwo[j]]);
  }
}

// Print every element with every other element in the array without repeats

// First method

console.log(
  'Print every element against every other, excluding self and duplicates'
);

let copy = ['A', 'B', 'C', 'D'];
while (copy.length > 1) {
  for (let h = 0; h < copy.length; h++) {
    let counter = copy.length - h;
    if (counter === 1) {
      copy.shift(); // Every time counter reaches end of array, remove first element
      break;
    } else {
      console.log([copy[0], copy[h + 1], counter]);
    }
  }
}

// Another attempted approach

// This one prints every element against every other, including self

console.log(
  'Print every element with every other including self and duplicates'
);
for (let a = 0; a < arrayOne.length; a++) {
  for (let b = 0; b < arrayOne.length; b++) {
    console.log([arrayOne[a], arrayOne[b]]);
  }
}

console.log(
  'Print every element against every other, excluding self but including duplicates'
);
for (let x = 0; x < arrayOne.length; x++) {
  for (let y = 0; y < arrayOne.length; y++) {
    if (x !== y) {
      console.log([arrayOne[x], arrayOne[y]]);
    } else {
      continue;
    }
  }
}
