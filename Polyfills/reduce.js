

Array.prototype.myReduce = function(cb, initialValue) {
    let acc = initialValue;

    for(let i = 0; i < this.length; i++) {
        acc = acc ? cb(acc, this[i], i, this) : this[i];
    }

    return acc;
}

const sum = [1,2,3,4].myReduce((acc, cur) => {
    return acc + cur;
})

console.log('sum', sum)
