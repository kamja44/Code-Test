class Stack {
  constructor() {
    this.items = [];
  }

  push() {}

  pop() {}

  peek() {}

  size() {}

  isEmpty() {}

  clear() {}

  print() {}
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print(); // 10 -> 20 -> 30

console.log(stack.peek()); // 30
console.log(stack.pop()); // 30
stack.print(); // 10 -> 20
console.log(stack.size()); // 2
