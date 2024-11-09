
const timer = (initial = 0, step = 0) => {
    let count = initial;
    let intervalId = null;

    const startTimer = () => {
        if(intervalId === null) {
            intervalId = setInterval(() => {
                console.log(count);
                count += step;
            }, 1000)
        }
    }

    const stopTimer = () => {
        clearInterval(intervalId);
        intervalId = null;
    }

    return {
        startTimer,
        stopTimer
    }

}

const timerObj = timer(0, 10);

timerObj.startTimer();

setTimeout(() => {
    timerObj.stopTimer();
}, 3000);

setTimeout(() => {
    timerObj.startTimer();
}, 4000);
