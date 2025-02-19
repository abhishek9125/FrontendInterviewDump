
const circuitBreaker = (fn, failureCount, timeThreshold) => {
    let failed = 0;
    let lastTimeFailure = 0;
    let isClosed = false;

    return function (...args) {

        if(isClosed) {
            let timeDiff = Date.now() - lastTimeFailure;
            if(timeDiff < timeThreshold) {
                console.log("Service Closed")
                return;
            } else {
                isClosed = false;
            }
        }

        try {
            const results = fn(...args);
            failed = 0;
            lastTimeFailure = 0;
            console.log(results);
            return;
        } catch(error) {
            failed++;
            if(failed == failureCount) {
                isClosed = true;
            }
            lastTimeFailure = Date.now();
            console.log("Error on calling Service");
        }   
    }
}

const testFunction = () => {
    let count = 0;
    return function () {
        count++;
        if(count < 4) {
            throw "Failed"
        } else {
            return "hello";
        }
    }
}

let t = testFunction();
let c = circuitBreaker(t, 3, 200);

c();
c();
c();
c();
setTimeout(() => {c();}, 310);