const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

// create a Node class w/ properties - data & next
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// create a stack with properties - top
class Stack {
  constructor(top = null) {
    this.top = top;
  }

  // ✓ Can create a new node
  // ✓ Can create a new stack
  // ✓ Can add to stack using push method
  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }

  //  ✓ Can remove from stack using pop method
  pop() {
    if (this.top === null) {
      throw new Error("This stack is empty!");
    }
    let item = this.top;
    if (item) {
      let newItem = item.next;
      this.top = newItem;
      return item;
    }
  }
  //  ✓ Count size of stack
  size() {
    let currentNode = this.top;
    let sizeAmt = 0;
    while (currentNode) {
      sizeAmt++;
      currentNode = currentNode.next;
    }
    return sizeAmt;
  }
 // ✓ Find minimum data value
  findMin() {
    let currentSpot = this.top;
    let minValue = currentSpot.data;
    while (currentSpot) {
      if (currentSpot < minValue) {
        minValue = currentSpot.data;
      }
      currentSpot = currentSpot.next;
    }
    return minValue;
  }

  //  ✓ Check if stack is empty
  isEmpty() {
    return this.top === null;
  }
  //  ✓ Peek at top of stack
  peek() {
    if (this.top === null) {
      throw new Error("This stack is empty!");
    }
    return this.top;
  }

  sort() {}
}

// Create a queue with properties - first,last,size,max value
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}
module.exports = {
  Node,
  Queue,
  Stack,
};
