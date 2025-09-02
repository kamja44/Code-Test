// 게임 화면은 1 x 1 크기의 격자로 구성된 N x N 크기의 격자이며, 위쪽에는 크레인이 있고 오른쪽에는 바구니가 있습니다.
// 각 격자 칸에는 다양한 인형이 들어 있으며, 인형이 없는 칸은 빈칸이다.
// 인형은 격자 한 칸을 차지하며, 격자으 가장 아래칸부터 차곡차곡 쌓인다.
// 플레이어는 크레인을 좌우로 움직일 수 있고, 크레인ㅇ르 멈춘 위치에서 가장 위에 있는 인형을 집어 올릴 수 있습니다.
// 집어 올린 인형은 바구니에 쌓입니다.
// 같은 모양 2개가 바구니에 연속해서 쌓이면 두 인형은 사라집니다.
// 인형이 없는 곳에서 크레인을 작동시키면 아무일도 일어나지 않습니다.
// board => 2차원 배열
// moves => 인형을 집는 크레인을 작동시킨 위치가 담긴 배열
// 크레인을 모두 작동시킨 후 사라진 인형 개수를 반환하는 solution 함수를 완성하시오

function solution(board, moves) {
  const stack = [];
  let removeCount = 0;
  for (let i = 0; i < moves.length; i++) {
    const index = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][index] !== 0) {
        const doll = board[j][index];
        board[j][index] = 0;
        if (stack.length > 0 && stack[stack.length - 1] === doll) {
          stack.pop();
          removeCount += 2;
        } else {
          stack.push(doll);
        }
        break;
      }
    }
  }
  return removeCount;
}
const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(board, moves)); // 4
