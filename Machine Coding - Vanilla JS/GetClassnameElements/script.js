
const findByClass = (className) => {
    const root = document.body;

    const search = (node) => {
        let result = [];

        if(node.classList.contains(className)) {
            result.push(node);
        }

        for(let element of node.children) {
            const recursiveSearch = search(element);
            result = [...result, ...recursiveSearch];
        }

        return result;
    }

    return search(root);
}

console.log(findByClass('d'))