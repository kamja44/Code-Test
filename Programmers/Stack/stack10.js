// 괄호 회전하기
// 다음 규직을 지키는 문자열을 올바른 괄호 문자열이라 한다.
// (), {}, []는 모두 올바른 괄호 문자열이다.
// 만일 A가 올바른 괄호 문자열이라면 (A), [A], {A}도 올바른 괄호 문자열이다.
// 예를 들어 []가 올바른 괄호 문자열이므로, ([])도 올바르 ㄴ괄호 문자열이다.
// {}([])도 올바른 괄호 문자열이다.
// 대괄호, 중괄호, 소괄호로 이뤄진 문자열 s가 매개변수로 주어진다.
// 이 s를 왼쪽으로 x칸만큼 회전시켰을 때 s가 올바른 괄호 문자열이 되게 하는 x의 개수를 반환하는 solution()함수를 완성하시오.
function solution(s) {
  let total = 0;
  const sLength = s.length;
  for (let i = 0; i < sLength; i++) {
    const stack = [];
    let isRight = true;
    for (let j = 0; j < sLength; j++) {
      const condition = s[(i + j) % sLength];
      if (condition === "(" || condition === "[" || condition === "{") {
        stack.push(condition);
      } else {
        if (stack.length === 0) {
          isRight = false;
          break;
        } else {
          const top = stack[stack.length - 1];
          if (condition === "]" && top === "[") {
            stack.pop();
          } else if (condition === "}" && top === "{") {
            stack.pop();
          } else if (condition === ")" && top === "(") {
            stack.pop();
          } else {
            isRight = false;
            break;
          }
        }
      }
    }
    if (isRight === true && stack.length === 0) {
      total++;
    }
  }
  return total;
}

console.log(solution("[](){}")); // 3
console.log(solution("}]()[{")); // 2
console.log(solution("[)(]")); // 0
console.log(solution("}}}")); // 0
