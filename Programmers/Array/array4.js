// 1번 수포자 1,2,3,4,5,...
// 2번 수포자 2,1,2,3,2,4,2,5,...
// 3번 수포자 3,3,1,1,2,2,4,4,5,5,...

function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  let scores = new Array(patterns.length).fill(0);

  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < patterns.length; j++) {
      if (answers[i] === patterns[j][i % patterns[j].length]) {
        scores[j]++;
      }
    }
  }

  const max = Math.max(...scores);
  let result = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= max) {
      result.push(i + 1);
    }
  }

  return result.sort((a, b) => a - b);
}

console.log("=== 모의고사 테스트 ===\n");

console.log("테스트 1:");
console.log("입력: [1, 2, 3, 4, 5]");
console.log("출력:", solution([1, 2, 3, 4, 5]));
console.log("예상: [1]");
console.log(
  "통과:",
  JSON.stringify(solution([1, 2, 3, 4, 5])) === JSON.stringify([1])
    ? "✅"
    : "❌"
);
console.log();

console.log("테스트 2:");
console.log("입력: [1, 3, 2, 4, 2]");
console.log("출력:", solution([1, 3, 2, 4, 2]));
console.log("예상: [1, 2, 3]");
console.log(
  "통과:",
  JSON.stringify(solution([1, 3, 2, 4, 2])) === JSON.stringify([1, 2, 3])
    ? "✅"
    : "❌"
);
console.log();

console.log("테스트 3: 1번만 잘함");
console.log("입력: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]");
console.log("출력:", solution([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));
console.log("예상: [1]");
console.log();

console.log("테스트 4: 2번만 잘함");
console.log("입력: [2, 1, 2, 3, 2, 4, 2, 5]");
console.log("출력:", solution([2, 1, 2, 3, 2, 4, 2, 5]));
console.log("예상: [2]");
console.log();

console.log("테스트 5: 모두 0점");
console.log("입력: [5, 5, 5, 5, 5]");
console.log("출력:", solution([5, 5, 5, 5, 5]));
console.log("예상: [1, 2, 3] (모두 동점)");

console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1,2,3]
