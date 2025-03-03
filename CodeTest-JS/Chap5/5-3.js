/**
 * 정수 배열 numbers가 주어진다.
 * numbers에서 서로 다른 인덱스에 있는 2개의 수를 뽑아 더해 만들 수 있는 모든 수를 배열에 오름차순으로 담아 반환하는 solution()함수를 완성하시오
 * numbers의 길이는 2이상 100이하
 * numbers의 모든 수는 0 이상 100이하
 */

// 내 답압
/**
 * 개선점
 * result 배열을 애시당초 set으로 선언해서 중복 제거
 * 불필요한 n 선언
function solution(numbers) {
  const result = [];
  const n = numbers.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      result.push(numbers[i] + numbers[j]);
    }
  }
  return [...new Set(result)].sort((a, b) => a - b);
}
*/

// 모범 답안
function solution(numbers) {
  const result = new Set();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < i; j++) {
      result.add(numbers[i] + numbers[j]);
    }
  }
  return [...result].sort((a, b) => a - b);
}
