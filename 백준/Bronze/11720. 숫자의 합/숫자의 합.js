const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
let number = [];

for (let k = 0; k < N; k++) {
  number = input[1].split("").map(Number);
}

let sum = 0;

for (let i = 0; i < N; i++) {
  sum += number[i];
}

console.log(sum);
