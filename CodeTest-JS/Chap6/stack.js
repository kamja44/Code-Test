/**
 * 스택 구현해보기
 */

const stack = []; // 스택 초기화
const maxSize = 10; // 스택의 최대 크기

// 스택이 가득 찼는지 확인하는 함수
function isFull(stack) {
  return stack.length >= maxSize;
}

// 스택이 비어있는지 확인하는 함수
function isEmpty(stack) {
  return stack.length === 0;
}

// 스택에 데이터를 추가하는 함수
function push(stack, data) {
  if (isFull(stack)) {
    return;
  }
  stack.push(data);
}

// 스택에서 데이터를 꺼내는 함수
function pop(stack, data) {
  if (isEmpty(stack)) {
    return;
  }
  return stack.pop();
}
