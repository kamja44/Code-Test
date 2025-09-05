// 원하는 카드 뭉치에서 카드를 순서대로 한 장씩 사용합니다.
// 한 번 사용한 카드는 다시 사용할 수 없습니다.
// 카드를 사용하지 않고, 다음 카드로 넘어갈 수 없습니다.
// 기존에 주어진 카드 뭉치의 단어 순서는 바꿀 수 없습니다.
// 첫 번째 카드 뭉치에 ["i", "drink","water" ]
// 두 번째 카드 뭉치에 ['want', 'to']
// 결과는 ["i", "want", "to", "drink", "water"]를 만들려고 한다.

// 문자열로 이뤄진 배열 cards1, cardss
// goal => 원하는 단어 배열
// cards1과 cards2에 적힌 단어들로 goal을 만들수 있으면 "Yes", 없다면 "No"를 반환하는 solution 함수를 완성하시오

function solution(cards1, cards2, goal) {
  let index1 = 0;
  let index2 = 0;
  for (let i = 0; i < goal.length; i++) {
    if (index1 < cards1.length && cards1[index1] === goal[i]) {
      index1++;
    } else if (index2 < cards2.length && cards2[index2] === goal[i]) {
      index2++;
    } else {
      return "No";
    }
  }
  return "Yes";
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
); // "Yes"

console.log(
  solution(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
); // "No"
