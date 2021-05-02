const socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function findPairs(arr) {
  let set = new Set();
  for (const ele of arr) {
    set.add(ele);
  }

  let obj = {};
  for (const item of set) {
    obj[item] = 0;
  }

  for (const ele of socks) {
    if (set.has(ele)) {
      obj[ele] += 1;
    }
  }
  console.log(obj);
}

console.log(findPairs(socks));
