/**
 * 수포자 삼인방은 다음과 같이 문제를 찍는다.
 * 1번 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
 * 2번 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
 * 3번 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
 *
 * 1번 문제부터 마지막까지 정답이 순서대로 저장된 배열 answers가 주어짐
 * 가장 많은 문제를 맞춘 사람이 누구인지 배열에 담아 반환하시오
 *
 * 시험은 최대 10,000문제로 구성되어 있음
 * 문제의 정답은 1,2,3,4,5중 하나
 * 가장 높은 점수를 받은 사람이 여럿일 경우 반환하는 값을 오름차순으로 정렬
 */

// 이거 다시 풀어야함!!

function solution(answers) {
  // 수포자들의 패턴
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  // 수포자들의 점수 저장할 배열
  const scores = [0, 0, 0];

  // 수포자의 패턴과 정답이 얼마나 일치하는지 확인
  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < 3; j++) {
      if (answers[i] === patterns[j][i % patterns[j].length]) {
        scores[j]++;
      }
    }
  }

  // 가장 많이 맞춘 사람
  const maxScore = Math.max(...scores);

  const highestScores = [];
  for (let i = 0; i < 3; i++) {
    if (scores[i] === maxScore) {
      highestScores.push(i + 1);
    }
  }

  return highestScores;
}

function solution2(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const scores = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; k < patterns.length; j++) {
      if (answers[i] === patterns[j][i % patterns[j].length]) {
        scores[j]++;
      }
    }
  }

  const maxScore = Math.max(...scores);
  const highestScores = [];

  for (let i = 0; i < scores.length; i++) {
    if (maxScore === scores[i]) {
      push.highestScores(i + 1);
    }
  }
  return highestScores;
}

function solution3(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const scores = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < patterns.length; j++) {
      if (answers[i] === patterns[j][i % patterns[j].length]) {
        scores[j]++;
      }
    }
  }

  const maxScore = Math.max(...scores);
  const highestScores = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) {
      highestScores.push(i + 1);
    }
  }
  return highestScores;
}
