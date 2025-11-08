// 실패율
// 실패율이 정이 => 스테이지에 도달했으나, 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어의 수
// N => 전체 스테이지개수
// stages => 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열
// 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨 있는 배열을 반환하는 solution 배열을 완성하tldh

function solution(N, stages) {
  // 데이터 집계
  const stoppedPlayers = new Array(N + 1).fill(0);

  for (const stage of stages) {
    stoppedPlayers[stage]++;
  }

  const failurArrays = [];
  let totalPlayers = stages.length;
  // 실패율 계산
  for (let i = 1; i <= N; i++) {
    if (totalPlayers === 0) {
      failurArrays.push({
        stage: i,
        rate: 0,
      });
    } else {
      failurArrays.push({
        stage: i,
        rate: stoppedPlayers[i] / totalPlayers,
      });
    }
    totalPlayers -= stoppedPlayers[i];
  }

  // 정렬 및 반환
  failurArrays.sort((a, b) => {
    if (a.rate === b.rate) {
      return a.stage - b.stage;
    } else {
      return b.rate - a.rate;
    }
  });

  return failurArrays.map((item) => item.stage);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3,4,2,1,5]
console.log(solution(4, [4, 4, 4, 4, 4])); // [4,1,2,3]
