// 많은 선수 중 단 한명의 선수를 제외하고 모든 선수가 마라톤을 완주하였습니다.
// participant => 마라톤에 참여한 선수들의 이름이 담긴 배열
// completion => 완주한 선수들의 이름이 담긴 배열
// 완주하지 못한 선수의 이름을 반환하는 solution()함수를 작성하세요
// 참가자 중에는 동명이인이 있을 수 있습니다.

function solution(participant, completion) {
  const result = new Map();

  for (const name of participant) {
    result.set(name, (result.get(name) || 0) + 1);
  }

  for (const name of completion) {
    if (result.has(name)) {
      result.set(name, result.get(name) - 1);
    }
  }

  for (const [name, count] of result) {
    if (count === 1) {
      return name;
    }
  }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo"
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
); // "vinko"
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
); // "mislav"
