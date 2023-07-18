class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }

  size() {
    return this.length;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    const poppedNode = this.top;
    this.top = this.top.next;
    poppedNode.next = null;
    this.length--;
    return poppedNode.data;
  }

  isEmpty() {
    return this.length === 0;
  }

  peek() {
    if (!this.top) {
      return null;
    }
    return this.top.data;
  }

  findMin() {
    if (!this.top) {
      return null;
    }

    let current = this.top;
    let minValue = current.data;
    while (current) {
      if (current.data < minValue) {
        minValue = current.data;
      }
      current = current.next;
    }
    return minValue;
  }

  sort() {
    if (!this.top || !this.top.next) {
      return;
    }
  
    const sortedStack = new Stack();
    while (!this.isEmpty()) {
      const temp = this.pop();
      while (!sortedStack.isEmpty() && sortedStack.peek() < temp) {
        this.push(sortedStack.pop());
      }
      sortedStack.push(temp);
    }
  
    this.top = sortedStack.top;
    this.length = sortedStack.length;
  }
  
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  count() {
    return this.length;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }

    const dequeuedNode = this.first;
    this.first = this.first.next;
    dequeuedNode.next = null;
    this.length--;
    return dequeuedNode.data;
  }

  findMax() {
    if (!this.first) {
      return null;
    }

    let current = this.first;
    let maxValue = current.data;
    while (current) {
      if (current.data > maxValue) {
        maxValue = current.data;
      }
      current = current.next;
    }
    return maxValue;
  }

  getLast() {
    if (!this.last) {
      return null;
    }
    return this.last;
  }

  isEmpty() {
    return this.length === 0;
  }

  peek() {
    if (!this.first) {
      return null;
    }
    return this.first;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
