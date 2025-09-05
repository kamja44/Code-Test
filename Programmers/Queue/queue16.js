// 각 기능은 진도가 100%일 때 서비스에 반영할 수 있다.
// 각 기능의 개발 속도는 모두 다르므로, 뒤의 기능이 앞의 기능보다 먼저 개발될 수 있다.
// 이때 뒤의 기능은 앞 기능이 배포될 때 함께 배포되어야 한다.
// progresses => 작업 진도가 적힌 정수 배열
// speeds => 각 작업의 개발 속도가 적힌 정수 배열
// 각 배포마다 몇 개의 기능이 배포되는지를 반환하도록 solution 함수를 구현하시오

function solution(progresses, speeds) {
  const answer = [];

  const days = progresses.map((item, index) => {
    return Math.ceil((100 - item) / speeds[index]);
  });
  console.log(days);

  let maxDay = days[0];
  let count = 1;

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= maxDay) {
      count++;
    } else {
      // 새로운 배포 시작
      answer.push(count);
      maxDay = days[i];
      count = 1;
    }
  }
  answer.push(count);
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
