/**
 * 업무용 소프트웨어를 개발하는 니닞웍스의 인턴인 앙몬드는 명령어 기반으로 표의 행을 선택, 삭제, 복구하는 프로그램을 작성하는 과제를 맡았다.
 */

function solution(n, k, cmd) {
  const deleted = [];
  const up = Array.from({ length: n }, (_, i) => i - 1);
  const down = Array.from({ length: n }, (_, i) => i + 1);

  let current = k;

  cmd.forEach((command) => {
    const [action, value] = command.split(" ");
    const move = Number(value);

    if (action === "U") {
      for (let i = 0; i < move; i++) {
        current = up[current];
      }
    } else if (action === "D") {
      for (let i = 0; i < move; i++) {
        current = down[current];
      }
    } else if (action === "C") {
      deleted.push([current, up[current], down[current]]);
      if (up[current] !== -1) {
        down[up[current]] = down[current];
      }
      if (down[current !== n]) {
        up[down[current]] = up[current];
      }
    } else if (action === "Z") {
      const [restored, upper, lower] = deleted.pop();
      if (upper !== -1) {
        down[upper] = restored;
      }
      if (lower !== n) {
        up[lower] = restored;
      }
    }
  });

  const result = Array(n).fill("O");
  deleted.forEach(([index]) => {
    result[index] = "X";
  });

  return result.join("");
}

// 문제점 => C일때 current의 위치 변경 코드가 누락되어 있음
function solution2(n, k, cmd) {
  const deleted = [];
  const up = Array.from({ length: n }, (_, index) => index - 1);
  const down = Array.from({ length: n }, (_, index) => index + 1);

  let current = k;
  for (const char of cmd) {
    const [action, value] = char.split(" ");
    const move = Number(value);

    if (action === "U") {
      for (let i = 0; i < move; i++) {
        current = up[current];
      }
    }

    if (action === "D") {
      for (let i = 0; i < move; i++) {
        current = down[current];
      }
    }

    if (action === "C") {
      deleted.push([current, up[current], down[current]]);
      if (up[current] !== -1) {
        down[up[current]] = down[current];
      }
      if (down[current] !== n) {
        up[down[current]] = up[current];
      }
    }

    if (action === "Z") {
      const [restored, upper, lower] = deleted.pop();
      if (upper !== -1) {
        down[upper] = restored;
      }
      if (lower !== n) {
        up[lower] = restored;
      }
    }
  }

  const result = Array(n).fill("O");
  deleted.forEach(([index]) => {
    result[index] = "X";
  });

  return result.join("");
}

function solution3(n, k, cmd) {
  const deleted = [];
  const up = Array.from({ length: n }, (_, i) => i - 1);
  const down = Array.from({ length: n }, (_, i) => i + 1);

  let current = k;
  for (const char of cmd) {
    const [action, value] = char.split(" ");
    const move = Number(value);

    if (action === "U") {
      for (let i = 0; i < move; i++) {
        current = up[current];
      }
    } else if (action === "D") {
      for (let i = 0; i < move; i++) {
        current = down[current];
      }
    } else if (action === "C") {
      deleted.push([current, up[current], down[current]]);
      if (up[current] !== -1) {
        down[up[current]] = down[current];
      } else if (down[current] !== n) {
        up[down[current]] = up[current];
      }
      current = down[current] !== n ? down[current] : up[current];
    } else if (action === "Z") {
      cosnt[(restored, upper, lower)] = deleted.pop();
      if (upper !== -1) {
        down[upper] = restored;
      }
      if (lower !== n) {
        up[lower] = restored;
      }
    }
  }

  const result = new Array(n).fill("O");
  deleted.forEach(([index]) => {
    result[index] = "X";
  });
}

function solution4(n, k, cmd) {
  const deleted = [];
  const up = Array.from({ length: n }, (_, index) => index - 1);
  const down = Array.from({ length: n }, (_, index) => index + 1);

  let current = k;

  for (const char of cmd) {
    const [action, value] = char.split(" ");
    const move = Number(value);

    if (action === "U") {
      for (let i = 0; i < move; i++) {
        current = up[current];
      }
    } else if (action === "D") {
      for (let i = 0; i < move; i++) {
        current = down[current];
      }
    } else if (action === "C") {
      deleted.push([current, up[current], down[current]]);
      if (up[current] !== -1) {
        down[up[current]] = down[current];
      }
      if (down[current] !== n) {
        up[down[current]] = up[current];
      }
      current = down[current] !== n ? down[current] : up[current];
    } else if (action === "Z") {
      const [current, upper, lower] = deleted.pop();

      if (upper !== -1) {
        down[upper] = current;
      }
      if (lower !== n) {
        up[lower] = current;
      }
    }
  }

  const result = Array(n).fill("O");
  deleted.forEach(([index]) => {
    result[index] = "X";
  });
  return result.join("");
}
