// n초 간의 주가를 초 단위로 기록한 배열 prices가 매개변수로 주어진다.
// 각 초의 주가를 기준으로 해당 초부터 n초 사이에 가격이 떨어지지 않은 시간은 몇 초인지
// 배열에 담아 반환하는 solution 함수를 완성하세요
function solution(prices) {
  const n = prices.length;
  const stack = [];
  const answer = new Array(n).fill(0);

  function checkPriceDrop(currentIndex, currentPrice) {
    while (stack.length > 0) {
      const pastIndex = stack[stack.length - 1];
      const pastPrice = prices[pastIndex];

      if (pastPrice > currentPrice) {
        stack.pop();
        answer[pastIndex] = currentIndex - pastIndex;
      } else {
        break;
      }
    }
  }

  function processRemainingProcess() {
    while (stack.length > 0) {
      const index = stack.pop();
      answer[index] = n - 1 - index;
    }
  }

  for (let i = 0; i < n; i++) {
    checkPriceDrop(i, prices[i]);

    stack.push(i);
  }

  processRemainingProcess();

  return answer;
}

console.log(solution([1, 2, 3, 2, 3])); // 예상: [4,3,1,1,0]
