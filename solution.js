const { reverse } = require("dns");
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
  //   ✓ Sort the stack, minimum value on top
  sort() {
    let sortStackArr = [];
    let currentVal = this.top;
    while (currentVal) {
      // causes a infinite loop - breaks the terminal
      // let next = currentVal.next
      // if (currentVal.data > next.data) {
      //   currentVal.next = currentVal;
      //   currentVal = next;
      // }
      sortStackArr.push(currentVal.data);
      currentVal = currentVal.next;
    }

    sortStackArr.sort().reverse();

    sortStackArr.forEach((minVal) => {
      this.push(minVal);
    });
  }
}

// Create a queue with properties - first,last,size,max value
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // ✓ Can create a new node
  // ✓ Can create a new queue
  // ✓ Can add to queue using enqueue method
  enqueue(data) {
    let newValue = new Node(data);
    if (!this.first) {
      this.first = newValue;
      this.last = newValue;
    } else {
      this.last.next;
      this.last = newValue;
    }
    return ++this.size;
  }
  //  ✓ Can remove from queue using dequeue method
  dequeue() {
    if (this.first == null) {
      throw new Error("The queue is empty!");
    }

    const item = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return item.data;
  }
  //  ✓ Check if queue is empty
  isEmpty() {
    return this.first === null;
  }

  //  ✓ Peek at first in queue
  peek() {
    if (this.first == null) {
      throw new Error("The queue is empty!");
    }
    return this.first;
  }
  // ✓ Count size of queue
  count() {
    return this.size;
  }
  findMax() {
    if (!this.first) {
      return null;
    }
    let node = this.first;
    let maxVal = node.data;

    while (node) {
      if (node.data > maxVal) {
        maxVal = node.data;
      }
      node = node.next;
    }
    return maxVal;
  }

  //    ✓ Get last in queue
  getLast() {
    return this.last;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
