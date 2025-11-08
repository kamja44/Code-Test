// 정수 배열을 정렬해서 반환하는 코드
// JS의 sort 메서드는 아무런 조건을 전달하지 않고 실행하면 데이터가 문자열이라 가정하고 정렬한다.

function solution(array) {
  return array.sort((a, b) => a - b);
}

// 테스트 케이스
console.log("=== 정수 배열 정렬 테스트 ===\n");

// 테스트 1: 기본 케이스
console.log("테스트 1: 기본 정렬");
console.log("입력: [5, 2, 8, 1, 9]");
console.log("출력:", solution([5, 2, 8, 1, 9]));
console.log("예상: [1, 2, 5, 8, 9]");
console.log();

// 테스트 2: 음수 포함
console.log("테스트 2: 음수 포함");
console.log("입력: [-3, 5, -1, 0, 2]");
console.log("출력:", solution([-3, 5, -1, 0, 2]));
console.log("예상: [-3, -1, 0, 2, 5]");
console.log();

// 테스트 3: 중복값 포함
console.log("테스트 3: 중복값");
console.log("입력: [3, 1, 3, 2, 1]");
console.log("출력:", solution([3, 1, 3, 2, 1]));
console.log("예상: [1, 1, 2, 3, 3]");
console.log();

// 테스트 4: 이미 정렬된 배열
console.log("테스트 4: 이미 정렬됨");
console.log("입력: [1, 2, 3, 4, 5]");
console.log("출력:", solution([1, 2, 3, 4, 5]));
console.log("예상: [1, 2, 3, 4, 5]");
console.log();

// 테스트 5: 역순 정렬
console.log("테스트 5: 역순");
console.log("입력: [5, 4, 3, 2, 1]");
console.log("출력:", solution([5, 4, 3, 2, 1]));
console.log("예상: [1, 2, 3, 4, 5]");
console.log();

// 테스트 6: 한 개 요소
console.log("테스트 6: 요소 1개");
console.log("입력: [42]");
console.log("출력:", solution([42]));
console.log("예상: [42]");
console.log();

// 테스트 7: 빈 배열
console.log("테스트 7: 빈 배열");
console.log("입력: []");
console.log("출력:", solution([]));
console.log("예상: []");
console.log();

// 테스트 8: 큰 숫자 정렬 (문자열 정렬과 차이 확인)
console.log("테스트 8: 큰 숫자 (10 이상)");
console.log("입력: [1, 5, 10, 25, 100]");
console.log("출력:", solution([1, 5, 10, 25, 100]));
console.log("예상: [1, 5, 10, 25, 100]");
