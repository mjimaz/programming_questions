// sort a list of strings so that anagrams are next to each other

function sortAnagrams(s){
  s.sort((a, b) => compare(a, b));
  return s;
}

function compare(a, b){
  if(a.length !== b.length){
    return 1;
  }
  let count1 = {}, count2={};
  for(let i=0; i<a.length; i++){
    count1[a[i]] = count1[a[i]]+1 || 0;
  }
  for(let i=0; i<b.length; i++){
    count2[b[i]] = count2[b[i]]+1 || 0;
  }

  for(key in count1){
    if(count1[key] !== count2[key]){
      return 1;
    }
  }
  return 0;
}

console.log(sortAnagrams(['abc', 'ab', 'cba', 'ba', 'bs', 'aabb', 'babe', 'ab']))
