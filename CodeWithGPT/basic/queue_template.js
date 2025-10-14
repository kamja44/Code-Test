class Queue {
  constructor() {
    this.items = [];
  }

  enqueue() {}

  dequeue() {}

  front() {}
  size() {}
  isEmpty() {}
  clear() {}
  print() {}
}

const queue = new Queue();

queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");
queue.print(); // A <- B <- C

console.log(queue.front()); // A
console.log(queue.dequeue()); // A
queue.print(); // B <- C

console.log(queue.size()); // 2
console.log(queue.isEmpty()); // false

queue.clear();
queue.print(); // (빈 큐)
console.log(queue.isEmpty()); // true
