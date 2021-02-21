import md5hash from "blueimp-md5";

const data = "yzbqklnj";

function partOne(input) {
  const testZeroes = function (hash, zeroTarget) {
    let z = hash.slice(0, 6);
    if (z === zeroTarget) {
      return true;
    } else {
      return false;
    }
  };

  const locateHash = function (zeroTarget) {
    let result;
    let i = 0;
    do {
      i = i + 1;
      result = md5hash(input + i);
    } while (testZeroes(result, zeroTarget) == false);
    console.log(input + i, result);
  };
}

console.log(partOne(data));
