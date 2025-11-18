function solution(arr, target) {
  const hashMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complete = target - arr[i];

    if (hashMap.has(complete)) {
      return true;
    }
    hashMap.set(arr[i], i);
  }
  return false;
}

console.log(solution([1, 2, 3, 4, 8], 6)); // true
console.log(solution([2, 3, 5, 9], 10)); // false
