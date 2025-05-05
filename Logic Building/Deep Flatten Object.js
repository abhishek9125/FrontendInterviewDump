
function flatten(obj) {
    let output = {};
    function deepFlatten(obj, prefix) {
        for(let key in obj) {
            let val = obj[key];
            let newKey = prefix === '' ? key : (prefix + '.' + key);
    
            if(val && typeof val === 'object') {
                deepFlatten(val, newKey);
            } else {
                output[newKey] = val;
            }
        }
    
    }
    deepFlatten(obj, '');
    return output;
}

const nested = {
    A: "12",
    B: 23,
    C: {
      P: 23,
      O: {
         L: 56
      },
      Q: [1, 2]
     }   
};
  
console.log(flatten(nested));