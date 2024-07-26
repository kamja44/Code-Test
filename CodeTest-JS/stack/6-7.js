// 2차원 배열 board
// 크레인이 움직인 위치 배열 moves

/**
 * 바구니가 비어있다 => push
 * 바구니가 비지 않았다.
 * - 바구니에 가장 최근 넣은 인형과 지금 넣으려고 하는 인형이 같은지 비교
 *  - 같다면
 *      - 바구니에 있는 원소를 pop하고 사라진 인형을 센다.
 *  - 다르다면
 *      - 바구니에 push한다.
 * 마지막에 스택의 길이를 출력한다.
 */
/*
function solution(board, moves) {
  // 1. 각 열에 대한 스택 생성
  const lanes = [...Array(board[0].length)].map(() => []);
  // [ [], [], [], [], [] ]
  // 2. board를 역순으로 탐색하며, 각 열의 인형을 lanes에 추가한다.
  for (let i = board.length - 1; i >= 0; i--) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j]) {
        lanes[j].push(board[i][j]);
        // console.log(lanes);
      }
    }
  }
  // 3. 인형을 담을 bucket 생성
  const bucket = [];
  // 4. 사라진 인형 count
  let count = 0;
  // 5. moves를 순회하며 각 열에서 인형을 뽑아 bucket에 추가
  for (const m of moves) {
    if (lanes[m - 1].length > 0) {
      // 해당 열에 인형이 있는 경우
      const doll = lanes[m - 1].pop();
      if (bucket.length > 0 && bucket[bucket.length - 1] === doll) {
        bucket.pop();
        count += 2;
      } else {
        bucket.push(doll);
      }
    }
  }
  return count;
}
*/
function solution(board, moves) {
  const n = board.length;
  const lanes = [...Array(board[0].length)].map(() => []);

  let answer = 0;
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j]) {
        lanes[j].push(board[i][j]);
      }
    }
  }
  const bucket = [];
  for (const m of moves) {
    const doll = lanes[m - 1].pop();
    if (bucket.length > 0 && bucket[bucket.length - 1] === doll) {
      bucket.pop();
      answer += 2;
    } else {
      bucket.push(doll);
    }
  }
  return answer;
}
const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(board, moves));
