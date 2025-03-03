/**
 * 정수 배열을 정렬해서 반환하는 solution 함수
 *
 * 정수 배열의 길이는 2이상 10^5 이하
 * 정수 배열의 각 데이터 값은 -100,000 이상 100,000이하
 */

function result(arr) {
  arr.sort((a, b) => a - b);
  return arr;
}

// sort를 사용하지 않는다면?

// 버블정렬 활용 => 시간복잡도 O(n^2)
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// sort 사용 => 시간복잡도 O(nlogn)
function doSort(arr) {
  arr.sort((a, b) => a - b);
  return arr;
}

function measureTime(callback, arr) {
  const start = Date.now();
  const result = callback(arr);
  const end = Date.now();
  return [end - start, result];
}

let arr = Array.from({ length: 10000 }, (_, k) => 10000 - k);

// 첫 번째 코드 시간 측정
const [bubbleTime, bubbleResult] = measureTime(bubbleSort, arr);
console.log(`bubbleSort: ${bubbleTime}ms`);

// 두 번째 코드 시간 측정
arr = Array.from({ length: 10000 }, (_, k) => 10000 - k);
const [doSortTime, doSortResult] = measureTime(doSort, arr);
console.log(`두 번째 코드 실행 시간: ${doSortTime}ms`);
