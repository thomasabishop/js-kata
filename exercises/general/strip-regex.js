const regex = /\.\d*/gi;

const strip = (str) => {
  if (regex.test(str)) {
    return str.replace(regex, '');
  }
};

console.log(strip('5.00'));
console.log(strip('10.00'));
console.log(strip('500.00'));
console.log(strip('900.00'));
