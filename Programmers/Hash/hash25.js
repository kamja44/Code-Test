//기존 단품으로만 제공하던 메뉴를 조합하여 코스 요리 형태로 재구성하여 새로운 메뉴를 제공하기로 결정했다.
// 어떤 단품 메뉴들을 좋바하여 코스 요리 메뉴로 구성하면 좋을지 고민하던 스카피는
// 이전에 각 손님들이 주문할 때 가장 많이 함께 주문한 단품 메뉴들을 코스 요리 메뉴로 구성하기로 했다.
// 단, 코스 요리 메뉴는 최소 2가지 이상의 단품 메뉴로 구성하려고 한다.
// 또한 최소 2명 이상의 손님들로부터 주문된 단품 메뉴 조합에 대해서만 코스 요리 메뉴 후보에 포함하기로 했다.

// orders => 각 손님들이 주문한 단품 메뉴들이 문자열 형식으로 담긴 배열
// course => 스카피가 추가하고 싶어하는 코스 요리를 구성하는 단품 메뉴들의 개수가 담긴 배열
// 스카피가 새로 추가하게 될 코스 요리의 메뉴 구성을 문자열 형태로 배열에 담아 반환하는 solution 함수를 완성하시오

function solution(orders, course) {
  const result = [];

  function getCombinations(array, size) {
    if (size === 1) {
      return array.map((item) => [item]);
    }

    const combinations = [];

    array.forEach((current, index, origin) => {
      const rest = origin.slice(index + 1);
      const combis = getCombinations(rest, size - 1);
      combinations.push(...combis.map((combi) => [current, ...combi]));
    });
    return combinations;
  }

  course.forEach((courseSize) => {
    const menuCount = {};

    orders.forEach((order) => {
      const items = order.split("").sort();
      const combinations = getCombinations(items, courseSize);

      combinations.forEach((combination) => {
        const menu = combination.join("");
        menuCount[menu] = (menuCount[menu] || 0) + 1;
      });
    });

    const maxCount = Math.max(...Object.values(menuCount));

    if (maxCount >= 2) {
      for (const [menu, count] of Object.entries(menuCount)) {
        if (count === maxCount) {
          result.push(menu);
        }
      }
    }
  });

  return result.sort();
}

const orders1 = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
const course1 = [2, 3, 4];
console.log(solution(orders1, course1)); // ["AC", "ACDE", "BCFG", "CDE"]

const orders2 = ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"];
const course2 = [2, 3, 5];
console.log(solution(orders2, course2)); // ["ACD", "AD", "ADE", "CDE", "XYZ"]

const orders3 = ["XYZ", "XWY", "WXA"];
const course3 = [2, 3, 4];
console.log(solution(orders3, course3)); // ["WX", "XY"]
