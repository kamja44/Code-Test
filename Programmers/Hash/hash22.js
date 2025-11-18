// 채팅방에 누군가 들어오면 다음 메시지가 출력된다.
// [닉네임]님이 들어왔습니다.
// 채팅방에 누군가가 나간다면 다음 메시지가 출력됩니다.
// [닉네임]님이 나갔습니다.
// 채팅방에서 닉네임을 변경하는 방법은 다음과 같이 두가지 입니다.
// 채팅방을 나간 후, 새로운 닉네임으로 다시 들어갑니다.
// 채팅방에서 닉네임을 변경합니다.

// 채팅방에 들어오고 나가거나, 닉네임을 변경한 기록이 담긴 문장려 배열 record가 매개변수로 주어진다.
// 모든 기록이 처리된 당므 최종으로 방을 개설한 사람이 보는 메시지를 문자열 형태로 반환하는 solution 함수를 완성하시오

function solution(record) {
  const userMap = new Map();
  const userArray = [];

  for (const list of record) {
    const [order, id, name] = list.split(" ");

    userMap.set(id, name);

    if (order === "Change") {
      userMap.set(id, name);
    }
    userArray.push({
      order,
      id,
    });
  }

  const result = [];
  for (let i = 0; i < userArray.length; i++) {
    const finalName = userMap.get(userArray[i].id);
    if (userArray[i].order === "Enter") {
      result.push(`${finalName}님이 들어왔습니다.`);
    } else if (userArray[i].order === "Leave") {
      result.push(`${finalName}님이 나갔습니다.`);
    }
  }

  return result;
}

const record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

const result = [
  "Prodo님이 들어왔습니다.",
  "Ryan님이 들어왔습니다.",
  "Prodo님이 나갔습니다.",
  "Prodo님이 들어왔습니다.",
];

console.log(solution(record)); // result
