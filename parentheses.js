function parentheses(n, left=n, right=n, current='', result=[]){
  if(!left && !right){
    result.push(current);
  }

  if(left){
    parentheses(n, left-1, right, current+'(', result);
  }
  if(right && right > left){
    parentheses(n, left, right-1, current+')', result);
  }
  return result;
}

console.log(parentheses(1)); // [ '()' ]
console.log(parentheses(2)); //[ '(())', '()()' ]
console.log(parentheses(3)); //[ '((()))', '(()())', '(())()', '()(())', '()()()' ]
