const root = document.getElementById('root');

let count = 0;

function add() {
    if(count == 0) {
        create();
    }
    count += 1;
    document.getElementById("queueCount").innerText = count;
}

function create(n = 1) {
    const ele = document.createElement('div');
    ele.classList.add('progressBar');
    ele.style = `transition: width ${n}s ease`;

    root.appendChild(ele);

    setTimeout(() => {
        ele.classList.add('transition');
    }, 0)

    ele.addEventListener('transitionend', () => {
        count = count - 1;
        document.getElementById("queueCount").innerText = count;
        if(count >= 1) {
            create();
        }
    });

    ele.removeEventListener('transitionend', () => {});
}