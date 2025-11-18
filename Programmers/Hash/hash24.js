// 신입사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템을 개밣낟.
// 각 유저는 한 번에 한 명의 유저를 신고할 수 있다.
// 신고 횟수에 제한은 없다. 서로 다른 유저를 계속해서 신고할 수 있다.
// 한 유저를 여러번 신고할 수 있지만, 동일한 유저에 대한 신고는 1회로 처리한다.
// K번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송한다.
// 유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송한다.

// id_list => 이용자의 ID가 담긴 문자열 배열
// report => 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열
// k => 정지 기준이 되는 신고 횟수
// 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 반환하는 solution()함수를 구현하시오.

function solution(list, report, k) {
  const reportSet = new Set();
  const userMap = new Map();

  // 1. 유저별 메일 카운트 초기화
  for (const name of list) {
    userMap.set(name, 0);
  }

  // 2. 중복 제거
  for (const item of report) {
    // 변수명 충돌 방지를 위해 item으로 변경
    const [name, cheat] = item.split(" ");
    reportSet.add(`${name} ${cheat}`);
  }

  // 3. 각 유저가 몇 번 신고당했는지 집계
  const reportedCount = new Map();
  for (const reportItem of reportSet) {
    const [name, cheat] = reportItem.split(" ");
    reportedCount.set(cheat, (reportedCount.get(cheat) || 0) + 1); // ✅ cheat으로 수정
  }

  // 4. k번 이상 신고당한 사람 찾기
  const bannedArray = [];
  for (const [name, count] of reportedCount) {
    if (count >= k) {
      bannedArray.push(name);
    }
  }

  // 5. 정지된 유저를 신고한 사람의 카운트 증가
  for (const reportItem of reportSet) {
    const [reporter, cheater] = reportItem.split(" ");
    if (bannedArray.includes(cheater)) {
      userMap.set(reporter, userMap.get(reporter) + 1);
    }
  }

  return [...userMap.values()];
}

const list1 = ["muzi", "frodo", "apeach", "neo"];
const report1 = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
console.log(solution(list1, report1, 2)); // [2, 1, 1, 0]
const list2 = ["con", "ryan"];
const report2 = ["ryan con", "ryan con", "ryan con", "ryan con"];
console.log(solution(list2, report2, 3)); // [0,0]
