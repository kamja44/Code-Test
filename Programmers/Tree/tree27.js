class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.value = key;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(key) {
    if (!this.root) {
      this.root = new Node(key);
    } else {
      let current = this.root;
      while (true) {
        if (key < current.value) {
          if (current.left) {
            current = current.left;
          } else {
            current.left = new Node(key);
            break;
          }
        } else {
          if (current.right) {
            current = current.right;
          } else {
            current.right = new Node(key);
            break;
          }
        }
      }
    }
  }

  search(key) {
    let current = this.root;

    while (current && current.value !== key) {
      if (key < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return current;
  }
}

function solution(list, searchList) {
  const tree = new BST();

  for (const key of list) {
    tree.insert(key);
  }

  const result = [];

  for (const value of searchList) {
    if (tree.search(value)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

// 기본 테스트
console.log("=== Test 1: 기본 동작 ===");
const result1 = solution([5, 3, 8, 4, 2, 1, 7, 10], [1, 2, 5, 6]);
console.log("Expected: [true, true, true, false]");
console.log("Result:  ", result1);
console.log(
  "Pass:",
  JSON.stringify(result1) === JSON.stringify([true, true, true, false])
);

// 모두 존재하는 경우
console.log("\n=== Test 2: 모든 값이 존재 ===");
const result2 = solution([10, 5, 15, 3, 7], [10, 5, 15, 3, 7]);
console.log("Expected: [true, true, true, true, true]");
console.log("Result:  ", result2);
console.log(
  "Pass:",
  JSON.stringify(result2) === JSON.stringify([true, true, true, true, true])
);

// 모두 존재하지 않는 경우
console.log("\n=== Test 3: 모든 값이 존재하지 않음 ===");
const result3 = solution([10, 5, 15], [1, 2, 3, 20]);
console.log("Expected: [false, false, false, false]");
console.log("Result:  ", result3);
console.log(
  "Pass:",
  JSON.stringify(result3) === JSON.stringify([false, false, false, false])
);

// 단일 노드 트리
console.log("\n=== Test 4: 단일 노드 트리 ===");
const result4 = solution([42], [42, 41, 43]);
console.log("Expected: [true, false, false]");
console.log("Result:  ", result4);
console.log(
  "Pass:",
  JSON.stringify(result4) === JSON.stringify([true, false, false])
);

// 왼쪽으로만 치우친 트리
console.log("\n=== Test 5: 왼쪽으로 치우친 트리 ===");
const result5 = solution([10, 9, 8, 7, 6], [6, 10, 11]);
console.log("Expected: [true, true, false]");
console.log("Result:  ", result5);
console.log(
  "Pass:",
  JSON.stringify(result5) === JSON.stringify([true, true, false])
);

// 오른쪽으로만 치우친 트리
console.log("\n=== Test 6: 오른쪽으로 치우친 트리 ===");
const result6 = solution([1, 2, 3, 4, 5], [3, 5, 6]);
console.log("Expected: [true, true, false]");
console.log("Result:  ", result6);
console.log(
  "Pass:",
  JSON.stringify(result6) === JSON.stringify([true, true, false])
);

// 중복 삽입 (BST는 보통 중복 허용 안함)
console.log("\n=== Test 7: 중복 값 삽입 ===");
const result7 = solution([5, 3, 7, 3, 5], [3, 5, 7]);
console.log("Expected: [true, true, true]");
console.log("Result:  ", result7);
console.log(
  "Pass:",
  JSON.stringify(result7) === JSON.stringify([true, true, true])
);

// 빈 검색 리스트
console.log("\n=== Test 8: 빈 검색 리스트 ===");
const result8 = solution([1, 2, 3], []);
console.log("Expected: []");
console.log("Result:  ", result8);
console.log("Pass:", JSON.stringify(result8) === JSON.stringify([]));

// 루트 노드 검색
console.log("\n=== Test 9: 루트 노드 검색 ===");
const result9 = solution([50, 30, 70, 20, 40], [50]);
console.log("Expected: [true]");
console.log("Result:  ", result9);
console.log("Pass:", JSON.stringify(result9) === JSON.stringify([true]));

// 음수 값 포함
console.log("\n=== Test 10: 음수 값 포함 ===");
const result10 = solution([0, -5, 5, -3, 3], [-5, 0, 5, -10]);
console.log("Expected: [true, true, true, false]");
console.log("Result:  ", result10);
console.log(
  "Pass:",
  JSON.stringify(result10) === JSON.stringify([true, true, true, false])
);
