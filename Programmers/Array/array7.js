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
  visited.add(`${x}, ${y}`);
  for (let dir of dirs) {
    let newX = x;
    let newY = y;
    if (dir === "U") {
      newY += 1;
    } else if (dir === "D") {
      newY -= 1;
    } else if (dir === "R") {
      newX += 1;
    } else if (dir === "L") {
      newX -= 1;
    }

    if (newX < 5 && newX > -5 && newY < 5 && newY > -5) {
      x = newX;
      y = newY;
      visited.add(`${x}, ${y}`);
    }
  }

  return visited.size;
}

console.log(solution("ULURRDLLU")); // 7
console.log(solution("LULLLLLU")); // 7
