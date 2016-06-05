// write a method that returns all subsets of a subsets

function subset(s, n = 0, subsets = [ ]){
  if(n === 0){
    subsets.push([]);
  } else {
    if(n <= s.length) {
      let temp = [];
      subsets.forEach((set) => {
        temp.push(set.concat(s[n-1]));
      });
      subsets = subsets.concat(temp);
    }else{
      return subsets;
    }
  }
  return subset(s, n+1, subsets);
}

console.log(subset(['a', 'b', 'c'])); //[ [],[ 'a' ],[ 'b' ],[ 'a', 'b' ],[ 'c' ],[ 'a', 'c' ],[ 'b', 'c' ],[ 'a', 'b', 'c' ] ]
console.log(subset([])); //[[]]
