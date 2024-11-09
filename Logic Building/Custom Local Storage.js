window.localStorageWithExpiry = {
    setItem: function(key, value, maxAge = 30 * 60 * 60 * 1000) {
        let result = {
            data: value
        }

        if(maxAge) {
            result.expiryTime = maxAge + Date.now();
        }        

        window.localStorage.setItem(key, JSON.stringify(result))

    },
    getItem: function(key) {
        let result = JSON.parse(window.localStorage.getItem(key));
        if(result) {
            if(result.expiryTime <= Date.now()) {
                window.localStorage.removeItem(key);
                return null;
            }
            return result.data;
        }  
        return null;
    },
    removeItem: function(key) {
        window.localStorage.removeItem(key);
    },
    clear: function(){
        window.localStorage.clear();
    }
}

localStorageWithExpiry.setItem('foo', 'bar', 1000);
console.log(localStorageWithExpiry.getItem('foo'));
setTimeout(() => {
  console.log(localStorageWithExpiry.getItem('foo'));
}, 1500);