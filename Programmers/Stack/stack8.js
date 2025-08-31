// 소괄호는 짝을 맞춘 열린 괄호'('와 닫힌 괄호 ')'로 구성된다.
// 열린 괄호나 닫힌 괄호가 마구 뒤섞인 문자열이 할당된다.
// 소괄호가 정상적으로 열고 닫혔는지 판단하는 solution 함수를 구현하시오.
// 정상적으로 열고 닫혔다면 true, 그렇지 않다면 false를 반환한다.

function solution(strings) {
  const stack = [];

  for (const string of strings) {
    if (string === "(") {
      stack.push(string);
    } else if (string === ")") {
      if (stack.length !== 0) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0 ? true : false;
}

console.log(solution("(())()")); // true
console.log(solution("((())()")); // False
