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

module.exports = {
  Node,
  Queue,
  Stack,
};
