// https://community.topcoder.com/stat?c=problem_statement&pm=14295

function priorityQueue(str, displeasure){
  let total_displeasure = new Array(str.length).fill(0);
  for(let i=0; i<str.length; i++){
    if(str[i] === 'b'){
      for(let j=i-1; j>=0; j--){
        total_displeasure[j] += displeasure[j];
      }
    }
  }
  return total_displeasure.reduce((a, b) => a+b);
}

console.log(priorityQueue("bbbbb",[1,1,1,1,1])); //10
console.log(priorityQueue("bee",[50,40,30])); //0
console.log(priorityQueue("ebbe",[5,2,11,1])); //12
console.log(priorityQueue("bbeebeebeeeebbb", [58,517,301,524,79,375,641,152,810,778,222,342,911,313,336])); //20485
