const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

// 1. N, M 입력받기
const N = Number(input[0]);

// 2. count 변수 생성
let count = 0;

// 3. sum 변수 생성
let sum = 0;

// 4. start_index 변수 생성
let start_index = 1;

// 5. 순회
for (let end_index = 1; end_index <= N; end_index++) {
  sum += end_index;

  while (sum > N) {
    sum -= start_index;
    start_index++;
  }

  if (sum === N) count++;
}

// 6. 결과 출력
console.log(count);
