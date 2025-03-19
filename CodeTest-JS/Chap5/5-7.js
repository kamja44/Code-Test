/**
 * U 위쪽
 * D 아래쪽
 * R 오른쪽
 * L 왼쪽
 *
 * 캐릭터는 0,0에서 시작
 * 경계는 -5,~5
 *
 * 게임 캐릭터가 지나간 길 중 캐릭터가 처음 걸어본 길의 길이를 구한다.
 * - 좌표 평면의 경계를 넘어가는 명령은 무시한다.
 * - 명령어가 매개변수 dirs로 주어진다.
 */
function solution(dirs) {
  let x = 0,
    y = 0;
  let visited = new Set();

  function Location(x, y, dir) {
    switch (dir) {
      case "U":
        return [x, y + 1];
      case "D":
        return [x, y - 1];
      case "R":
        return [x + 1, y];
      case "L":
        return [x - 1, y];
    }
  }

  function isValid(nx, ny) {
    return nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5;
  }

  for (let dir of dirs) {
    const [nx, ny] = Location(x, y, dir);

    if (!isValid(nx, ny)) {
      continue;
    }

    visited.add(`${x}${y}${nx}${ny}`);
    visited.add(`${nx}${ny}${x}${y}`);

    [x, y] = [nx, ny];
  }
  return visited.size / 2;
}

function solution2(dirs) {
  let x = 0,
    y = 0;
  let visited = new Set();
  function Location(x, y, dir) {
    switch (dir) {
      case "U":
        return [x, y + 1];
      case "D":
        return [x, y - 1];
      case "R":
        return [x + 1, y];
      case "L":
        return [x - 1, y];
    }
  }
  function isValid(nx, ny) {
    return nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5;
  }
  for (const dir of dirs) {
    const [nx, ny] = Location(x, y, dir);

    if (!isValid) {
      continue;
    }

    visited.add(`${x}${y}${nx}${ny}`);
    visited.add(`${nx}${ny}${x}${y}`);

    [x, y] = [nx, ny];
  }
  return visited.size / 2;
}

function solution3(dirs) {
  let x = 0,
    y = 0; // 사용자 좌표
  function isValid(nx, ny) {
    return nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5;
  }
  function Location(x, y, dir) {
    switch (dir) {
      case "U":
        return [x, y + 1];
      case "D":
        return [x, y - 1];
      case "R":
        return [x + 1, y];
      case "L":
        return [x - 1, y];
    }
  }
  const visited = new Set();
  for (const dir of dirs) {
    cosnt[(nx, ny)] = Location(x, y, dir);
    if (!isValid(nx, ny)) {
      continue;
    }

    visited.add(`${x}${y}${nx}${ny}`);
    visited.add(`${nx}${ny}${x}${y}`);
    [x, y] = [nx, ny];
  }
  return visited.size / 2;
}
