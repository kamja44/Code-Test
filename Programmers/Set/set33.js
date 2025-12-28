// 문제 33: 간단한 유니온-파인드 알고리즘 구현하기
//
// 상호배타적 집합을 표현하고 관리하는 데 다음 두 연산이 필요합니다.
//
// - union(x, y): x와 y가 속한 두 집합을 합칩니다.
// - find(x): x가 속한 집합의 대표 원소를 찾습니다.
//
// operations라는 배열은 수행할 연산을 의미합니다. 연산 종류는 2가지입니다.
//
// - ['u', 1, 2]는 노드 1과 노드 2에 대해 union 연산 수행
// - ['f', 3] 노드 3의 루트 노드 찾기, find 연산 수행
//
// 초기의 노드는 부모 노드를 자신의 값으로 설정했다고 가정하며, 여기서는 각 집합의 루트 노드를
// 기준으로 루트 노드가 작은 노드를 더 큰 노드의 자식으로 연결하는 방법을 사용합니다.
//
// operations에 있는 연산을 모두 수행한 후 집합의 개수를 반환하는 solution() 함수를 구현해주세요.
//
// 제약 조건:
// - 0 <= k <= 1,000: 노드의 개수
// - 1 <= operations.length <= 100,000
// - operations[i][0]은 문자열 'u' 또는 'f' 중 하나
// - 'u'는 union 연산, union 연산 뒤로는 두 개의 정수 x, y가 나옴
// - 'f'는 find 연산, find 연산 뒤로는 하나의 정수 x가 나옴
// - x와 y는 0 이상 k-1 이하의 정수
// - 연산은 항상 유효함
// - 즉, union, find 연산의 인수는 상호배타적 집합 내에 있는 노드 번호
//
// 입출력의 예:
//
// | k | operations                              | result |
// |---|----------------------------------------|--------|
// | 3 | [['u', 0, 1], ['u', 1, 2], ['f', 2]]   | 1      |
// | 4 | [['u', 0, 1], ['u', 2, 3], ['f', 0]]   | 2      |

function solution(k, operations) {
  const parents = new Array(k).fill(0).map((_, index) => index);

  // find
  function find(x) {
    if (parents[x] === x) {
      return x;
    }
    parents[x] = find(parents[x]);
    return parents[x];
  }

  // union
  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);

    if (rootX === rootY) {
      return;
    }

    if (rootX < rootY) {
      parents[rootY] = rootX;
    } else {
      parents[rootX] = rootY;
    }
  }

  for (const operation of operations) {
    const [op, x, y] = operation;
    if (op === "u") {
      union(x, y);
    }
  }

  const set = new Set();
  for (let i = 0; i < k; i++) {
    set.add(find(i));
  }

  return set.size;
}

// Test Case 1
const k1 = 3;
const operations1 = [
  ["u", 0, 1],
  ["u", 1, 2],
  ["f", 2],
];
console.log("=== Test Case 1 ===");
console.log("Input: k =", k1, ", operations =", operations1);
const result1 = solution(k1, operations1);
console.log("Expected: 1");
console.log("Result:  ", result1);
console.log("Pass:    ", result1 === 1);

// Test Case 2
const k2 = 4;
const operations2 = [
  ["u", 0, 1],
  ["u", 2, 3],
  ["f", 0],
];
console.log("\n=== Test Case 2 ===");
console.log("Input: k =", k2, ", operations =", operations2);
const result2 = solution(k2, operations2);
console.log("Expected: 2");
console.log("Result:  ", result2);
console.log("Pass:    ", result2 === 2);
