// 게임 캐릭터를 4가지 명령어를 통해 움직이려 한다.
// U => 위로
// D => 아래로
// R => 오른쪽으로
// L => 왼쪽으로
// 캐리터는 0,0위치에서 시작한다.
// x축 -5 ~ 5, y축 -5~5
// dirs => 명령어
// 캐릭터가 처음 걸어본 길의 길이를 구해 반환하는 solution 함수를 완성하세요.

function solution(dirs) {
  let x = 0,
    y = 0;
  const visited = new Set();

  for (const dir of dirs) {
    let newX = x,
      newY = y;
    if (dir === "U") {
      newY++;
    } else if (dir === "D") {
      newY--;
    } else if (dir === "L") {
      newX--;
    } else if (dir === "R") {
      newX++;
    }

    if (newX > 5 || newX < -5 || newY > 5 || newY < -5) {
      continue;
    }

    const path = `${Math.min(x, newX)}, ${Math.min(y, newY)} => ${Math.max(
      x,
      newX
    )}, ${Math.max(y, newY)}`;

    visited.add(path);

    x = newX;
    y = newY;
  }

  return visited.size;
}

console.log(solution("ULURRDLLU")); // 7
console.log(solution("LULLLLLU")); // 7
