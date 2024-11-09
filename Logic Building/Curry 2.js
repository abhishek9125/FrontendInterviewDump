
const sum = (...args) => {
    let storage = [...args];
    
    if(args.length === 0) return 0;

    const temp = function(...args2) {
        storage.push(...args2);
        if(args2.length === 0) {
            return storage.reduce((a, b) => a + b, 0);
        } else {
            return temp;
        }
    }
    return temp;
}

// Input:
const res = sum(1, 2, 3, 4)();
const res2 = sum(1)(2)(3)(4)();
const res3 = sum(1, 2)(3, 4)();
const res4 = sum(1, 2, 3)(4)();
const res5 = sum(1)(2, 3, 4)();
const res6 = sum();

console.log(res, res2, res3, res4, res5, res6);

// Output:
// 10 10 10 10 10 0