// 스트리밍 사이트에서 장르별ㄹ ㅗ가장 많이 재생된 노래를 2개씩 모아 베스트 앨범을 출시한다.
// 노래는 고유 번호로 구분하며, 노래 수록 기준은 아래와 같다.
// 속한 노래가 많이 재생된 장르를 먼저 수록
// 장르 내엣 많이 재생된 노래를 먼저 수록
// 장르 내에서 재생 횟수가 같은 노래 중 고유번호가 낮은 노래를 먼저 수록

// genres => 노래의 장르를 나타내는 문자열 배열
// plays => 노래별 재생 횟수를 나타내는 정수 배열
// 노래의 고유 번호를 순서대로 반환하는 solution()함수를 완성하시오

function solution(genres, plays) {
  const genreList = [];
  for (let i = 0; i < genres.length; i++) {
    genreList.push([i, genres[i], plays[i]]);
  }
  const mostMap = new Map();
  for (let i = 0; i < genreList.length; i++) {
    mostMap.set(
      genreList[i][1],
      (mostMap.get(genreList[i][1]) || 0) + genreList[i][2]
    );
  }
  const sortMap = [...mostMap.entries()].sort((a, b) => b[1] - a[1]);
  const result = [];
  for (const [genre, play] of sortMap) {
    const filter = genreList.filter((item) => item[1] === genre);

    filter.sort((a, b) => {
      if (a[2] !== b[2]) {
        return b[2] - a[2];
      }
      return a[0] - b[0];
    });

    for (let i = 0; i < 2; i++) {
      if (filter[i]) {
        result.push(filter[i]);
      }
    }
  }
  return result.map((item) => item[0]);
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
); // [4,1,3,0]
