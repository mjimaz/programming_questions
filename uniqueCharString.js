// implement an algorithm to determine if a string has all unique characters.
// return true if unique otherwise false

// assume that string is case insensitive

function uniqueCharString(str){
  //check string only contains characters
  const allChars = str.split('').every((c) => isNaN(c));
  if(!allChars || str.length > 26) {
    return false;
  }

  let chars = {};
  str.toLowerCase();

  for(let i=0; i<str.length; i++){
    if(str[i] in chars){
      return false;
    }
    chars[str[i]] = str[i];
  }
  return true;
}
