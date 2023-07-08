const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data, next = null) {
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

  sort() {
    const sortedStack = new Stack();

    while (!this.isEmpty()) {  
      const temp = this.pop();
      if (!sortedStack.isEmpty() && sortedStack.peek().data < temp.data) {
        this.push(sortedStack.pop().data);
      }
      sortedStack.push(temp.data);
    }
    this.top = sortedStack.top;


    // below code passes but sorts as 1,10,2,3,4,5
    
    // let minimum = this.findMin();
    // let topNode = this.top;
    // topNode.data = this.findMin();
    // while (topNode) {
    //   if (minimum > topNode.data) {
    //     topNode.next.data = minimum;
    //   }
    //   topNode = topNode.next;
    // }
    // return minimum;
  }
}

class Queue {
  constructor(first = null, last = null, size = 0, maxValue) {
    this.first = first;
    this.last = last;
    this.size = size;
    this.maxValue = maxValue;
  }

  enqueue(data) {
    let newNode = new Node(data);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }

  dequeue() {
    let removedNode = "";
    if (this.first) {
      removedNode = this.first;
      this.first = this.first.next;
      this.size--;
    } else {
      return null;
    }
    return removedNode.data;
  }

  count() {
    return this.size;
  }

  isEmpty() {
    if (!this.first) {
      return true;
    } else {
      return false;
    }
  }

  peek() {
    return this.first;
  }

  getLast() {
    return this.last;
  }

  findMax() {
    if (this.first === null) {
      return null;
    }
    let maximum = this.first.data;
    let current = this.first;
    while (current) {
      if (current.data > maximum) {
        maximum = current.data;
      }
      current = current.next;
    }
    return maximum;
  }
}

wordQueue = new Queue();
for (let word of words) {
  wordQueue.enqueue(word);
}

numQueue = new Queue();
for (let num of nums) {
  numQueue.enqueue(num);
}

wordStack = new Stack();
for (let word of words) {
  wordStack.push(word);
}

numStack = new Stack();
for (let num of nums) {
  numStack.push(num);
}
console.log(inspect(numStack, {colors: true, depth: 12}))
numStack.sort()
console.log(inspect(numStack, {colors: true, depth: 12}))

module.exports = {
  Node,
  Queue,
  Stack,
};
