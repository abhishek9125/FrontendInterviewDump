
function createIterator(collection) {
    let i = 0;
    return {
        next() {
            if(i < collection.length) {
                return {
                    value: collection[i++],
                    done: false
                }
            } 
                return {
                    value: null,
                    done: true
                }
            
        }
    }
}

const arr = [1,2,3,4];
const iterator = createIterator(arr);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());