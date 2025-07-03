/**
 * N명의 사람이 원 형태로 서있음
 * 각 사람은 1부터 N까지의 번호를 가짐
 * 임의의 K가 주어질 떄 다음과 같이 사람을 없앰
 * - 1번 번호표를 가진 사람을 기준으로 K번째 사람을 없앤다.
 * - 없앤 사람 다음 사람을 기준으로 하고 다시 K번쨰 사람을 없앤다.
 *
 * N과 K가 주어질 때 마지막에 살아있는 사람의 번호를 반환하는 solution 함수를 구현하라.
 */
/**
 * N명의 사람이 원 형태로 서있음
 * 각 사람은 1부터 N까지의 번호를 가짐
 * 임의의 K가 주어질 떄 다음과 같이 사람을 없앰
 * - 1번 번호표를 가진 사람을 기준으로 K번째 사람을 없앤다.
 * - 없앤 사람 다음 사람을 기준으로 하고 다시 K번쨰 사람을 없앤다.
 *
 * N과 K가 주어질 때 마지막에 살아있는 사람의 번호를 반환하는 solution 함수를 구현하라.
 */
class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  // 큐의 크기 알기
  size() {
    return this.rear - this.front;
  }

  pop() {
    return this.items[this.front++];
  }
}
class Queue2 {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  size() {
    return this.rear - this.front;
  }

  pop() {
    return this.items[this.front++];
  }
}
class Queue3 {
  items = [];
  front = 0;
  rear = 0;
  push(item) {
    this.items.push(item);
    this.rear++;
  }

  size() {
    return this.rear - this.front;
  }

  pop() {
    return this.items[this.front++];
  }
}

class Queue4 {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  size() {
    return this.reat - this.front;
  }

  pop() {
    return this.items[this.front++];
  }
}

function solution(N, K) {
  const queue = new Queue();

  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < K - 1; i++) {
      queue.push(queue.pop());
    }
    queue.pop();
  }
  return queue.pop();
}

function solution2(N, K) {
  const queue = new Queue2();

  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < K - 1; i++) {
      queue.push(queue.pop());
    }
    queue.pop();
  }
  return queue.pop();
}

function solution3() {
  const queue = new Queue3();

  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }
  while (queue.size() > 1) {
    for (let i = 0; i < K - 1; i++) {
      queue.push(queue.pop());
    }
    queue.pop();
  }
  return queue.pop();
}

function solution4(N, K) {
  const queue = new Queue4();

  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < K - 1; i++) {
      queue.push(queue.pop());
    }
    queue.pop();
  }
  return queue.pop();
}
