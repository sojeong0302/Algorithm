const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const target = Number(input[2]);
let Sum = 0;

for (let i = 0; i < n; i++) {
  if (arr[i] === target) {
    Sum++;
  }
}

console.log(Sum);
