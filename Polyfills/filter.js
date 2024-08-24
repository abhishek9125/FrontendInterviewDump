

Array.prototype.filter = function(cb) {
    let temp = [];

    for(let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) {
            temp.push(this[i]);
        }
    }

    return temp;
}