const dataStructure = [
  {
    name: 'thomas',
    sign: {
      type: 'leo',
    },
  },
  {
    name: 'aalia',
  },
  {
    name: 'mum',
    sign: {
      type: '',
    },
  },
];

// Normal verbose way
function returnValsConditionallyTrad(data) {
  const conditionPassed = [];
  for (const datum of data) {
    if (datum.sign && datum.sign.type) {
      conditionPassed.push(datum.sign.type);
    }
  }
  return conditionPassed;
}

console.log(returnValsConditionallyTrad(dataStructure));

// Smarter way using optional chaining
function returnValsConditionallyChained(data) {
  const conditionPassed = [];
  for (const datum of data) {
    //if (datum.sign?.type) {
    if (datum.sign?.type) {
      conditionPassed.push(datum.sign.type);
    }
  }

  return conditionPassed;
}
console.log(returnValsConditionallyChained(dataStructure));
