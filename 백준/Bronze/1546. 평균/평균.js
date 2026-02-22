const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = input[0];
let grade = input[1].split(" ").map(Number);
let sum = 0;

let M = 0;

for (let j = 0; j < N; j++) {
  if (M < grade[j]) {
    M = grade[j];
  }
}

for (let k = 0; k < N; k++) {
  grade[k] = (grade[k] / M) * 100;
}

for (let i = 0; i < N; i++) {
  sum += grade[i];
}

console.log(sum / N);