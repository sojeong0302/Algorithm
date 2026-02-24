const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
let [i, j] = [];
let S = new Array(N + 1).fill(0);
let answer = [];

// 합 배열 만들기
for (let idex = 1; idex <= N; idex++) {
  S[idex] = S[idex - 1] + A[idex - 1];
}

//i~j 부분 합 구하기
for (let k = 0; k < M; k++) {
  [i, j] = input[2 + k].split(" ").map(Number);
  answer.push(S[j] - S[i - 1]);
}

//출력
console.log(answer.join("\n"));
