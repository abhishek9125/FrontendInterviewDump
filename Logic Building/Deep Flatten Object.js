function deepFlatten(obj, prefix) {
    let output = {};

    for(let key in obj) {
        let val = obj[key];
        let newKey = prefix === '' ? key : (prefix + '.' + key);

        if(val && typeof val === 'object') {
            let recursiveOutput = deepFlatten(val, newKey);
            output = {...output, ...recursiveOutput};
        } else {
            output[newKey] = val;
        }
    }

    return output;
}

function flatten(obj) {
    return deepFlatten(obj, '');
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