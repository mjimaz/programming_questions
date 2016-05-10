function bracketValidator(arg) {
	var bracketStack = [];
	var openers = {'(':true, '{':true, '[':true};
	var closers = {')': '(', '}': '{', ']': '['};
	var bracket;

	for(var i=0; i<arg.length; i++){
		bracket = arg[i];
		if(bracket === ' '){
			continue;
		} if(openers[bracket]){
			bracketStack.push(bracket);
		} else if(closers[bracket] && closers[bracket] === bracketStack.pop()){
			continue;
		} else {
			return false;
		}
	}
	return true;
}
