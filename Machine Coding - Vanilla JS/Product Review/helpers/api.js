class ProductService {
    async fetchProducts() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    if(Math.random()) {
                        resolve(MOCK_DATA)
                    } else {
                        reject(new Error(CONSTANTS.ERROR_MESSAGES.API_FAILURE))
                    }
                } catch(error) {
                    reject(error);
                }  
            }, 5400);
        });
    }
}