
function traverseDOM(element, classNames, index, result) {
    if(!element) {
        return;
    }

    const targetClass = classNames[index];

    if(index === classNames.length - 1 && element.classList.contains(targetClass)) {
        result.push(element);
        return;
    }

    for(let child of element.children) {
        if(element.classList.contains(targetClass)) {
            traverseDOM(child, classNames, index + 1, result);
        } else {
            traverseDOM(child, classNames, 0, result);
        }
    }

}

const getByClassNameHierarchy = (element, classNames) => {
    const classList = classNames.split('>');
  
    const result = [];
    
    traverseDOM(element, classList, 0, result);
    
    return result;
}

console.log(getByClassNameHierarchy(document.getElementById('root'), 'a>b>c'));