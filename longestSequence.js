function longestSequence(arr){

  function longestSequenceHelper(current_sequence = [], index = 0, current_length=0, end_index=0, max_length = 0){
    let len = current_sequence.length;
    if(index > arr.length-1){
      return arr.slice(end_index-max_length+1, end_index+1);
    }
    if(current_sequence[len-1] <= arr[index]){
      current_sequence.push(arr[index]);
      current_length++;
      if(current_length > max_length){
        max_length = current_length;
        end_index = index;
      }
    } else {
      current_sequence = [arr[index]];
      current_length = 1;
    }
    return longestSequenceHelper(current_sequence, index+1, current_length, end_index, max_length)
  }

  return longestSequenceHelper([arr[0]], 1, 1, 0, 1);
}

console.log(longestSequence([13,14,10,11,12])); //[ 10, 11, 12 ]
console.log(longestSequence([1, 2, 3, 0, 5, 6, 7, 8, -1])); //[ 0, 5, 6, 7, 8 ]
console.log(longestSequence([13])); //[ 13 ]
console.log(longestSequence([13,12, 11])); //[ 13 ]
