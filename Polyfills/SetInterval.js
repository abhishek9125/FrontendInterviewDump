import createSetTimeoutPolyfill from "./SetTimeout";

function createSetIntervalPolyfill() {
    let intervalId = 1;
    let intervalMap = {};

    const { setTimeoutPolyfill, clearTimeoutPolyfill } =
        createSetTimeoutPolyfill();

    function setIntervalPolyfill(cb, delay, ...args) {
        let id = intervalId++;

        function reiterate() {
            intervalMap[id] = setTimeoutPolyfill(function () {
                cb.apply(this, args);
                if (intervalMap[id]) {
                    reiterate();
                }
            }, delay);
        }

        reiterate();
        return id;
    }

    function clearIntervalPolyfill(id) {
        clearTimeoutPolyfill(id);
        delete intervalMap[id];
    }

    return { setIntervalPolyfill, clearIntervalPolyfill };
}

const { setIntervalPolyfill, clearIntervalPolyfill } =
    createSetIntervalPolyfill();

let counter = 0;

let timerId = setIntervalPolyfill(function () {
    console.log("setInterval Polyfill");
    counter++;
    if (counter >= 2) clearIntervalPolyfill(timerId);
}, 1000);
