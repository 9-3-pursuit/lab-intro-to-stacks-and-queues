const { nums, words } = require("./data/data.js");
//const { inspect } = require("util");

class Node {
  constructor(data){
    this.data = data; 
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
   // this.last = null;
    this.size = 0; 
  }
  push(value){
    let newStack = new Node(value);
    if(!this.top){
      this.top = newStack;
    } else {
      let temp = this.top;
      this.top = newStack;
      this.top.next = temp; 
    }
    return ++this.size;
  }
  pop(){
    if(!this.top) return undefined;
    let popped = this.top; 
    if(this.size === 1){
      this.top = null;
    } else {
      this.top = this.top.next; 
    }
    this.size--;
    return popped;
  }
}

class Queue {
  constructor(value){
    this.first = null;
    this.last = null;
    this.size = 0; 
    this.max = value;
  }
}




let newStack = new Stack()
newStack.push(1);
newStack.push(2);


console.log(newStack)

const {inspect} = require("util"); 
console.log(newStack.push(3))
console.log(inspect(newStack, {colors: true, depth: 12}))


module.exports = {
  Node,
  Queue,
  Stack,
};