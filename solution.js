const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  setNext(node) {
    this.next = node;
  }
}
class Stack {
  constructor(top) {
    this.top = top;
  }
  push(node) {
    const newNode = new Node(node);
    if (!!this.top) {
      newNode.next = this.top;
    }
    this.top = newNode;
  }
  pop() {
    const temp = this.top;
    this.top = this.top.next;
    return temp;
  }
  size() {
    let curr = this.top;
    let count = 0;

    while (!!curr) {
      curr = curr.next;
      count++;
    }

    return count;
  }
  isEmpty() {
    return !this.top;
  }
  peek() {
    return this.top;
  }
  findMin() {
    let curr = this.top;
    let min = Infinity;

    while (!!curr) {
      if (curr.data < min) {
        min = curr.data;
      }
      curr = curr.next;
    }

    return min;
  }
  sort() {
    let curr = this.top;
    let array = [];

    while (!!curr) {
      array.push(curr.data);
      curr = curr.next;
    }

    this.top = null;

    for (let item of array.sort().reverse()) {
      this.push(item);
    }
  }
}
class Queue {
  constructor(first, last, size = 0, max = null) {
    this.first = first;
    this.last = last;
    this.size = size;
    this.max = max;
  }
  enqueue(node) {
    let newNode = new Node(node);
    if (!this.first) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
    this.size++;
    if (newNode.data > this.max) {
      this.max = newNode.data;
    }
  }
  dequeue() {
    let temp = this.first.data;
    this.first = this.first.next;
    this.size--;
    return temp;
  }
  count() {
    return this.size;
  }
  isEmpty() {
    return !this.first;
  }
  peek() {
    return this.first;
  }
  getLast() {
    return this.last;
  }
  findMax() {
    let curr = this.first;
    let max = -Infinity;
    while (curr) {
      if (curr.data > max) {
        max = curr.data;
      }
      curr = curr.next;
    }
    this.max = max;
    return max;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
