export default function () {
  var x = 0,
    y = 0,
    visited = {};

  const testInput = "^^<<v<<v><v";
  const testArr = testInput.split("");

  for (var i = 0; i <= testArr.length; i++) {
    if (testArr[i] === "^") {
      y = y - 1;
    }

    if (testArr[i] === ">") {
      x = x + 1;
    }

    if (testArr[i] === "v") {
      y = y + 1;
    }

    if (testArr[i] === "<") {
      x = x - 1;
    }

    visited[[x, y]] = true;
  }
  return "Unable to solve ";
}
