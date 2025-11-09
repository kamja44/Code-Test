// 짝지어 제어하기
// 알파벳 소문자로 구성된 문자열에서 같은 알파벳이 2개 붙어있는 짝을 찾는다.
// 짝을 찾은 다음 그 둘을 제거한 뒤 앞 뒤로 문자열을 이어 붙인다.
// 이 과정을 반복하여 문자열을 모두 제거한다면, 짝지어 제거하기가 종료된다.
// 문자열 S가 주어졌을 때 짝지어 제어하기를 성공적으로 수행할 수 있는지 반환하는 함수를 완성하시오
// 성공적으로 수행할 수 있따면 1, 아니면 0을 반환함녀 된다.
// 문자열 S가 baabaa => bbaa => aa => 1반환
function solution(s) {
  const stack = [];
  for (const char of s) {
    if (stack.length === 0) {
      stack.push(char);
    } else {
      const top = stack[stack.length - 1];
      if (char === top) {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
  }
  return stack.length === 0 ? 1 : 0;
}

console.log(solution("baabaa")); // 1
console.log(solution("cdcd")); // 0
