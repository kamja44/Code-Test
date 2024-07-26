function solution(s) {
  const stack = [];
  for (const c of s) {
    if (stack.length > 0 && stack[stack.length - 1] === c) {
      stack.pop();
    } else {
      stack.push();
    }
  }
  return stack.length === 0 ? 1 : 0;
}

console.log(solution("BAABAA"));
