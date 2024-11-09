const toggle = (...list) => {
    let current = -1;
    const length = list.length;
    return function() {
        current = (current + 1) % length;
        return list[current];
    }
}

const hello = toggle("1", "2", "3");
console.log(hello());
console.log(hello());
console.log(hello());
console.log(hello());

let onOff = toggle("on", "off");
console.log(onOff());
console.log(onOff());
console.log(onOff());
console.log(onOff());
