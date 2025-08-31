// n초 간의 주가를 초 단위로 기록한 배열 prices가 매개변수로 주어진다.
// 각 초의 주가를 기준으로 해당 초부터 n초 사이에 가격이 떨어지지 않은 시간은 몇 초인지
// 배열에 담아 반환하는 solution 함수를 완성하세요
function solution(prices) {
  const answer = new Array(prices.length).fill(0);
  const stack = [];

  console.log("🚀 알고리즘 시작!");
  console.log(`📊 입력 배열: [${prices.join(", ")}]`);
  console.log(`📝 초기 answer: [${answer.join(", ")}]`);
  console.log(`📚 초기 stack: [${stack.join(", ")}]`);
  console.log("=".repeat(50));

  for (let i = 0; i < prices.length; i++) {
    console.log(`\n🔄 i=${i}, 현재 가격: ${prices[i]}`);
    console.log(`   현재 스택: [${stack.join(", ")}]`);

    // while문 진입 전 조건 확인
    if (stack.length > 0) {
      const topIndex = stack[stack.length - 1];
      const topPrice = prices[topIndex];
      console.log(
        `   🔍 조건 확인: prices[${topIndex}] = ${topPrice} > prices[${i}] = ${prices[i]} ?`
      );
      console.log(
        `   🔍 결과: ${
          topPrice > prices[i]
            ? "✅ True (while문 진입!)"
            : "❌ False (while문 건너뛰기)"
        }`
      );
    } else {
      console.log(`   🔍 스택이 비어있음 → while문 건너뛰기`);
    }

    let whileCount = 0;
    while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
      whileCount++;
      const idx = stack.pop();
      answer[idx] = i - idx;

      console.log(`   🎯 While ${whileCount}번째: 인덱스 ${idx} pop!`);
      console.log(`   📝 answer[${idx}] = ${i} - ${idx} = ${answer[idx]} 설정`);
      console.log(`   📚 스택 상태: [${stack.join(", ")}]`);
      console.log(`   📋 answer 상태: [${answer.join(", ")}]`);

      // 다음 while 반복을 위한 조건 확인
      if (stack.length > 0) {
        const nextTopIndex = stack[stack.length - 1];
        const nextTopPrice = prices[nextTopIndex];
        console.log(
          `   🔄 다음 조건: prices[${nextTopIndex}] = ${nextTopPrice} > prices[${i}] = ${prices[i]} ?`
        );
        console.log(
          `   🔄 결과: ${
            nextTopPrice > prices[i]
              ? "✅ True (while 계속!)"
              : "❌ False (while 종료!)"
          }`
        );
      }
    }

    if (whileCount === 0) {
      console.log(`   ⏭️  while문 실행 안됨`);
    }

    stack.push(i);
    console.log(`   ➕ 인덱스 ${i} 스택에 추가`);
    console.log(`   📚 최종 스택: [${stack.join(", ")}]`);
    console.log(`   📋 현재 answer: [${answer.join(", ")}]`);
  }

  console.log("\n" + "=".repeat(50));
  console.log("🏁 for문 종료 후 스택에 남은 요소들 처리:");
  console.log(`📚 남은 스택: [${stack.join(", ")}]`);

  let finalCount = 0;
  while (stack.length > 0) {
    finalCount++;
    const idx = stack.pop();
    answer[idx] = prices.length - 1 - idx;
    console.log(`🔚 Final ${finalCount}번째: 인덱스 ${idx} 처리`);
    console.log(
      `   📝 answer[${idx}] = ${prices.length - 1} - ${idx} = ${
        answer[idx]
      } 설정`
    );
    console.log(`   📋 answer 상태: [${answer.join(", ")}]`);
  }

  console.log("\n🎉 최종 결과:");
  console.log(`📋 answer: [${answer.join(", ")}]`);

  return answer;
}

console.log("📊 테스트 실행:");
console.log(solution([1, 2, 3, 2, 3])); // 예상: [4,3,1,1,0]
