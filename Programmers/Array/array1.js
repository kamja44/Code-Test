// 정수 배열을 정렬해서 반환하는 코드
// JS의 sort 메서드는 아무런 조건을 전달하지 않고 실행하면 데이터가 문자열이라 가정하고 정렬한다.
function solution(array) {
  return array.sort((a, b) => a - b);
}
