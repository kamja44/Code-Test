// 민호는 다단계 조직을 이용하여 칫솔을판매한다.
// 판매원이 칫솔을 판매하면, 그 이잉ㄱ이 피라미드 조직을 타고 조금씩 분배되는 형태의 판매망
// 모든 판매원은 칫솔 판매로 생기는 이익에서 10%를 계산하여 자신을 조직에 참여시킨 추천인에게 배분하고, 나머지는 자신이 챙긴다.
// 모든 판매원은 자신이 칫솔 판매에서 발생한 이익뿐 아니라, 자신이 조직에 추천하여 가입시킨 판매원의 이익금의 10%를 자신이 갖는다.
// 자신에게 발생하는 이익 또한 자신의 추천인에게 분배된다.
// 단, 10%를 계산할 때는 원 단위에서 자르고, 10%를 계산한 금액이 1원 미만일 경우 이득을 분배하지 않고 자신이 모두 가진다.
// enroll => 각 판매원의 이름을 담은 배열
// referral => 각 판매원을 다단계 조직에 참여시킨 다른 판매원의 이름
// seller => 판매량 집계 데이터의 판매원 이름
// amount => 판매량 집계 데이터의 판매 수량을 나열한 배열
// 각 판매원이 얻은 이익금을 나열한 배열을 반환하는 solution 함수를 작성하시오
// ㄴ 판매원에게 배분된 이익금의 총합을 정수형으로 계산하여 입력으로 주어진 enroll에 이름이 포함된 순서에 따라 나열하면 됨

function solution(enroll, referral, seller, amount) {
  const parentMap = new Map();
  const profitMap = new Map();

  for (let i = 0; i < enroll.length; i++) {
    parentMap.set(enroll[i], referral[i]);
    profitMap.set(enroll[i], 0);
  }

  function getProfit(name, amount) {
    if (name === "-") {
      return null;
    }

    const profit = Math.floor(amount * 0.1); // 부모가 가져갈 돈
    if (profit < 1) {
      profitMap.set(name, profitMap.get(name) + amount); // 부모가 가져갈돈이 1원 미만이면 다가져감
      return null;
    }

    const rest = amount - profit;

    profitMap.set(name, profitMap.get(name) + rest);
    getProfit(parentMap.get(name), profit);
  }

  for (let i = 0; i < seller.length; i++) {
    getProfit(seller[i], amount[i] * 100);
  }

  return enroll.map((name) => profitMap.get(name));
}

// Test Case 1
const enroll1 = [
  "john",
  "mary",
  "edward",
  "sam",
  "emily",
  "jaimie",
  "tod",
  "young",
];
const referral1 = [
  "-",
  "-",
  "mary",
  "edward",
  "mary",
  "mary",
  "jaimie",
  "edward",
];
const seller1 = ["young", "john", "tod", "emily", "mary"];
const amount1 = [12, 4, 2, 5, 10];
console.log("=== Test Case 1 ===");
const result1 = solution(enroll1, referral1, seller1, amount1);
console.log("Expected: [360, 958, 108, 0, 450, 18, 180, 1080]");
console.log("Result:  ", JSON.stringify(result1));
console.log(
  "Pass:    ",
  JSON.stringify(result1) ===
    JSON.stringify([360, 958, 108, 0, 450, 18, 180, 1080])
);

// Test Case 2
const enroll2 = [
  "john",
  "mary",
  "edward",
  "sam",
  "emily",
  "jaimie",
  "tod",
  "young",
];
const referral2 = [
  "-",
  "-",
  "mary",
  "edward",
  "mary",
  "mary",
  "jaimie",
  "edward",
];
const seller2 = ["sam", "emily", "jaimie", "edward"];
const amount2 = [2, 3, 5, 4];
console.log("\n=== Test Case 2 ===");
const result2 = solution(enroll2, referral2, seller2, amount2);
console.log("Expected: [0, 110, 378, 180, 270, 450, 0, 0]");
console.log("Result:  ", JSON.stringify(result2));
console.log(
  "Pass:    ",
  JSON.stringify(result2) === JSON.stringify([0, 110, 378, 180, 270, 450, 0, 0])
);
