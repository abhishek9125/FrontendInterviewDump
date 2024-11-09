
const findColor = (color) => {
    const div = document.createElement("div");
    div.style.color = color;
    const computedColor = window.getComputedStyle(document.body.appendChild(div)).color;
    document.body.removeChild(div);
    return computedColor;
}

const findElementByColor = (root, color) => {
    const computedColor = findColor(color);

    const result = [];

    const getColorNodes = (root, color) => {
        for(let child of root.children) {
            if(window.getComputedStyle(child).color == color) {
                result.push(child);
            }

            if(child.children) {
                getColorNodes(child, color);
            }
        }
    }

    getColorNodes(root, computedColor);
    result.forEach((item) => console.log(item))
}

findElementByColor(document.getElementById('root'), '#fff');