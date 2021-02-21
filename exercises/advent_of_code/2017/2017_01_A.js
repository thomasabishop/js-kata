export default function (input) {
  var matchStore = new Array();
  var circularizeArray = input[input.length - 1];
  input.unshift(circularizeArray);

  for (const [index, ele] of input.entries()) {
    var next = input[(index += 1)];
    if (ele === next) {
      matchStore.push(Number(ele));
    }
  }
  return matchStore.reduce((a, b) => a + b);
}
