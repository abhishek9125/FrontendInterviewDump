
function myMemoize(func, context) {

    let cache = {};

    return function(...args) {
        let key = JSON.stringify(args);
        if(!cache[key]) {
            cache[key] = func.apply(context || this, args);
        }
        return cache[key];
    }

}

const clumsyProduct = (num1,num2) => {
    for (let i = 1; i <= 100000000; i++) {
        return num1 * num2;    
    }
}

const MemoizeClumsyProduct = myMemoize(clumsyProduct);

console.time("First call");
console.log(MemoizeClumsyProduct(9467,7649));
console.timeEnd("First call")

console.time("Second call");
console.log(MemoizeClumsyProduct(9467,7649));
console.timeEnd("Second call");
