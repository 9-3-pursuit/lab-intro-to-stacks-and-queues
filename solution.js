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
  push(data) {
    const newData = new Node(data);
    newData.next = this.top;
    this.top = newData;
  }
  pop() {
    if (this.top === null) {
      throw new Error("The stack is empty");
    }
    let item = this.top;
    if (item) {
      let newItem = item.next;
      this.top = newItem;
      return item;
    }
  }
  size() {
    if (this.top === null) {
      return 0;
    } else {
      let counter = 0;
      let node = this.top;
      while (node) {
        node = node.next;
        counter++;
      }
      return counter;
    }
  }
  isEmpty() {
    if (this.top === null) {
      return true;
    } else {
      return false;
    }
  }
  findMin() {
    if (this.top === null) {
      throw new Error("The stack is empty");
    }
    let node = this.top;
    let currentMinValue = node.data;
    while (node) {
      if (this.data < currentMinValue) {
        currentMinValue = this.data;
      }
      node = node.next;
      return currentMinValue;
    }
  }
  peek() {
    if (this.top === null) {
      throw new Error("The stack is empty");
    }
    return this.top;
  }
  sort() {
    if (this.top === null) {
      throw new Error("The stack is empty");
    }
    let arrayOfData = [];
    let node = this.top;
    while (node) {
      arrayOfData.push(node.data);
      node = node.next;
    }
    arrayOfData.sort((a, b) => b.localeCompare(a)); // sorting in descending order
    this.top = null;
    console.log(arrayOfData);
    arrayOfData.forEach(data => {
      this.push(data); // pushing each data element into new stack from last element to first
    });
    return this.top; // top of stack is first element in ascending order
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = 0;
  }
  enqueue(data) {
    let newNode = new Node(data);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      this.max = data;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      if (data > this.max) { //comparing incoming data with current max value
        this.max = data; //updating this.max if incoming data is greater
      }
    }
    return ++this.size;
  }
  dequeue() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    const node = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return node.data;
  }
  count() {
    return this.size;
  }
  isEmpty() {
    if (this.size === 0) {
      return true;
    } else {
      return false;
    }
  }
  peek() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    } else {
      return this.first;
    }
  }
  getLast() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    } else {
      return this.last;
    }
  }
  findMax() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    } else {
      return this.max;
    }
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
