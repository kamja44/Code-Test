// 명령어 기반으로 표의 행을 선택, 삭제, 복구하는 프로그램을 작성하는 과제를 수행한다.
// 표에서 진하게 칠한 칸은 선택한 행이다.
// 한 번에 한 행만 선택할 수 있으며, 표의 범위를 벗어날 수 없다. 이떄, 다음과 같은 명령어를 이용하여 표를 편집한다.
// "U X" => 현재 선택한 행에서 X칸 위에 있는 행을 선택한다.
// "D X"=> 현재 선택한 행에서 X칸 아래에있는 행을 선택한다.
// "C" => 현재 선택한 행을 삭제한 후, 바로 아래 행을 선택한다. 단, 삭제된행이 가장 마지막 행인 경우 바로윗 행을 선택한다.
// "Z" => 가장 최근에 삭제한 행을원래대로 복구한다. 단, 현재 선택한 행을 변경하진 않는다.

// n => 처음 표의 행 개수를 나타내는 정수
// k => 처음에 선택한 행의 위치를 나타내는 정수
// cmd => 수행한 명령어들이 담긴 문자열 배열
// 모든 명령어를 수행한 후, 표의 상태와 처음 표의 상태를 비교하여 삭제되지 않은 행은 O, 삭제된 행은 X로 표시하는 solution 함수를 구현하시오

function solution(n, k, cmd) {
  let current = k;
  const deletedArray = [];
  const table = new Array(n).fill(true);

  function UpFn(value) {
    let count = 0;

    while (count < value) {
      current--;
      if (table[current]) {
        count++;
      }
    }
  }

  function DownFn(value) {
    let count = 0;
    while (count < value) {
      current++;
      if (table[current]) {
        count++;
      }
    }
  }

  function DeleteFn() {
    deletedArray.push(current);
    table[current] = false;
    let found = false;

    for (let i = current + 1; i < n; i++) {
      if (table[i]) {
        current = i;
        found = true;
        break;
      }
    }

    if (!found) {
      for (let i = current - 1; i >= 0; i--) {
        if (table[i]) {
          current = i;
          found = true;
          break;
        }
      }
    }
  }

  function restoreFn() {
    const deleted = deletedArray.pop();
    table[deleted] = true;
  }

  for (const command of cmd) {
    const [op, value] = command.split(" ");

    if (op === "U") {
      UpFn(value);
    } else if (op === "D") {
      DownFn(value);
    } else if (op === "C") {
      DeleteFn();
    } else if (op === "Z") {
      restoreFn();
    }
  }

  return table.map((item) => (item ? "O" : "X")).join("");
}

const cmd1 = ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"]; // OOOOXOOO
const cmd2 = ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z", "U 1", "C"]; // OOXOXOOO

console.log(solution(8, 2, cmd1)); // OOOOXOOO
console.log(solution(8, 2, cmd2)); // OOXOXOOO
