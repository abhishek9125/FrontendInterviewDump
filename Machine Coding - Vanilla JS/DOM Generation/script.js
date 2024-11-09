const json = {
    type: 'div',
    props: { id: 'hello', class: "foo" },
    children: [
        { type: 'h1', children: 'HELLO' },
        { type: 'p', children: [{ type: 'span', props: { class: "bar" }, children: 'World' }] }
    ]
};

const generateDOM = (json, root) => {
    const helper = (jsonObj) => {
        
        const { type, props, children } = jsonObj;

        const el = document.createElement(type);

        if(props) {
            for(let property in props) {
                el.setAttribute(property, props[property]);
            }
        }

        if(typeof children == 'string') {
            el.innerHTML = children;
        } else {
            const fragment = document.createDocumentFragment();
            for(let child of children) {
                fragment.appendChild(helper(child));
            }
            el.appendChild(fragment);
        }

        return el;
    }

    const generatedDom = helper(json);
    root.appendChild(generatedDom);
}

const root = document.getElementById('root');
generateDOM(json, root);