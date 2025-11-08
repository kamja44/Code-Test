class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node();

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

  // 맨 앞에 노드 추가
  prepend(value) {
    const newNode = new Node();
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("index out of range");
      return;
    }
    if (index === 0) {
      this.append(value);
      return;
    }

    const newNode = new Node(value);
    let current = this.head;
    let previous = null;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    previous.next = newNode;
    newNode.next = current;
    this.size++;
  }

  remove(value) {
    if(!this.head){
        return null;
    }

    if(this.head.value) 
  }

  find() {}

  print() {}
}

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.print(); // 10 -> 20 -> 30

list.prepend(5);
list.print(); // 5 -> 10 -> 20 -> 30

list.insert(15, 2);
list.print(); // 5 -> 10 -> 15 -> 20 -> 30

list.remove(10);
list.print(); // 5 -> 15 -> 20 -> 30

console.log(list.find(20)); // Node { value: 20, next: Node { value: 30, ... } }
console.log(list.size); // 4
