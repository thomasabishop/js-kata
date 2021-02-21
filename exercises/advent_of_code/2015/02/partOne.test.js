import { partOne } from "./partOne";
const fs = require("fs");

const data = () => {
  return fs
    .readFileSync("src/2015/02/input.txt", { encoding: "utf-8", flag: "r" })
    .toString()
    .split("\n");
};

test("Day: 2, Part: 1", () => {
  expect(partOne(data())).toBe(1598415);
});
