export default function (input) {
  const target = input.length / 2;
  var matchStore = new Array();

  for (const [index, ele] of input.entries()) {
    if (ele === input[index + target]) {
      matchStore.push(Number(ele));
    }
  }

  if (matchStore.length === 0) {
    return 0;
  } else {
    return matchStore.reduce((a, b) => a + b) * 2;
  }
}
