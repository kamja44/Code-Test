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

  append(value) {}

  prepend() {}

  insert() {}

  remove() {}

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
