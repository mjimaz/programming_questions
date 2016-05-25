/*
Implement a queue with 2 stacks. Your queue should have an enqueue and a dequeue function and it should be "first in first out" (FIFO).
Optimize for the time cost of mm function calls on your queue. These can be any mix of enqueue and dequeue calls.

Assume you already have a stack implementation and it gives O(1) time push and pop.
*/
function queueTwoStacks(){
  var inStack = [];
  var outStack = [];
  this.dequeue = function(){
    if(outStack.length === 0){
      if(inStack.length === 0){
        return null;
      } else {
        populateOutStack();
      }
    }
    return outStack.pop();
  }
  this.enqueue = function(num){
    inStack.push(num);
    if(outStack.length === 0){
      populateOutStack();
    }
  }
  function populateOutStack(){
    while(inStack.length){
      outStack.push(inStack.pop());
    }
  }
}
