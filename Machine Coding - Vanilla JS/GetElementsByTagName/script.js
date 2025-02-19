
export default function getElementsByTagName(element, tagName) {

    const elements = [];

    function traverse(el) {
        if (el == null) return;

        if (el.tagName === tagName) {
            elements.push(el);
        }

        for (const child of el.children) {
            traverse(child)
        }
    }

    for (let child of element.children) {
        traverse(child);
    }

    return elements;
}