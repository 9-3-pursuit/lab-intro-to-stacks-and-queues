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
    this.length = 0; 
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
    return ++this.length;
  }
  pop(){
    if(!this.top) return null;
    let popped = this.top; 
    if(this.length === 1){
      this.top = null;
    } else {
      this.top = this.top.next; 
    }
    this.length--;
    return popped;
  }
  size(){
    return this.length;
  }
  isEmpty(){
    return !this.length ? true : false;
  }
  findMin(){
    if(!this.top) return null;
    if(this.length === 1) return this.top.data;
    let current = this.top;
    let minimum = current.data;
    while(current.next){
      if(minimum > current.data){
        minimum = current.data;
        console.log(minimum)
      }
      current = current.next; 
    }
    return minimum;
  }
  peek(){
    return this.top
  }
  sort(){
    
  }

}

class Queue {
  constructor(value){
    this.first = null;
    this.last = null;
    this.length = 0; 
    this.max = value;
  }
}




let wordStack = new Stack();

words.forEach((word)=> wordStack.push(word))


const {inspect} = require("util"); 
console.log(wordStack.findMin())
//console.log(inspect(wordStack, {colors: true, depth: 12}))


module.exports = {
  Node,
  Queue,
  Stack,
};