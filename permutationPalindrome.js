/*
Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome ↴ .
Examples:

"civic" should return true
"ivicc" should return true
"civil" should return false
"livci" should return false
*/
function permutationPalindrome(arg){
	var oddLetters = 0;
	var chars = {};
	for(var i=0; i<arg.length; i++){
		if(chars[arg[i]]){
			delete chars[arg[i]];
			oddLetters--;
		}else {
			chars[arg[i]] = true;
			oddLetters++;
		}
	}
  	return oddLetters < 2;
}
