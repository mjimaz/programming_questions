function curry(func){
  let args_length = func.length;

  return function curried(){
    let args1 = Array.prototype.slice.call(arguments);
    if(args1.length === args_length){
      return func.apply(null, args1);
    }
    return function(){
      let args2 = args1.concat(Array.prototype.slice.call(arguments));
      return curried.apply(null, args2);
    }
  }
}

let add = (a, b, c, d) => a+b+c+d;
let sum = curry(add);


// console.log(sum(2,3, 1, 3));   // Outputs 5
// console.log(sum(2)(3)(4)(-2));

// Create the funciton `curriedAddInfinite` such that it will exhibit the following behavior:

var curriedAddInfinite = function() {
    let args1 = [].slice.call(arguments);

    return function(){
      let args2 = args1.concat([].slice.call(arguments));
      if(!arguments.length){
        return args2.reduce((a, b) => a+b);;
      }
      return curriedAddInfinite.apply(null, args2);
    }
};

console.log(curriedAddInfinite(2)(2)()); // 4
console.log(curriedAddInfinite(1)(2)(3)(4)()); // 10
