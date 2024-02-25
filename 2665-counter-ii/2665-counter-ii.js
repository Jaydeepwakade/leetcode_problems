/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let result = init || 0
     function increment(){
         return ++result
     }
     function decrement(){
         return --result
     }
     function reset(){
         return result=init ||0
     }

     return { increment, decrement, reset}
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */