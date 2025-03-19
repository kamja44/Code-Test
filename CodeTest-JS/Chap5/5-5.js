/**
 * 2차우너 행렬 arr1과 arr2를 입력받아 arr1에 arr2를 곱한 결과를 반환하는 solution 함수
 */

function solution(arr1, arr2) {
  const arr1r = arr1.length;
  const arr1c = arr1[0].length;
  const arr2r = arr2.length;
  const arr2c = arr2[0].length;
  const result = [];

  for (let i = 0; i < arr1r; i++) {
    result.push(new Array(arr2c).fill(0));
  }

  for (let i = 0; i < arr1r; i++) {
    for (let j = 0; j < arr2c; j++) {
      for (let k = 0; k < arr1c; k++) {
        result[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return result;
}

function solution2(arr1, arr2) {
  const arr1r = arr1.length;
  const arr1c = arr1[0].length;
  const arr2c = arr2[0].length;
  const result = [];

  for (let i = 0; i < arr1r; i++) {
    result.push(new Array(arr2c).fill(0));
  }

  for (let i = 0; i < arr1r; i++) {
    for (let j = 0; j < arr2c; j++) {
      for (let k = 0; k < arr1c; k++) {
        result[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return result;
}
