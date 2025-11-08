//  numbers에서 서로 다른 인덱스에 있는 2개의 수를 뽑아 더해 만들 수 있는 모든 수를 배열 오름차순으로 담아 배열해야한다
function solution(numbers) {
  let array = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      array.push(numbers[i] + numbers[j]);
    }
  }
  return [...new Set(array)].sort((a, b) => a - b);
}
console.log("=== 두 수의 합 테스트 ===\n");

console.log("테스트 1:");
console.log("입력: [2, 1, 3, 4, 1]");
console.log("출력:", solution([2, 1, 3, 4, 1]));
console.log("예상: [2, 3, 4, 5, 6, 7]");
console.log(
  "통과:",
  JSON.stringify(solution([2, 1, 3, 4, 1])) ===
    JSON.stringify([2, 3, 4, 5, 6, 7])
    ? "✅"
    : "❌"
);
console.log();

console.log("테스트 2:");
console.log("입력: [5, 0, 2, 7]");
console.log("출력:", solution([5, 0, 2, 7]));
console.log("예상: [2, 5, 7, 9, 12]");
console.log(
  "통과:",
  JSON.stringify(solution([5, 0, 2, 7])) === JSON.stringify([2, 5, 7, 9, 12])
    ? "✅"
    : "❌"
);
console.log();

console.log("테스트 3:");
console.log("입력: [1, 1, 1]");
console.log("출력:", solution([1, 1, 1]));
console.log("예상: [2]");
console.log(
  "통과:",
  JSON.stringify(solution([1, 1, 1])) === JSON.stringify([2]) ? "✅" : "❌"
);
console.log(solution([2, 1, 3, 4, 1])); // [2,3,4,5,6,7]
console.log(solution([5, 0, 2, 7])); // 2,5,7,9,12
