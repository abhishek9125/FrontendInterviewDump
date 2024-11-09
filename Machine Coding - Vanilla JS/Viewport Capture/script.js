
const isInViewport = (element) => {
    const elementDimensions = element.getBoundingClientRect();
    const viewHight = window.innerHeight;
    const viewWidth = window.innerWidth;

    return elementDimensions.top >= 0 && elementDimensions.left >= 0 && elementDimensions.bottom <= viewHight && elementDimensions.right <= viewWidth;
}

const debounce = (cb, delay) => {
    let timer;
    return function(...args) {
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
            cb(...args)
        }, delay);
    }
}

const detect = () => {
    const result = [];
  
    const blocks = document.querySelectorAll(".blocks");
    
    blocks.forEach((elm) => {
      if(isInViewport(elm)){
        result.push(elm.textContent);
      }
    });
    
    console.log(result);
}

const debouncedDetect = debounce(detect, 1000);

window.addEventListener('scroll', debouncedDetect);