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
  const path = new Set();

  for (const dir of dirs) {
    let prevX = x;
    let prevY = y;

    if (dir === "U") {
      y++;
    } else if (dir === "D") {
      y--;
    } else if (dir === "L") {
      x--;
    } else if (dir === "R") {
      x++;
    }

    if (x <= 5 && x >= -5 && y <= 5 && y >= -5) {
      path.add(`${prevX}, ${prevY}, ${x}, ${y}`);
    } else {
      x = prevX;
      y = prevY;
    }
  }
  return path.size;
}

console.log(solution("ULURRDLLU")); // 7
console.log(solution("LULLLLLU")); // 7
console.log(solution("UDUD")); // 2
