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

  for (let dir of dirs) {
    let prevX = x; // 추가
    let prevY = y; // 추가

    if (dir === "U") {
      y += 1; // newY → y로 변경
    } else if (dir === "D") {
      y -= 1; // newY → y로 변경
    } else if (dir === "R") {
      x += 1; // newX → x로 변경
    } else if (dir === "L") {
      x -= 1; // newX → x로 변경
    }

    if (x <= 5 && x >= -5 && y <= 5 && y >= -5) {
      visited.add(`${prevX},${prevY}->${x},${y}`); // 경로 형태로 변경
    } else {
      x = prevX; // 추가
      y = prevY; // 추가
    }
  }

  return visited.size;
}

console.log(solution("ULURRDLLU")); // 7
console.log(solution("LULLLLLU")); // 7
