const input = [
  18,
  12312,
  171,
  763,
  98423,
  1208,
  216,
  11,
  500,
  18,
  241,
  0,
  32,
  20620,
  27,
  10,
];

let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
alphabet = alphabet.split('');

// Alphabet index (same for lower and upper case)
const letters = new Map();
for (let i = 0; i < alphabet.length; i++) {
  letters.set(i + 1, alphabet[i]);
}

// Punctuation index
const punctuationStore = new Map([
  [1, '!'],
  [2, '?'],
  [3, ','],
  [4, '.'],
  [5, ' '],
  [6, ';'],
  [7, "'"],
  [8, '"'],
]);

const uppercase = {
  name: 'uppercase',
  library: letters,
  action: function (int) {
    return int % 27;
  },
  payload: function (i) {
    return this.library.get(this.action(i));
  },
};

const lowercase = {
  name: 'lowercase',
  library: letters,
  action: function (int) {
    return int % 27;
  },
  payload: function (i) {
    return this.library.get(this.action(i)).toLowerCase();
  },
};

const punctuation = {
  name: 'punctuation',
  library: punctuationStore,
  action: function (int) {
    return int % 9;
  },
  payload: function (i) {
    return this.library.get(this.action(i));
  },
};

const mode = {
  currentMode: uppercase,
  shiftMode: function () {
    switch (this.currentMode) {
      case uppercase:
        this.currentMode = lowercase;
        break;
      case lowercase:
        this.currentMode = punctuation;
        break;
      case punctuation:
        this.currentMode = uppercase;
        break;
      default:
        this.currentMode = uppercase;
    }
  },
};

function decode(code) {
  const store = [];
  for (let i = 0; i < code.length; i++) {
    let step = mode.currentMode.action(code[i]);
    //console.log(step);
    if (step !== 0) {
      store.push(mode.currentMode.payload(code[i]));
    } else {
      mode.shiftMode();
      continue;
    }
  }
  return store.join('');
}

console.log(decode(input));
