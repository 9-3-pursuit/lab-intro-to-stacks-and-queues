const { nums, words } = require("./data/data.js");
//const { inspect } = require("util");

class Node {
  constructor(data = null){
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
  // sort(){
  //   if(this.length === 1) return this.top.data; 
  //   if(!this.top) return null;
  //   let current1 = this.top;
  //   let current2 = this.top;
  
  //   while (current1.next){
  //     while (current2.next){ 
  //       if(current2.data.localeCompare(current2.next.data) > 0){
  //         console.log(current2.data.localeCompare(current2.next.data))
  //         let temp = current2.data;
  //         current2.data = current2.next.data;
  //         current2.next.data = temp 
  //       }
  //       current2 = current2.next;
  //     }
  //     current1 = current1.next;
  //   } 
  //   return this.top;
  // }

}

class Queue {
  constructor(value){
    this.first = null;
    this.last = null;
    this.length = 0; 
    this.max = value;
  }
  count(){
    return this.length;
  }
  enqueue(value){
    let newNode = new Node(value);
    if (!this.first){
      this.first = newNode;
      this.last = newNode;
    } else {
        this.last.next = newNode;
        this.last = newNode;
      }
      return ++this.length;
    }
    dequeue(){
      if (!this.first) return undefined;
      let removed = this.first;
      this.first = this.first.next;
      this.length--;
      return removed.data;
    }

   }
    
  





let wordStack = new Stack();
let numStack = new Stack(); 

words.forEach((word)=> wordStack.push(word))
nums.forEach((num)=> numStack.push(num))

let wordQueue = new Queue();
let numQueue = new Queue(); 

words.forEach((word)=> wordQueue.enqueue(word))
nums.forEach((num)=> numQueue.enqueue(num))



const {inspect} = require("util"); 
 
// console.log(inspect(wordStack, {colors: true, depth: 12}))
// console.log(wordStack.sort())

console.log(inspect(numQueue, {colors: true, depth: 12}))
//console.log(numQueue)

module.exports = {
  Node,
  Queue,
  Stack,
};