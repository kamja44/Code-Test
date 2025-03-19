/**
 * 실패율
 * - 스테이지에 도달했으나 아직 클리어하지 못한 플레이어 수 / 스테이지에 도달한 플레이어수
 *
 * 전체 스테이지 개수가 N
 * 게임을 이용하는 사용자가 현재 멈춰 있는 스테이지의 번호가 담긴 배열 stages가 주어질 때 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨 있는 배열을 반환하도록 하는 solution 함수
 */

function solution(N, stages) {
  const challenge = Array(N + 2).fill(0);
  for (const stage of stages) {
    challenge[stage]++;
  }

  const fails = {};
  let total = stages.length;

  for (let i = 1; i <= N; i++) {
    if (challenge[i] === 0) {
      fails[i] = 0;
      continue;
    }

    fails[i] = challenge[i] / total;

    total -= challenge[i];
  }

  const result = Object.entries;
}

function solution2(N, stages) {
  const challenger = Array(N + 2).fill(0);
  for (const stage of stages) {
    challenger[stage]++;
  }

  const fails = {};

  let total = stages.length;
  for (let i = 1; i <= N; i++) {
    if (challenger[i] === 0) {
      fails[i] = 0;
      continue;
    }

    fails[i] = challenger[i] / total;

    total -= challenger[i];
  }

  const result = Object.entries(false).sort((a, b) => b[1] - a[1]);

  return result.map((key) => Number(key[0]));
}

function solution3(N, stages) {
  const challenger = Array(N + 2).fill(0);
  for (const stage of stages) {
    challenger[stage]++;
  }

  const fails = {};

  const total = stages.length;

  for (let i = 1; i <= N; i++) {
    if (challenger[i] === 0) {
      fails[i] = 0;
      continue;
    }

    fails[i] = challenger[i] / total;

    total -= challenger[i];
  }

  const result = Object.entries(fails).sort((a, b) => b[1] - a[1]);
  return result.map((key) => Number(key[0]));
}
