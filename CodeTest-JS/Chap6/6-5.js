/**
 * () [] {}는 모두 올바른 문자열이다.
 * A가 올바른 괄호 문자열이라면 (A), [A], {A}도 올바른 괄호 문자열이다.
 * []가 올바른 괄호 문자열이므로, ([])도 올바른 괄호 문자열이다.
 * 만약 A, B가 올바른 문자열이라면, AB도 올바른 괄호 문자열이다.
 * 예를 들어 {}와 ([])가 올바른 괄호 문자열이므로 {}([])도 올바른 괄호 문자열이다.
 *
 * 대괄호 중괄호 소괄호로 이뤄진 문자열 s가 매개변수로 주어진다.
 * s를 왼쪽으로 x칸만큼 회전시켰을 때 올바른 괄호 문자열이 되게 하는 x의 개수를 반환하여라라
 */
function solution(s) {
  const length = s.length;
  let answer = 0;

  for (let i = 0; i < length; i++) {
    const stack = [];

    let isCorrect = true;
    for (let j = 0; j < length; j++) {
      const c = s[(i + j) % length];

      if (c === "(" || c === "[" || c === "{") {
        stack.push(c);
      } else {
        if (stack.length === 0) {
          isCorrect = false;
          break;
        }
        const top = stack[stack.length - 1];
        if (c === ")" && top === "(") {
          stack.pop();
        } else if (c === "]" && top === "[") {
          stack.pop();
        } else if (c === "}" && top === "{") {
          stack.pop();
        } else {
          isCorrect = false;
          break;
        }
      }
    }

    if (isCorrect && stack.length === 0) {
      answer++;
    }
  }
  return answer;
}

function solution2(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    const stack = [];
    let isCorrect = true;
    for (let j = 0; j < s.length; j++) {
      const array = s[(i + j) % s.length];
      if (array === "(" || array === "{" || array === "[") {
        stack.push(array);
      } else {
        if (stack.length === 0) {
          isCorrect = false;
          break;
        }

        const top = stack[stack.length - 1];
        if (array === ")" && top === "(") {
          stack.pop();
        } else if (array === "}" && top === "{") {
          stack.pop();
        } else if (array === "]" && top === "[") {
          stack.pop();
        } else {
          isCorrect = false;
          break;
        }
      }
    }
    if (isCorrect && stack.length === 0) {
      answer++;
    }
  }
  return answer;
}
