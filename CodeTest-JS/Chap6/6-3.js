/**
 * 소괄호는 짝을 맞춘 열린 괄호 ()로 구성한다.
 * 열리 노갈호나 닫힌 괄호가 마구 뒤섞인 문자열을 준다.
 * 소괄호가 정상적으로 열고 닫혔는지 판별하는 solution 함수를 작성해라
 */
function solution(s) {
  const array = s.split("");
  const stack = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "(") {
      stack.push(array[i]);
    } else {
      // pop을 할때는 stack이 비었는지 확인해야지
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}
