

const myThrottle = (cb, delay) => {

    let shouldExecute = true;

    return function(...args) {
        shouldExecute && cb(...args);
        shouldExecute = false;
        setTimeout(() => {
            shouldExecute = true;
        }, delay)
    }
}