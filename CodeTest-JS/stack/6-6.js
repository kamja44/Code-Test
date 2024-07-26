/*
function solution(prices) {
  const n = prices.length;
  const answer = new Array(n).fill(0); // 가격이 떨어지지 않은 기간을 저장할 배열

  // 스택을 사용하여 이전 가격과 현재 가격 비교
  const stack = [0];
  for (let i = 1; i < n; i++) {
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      // 가격이 떨어졌으므로 이전 가격의 기간을 계산
      const j = stack.pop();
      answer[j] = i - j;
    }
    stack.push(i);
  }

  // 스택에 남아있는 가격들은 가격이 떨어지지 않은 경우
  while (stack.length > 0) {
    const j = stack.pop();
    answer[j] = n - 1 - j;
  }
  return answer;
}
 */

function solution(prices) {
  const n = prices.length;
  const answer = new Array(n).fill(0);
  const stack = [0];
  for (let i = 1; i < n; i++) {
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      const j = stack.pop();
      answer[j] = i - j;
    }
    stack.push(i);
  }
  while (stack.length > 0) {
    const j = stack.pop();
    answer[j] = n - 1 - j;
  }
  return answer;
}
console.log(solution([1, 6, 9, 5]));
