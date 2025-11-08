// 2차원 행렬 arr1과 arr2를 입력받아 arr1에 arr2를 곱한 결과를 반환하는 solution 함수를 완성하시오

function solution(arr1, arr2) {
  const result = new Array(arr1.length)
    .fill(0)
    .map(() => new Array(arr2[0].length).fill(0));

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < arr2.length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      result[i][j] = sum;
    }
  }

  return result;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
); // [[15, 15], [15, 15], [15, 15]]
console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ]
  )
); // [[22, 22, 11], [36, 28, 18], [29, 20, 14]]

console.log("=== 행렬 곱셈 테스트 ===\n");

// 테스트 1: 기본 케이스 (3×2) × (2×2)
console.log("테스트 1: (3×2) × (2×2)");
console.log("입력 1:", [
  [1, 4],
  [3, 2],
  [4, 1],
]);
console.log("입력 2:", [
  [3, 3],
  [3, 3],
]);
const test1 = solution(
  [
    [1, 4],
    [3, 2],
    [4, 1],
  ],
  [
    [3, 3],
    [3, 3],
  ]
);
console.log("출력:", test1);
console.log("예상: [[15, 15], [15, 15], [15, 15]]");
console.log(
  "통과:",
  JSON.stringify(test1) ===
    JSON.stringify([
      [15, 15],
      [15, 15],
      [15, 15],
    ])
    ? "✅"
    : "❌"
);
console.log();

// 테스트 2: 정사각 행렬 (3×3) × (3×3)
console.log("테스트 2: (3×3) × (3×3)");
console.log("입력 1:", [
  [2, 3, 2],
  [4, 2, 4],
  [3, 1, 4],
]);
console.log("입력 2:", [
  [5, 4, 3],
  [2, 4, 1],
  [3, 1, 1],
]);
const test2 = solution(
  [
    [2, 3, 2],
    [4, 2, 4],
    [3, 1, 4],
  ],
  [
    [5, 4, 3],
    [2, 4, 1],
    [3, 1, 1],
  ]
);
console.log("출력:", test2);
console.log("예상: [[22, 22, 11], [36, 28, 18], [29, 20, 14]]");
console.log(
  "통과:",
  JSON.stringify(test2) ===
    JSON.stringify([
      [22, 22, 11],
      [36, 28, 18],
      [29, 20, 14],
    ])
    ? "✅"
    : "❌"
);
console.log();

// 테스트 3: 단위 행렬 (2×2) × (2×2)
console.log("테스트 3: 단위 행렬");
console.log("입력 1:", [
  [1, 0],
  [0, 1],
]);
console.log("입력 2:", [
  [5, 7],
  [3, 4],
]);
const test3 = solution(
  [
    [1, 0],
    [0, 1],
  ],
  [
    [5, 7],
    [3, 4],
  ]
);
console.log("출력:", test3);
console.log("예상: [[5, 7], [3, 4]] (단위 행렬 × A = A)");
console.log(
  "통과:",
  JSON.stringify(test3) ===
    JSON.stringify([
      [5, 7],
      [3, 4],
    ])
    ? "✅"
    : "❌"
);
console.log();

// 테스트 4: (2×3) × (3×2)
console.log("테스트 4: (2×3) × (3×2)");
console.log("입력 1:", [
  [1, 2, 3],
  [4, 5, 6],
]);
console.log("입력 2:", [
  [1, 2],
  [3, 4],
  [5, 6],
]);
const test4 = solution(
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [1, 2],
    [3, 4],
    [5, 6],
  ]
);
console.log("출력:", test4);
console.log("예상: [[22, 28], [49, 64]]");
console.log(
  "통과:",
  JSON.stringify(test4) ===
    JSON.stringify([
      [22, 28],
      [49, 64],
    ])
    ? "✅"
    : "❌"
);
console.log();

// 테스트 5: (1×3) × (3×1) - 벡터 내적
console.log("테스트 5: 벡터 내적 (1×3) × (3×1)");
console.log("입력 1:", [[1, 2, 3]]);
console.log("입력 2:", [[4], [5], [6]]);
const test5 = solution([[1, 2, 3]], [[4], [5], [6]]);
console.log("출력:", test5);
console.log("예상: [[32]] (1×4 + 2×5 + 3×6 = 32)");
console.log(
  "통과:",
  JSON.stringify(test5) === JSON.stringify([[32]]) ? "✅" : "❌"
);
console.log();

// 테스트 6: 0 포함
console.log("테스트 6: 0 포함");
console.log("입력 1:", [
  [1, 0],
  [0, 1],
]);
console.log("입력 2:", [
  [0, 1],
  [1, 0],
]);
const test6 = solution(
  [
    [1, 0],
    [0, 1],
  ],
  [
    [0, 1],
    [1, 0],
  ]
);
console.log("출력:", test6);
console.log("예상: [[0, 1], [1, 0]]");
console.log(
  "통과:",
  JSON.stringify(test6) ===
    JSON.stringify([
      [0, 1],
      [1, 0],
    ])
    ? "✅"
    : "❌"
);
console.log();

// 테스트 7: 음수 포함
console.log("테스트 7: 음수 포함");
console.log("입력 1:", [
  [1, -2],
  [-3, 4],
]);
console.log("입력 2:", [
  [2, 3],
  [1, -1],
]);
const test7 = solution(
  [
    [1, -2],
    [-3, 4],
  ],
  [
    [2, 3],
    [1, -1],
  ]
);
console.log("출력:", test7);
console.log("예상: [[0, 5], [-2, -13]]");
console.log(
  "통과:",
  JSON.stringify(test7) ===
    JSON.stringify([
      [0, 5],
      [-2, -13],
    ])
    ? "✅"
    : "❌"
);
