class MyPromise {
    constructor(executor) {
        this.onSuccess = null;
        this.onError = null;
        this.isFulfilled = false;
        this.isRejected = false;
        this.value = null;
        this.isCalled = false;
        executor(this.resolve, this.reject);
    }

    resolve = (successData) => {
        this.isFulfilled = true;
        this.value = successData;
        if(typeof this.onSuccess === 'function') {
            this.onSuccess(successData);
            this.isCalled = true;
        }
    }

    reject = (errorMessage) => {
        this.isRejected = true;
        this.value = errorMessage;
        if(typeof this.onError === 'function') {
            this.onError(errorMessage);
            this.isCalled = true;
        }
    }

    then(cb) {
        this.onSuccess = cb;
        if(this.isFulfilled && !this.isCalled) {
            this.onSuccess(this.value);
            this.isCalled = true;
        }
        return this;
    }

    catch(cb) {
        this.onError = cb;
        if(this.isRejected && !this.isCalled) {
            this.onError(this.value);
            this.isCalled = true;
        }
        return this;
    }
    
};

const myPromise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve("Good Data")
    }, 1000)
})

myPromise
.then((res) => {
    console.log('res', res)
}).catch((err) => {
    console.log('err', err)
})