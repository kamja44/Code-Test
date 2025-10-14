// 스틀리밍 사이트에서 장르별로 가장 많이 재생된 노래를 2개씩 모아 베스트 엘범을 출시하려 합니다.
// 노래는 고유 번호로 구분하며, 노래 수록 기준은 다음과 같습니다.
// 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
// 장르 내 많이 재생된 노래를 먼저 수록합니다.
// 장르 내에서 재생 횟수가 같느 노래 중 고유 번호가 낮은 노래를 먼저 수록합니다.
// genres => 노래의 장르를 나타내는 문자열 배열
// plays => 노래별 재생 횟수를 나타내는 정수 배열
// 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 반환하는 solution 함수를 완성하시오

function solution(genres, plays) {
  const map = new Map();
  const array = [];
  for (let i = 0; i < genres.length; i++) {
    array.push([genres[i], plays[i], i]);
    map.set(genres[i], (map.get(genres[i]) || 0) + plays[i]);
  }
  console.log(array);
  console.log(map);
  const sortedGenres = [...map.entries()].sort((a, b) => b[1] - a[1]);
  console.log(`sorted`, sortedGenres);

  const result = [];

  for (const [genre, totalPlays] of sortedGenres) {
    const generSongs = array.filter((song) => song[0] === genre);
    console.group(`${genre} 장르 노래들: `, generSongs);

    generSongs.sort((a, b) => {
      if (a[1] !== b[1]) {
        return b[1] - a[1];
      }
      return a[2] - b[2];
    });

    const selected = generSongs.slice(0, 2);
    result.push(...selected.map((song) => song[2]));
  }
  return result;
}

const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];
console.log(solution(genres, plays)); // [4,1,3,0]
