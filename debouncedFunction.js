function debouncedFunction(fn, delay){
	var lastRun = new Date();
	var firstTime = true;

	return function(){
		if(firstTime || new Date() - lastRun >= delay){
			firstTime = false;
			lastRun = new Date();
		    fn.apply(this, Array.prototype.slice.call(arguments));
		}
	}
}
