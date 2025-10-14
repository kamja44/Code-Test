class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  front() {
    return this.isEmpty() ? null : this.items[0];
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  clear() {
    return (this.items = []);
  }
  print() {
    console.log(this.items.join(" <= "));
  }
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
