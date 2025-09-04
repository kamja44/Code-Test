// 연결 리스트를 이용하는 방식
class Node {
  constructor(data) {
    this.data = data; // 요소의 값
    this.next = null; // 다음 요소를 참조
  }
}

class Queue {
  constructor() {
    this.head = null; // 첫 번쨰 요소를 참조
    this.tail = null; // 마지막 요소를 참조
    this.size = 0; // 큐의 길이
  }

  push(data) {
    // 새로운 요소를 생성
    const newNode = new Node(data);

    if (!this.head) {
      // 큐가 비어 있다면, head와 tail을 모두 새로 생성한 요소로 설정
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 아니라면, 현재 tail의 next속성을 새롱누 요소로 설정한 후 tail이 새로운 요소를 참조하도록 변경
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++; // 큐 길이 증가
  }

  pop() {
    // head가 null이라면 비어 있다는 뜻
    if (!this.head) {
      return null;
    }
    // 두 번째 요소를 head의 참조로 변경하면 자연스럽게 첫 번째 요소가 사라짐
    const removeNode = this.head;
    this.head = this.head.next;

    // 만약 두 번째 요소가 없었다면, 큐가 비어 있다는 뜻이니 tail도 null로 설정
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
