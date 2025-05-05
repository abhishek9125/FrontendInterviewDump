function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
    
    if (Array.isArray(obj)) {
      return obj.map(item => deepCopy(item));
    }
    
    const copy = {};
    for (const key in obj) {
        copy[key] = deepCopy(obj[key]);
    }
    
    return copy;
  }
  
  // Example usage:
  function testDeepCopy() {
    const original = {
      name: 'John',
      age: 30,
      address: {
        street: '123 Main St',
        city: 'New York'
      },
      hobbies: ['reading', 'swimming', { type: 'sports', name: 'basketball' }]
    };
    
    const copy = deepCopy(original);
    
    // Modify the copy
    copy.name = 'Jane';
    copy.address.city = 'Boston';
    copy.hobbies[2].name = 'football';
    
    console.log('Original:', original);
    console.log('Copy:', copy);
  }
  
  testDeepCopy()