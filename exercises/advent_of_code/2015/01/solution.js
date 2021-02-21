const fs = require("fs");

const data = () => {
  return fs.readFileSync("src/2015/input.txt", {
    encoding: "utf-8",
    flag: "r",
  });
};

function partOne() {
  const input = data().split("");
  const floor = new Array();

  for (let i = 0; i <= input.length; i++) {
    if (input[i] === "(") {
      floor.push(1);
    } else if (input[i] === ")") {
      floor.push(-1);
    }
  }

  let finalFloor = Number();
  const basementVisits = new Array();

  for (let i = 0; i < floor.length; i++) {
    finalFloor += floor[i];
    if (finalFloor == -1) {
      basementVisits.push(i + 1);
    }
  }

  const partOne = finalFloor;
  const partTwo = basementVisits[0];
  return `${partOne}, ${partTwo}`;
}

console.log(partOne());
