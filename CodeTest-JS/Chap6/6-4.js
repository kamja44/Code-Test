/**
 * 10진수를 2진수로 변환하기
 */
function solution(n) {
  let result = "";
  if (n === 0) return "0";
  while (n > 0) {
    if (n % 2 === 0) {
      result += "0";
    } else if (n % 2 === 1) {
      result += "1";
    }

    n = Math.floor(n / 2);
  }
  return Number(result.split("").reverse().join(""));
}

function solution2(n) {
  let result = "";
  if (n === 0) return "0";
  while (n > 0) {
    result += (n % 2) + result;

    n = Math.floor(n / 2);
  }
  return result;
}
