

const addSuffixToKeys = (obj, newKey) => {
    if(!obj || typeof obj !== 'object' || Array.isArray(obj)) {
        return null;
    }

    const result = {};
    Object.keys(obj).forEach((item) => {
        let val = obj[item];
        let modifiedKey = `${item}${newKey}`;
        if(val && typeof val === 'object' && !Array.isArray(val)) {
            result[modifiedKey] = addSuffixToKeys(val, newKey);
        } else {
            result[modifiedKey] = val;
        }
    });
    
    return result;
}

const original = {
  name: "John",
  age: 30,
  address: {
    street: "Main St",
    city: "New York"
  }
};

const modified = addSuffixToKeys(original, "_modified");
console.log(modified);
/* Output:
{
  name_modified: "John",
  age_modified: 30,
  address_modified: {
    street_modified: "Main St",
    city_modified: "New York"
  }
}
*/