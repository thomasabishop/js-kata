/* Keeping a running count */

// Instead of:

function longWinded() {
  const store = [];
  for (let i = 0; i <= 3; i++) {
    store.push(i);
    // i.e some iterative process
  }
  return store.reduce((a, b) => a + b);
}

// Do

function concise() {
  let store = 0;
  for (let i = 0; i <= 3; i++) {
    store++;
  }
  return store;
}

console.log(concise());

// Or more concisely still:
function concise2() {
  let store = 0;
  while (store <= 5) {
    store++;
  }
  return store;
}

console.log(concise2());

///////////////////////////////////////

// For concision or ad hoc things, you can include declarations as parameters
function declarationAsParameter(inp, val = 3) {
  return inp * val;
}

console.log(declarationAsParameter(3));

// Rather than:

function declarationAsVariable(inp) {
  const val = 3;
  return inp * val;
}
