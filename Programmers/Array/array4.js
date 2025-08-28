// 1번 수포자 1,2,3,4,5,...
// 2번 수포자 2,1,2,3,2,4,2,5,...
// 3번 수포자 3,3,1,1,2,2,4,4,5,5,...

function solution(answers) {
  const array = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let scores = [0, 0, 0];
  array.forEach((item, index) => {
    answers.forEach((answer, i) => {
      console.log(`item`, item);
      console.log(`answer`, answer);
    });
  });
}

console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1,2,3]
