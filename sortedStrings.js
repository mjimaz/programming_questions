//search a sorted array of string that contains empty strings
function searchStrings(s, item, left=0, right=s.length-1){
  if(left > right){
    return -1;
  }
  let mid = Math.floor((left+right)/2);
  if(s[mid].length === 0){
    let nonempty_left = mid-1;
    let nonempty_right = mid+1;
    while(true){
      if((nonempty_left < left && nonempty_right > right) || nonempty_left > nonempty_right){
        return -1;
      } else if(nonempty_right <= right && s[nonempty_right].length){
        mid = nonempty_right;
        break;
      } else if(nonempty_left >= left && s[nonempty_left].length){
        mid = nonempty_left;
        break;
      }
      nonempty_left++;
      nonempty_right--;
    }
  }
  if(item === s[mid]){
    return mid;
  } else if(item < s[mid]){
    return searchStrings(s, item, left, mid-1);
  }else {
    return searchStrings(s, item, mid+1, right);
  }
}

let arr = ['at', '', '', '', 'ball', '', 'dad', '', ''];

console.log(searchStrings(arr, 'ball')); //4
console.log(searchStrings(arr, 'dad')); //6
console.log(searchStrings(arr, 'at')); //0
console.log(searchStrings(arr, 'football')); //-1
