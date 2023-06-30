const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Stack {
  constructor(top = null) {
    this.top = top;

  }
  push(value) {
    const newItem = new Node(value);
    newItem.next = this.top;
    this.top = newItem;
  }

  peek() {
    if (this.top === null) {
      throw new Error("This stack is empty!")

    }
    return this.top
  }

  isEmpty() {
    return this.top === null;
  }

  size() {
    let count = 0;
    let node = this.top;
    if (this.top === null) {
      return 0;
    } else {
      while (node) {
        count++;
        node = node.next;
      }
      return count;
    }

  }

  pop() {
    if (this.top === null) {
      throw new Error("The stack is empty");
    }
    let item = this.top;
    if (item) {
      let newItem = item.next;
      this.top = newItem;

    }
    return item;
  }

  findMin() {
    let node = this.top;
    let min = node.data;
    while (node !== null) {
      if (node.data < min) {
        min = node.data;
      }
      node = node.next;
    }
    return min;
  }


  sort() {
    if (this.first === null) {
      throw new Error("The queue is empty");
    }
    let sorted = new Stack();
    while (!this.isEmpty()) {
      let curr = this.pop().data;
      while (!sorted.isEmpty() && sorted.peek().data > curr) {
        this.push(sorted.pop().data);
      }
      sorted.push(curr);
    }
    while (!sorted.isEmpty()) {
      this.push(sorted.pop().data);
    }
  }

}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = 0;
  }
  count() {
    return this.size;
  }

  dequeue() {
    if (this.first === null) {
      throw new Error("This queue is Empty")
    }
    const currentFirst = this.first
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next;
    this.size--;
    return currentFirst.data;
  }

  enqueue(data) {
    let newItem = new Node(data)
    if (this.first === null) {
      this.first = newItem
      this.last = newItem
    } else {
      this.last.next = newItem;
      this.last = newItem
    }
    return ++this.size;
  }

  isEmpty() {
    return this.first === null;
  }

  getLast() {
    return this.last;
  }
  findMax() {
    if (this.first === null) {
      throw new Error("The queue is empty");
    }
    let node = this.first;
    let max = node.data;
    while (node !== null) {
      if (node.data > max) {
        max = node.data;
      }
      node = node.next;
    }
    return max;
  }
  peek() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    return this.first;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
