// n초 간의 주가를 초 단위로 기록한 배열 prices가 매개변수로 주어진다.
// 각 초의 주가를 기준으로 해당 초부터 n초 사이에 가격이 떨어지지 않은 시간은 몇 초인지
// 배열에 담아 반환하는 solution 함수를 완성하세요
function solution(prices) {
  const result = new Array(prices.length).fill(0);
  const stack = [];

  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
      const index = stack.pop();
      result[index] = i - index;
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    const index = stack.pop();
    result[index] = prices.length - 1 - index;
  }
  return result;
}

console.log(solution([1, 2, 3, 2, 3])); // 예상: [4,3,1,1,0]
