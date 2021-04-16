let objarr = [
  { id: 0, designation: 'fbicp' },
  { id: 6, designation: 'nqabe' },
  { id: 4, designation: 'cltyn' },
  { id: 3, designation: 'vfgzi' },
  { id: 9, designation: 'blgdq' },
  { id: 7, designation: 'bajio' },
  { id: 6, designation: 'msdia' },
  { id: 6, designation: 'dqarw' },
  { id: 6, designation: 'pyppz' },
];

const sort = (arr) => arr.sort((a, b) => a.id - b.id);

//console.log(sort(objArr));

let annoyingStrings = [
  '#[23123/1112]',
  '#[213/8122]',
  '#[13/2]',
  '#[213/7022]',
];

const extract = (arr) => arr.map((x) => x.replace(/#|\[|\]/g, '').split(/\//));

let replace = annoyingStrings[0].replace(/#|\[|\]/g, '');
let test = annoyingStrings.map((x) => x.split(/\//));

console.log(extract(annoyingStrings));
