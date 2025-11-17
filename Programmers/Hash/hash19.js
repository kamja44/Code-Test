// stringList => 문자열 리스트
// queryList => 쿼리 리스트
// 각 쿼리 리스트에 있는 문자열이 stringList의 문자열 리스트에 있는지 여부를 확인
// 문자열이 있으면 true, 없으면 false

function solution(stringList, queryList) {
  const hashMap = new Map();
  const result = [];

  for (let i = 0; i < stringList.length; i++) {
    hashMap.set(stringList[i], i);
  }

  for (let i = 0; i < queryList.length; i++) {
    if (hashMap.has(queryList[i])) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

const stringList = ["apple", "banana", "cherry"];
const queryList = ["banana", "kiwi", "melon", "apple"];
console.log(solution(stringList, queryList)); // [True,false,false,True]
