// 2차원 행렬 arr1과 arr2를 입력받아 arr1에 arr2를 곱한 결과를 반환하는 solution 함수를 완성하시오

function solution(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    // 행
    const array = [];
    for (let j = 0; j < arr2[0].length; j++) {
      // 열
      // 내적 구해야함
      let sum = 0;
      for (let k = 0; k < arr2.length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      array.push(sum);
    }
    result.push(array);
  }
  return result;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
); // [[15, 15], [15, 15], [15, 15]]
console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ]
  )
); // [[22, 22, 11], [36, 28, 18], [29, 20, 14]]
