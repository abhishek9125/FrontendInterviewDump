
function jsonStringify(value) {

    if(Array.isArray(value)) {
      const arrayValues = value.map((item) => jsonStringify(item));
      return `[${arrayValues.join(',')}]`;
    }
  
    if(typeof value === 'object' && value !== null) {
        const objectValues = Object.entries(value).map(([key, value]) => `"${key}":${jsonStringify(value)}`);
        return `{${objectValues.join(',')}}`
    
    }
     
    if (typeof value === 'string') {
        return `"${value}"`;
    }
   
    return String(value);
  
    throw 'Not implemented!';
  }

  let a = {
    'a': 'b',
    'c': {
        'd' : 'e'
    }
  }

  jsonStringify(a);