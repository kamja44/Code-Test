// 문제 35: 영어 끝말잇기
//
// 1부터 n까지 번호가 붙어 있는 n명의 사람이 영어 끝말잇기를 합니다.
// 영어 끝말잇기는 다음과 같은 규칙으로 진행됩니다.
//
// 1. 1번부터 번호 순서대로 한 사람씩 단어를 말합니다.
// 2. 마지막 사람이 단어를 말한 다음에는 다시 1번부터 시작합니다.
// 3. 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 합니다.
// 4. 이전에 등장했던 단어는 사용할 수 없습니다.
// 5. 한 글자인 단어는 인정되지 않습니다.
//
// 다음은 3명이 끝말잇기를 하는 상황을 나타냅니다.
//
// tank → kick → know → wheel → land → dream → mother → robot → tank
//
// 위 끝말잇기는 다음과 같이 진행됩니다.
//
// • 1번 사람이 자신의 첫 번째 차례에 tank를 말합니다.
// • 2번 사람이 자신의 첫 번째 차례에 kick을 말합니다.
// • 3번 사람이 자신의 첫 번째 차례에 know를 말합니다.
// • 1번 사람이 자신의 두 번째 차례에 wheel을 말합니다.
// • (계속 진행)
//
// 끝말잇기를 계속 진행하다 보면 3번 사람이 말한 tank는 이전에 등장했던 단어이므로 탈락합니다.
// 사람의 수 n과 사람들이 순서대로 말한 단어 words가 매개변수로 주어질 때
// 가장 먼저 탈락하는 사람의 번호와 그 사람이 자신의 몇 번째 차례에 탈락했는지 반환하는
// solution() 함수를 완성해주세요.
//
// 제약 조건:
// - 끝말잇기에 참여하는 사람의 수 n은 2 이상 10 이하의 자연수입니다.
// - words는 끝말잇기에 사용한 단어들이 순서대로 들어 있는 배열이며, 길이는 n 이상 100 이하입니다.
// - 단어의 길이는 2 이상 50 이하입니다.
// - 모든 단어는 알파벳 소문자로만 이루어져 있습니다.
// - 끝말잇기에 사용되는 단어의 뜻(의미)은 신경 쓰지 않으셔도 됩니다.
// - 정답은 [번호, 차례] 형태로 반환해주세요.
// - 만약 주어진 단어들로 탈락자가 생기지 않는다면 [0, 0]을 반환하세요.
//
// 입출력의 예:
//
// | n | words                                                                                                                              | result |
// |---|------------------------------------------------------------------------------------------------------------------------------------|--------|
// | 3 | ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]                                                      | [3, 3] |
// | 5 | ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"] | [0, 0] |
// | 2 | ["hello", "one", "even", "never", "now", "world", "draw"]                                                                          | [1, 3] |

function solution(n, words) {
  const set = new Set();

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    // 1.중복 단어 체크
    if (set.has(word)) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }

    // 2. 끝말잇기 체크
    if (i > 0 && words[i - 1][words[i - 1].length - 1] !== word[0]) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
    set.add(word);
  }

  return [0, 0];
}

// Test Case 1
const n1 = 3;
const words1 = [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
];
console.log("=== Test Case 1 ===");
console.log("Input: n =", n1);
console.log("words =", words1);
const result1 = solution(n1, words1);
console.log("Expected: [3, 3]");
console.log("Result:  ", result1);
console.log("Pass:    ", JSON.stringify(result1) === JSON.stringify([3, 3]));

// Test Case 2
const n2 = 5;
const words2 = [
  "hello",
  "observe",
  "effect",
  "take",
  "either",
  "recognize",
  "encourage",
  "ensure",
  "establish",
  "hang",
  "gather",
  "refer",
  "reference",
  "estimate",
  "executive",
];
console.log("\n=== Test Case 2 ===");
console.log("Input: n =", n2);
console.log("words =", words2);
const result2 = solution(n2, words2);
console.log("Expected: [0, 0]");
console.log("Result:  ", result2);
console.log("Pass:    ", JSON.stringify(result2) === JSON.stringify([0, 0]));

// Test Case 3
const n3 = 2;
const words3 = ["hello", "one", "even", "never", "now", "world", "draw"];
console.log("\n=== Test Case 3 ===");
console.log("Input: n =", n3);
console.log("words =", words3);
const result3 = solution(n3, words3);
console.log("Expected: [1, 3]");
console.log("Result:  ", result3);
console.log("Pass:    ", JSON.stringify(result3) === JSON.stringify([1, 3]));
