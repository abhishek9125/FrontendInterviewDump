const person1 = {
    name: 'Akash'
};

const person2 = {
    name: 'Raj'
};

function printAge(age) {
    console.log(`${this.name} is ${age} years old`);
}

Function.prototype.myCall = function(obj = {}, ...args) {
    if(typeof this !== "function") {
        throw new Error("Not a Function");
    }
    obj.fn = this;
    obj.fn(...args);
}

printAge.myCall(person1, 25);