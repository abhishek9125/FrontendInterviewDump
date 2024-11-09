
let curry = (fn) => {
    let helper = (...args) => {
        if(args.length >= fn.length) {
            return fn(...args);
        } else {
            return (...args2) => {
                return helper(...args, ...args2);
            }
        }
    }
    return helper;
}

// Input:
function sum(a, b, c, d) {
  return a + b + c + d;
}

let curriedSum = curry(sum);
console.log(curriedSum(1,2,3,4,5));
console.log(curriedSum(1)(2,3)(4));
console.log(curriedSum(1)(2)(3)(4));

// Output:
// 10
// 10
// 10