const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

// 1. N, M 입력받기
const [N, M] = input[0].split(" ").map(Number);

// 2. 배열 A 만들기
const A = input[1].split(" ").map(Number);

// 3. 합 배열 S 만들기
let S = new Array(N + 1).fill(0);

// 4. 전체 경우의 수 저장 할 변수 result 만들기
let result = 0;

// 5. 합 배열 S 채우기
for (let i = 1; i <= N; i++) S[i] = S[i - 1] + A[i - 1];

// 6. M으로 나눈 (나머지)값을 합 배열 S에 저장
for (let i = 1; i <= N; i++) S[i] = S[i] % M;

// 7. 나머지 값이 0인 경우
for (let i = 1; i <= N; i++) {
  if (S[i] === 0) result += 1;
}

// 8. 같은 나머지 값을 가진 경우 (조합)
let count = new Array(M).fill(0);

for (let i = 1; i <= N; i++) count[S[i]] += 1;

for (let i = 0; i < count.length; i++) {
  if (count[i] >= 2) {
    result += (count[i] * (count[i] - 1)) / 2;
  }
}

// 9. 최종 출력
console.log(result);
