class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // 끝에 추가
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // 앞에 추가
  prepend(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // 특정 인덱스에 삽입
  insert(index, data) {
    if (index < 0 || index > this.size) {
      return false;
    }
    if (index === 0) {
      this.prepend(data);
      return true;
    }

    const newNode = new Node(data);
    let current = this.head;

    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;

    this.size++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      removeNode = current.next;
      current.next = current.next.next;
    }

    this.size--;
    return removeNode.data;
  }

  // 특정 인덱스 조회
  get(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.data;
  }

  // 특정 값 찾기 => 값으로 인덱스 찾기
  indexOf(data) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }
  isEmpty() {
    return this.size === 0;
  }
}
