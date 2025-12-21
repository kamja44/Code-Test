// 문제 30: 미로 탈출
// 1 x 1 크기의 직사각형들로 이루어진 직사 형태의 미로에서 탈출하려고 합니다.
// 각 칸은 통로 또는 벽으로 구성되어 있으며 벽으로 된 칸은 지나갈 수 없고 통로로 된 칸으로만 이동할 수 있습니다.
// 통로 중 한 칸에는 미로를 빠져나가는 문이 있는데 이 문을 레버를 당겨서만 열 수 있습니다.
// 레버 또한 통로 중 한 칸에 있습니다. 따라서 출발 지점에서 먼저 레버가 있는 칸으로 이동해 레버를 당긴 후
// 미로를 빠져나가는 문이 있는 칸으로 이동하면 됩니다.
// 이때 아직 레버를 당기지 않았더라도 출구가 있는 칸을 지나갈 수 있습니다.
// 미로에서 한 칸을 이동하는 데 1초가 걸린다고 할 때 최대한 빠르게 미로를 빠져나가는 데 걸리는 시간을 구하여 합니다.
// 미로를 나타낸 문자열 배열 maps가 매개변수로 주어질 때 미로를 탈출하는 데 필요한 최소 시간을 반환하는 solution() 함수를 완성하세요.
// 만약 탈출할 수 없다면 -1을 반환하세요.
//
// 제약 조건:
// - 5 <= maps의 길이 <= 100
// - 5 <= maps[i]의 길이 <= 100
// - maps[i]는 다음 5개의 문자로 구성
//   - S: 시작 지점
//   - E: 출구
//   - L: 레버
//   - O: 통로
//   - X: 벽
// - 시작 지점과 출구, 레버는 항상 다른 곳에 있으며 1개씩만 있음
// - 출구는 레버가 당겨지지 않아도 지나갈 수 있음
// - 모든 통로, 출구, 레버, 시작점은 여러 번 지나갈 수 있음

function solution(maps) {
  const rows = maps.length;
  const cols = maps[0].length;

  let start, end, lever;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (maps[i][j] === "S") {
        start = [i, j];
      } else if (maps[i][j] === "E") {
        end = [i, j];
      } else if (maps[i][j] === "L") {
        lever = [i, j];
      }
    }
  }

  function bfs(from, to) {
    const queue = [[...from, 0]];
    const visited = new Array(rows)
      .fill(0)
      .map(() => new Array(cols).fill(false));
    visited[from[0]][from[1]] = true;

    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    while (queue.length > 0) {
      const [row, col, dist] = queue.shift();

      if (row === to[0] && col === to[1]) {
        return dist;
      }

      for (const [dr, dc] of directions) {
        const newRow = dr + row;
        const newCol = dc + col;

        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          !visited[newRow][newCol] &&
          maps[newRow][newCol] !== "X"
        ) {
          visited[newRow][newCol] === true;
          queue.push([newRow, newCol, dist + 1]);
        }
      }
    }

    return -1;
  }

  const startToLever = bfs(start, lever);
  if (startToLever === -1) {
    return -1;
  }

  const leverToEnd = bfs(lever, end);
  if (leverToEnd === -1) {
    return -1;
  }

  return startToLever + leverToEnd;
}

// Test Case 1
const maps1 = ["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"];
console.log("=== Test Case 1 ===");
console.log("Input:", maps1);
const result1 = solution(maps1);
console.log("Expected: 16");
console.log("Result:  ", result1);
console.log("Pass:    ", result1 === 16);

// Test Case 2
const maps2 = ["LOOXS", "OOOOX", "OOOOO", "OOOOO", "EOOOO"];
console.log("\n=== Test Case 2 ===");
console.log("Input:", maps2);
const result2 = solution(maps2);
console.log("Expected: -1");
console.log("Result:  ", result2);
console.log("Pass:    ", result2 === -1);
