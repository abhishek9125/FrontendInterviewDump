function addNumbers(a, b, c) {
    return a + b + c;
}

function once(func, context) {
    let isExecuted = false;

    return function(...args) {
        if(!isExecuted) {
            isExecuted = true;
            const result = func.apply(context || this, args);
            return result;
        }
        return null;
    }
}

let sum = once(addNumbers);

console.log(sum(1,2,3));
console.log(sum(1,2,3));
console.log(sum(1,2,3));