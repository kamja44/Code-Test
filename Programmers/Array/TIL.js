// 배열 생성 3가지
// # 1. 리터럴 이용
const arr = [0, 0, 0, 0, 0, 0];

// # 2. 배열 생성자 이용
const arr1 = new Array(6);
const arr2 = [...new Array(6)].map((item, index) => index + 1);

// # 3. Array.fill() 사용
const arr3 = new Array(6).fill(0);

// 2차원 배열
const array = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

// array[2][3]에 저장된 값을 출력
console.log(array[2][3]);

// array[2][3]에 저장된 값을 15로 변경
array[2][3] = 15;

// 변경된 값을 출력
console.log(array[2][3]);

// 크기가 3 * 4인 배열을 선언하는 예시
const array2 = [...new Array(3)].map((item, index) => new Array(4).fill(index));

// push() 메서드
const test = [1, 2, 3];
test.push(4);

// concat() 메서드
let test2 = [1, 2, 3];
test2 = test2.concat([4, 5]);

// spread 연산자
let test3 = [1, 2, 3];
test3 = [...test3, ...[4, 5]];

// unshift() 메서드
// 배열의 맨 앞에 데이터 추가
const test4 = [1, 2, 3];
test4.unshift(0);

// splice() 메서드로 데이터 추가
// 배열 중간에 데이터 추가
const test5 = [1, 2, 3, 4, 5];
test5.splice(2, 0, 9999); // [1,2,9999,3,4,5]

// pop()
// 가장 마지막 데이터를 삭제하고 반환
const ar = [1, 2, 3, 4, 5];
const poped = ar.pop();
console.log(ar);

// shift()
// 맨 앞의 데이터 삭제하고 반환
const a = [1, 2, 3, 4, 5];
const shiftedElement = a.shift();
console.log(a);

// splice() 메서드로 데이터 삭제
const a1 = [1, 2, 3, 4, 5];
const removedElements = a1.splice(2, 2);
console.log(a1);
