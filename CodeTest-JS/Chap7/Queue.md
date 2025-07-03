JS에서 Queue를 구현하는 방식

1. push(), shift()를 이용하여 큐를 구현

- push()는 배열의 가장 마지막에 요소를 추가
- shift()는 배열의 가장 첫 번째 요소를 삭제

```js
const queue = [];

queue.push(1);
queue.push(2);
queue.push(3);

let firstItem = queue.shift();

queue.push(4);
queue.push(5);

firstItem = queue.shift();
```

2. 배열을 이용하여 큐를 구현

```js
class Queue {
  item = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}
```

3. 연결 리스트를 이용하여 큐를 구현

- JS에서 지원하지 않음 => 직접 구현해야함

```js
class Node {
  constructor(data) {
    this.data = data; // 요소의 값
    this.next = null; // 다음 요소를 참조
  }
}

class Queue {
  constructor() {
    this.head = null; // 첫 번째 요소 참조
    this.tail = null; // 마지막 요소 참조
    this.size = 0; // 큐의 길이
  }

  push(data) {
    // 새로운 요소 생성
    const newNode = new Node(data);

    if (!this.head) {
      // 큐가 비어 있다면 head와 tail을 모두 새로 생성한 요소로 설정
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 아니라면, 현재 tail의 next 속성을 새로운 요소로 설정한 후, tail이 새로운 요소를 참조하도록 변경
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++; // 큐 길이 증가
  }

  pop() {
    // head가 null 이라면 비어 있음
    if (!this.head) {
      return null;
    }

    // 두 번쨰 요소를 head의 참조로 변경하면 자연스럼게 첫 번째 요소가 사라진다.
    const removeNode = this.head;
    this.head = this.head.next;

    // 만일 두 번째 요소가 없다면, 큐가 비어 있다는 뜻이기에 tail도 null로 설정
    if (!this.head) {
      this.tail = null;
    }
    this.size--; // 큐 길이 감소

    // 삭제된 요소의 값을 반환
    return removeNode.data;
  }

  isEmpty() {
    return this.size === 0;
  }
}
```
