const person1 = {
    name: 'Akash'
};

const person2 = {
    name: 'Raj'
};

function printAge(age) {
    console.log(`${this.name} is ${age} years old`);
}

Function.prototype.myBind = function(obj = {}, ...args) {
    if(typeof this !== "function") {
        throw new Error("Not a Function");
    }
    obj.fn = this;
    return function(...args2) {
        obj.fn(...args, ...args2);
    };
}

const personAge = printAge.myBind(person1);

personAge(25)