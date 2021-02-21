import { partTwo } from "./partTwo";
const fs = require("fs");

const data = () => {
  return fs
    .readFileSync("src/2015/02/input.txt", { encoding: "utf-8", flag: "r" })
    .toString()
    .split("\n");
};

test("Day: 2, Part: 2", () => {
  expect(partTwo(data())).toBe(3812909);
});
