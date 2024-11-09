
const generateSelector = (root, target) => {
    const selectors = [];

    while(root !== target) {
        const nth = Array.from(target.parentNode.children).indexOf(target) + 1;
        const selector = `${target.tagName.toLowerCase()}:nth-child(${nth})`;
        selectors.unshift(selector);
        target = target.parentNode;
    }

    selectors.unshift(`${target.tagName.toLowerCase()}[id=${target.id}]`)
 
    return selectors.join(' > ');
}

const root = document.getElementById("root");
const target = document.getElementById("target");
console.log(generateSelector(root, target));

// "div[id='root'] > section:nth-child(2) > p:nth-child(1) > span:nth-child(1) > button:nth-child(2)"