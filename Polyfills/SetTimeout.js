function createSetTimeoutPolyfill() {
    let timerId = 1;
    let timerMap = {};
  
    function setTimeoutPolyfill(cb, delay, ...args) {
      let id = timerId++;
      timerMap[id] = true;
      let start = Date.now();
  
      function triggerCallback() {
        if (!timerMap[id]) return;
  
        if (start + delay < Date.now()) {
          delete timerMap[id];
          cb.apply(this, args);
        } else {
            requestAnimationFrame(triggerCallback);
        }
      }
  
      requestAnimationFrame(triggerCallback);
  
      return id;
    }
  
    function clearTimeoutPolyfill(id) {
      delete timerMap[id];
    }
  
    return { setTimeoutPolyfill, clearTimeoutPolyfill };
  }
  
  const { setTimeoutPolyfill, clearTimeoutPolyfill } = createSetTimeoutPolyfill();
  
  let timerId = setTimeoutPolyfill(() => {
    console.log("setTimeout Polyfill");
  }, 1);
  
  clearTimeoutPolyfill(timerId);
  
  export default createSetTimeoutPolyfill;
  