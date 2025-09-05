// arr => n개의 양의 정수로 이뤄진 리스트
// target => 정수
// 이 중 합이 target인 두 수가 arr에 있는지 찾고, 있으면 true, 없으면 false를 반환하는 solution()함수를 작성하시오

function solution(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    const number = target - arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === number) {
        return true;
      }
    }
  }
  return false;
}

console.log(solution([1, 2, 3, 4, 8], 6)); // true
console.log(solution([2, 3, 5, 9], 10)); // false
