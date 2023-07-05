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
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }

  pop() {
    if (this.top == null) {
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
    let count = 0;
    let node = this.top;

    while (node) {
      node = node.next;
      count++;
    }
    return count;
  }

  isEmpty() {
    return this.top === null;
  }

  peek() {
    return this.top;
  }

  findMin() {
    let minNum = this.top;
    let node = this.top;

    while (node) {
      if (node.data <= minNum.data) {

 minNum = node;
      }
      node = node.next;
    }
    return minNum.data;
  }

  sort() {
    //Sort the stack, minimum value on top
    let arr = [];
    let currentNode = this.top;
    while (currentNode) {
      //make them into array
      arr.push(currentNode.data);
      currentNode = currentNode.next;
    }

    arr.sort(); //sort the array
    currentNode = this.top; //reset.

    for (let i = 0; i < arr.length; i++) {
      currentNode.data = arr[i]; // update the stack with the new arr data.
      currentNode = currentNode.next;
    }
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(data) {
    let newItem = new Node(data);
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }
    return ++this.size;
  }

  dequeue() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    const item = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return item.data;
  }

  count() {
    return this.size;
  }

  peek() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    return this.first;
  }

  isEmpty() {
    return this.first === null;
  }

  getLast() {
    return this.last;
  }

  findMax() {
    let maxNum = this.first;
    let currentNode = this.first;

    while (currentNode) {
      if (currentNode.data >= maxNum.data) {
        //if current node value is less than minNum.data
        //change minNum to current node value
        maxNum = currentNode;
      }
      currentNode = currentNode.next;
    }
    return maxNum.data;
  }


}


module.exports = {
  Node,
  Queue,
  Stack,
};
