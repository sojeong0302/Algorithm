const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const array = [];
const result = [];
const D = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

let [x1, y1, x2, y2] = [];

for (let i = 1; i <= N; i++) {
  array.push(input[i].split(" ").map(Number));
}

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    D[i][j] = D[i][j - 1] + D[i - 1][j] - D[i - 1][j - 1] + array[i - 1][j - 1];
  }
}

for (let i = 0; i < M; i++) {
  [x1, y1, x2, y2] = input[1 + N + i].split(" ").map(Number);
  result.push(D[x2][y2] - D[x1 - 1][y2] - D[x2][y1 - 1] + D[x1 - 1][y1 - 1]);
}

console.log(result.join("\n"));
