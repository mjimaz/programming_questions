// a child can hop 1, 2 or 3 steps at a time.
// how many ways can the child run up the steps

function countSteps(n) {
  if(n === 0) {
    return 1
  } else if(n < 0) {
    return 0
  } else {
    return countSteps(n-1) + countSteps(n-2) + countSteps(n-3); 
  }
}
