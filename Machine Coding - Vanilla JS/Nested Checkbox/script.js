document.addEventListener('DOMContentLoaded', function () {

    const container = document.getElementById('app');

    const { UNCHECKED, CHECKED, INDETERMINATE } = CheckboxState;

    function updateChildren(children = [], newValue) {
        for (let child of children) {
            child.value = newValue;
            if (child.children) {
                updateChildren(child.children, newValue);
            }
        }
    }

    function handleCheckboxChange(e, node) {
        const newValue = e.target.checked;
        node.value = newValue;
        updateChildren(node.children, newValue);
        buildCheckboxes();
    }

    function createCheckbox(listItem, label, node) {

        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.onchange = (e) => handleCheckboxChange(e, node);

        const labelElement = document.createElement('label');
        labelElement.innerText = label;

        listItem.appendChild(checkbox);
        listItem.appendChild(labelElement);

        return checkbox;
    }

    function getStateForNode(node) {
        if (!node.children || node.children.length === 0) {
            return node.value ? CHECKED : UNCHECKED
        }

        let hasChecked = false;
        let hasUnchecked = false;
        let isIndeterminate = false;

        for (const child of node.children) {
            const childState = getStateForNode(child);
            if (childState === INDETERMINATE) {
                isIndeterminate = true;
            } else if (childState === CHECKED) {
                hasChecked = true;
            } else if (childState === UNCHECKED) {
                hasUnchecked = true;
            }
        }

        if (isIndeterminate || (hasChecked && hasUnchecked)) {
            return INDETERMINATE;
        } else if (hasChecked) {
            return CHECKED;
        }

        return UNCHECKED;
    }

    function createChecklistItem(node) {
        const { label, children } = node;
        const listItem = document.createElement('li');
        const checkbox = createCheckbox(listItem, label, node);
        const currentState = getStateForNode(node);

        if (currentState === INDETERMINATE) {
            checkbox.indeterminate = true;
        } else if (currentState === CHECKED) {
            checkbox.checked = true;
        }

        if (children) {
            const subList = document.createElement('ul');
            children.forEach((child) => {
                const item = createChecklistItem(child);
                subList.appendChild(item);
            })
            listItem.appendChild(subList);
        }

        return listItem;
    }

    function buildCheckboxes() {
        container.innerHTML = '';
        const checkList = document.createElement('ul');
        const rootListItem = createChecklistItem(checklistData);
        checkList.appendChild(rootListItem);
        container.appendChild(checkList);
    }

    buildCheckboxes();

})