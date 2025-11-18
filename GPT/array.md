# JavaScript 알고리즘 정리 — 배열 & 문자열 (Two Pointers / Sliding Window)

## 1) 전체 개요

이 단원에서는 배열(Array)과 문자열(String) 문제를 효율적으로 해결하기 위한 핵심 기법인  
투 포인터(Two Pointers)와 슬라이딩 윈도우(Sliding Window)를 다룹니다.  
두 개념 모두 코딩테스트에서 자주 등장하며, 중첩 루프를 O(N) 선형 탐색으로 바꾸는 데 핵심이 됩니다.

---

## 2) 학습 목표

| 항목      | 설명                                                                    |
| --------- | ----------------------------------------------------------------------- |
| 핵심 개념 | 한 번의 순회(O(N))로 조건을 만족하는 구간(부분 배열/문자열)을 찾는 패턴 |
| 학습 목표 | 중첩 for문을 선형 탐색으로 전환하는 사고 정립                           |
| 대표 문제 | 1. 연속 부분합 2. 문자열 내 중복 없는 부분 문자열 3. 두 배열의 교집합   |

---

## 3) 투 포인터 (Two Pointers)

### 개념

두 개의 인덱스(pointer)를 이용해 정렬된 배열 등에서 조건(합, 차 등)을 만족하는 쌍이나 구간을  
선형 시간에 탐색하는 기법입니다.

### 예제: 정렬 배열에서 두 수의 합 (O(N))

```js
function twoSumSorted(arr, target) {
  let left = 0, right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [arr[left], arr[right]];
    if (sum < target) left++;
    else right--;
  }
  return [];
}

console.log(twoSumSorted([1, 2, 3, 4, 6, 8], 10)); // [2, 8]
동작 흐름 예시
text
코드 복사
배열: [1, 2, 3, 4, 6, 8]
target = 10

1단계: left=0(1), right=5(8) → 합=9 < 10 → left++
2단계: left=1(2), right=5(8) → 합=10 → 정답
단계	left	right	sum	결과
1	0	5	9	left++
2	1	5	10	정답

4) 슬라이딩 윈도우 (Sliding Window)
개념
고정 길이 또는 가변 길이의 윈도우(구간)를 한 칸씩 이동(slide)하면서
부분합, 최댓값, 조건 만족 여부 등을 효율적으로 계산하는 방식입니다.

예제: 길이 k의 부분합 최대값 (O(N))
js
코드 복사
function maxSubarraySum(arr, k) {
  if (arr.length < k) return null;

  let windowSum = 0;
  for (let i = 0; i < k; i++) windowSum += arr[i];
  let maxSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k]; // 이전 값 제거 + 새 값 추가
    if (windowSum > maxSum) maxSum = windowSum;
  }
  return maxSum;
}

console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3)); // 9 (5+1+3)
동작 흐름 예시
text
코드 복사
배열: [2, 1, 5, 1, 3, 2],  k = 3

① [2, 1, 5] = 8
② [1, 5, 1] = 7
③ [5, 1, 3] = 9  (최대)
④ [1, 3, 2] = 6
윈도우 위치	구간	합	최대
0~2	[2,1,5]	8	8
1~3	[1,5,1]	7	8
2~4	[5,1,3]	9	최대
3~5	[1,3,2]	6	9

5) 시간복잡도 비교
방식	설명	시간복잡도
중첩 for문	모든 부분 배열/쌍 탐색	O(N²)
투 포인터	인덱스 2개 이동으로 판정	O(N)
슬라이딩 윈도우	구간을 한 칸씩 이동하며 갱신	O(N)

6) 연습문제 추천
난이도	문제	키워드
쉬움	정렬 배열의 두 수의 합	투 포인터
중간	길이 k 부분합의 최댓값	슬라이딩 윈도우 (고정)
중간	문자열 내 중복 없는 가장 긴 부분 문자열	슬라이딩 윈도우 (가변) + Set

7) 복잡도 요약
알고리즘	반복 횟수	주요 연산	시간복잡도
투 포인터	N	비교/포인터 이동	O(N)
슬라이딩 윈도우	N	이전값 제거 + 새값 추가	O(N)

8) 체크리스트
 투 포인터: left/right 이동 조건을 분기 처리할 수 있는가?

 슬라이딩 윈도우: 이전값 제거 + 새값 추가로 합/상태를 갱신할 수 있는가?

 중첩 루프를 선형 패턴으로 전환하는 연습을 했는가?
```
