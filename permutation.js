// write a method to compute all permutations of a string of unique characters

function permutations(s, result = [], perm='', rest=s) {
  if(rest.length === 0){
    result.push(perm);
  }
  for(let i=0; i<rest.length; i++){
    let temp = perm + rest.slice(i, i+1);
    let arr = rest.split('');
    arr.splice(i, 1).join('');
    permutations(s, result, temp, arr.join(''));
  }
  return result;
}

console.log(permutations('abc')) // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
console.log(permutations('ab')) // [ 'ab', 'ba' ]
console.log(permutations('a')) // [ 'a']
