export default function getElementsByStyle(element, property, value) {

    const elements = [];

    function traverse(el) {
        if (el == null) return;

        const computedStyles = getComputedStyle(el);

        if (computedStyles.getPropertyValue(property) === value) {
            elements.push(el);
        }

        for (let child of el.children) {
            traverse(child);
        }

    }

    for (let child of element.children) {
        traverse(child);
    }

    return elements;
}