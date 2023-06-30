const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor(top = null) {
    this.top = top;
  }

  push(data) {
    let newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
    return this.top;
  }

  pop() {
    let removedNode = "";
    if (this.top) {
      removedNode = this.top;
      this.top = this.top.next;
    }
    return removedNode;
  }

  size() {
    let count = 0;
    let topNode = this.top;
    while (topNode) {
      count++;
      topNode = topNode.next;
    }
    return count;
  }

  isEmpty() {
    if (this.top === null) {
      return true;
    } else {
      return false;
    }
  }

  peek() {
    return this.top;
  }

  findMin() {
    let minimum = this.top;
    let topNode = this.top;

    while (topNode) {
      if (minimum.data > topNode.data) {
        minimum.data = topNode.data;
      }
      topNode = topNode.next;
    }
    return minimum.data;
  }
  // sort(){
  //   let highest = ""
  // }
}

class Queue {
  constructor(first, last, size, maxValue) {
    this.first = first;
    this.last = last;
    this.size = size;
    this.maxValue = maxValue;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
