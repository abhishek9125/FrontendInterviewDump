
Array.prototype.map = function(cb) {

    let temp = [];

    for(let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }

    return temp;
}

