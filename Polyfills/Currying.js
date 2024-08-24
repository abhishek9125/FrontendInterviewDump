
function curry(func) {
    return function curriedFunc(...args) {
        if(func.length >= args.length) {
            return function(...next) {
                return curriedFunc(...next, ...args)
            }; 
        } else {
            return func(...args);
        }
    }
}

const sum = (a, b, c, d) => a + b + c + d;

let totalSum = curry(sum);

console.log(totalSum(1)(2)(3)(4))