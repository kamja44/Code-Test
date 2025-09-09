//기존 단품으로만 제공하던 메뉴를 조합하여 코스 요리 형태로 재구성하여 새로운 메뉴를 제공하기로 결정했다.
// 어떤 단품 메뉴들을 좋바하여 코스 요리 메뉴로 구성하면 좋을지 고민하던 스카피는
// 이전에 각 손님들이 주문할 때 가장 많이 함께 주문한 단품 메뉴들을 코스 요리 메뉴로 구성하기로 했다.
// 단, 코스 요리 메뉴는 최소 2가지 이상의 단품 메뉴로 구성하려고 한다.
// 또한 최소 2명 이상의 손님들로부터 주문된 단품 메뉴 조합에 대해서만 코스 요리 메뉴 후보에 포함하기로 했다.

// orders => 각 손님들이 주문한 단품 메뉴들이 문자열 형식으로 담긴 배열
// course => 스카피가 추가하고 싶어하는 코스 요리를 구성하는 단품 메뉴들의 개수가 담긴 배열
// 스카피가 새로 추가하게 될 코스 요리의 메뉴 구성을 문자열 형태로 배열에 담아 반환하는 solution 함수를 완성하시오

function getCombinations(str, n) {
  const result = [];
  const chars = str.split("").sort();

  function backTrack(start, current) {
    if (current.length === n) {
      result.push(current.join(""));
      return;
    }

    for (let i = start; i < chars.length; i++) {
      current.push(chars[i]);
      backTrack(i + 1, current);
      current.pop();
    }
  }
  backTrack(0, []);
  return result;
}

function isIncluded(order, combination) {
  for (let char of combination) {
    if (!order.includes(char)) {
      return false;
    }
  }
  return true;
}

function countAllCombinations(orders, length) {
  const combinationCount = {};

  for (let order of orders) {
    const combinations = getCombinations(order, length);

    for (let combination of combinations) {
      if (combinationCount[combination]) {
        combinationCount[combination]++;
      } else {
        combinationCount[combination] = 1;
      }
    }
  }
  return combinationCount;
}
// 테스트
const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];

function findBestCombinations(combinationCount) {
  const result = [];

  const validCombinations = {};
  for (let combination in combinationCount) {
    if (combinationCount[combination] >= 2) {
      validCombinations[combination] = combinationCount[combination];
    }
  }

  if (Object.keys(validCombinations).length === 0) {
    return result;
  }

  const maxCount = Math.max(...Object.values(validCombinations));

  for (let combination in validCombinations) {
    if (validCombinations[combination] === maxCount) {
      result.push(combination);
    }
  }
  return result;
}

// 테스트
const countResult = { AC: 4, BC: 2, CD: 3, AB: 1, DE: 2 };
// 예상 결과: ["AC"] (4번으로 최대)

const countResult2 = { AC: 2, BC: 2, CD: 1 };
// 예상 결과: ["AC", "BC"] (둘 다 2번으로 최대)

function solution(orders, course) {
  const result = [];

  for (let count of course) {
    const combinationCount = countAllCombinations(orders, count);

    const bestCombinations = findBestCombinations(combinationCount);

    result.push(...bestCombinations);
  }

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
