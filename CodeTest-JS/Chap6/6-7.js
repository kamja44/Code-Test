/**
 * n초 간의 주기를 초 단위로 기록한 배열 prices가 매개변수로 주어질 때, 각 초의 주가를 기준으로 해당 초부터 n초 사이에 가격이 떨어지지 않은 시간은 몇 초인지 배열에 담아 반환하는 solution()함수
 */
function solution(prices) {
  const result = new Array(prices.length).fill(0);
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      result[i]++;
      if (prices[j] < prices[i]) {
        break;
      }
    }
  }
  return result;
}

function solution2(prices) {
  const n = prices.length;
  const result = new Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    // 새로운 주가가 이전보다 낮아지는 순간
    // 해당 이전 주가의 유지시간을 계산한다.
    while (stack.length > 0 && prices[satck[stack.length - 1]] > prices[i]) {
      const topIndex = stack.pop();
      result[topIndex] = i - topIndex; // 하락이 발생하기 전까지 걸린 시간.
    }
    stack.push(i);
  }

  // 남은 인덱스는 끝까지 가격이 떨어지지 않았으므로
  // 마지막 인덱스(n-1) 기준으로 유지 시간 계산
  while (stack.length > 0) {
    const topIndex = stack.pop();
    result[topIndex] = n - 1 - topIndex;
  }
  return result;
}

function solution3(prices) {
  const n = prices.length;
  const result = new Array(n).fill(0);
  const stack = [];
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
      const topIndex = stack.pop();
      result[topIndex] = i - topIndex;
    }
    stack.push(i);
  }
  while (stack.length > 0) {
    const topIndex = stack.pop();
    result[topIndex] = n - 1 - topIndex;
  }
  return result;
}

function solution4(prices) {
  const n = prices.length;
  const result = new Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
      const topIndex = stack.pop();
      result[topIndex] = i - topIndex;
    }
    stack.push(i);
  }
  while (stack.length > 0) {
    const topIndex = stack.pop();
    result[topIndex] = n - 1 - topIndex;
  }
  return result;
}
