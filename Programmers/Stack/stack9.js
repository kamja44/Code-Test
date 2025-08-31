// 10진수를 입력받아 2진수로 변환하여 반환하는 solution()함수를 구현하시오

function solution(number) {
  const stack = [];
  while (number > 0) {
    stack.push(number % 2);
    number = Math.floor(number / 2);
  }
  //   return stack.reverse(); solution 1.
  // solution 2.
  const result = [];
  while (stack.length > 0) {
    result.push(stack.pop());
  }
  return result;
}

console.log(solution(10)); // 1010
console.log(solution(27)); // 11011
console.log(solution(12345)); // 11000000111001
