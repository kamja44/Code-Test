/**
 * 정수 배열을 하나 받는다
 * 배열의 중복값을 제거하고 => set
 * 배열 데이터를 내림차순으로 정렬 => sort
 *
 * 배열 길이는 2 이상 1,000이하
 * 각 배열의 데이터 값은 -100,000 이상 100,000이하
 */

// 내 답안 => set은 바로 정렬할 수 없음 => set을 배열로 변환한 후 정렬 또한 내림차순이기에 b - a로 해야함함
/**
function solution(arr){ // 오답
    const result = new Set(arr).sort((a, b) => a - b);
    return result;
}
 */
// 개선된 답안
function solution(arr) {
  const result = [...new Set(arr)].sort((a, b) => b - a);
  return result;
}
