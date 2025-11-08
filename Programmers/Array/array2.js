// 정수 배열 하나를 받는다.
// 배열의 중복값을 제거하고 배열 데이터를 내림차순으로 정렬해서 반환하는 solution 함수를 구현하라.
function solution(array) {
  return [...new Set(array)].sort((a, b) => b - a);
}

// 테스트 케이스
console.log("=== 중복 제거 + 내림차순 정렬 테스트 ===\n");

// 테스트 1: 기본 케이스 (중복 있음)
console.log("테스트 1: 중복값 제거");
console.log("입력: [5, 2, 8, 2, 9, 5]");
console.log("출력:", solution([5, 2, 8, 2, 9, 5]));
console.log("예상: [9, 8, 5, 2]");
console.log();

// 테스트 2: 모든 값이 중복
console.log("테스트 2: 모든 값이 동일");
console.log("입력: [3, 3, 3, 3]");
console.log("출력:", solution([3, 3, 3, 3]));
console.log("예상: [3]");
console.log();

// 테스트 3: 중복 없음
console.log("테스트 3: 중복 없음");
console.log("입력: [5, 3, 1, 4, 2]");
console.log("출력:", solution([5, 3, 1, 4, 2]));
console.log("예상: [5, 4, 3, 2, 1]");
console.log();

// 테스트 4: 음수 포함
console.log("테스트 4: 음수 포함");
console.log("입력: [-3, 5, -3, 0, 5, 2]");
console.log("출력:", solution([-3, 5, -3, 0, 5, 2]));
console.log("예상: [5, 2, 0, -3]");
console.log();

// 테스트 5: 이미 내림차순 정렬됨
console.log("테스트 5: 이미 내림차순");
console.log("입력: [9, 7, 5, 3, 1]");
console.log("출력:", solution([9, 7, 5, 3, 1]));
console.log("예상: [9, 7, 5, 3, 1]");
console.log();

// 테스트 6: 연속된 중복값
console.log("테스트 6: 연속 중복");
console.log("입력: [1, 1, 2, 2, 3, 3]");
console.log("출력:", solution([1, 1, 2, 2, 3, 3]));
console.log("예상: [3, 2, 1]");
console.log();

// 테스트 7: 한 개 요소
console.log("테스트 7: 요소 1개");
console.log("입력: [42]");
console.log("출력:", solution([42]));
console.log("예상: [42]");
console.log();

// 테스트 8: 빈 배열
console.log("테스트 8: 빈 배열");
console.log("입력: []");
console.log("출력:", solution([]));
console.log("예상: []");
console.log();

// 테스트 9: 0 포함
console.log("테스트 9: 0 포함");
console.log("입력: [0, -1, 0, 1, 0]");
console.log("출력:", solution([0, -1, 0, 1, 0]));
console.log("예상: [1, 0, -1]");
console.log();

// 테스트 10: 큰 숫자들
console.log("테스트 10: 큰 숫자");
console.log("입력: [100, 50, 100, 25, 75, 50]");
console.log("출력:", solution([100, 50, 100, 25, 75, 50]));
console.log("예상: [100, 75, 50, 25]");
