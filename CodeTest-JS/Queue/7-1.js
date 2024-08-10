/**
 * 배열을 이용하여 큐 생성
class Queue{
    items = [];
    front = 0;
    rear = 0;

    push(item){
        this.items.push(item);
        this.rear++;
    }
    pop(){
        return this.items[this.fromt++];
    }
    isEmpty(){
        return this.front === this.rear;
    }
}
 */

/**
 * 연결 리스트를 이용하는 방식
 */
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
    // 새로운 요소  생성
    const newNode = new Node(data);
    if (!this.head) {
      // 큐가 비어 있다면 head와 tail을 모두 새로 생성한 요소로 설정
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 큐에 데이터가 있다면 tail의 next 속성을 새로운 요소로 설정 후 tail이 새로운 요소를 참조하도록 변경
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++; // 큐 길이 증가
  }
  pop() {
    // haed가 null이라면, 비어 있다.
    if (!this.head) {
      return null;
    }
    // 두 번째 요소를 head의 참조로 변경하면 자연스레 첫 번째 요소가 사라진다.
    const removeNode = this.head;
    this.head = this.head.next;

    // 만일, 두 번째 요소가 없다면 큐가 비어 있는 것이기에 tail도 null로 설정한다.
    if (!this.head) {
      this.tail = null;
    }
    this.size--; // 큐 길이 감소

    // 삭제된 요소의 값 반환
    return removeNode.data;
  }
  isEmpty() {
    return this.size === 0;
  }
}
