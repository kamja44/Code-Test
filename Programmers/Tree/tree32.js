// 문제 32: 길 찾기 게임
//
// 전무로 승진한 라이언은 기분이 너무 좋아 프렌즈를 이끌고 특별 휴가를 가기로 합니다.
// 내친김에 여행 계획까지 구상하던 라이언은 재미있는 게임을 생각해냈고 역시 전무로 승진할 만한 인재라고
// 스스로에게 감탄했습니다. 라이언이 구상한 게임은 프렌즈를 두 팀으로 나누고 각 팀이 같은 곳을
// 다른 순서로 방문하도록 해서 먼저 순회를 마친 팀이 승리하는 것입니다. 그냥 지도를 주고 게임을
// 시작하면 재미가 덜하므로 라이언은 방문할 곳의 2차원 좌표 값을 구하고 각 장소를 이진 트리의
// 노드가 되도록 구성한 후 순회 방법을 힌트로 주어 각 팀이 스스로 경로를 찾도록 할 계획입니다.
// 라이언은 아래와 같은 특별한 규칙으로 트리 노드들을 구성합니다.
//
// - 트리를 구성하는 모든 노드의 x, y좌표 값은 정수이다.
// - 모든 노드는 서로 다른 x값을 가진다.
// - 같은 레벨에 있는 노드는 같은 y좌표를 가진다.
// - 자식 노드의 y 값은 항상 부모 노드보다 작다.
// - 임의의 노드 V의 왼쪽 하위 트리(left subtree)에 있는 모든 노드의 x값은 V의 x값보다 작다.
// - 임의의 노드 V의 오른쪽 하위 트리(right subtree)에 있는 모든 노드의 x값은 V의 x값보다 크다.
//
// 다음 예를 확인해보겠습니다. 라이언의 규칙에 맞게 이진 트리의 노드만 좌표평면에 그리면 다음과 같습니다.
// 이진 트리의 각 노드에는 1부터 N까지 번호가 붙어 있습니다.
//
// 위 이진 트리에서 전위 순회, 후위 순회한 결과는 다음과 같고, 이것은 각 팀이 방문할 순서를 의미합니다.
// - 전위 순회: 7, 4, 6, 9, 1, 8, 5, 2, 3
// - 후위 순회: 9, 6, 5, 8, 1, 4, 3, 2, 7
//
// 다행히 두 팀 모두 머리를 모아 분석한 끝에 라이언의 의도를 간신히 알아차렸습니다. 그러나 여전히
// 문제는 남아 있습니다. 노드의 수가 예시처럼 적다면 쉽게 해결할 수 있겠지만 예상대로 라이언은
// 그렇게 할 생각이 전혀 없었습니다. 이제 당신이 나설 때가 되었습니다. 곤경에 빠진 프렌즈를 위해
// 이진 트리를 구성하는 노드들의 좌표가 담긴 배열 nodeinfo가 매개변수로 주어질 때 노드들로 구성된
// 이진 트리를 전위 순회, 후위 순회한 결과를 2차원 배열에 순서대로 담아 반환하는 solution() 함수를 완성하시오.
//
// 제약 조건:
// - nodeinfo는 이진 트리를 구성하는 각 노드의 좌표가 1번 노드부터 순서대로 들어 있는 2차원 배열이다.
// - nodeinfo의 길이는 1 이상 10,000 이하이다.
// - nodeinfo[i]는 i + 1번 노드의 좌표이며, [x좌표, y좌표] 순으로 들어 있다.
// - 모든 노드의 좌표 값은 0 이상 100,000 이하인 정수이다.
// - 트리의 깊이가 1,000 이하인 경우만 입력으로 주어진다.
// - 모든 노드의 좌표는 문제에 주어진 규칙을 따르며, 잘못된 노드 위치가 주어지는 경우는 없다.

class Node {
  constructor(num, x, y) {
    this.num = num;
    this.x = x;
    this.y = y;
    this.left = null;
    this.right = null;
  }
}

function insertNode(parent, node) {
  if (parent.x > node.x) {
    // 왼쪽
    if (!parent.left) {
      parent.left = node;
    } else {
      insertNode(parent.left, node);
    }
  } else {
    // 오른쪽
    if (!parent.right) {
      parent.right = node;
    } else {
      insertNode(parent.right, node);
    }
  }
}

// 전위 순회(root => left => right)
function preOrder(root, result) {
  if (!root) {
    return;
  }
  result.push(root.num);
  preOrder(root.left, result);
  preOrder(root.right, result);
}

// 후위 순회 (left= > right => root)
function postOrder(root, result) {
  if (!root) {
    return;
  }
  postOrder(root.left, result);
  postOrder(root.right, result);
  result.push(root.num);
}
function solution(nodeinfo) {
  // 노드 선언
  const nodes = nodeinfo.map((node, index) => ({
    num: index + 1,
    x: node[0],
    y: node[1],
  }));

  // 정렬
  nodes.sort((a, b) => {
    if (a.y !== b.y) {
      return b.y - a.y;
    }
    return a.x - b.x;
  });

  // 트리 구성
  let root = null;
  for (const node of nodes) {
    const newNode = new Node(node.num, node.x, node.y);

    if (!root) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  }

  // 순회
  const preResult = [];
  const postResult = [];
  preOrder(root, preResult);
  postOrder(root, postResult);

  return [preResult, postResult];
}

// Test Case
const nodeinfo = [
  [5, 3],
  [11, 5],
  [13, 3],
  [3, 5],
  [6, 1],
  [1, 3],
  [8, 6],
  [7, 2],
  [2, 2],
];
console.log("=== Test Case ===");
console.log("Input:", nodeinfo);
const result = solution(nodeinfo);
console.log(
  "Expected: [[7, 4, 6, 9, 1, 8, 5, 2, 3], [9, 6, 5, 8, 1, 4, 3, 2, 7]]"
);
console.log("Result:  ", JSON.stringify(result));
console.log(
  "Pass:    ",
  JSON.stringify(result) ===
    JSON.stringify([
      [7, 4, 6, 9, 1, 8, 5, 2, 3],
      [9, 6, 5, 8, 1, 4, 3, 2, 7],
    ])
);
