// N명의 사람이 원 형태로 서 있습니다.
// 각 사람은 1부터 N까지 번호를 가지고 있습니다.
// 임의의 숫자 K가 주어졌을 때 다음과 같은 사람을 없앱니다.
// 1번 번호표를 가진 사람을 기준으로 K번째 사람을 없앱니다.
// 없앤 사람 다음 사람을 기준으로 하고, 다시 K번째 사람을 없앱니다.
// N과 K가 주어질 때 마지막에 살아있는 사람의 번호를 반환하는 solution()함수를 구현해주세요

function solution(N, K) {
  const array = new Array(N).fill().map((item, index) => index + 1);
  let currentIndex = 0;

  while (array.length > 1) {
    // K번째 인덱스 계산(원형 구조 고려)
    const removeIndex = (currentIndex + K - 1) % array.length;

    array.splice(removeIndex, 1);

    // 다음 시작 위치 업데이트
    currentIndex = removeIndex % array.length;
  }
  return array[0];
}

console.log(solution(5, 2)); // 3
