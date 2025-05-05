class MinStack {
    constructor() {
        this.st = [];
        this.mini = null;
    }

    push(val) {
        if(this.st.length === 0) {
            this.st.push([val, val]);
            return;
        }

        const mini = Math.min(this.getMin(), val);
        this.st.push([val, mini]);
    }

    pop() {
        return this.st.pop();
    }

    top() {
        return this.st[this.st.length - 1][0];
    }

    getMin() {
        return this.st[this.st.length - 1][1];
    }
}