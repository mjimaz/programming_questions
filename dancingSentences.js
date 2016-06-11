/*

A sentence is called dancing if its first letter is uppercase and the case of each subsequent letter is the opposite of the previous letter. Spaces should be ignored when determining the case of a letter.
For example, "A b Cd" is a dancing sentence because the first letter ('A') is uppercase, the next letter ('b') is lowercase, the next letter ('C') is uppercase, and the next letter ('d') is lowercase.

You will be given a String sentence. Turn the sentence into a dancing sentence by changing the cases of the letters where necessary. All spaces in the original sentence must be preserved.

Constraints
-	sentence will contain between 1 and 50 characters, inclusive.
-	Each character in sentence will be a letter ('A'-'Z','a'-'z') or a space (' ').
-	sentence will contain at least one letter ('A'-'Z','a'-'z').

Examples
0)

"This is a dancing sentence"
Returns: "ThIs Is A dAnCiNg SeNtEnCe"
1)

" This   is         a  dancing   sentence  "
Returns: " ThIs   Is         A  dAnCiNg   SeNtEnCe  "
Spaces should be ignored when determining the cases of the letters, but they should be preserved in the return value.
2)

"aaaaaaaaaaa"
Returns: "AaAaAaAaAaA"
3)

"z"
Returns: "Z"

*/

function dancing(str){
  let dance = 0; //0 -- Upper, 1-Lower
  let dancing_string='';
  for(let i=0; i<str.length; i++){
    if(str[i] === ' '){
      dancing_string += ' ';
    }else if(!dance){
      dance=!dance;
      dancing_string += str[i].toUpperCase();
    }else{
      dance=!dance;
      dancing_string += str[i].toLowerCase();
    }
  }
  return dancing_string;
}

console.log(dancing("This is a dancing sentence")); //"ThIs Is A dAnCiNg SeNtEnCe"
console.log(dancing(" This   is         a  dancing   sentence  ")); //" ThIs   Is         A  dAnCiNg   SeNtEnCe  "
console.log(dancing("aaaaaaaaaaa")); //"AaAaAaAaAaA"
console.log(dancing("z")); //"Z"
