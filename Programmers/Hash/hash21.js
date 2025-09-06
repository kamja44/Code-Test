// XYZ 마트는 일정 금액을 지불하면 10일 동안 회원 자격을 부여합니다.
// XYZ 마트는 회원을 대상으로 매일 1가지 제품을 할인하는 행사를 합니다.
// 할인 제품은 하루에 하나만 구매할 수  있습니다.
// 정현이는 자식이 원하는 제품과 수량이 할인하는 날짜와 10일 연속으로 일치할 때에 맞춰 회원가입을 하려 합니다.

// ex)
// 원하는 제품이 바나나 3개, 사과 2개, 쌀 2개, 돼지고기 2개, 냄비 1개
// 마트에서 14일간 회원을 대상으로 할인하는 제품이 날짜 순서대로 치킨, 사과, 사과, 바나나, 쌀, 사과, 돼지고기, 바나나, 돼지고기, 쌀, 냄비, 바나나, 사과, 바나나
// 첫째 날부터 열흘 동안은 냄비는 할인하지 않으므로, 첫째 날에는 회원가입을 하지 않는다.
// 둘쨰 날부터 열흘 동안은 바나나를 원하는 만큼 구입할 수 없으므로 회원가입을 하지 않는다.
// 셋째, 넷째, 다섯쨰 날부터 각각 열흘 동안 원하는 제품과 수량이 일치하므로, 셋 중 하루에 회원가입을 진행한다.

// want => 원하는 제품을 나타내는 문자열 배열
// number => 원하는 제품의 수량
// discount => XYZ 마트에서 할인하는 제품을 나타내는 문자열 배열
// 정현이가 원하는 제품을 모두 할인받을 수 있는 회원 등록 날짜의 총 일수를 반환하는 solution 함수를 완성하시오
// 가능한 날이 없으면 0을 return 합니다.

function solution(want, number, discount) {
  const wantMap = new Map();
  for (let i = 0; i < want.length; i++) {
    wantMap.set(want[i], number[i]);
  }
  let buyCount = 0;

  for (let start = 0; start <= discount.length - 10; start++) {
    const discountMap = new Map();
    for (let i = start; i < start + 10; i++) {
      discountMap.set(discount[i], (discountMap.get(discount[i]) || 0) + 1);
    }

    let canBuy = true;

    for (const [item, needCount] of wantMap) {
      if ((discountMap.get(item) || 0) < needCount) {
        canBuy = false;
        break;
      }
    }
    if (canBuy) {
      buyCount++;
    }
  }
  return buyCount;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
); // 3
console.log(
  solution(
    ["apple"],
    [10],
    [
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
    ]
  )
); // 0
