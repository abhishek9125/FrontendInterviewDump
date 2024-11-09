// let obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: -3,
//         e: {
//             f: {
//                 g: -4,
//             },
//         },
//         h: {
//             i: 5,
//             j: 6,
//         },
//     }
// }

const obj = {
    a: 1,
    b: {
      c: "Hello World",
      d: 2,
      e: {
       f: {
         g: -4,
        },
      },
      h: "Good Night Moon",
    },
  };

const filter = (s) => typeof s === "string"
// const filter = (n) => n >= 0

const deepFilter = (obj, filter) => {
    for(let key in obj) {
        let val = obj[key];
        if(typeof val === 'object') {
            deepFilter(val, filter);
        } else {
            if(filter(val) === false) {
                delete obj[key];
            }
        }
        if(JSON.stringify(val) == "{}") {
            delete obj[key];
        }
    }
}

deepFilter(obj, filter);
console.log('obj', obj)