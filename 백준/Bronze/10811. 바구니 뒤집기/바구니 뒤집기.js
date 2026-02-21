const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

// N과 M 입력
const [N, M] = input[0].split(" ").map(Number);

// 바구니 배열 만들기
let arr = [];
for (let i = 0; i < N; i++) {
  arr[i] = i + 1;
}

//i와 j 입력
for (let k = 0; k < M; k++) {
  const [i, j] = input[k + 1].split(" ").map(Number);
  //역순
  for (let x = 0; x < (j - i + 1) / 2; x++) {
    let temp = arr[i - 1 + x]; //i번째 값 백업
    arr[i - 1 + x] = arr[j - 1 - x]; //i번째값에 j번째에 있는 값 할당
    arr[j - 1 - x] = temp; //j번째에 i번째 값 할당
  }
}

console.log(arr.join(" "));
