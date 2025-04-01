/**
 * 크레인 인형 뽑기 게임
 *
 * 게임 화면은 1 x 1 크기의 칸들로 이루어진 N x N 크기의 정사각 격자이다.
 * 각 격자 칸에는 다양한 인형이 들어 있으며 인형이 없는 칸은 빈 칸이다.
 * 인형은 격자 한 칸을 차지하며 격자의 가장 아래 칸부터 차곡차곡 쌓인다.
 * 플레이어는 크레인을 좌우로 움직일 수 있고 크레인을 멈춘 위치에서 가장 위에 있는 인형을 집어 올릴 수 있다.
 * 집어 올린 인형은 바구니에 쌓인다.
 * 같은 모양의 인형 2개가 바구니에 연속해서 쌓이면 두 인형은 펑하고 터지며 사라진다.
 *
 * 2차원 배열 board와 인형을 집는 크레인을 작동시킨 위치가 담긴 배열 moves가 주어질 때, 크레인을 모두 작동시킨 후 사라진 인형 개수를 반환하는 solution을 완성하시오
 */
function solution(board, moves) {
  const stacks = [new Array(board[0].length)].map(() => []);

  for (let i = board - 1; i >= 0; i--) {
    for (let j = 0; j <= board[0].length; j++) {
      if (board[i][j]) {
        stacks[j].push(board[i][j]);
      }
    }
  }

  const stack = [];

  let answer = 0;
  for (const m of moves) {
    if (stacks[m - 1].length > 0) {
      const top = stacks[m - 1].pop();

      if (stack.length > 0 && stack[stack.length - 1] === top) {
        stack.pop();
        answer += 2;
      } else {
        stack.push(top);
      }
    }
  }
  return answer;
}

function solution2(board, moves) {
  const lens = new Array(board[0].length).fill(null).map(() => []);

  for (let i = board[0].length - 1; i >= 0; i--) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] !== 0) {
        lens[j].push(board[i][j]);
      }
    }
  }

  const count = 0;
  const bucket = [];

  for (const m of moves) {
    if (lens[m - 1].length > 0) {
      const top = lens[m - 1].pop();
      if (bucket.length > 0 && bucket[bucket.length - 1] === top) {
        bucket.pop();
        count += 2;
      }
    }
  }
  return count;
}

function solution3(board, moves) {
  const lens = new Array(board[0].length).fill(null).map(() => []);

  for (let i = board.length - 1; i >= 0; i--) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] !== 0) {
        lens[j].push(board[i][j]);
      }
    }
  }

  const bucket = [];
  let count = 0;
  for (const m of moves) {
    if (lens[m - 1].length > 0) {
      const top = lens[m - 1].pop();
      if (bucket.length > 0 && bucket[bucket.length - 1] === top) {
        bucket.pop();
        count += 2;
      } else {
        bucket.push(top);
      }
    }
  }
  return count;
}
