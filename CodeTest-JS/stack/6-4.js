function solution(s) {
  const n = s.length;
  let result = 0;
  for (let i = 0; i < n; i++) {
    const stack = [];
    let isCorrect = true;
    for (let j = 0; j < n; j++) {
      const c = s[(i + j) % n];
      if (c === "(" || c === "[" || c === "{") {
        stack.push(c);
      } else {
        if (stack.length === 0) {
          isCorrect = false;
          break;
        }
        const top = stack[stack.length - 1];
        if (top === "(" && c === ")") {
          stack.pop();
        } else if (top === "[" && c === "]") {
          stack.pop();
        } else if (top === "{" && c == "}") {
          stack.pop();
        } else {
          isCorrect = false;
          break;
        }
      }
    }
    if (isCorrect && stack.length === 0) {
      result++;
    }
  }
  return result;
}
console.log(solution("[](){}"));
console.log(solution("}]()[{"));
console.log(solution("[)(]"));
console.log(solution("}}}"));
