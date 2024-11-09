const testPromise = () => {
    let count = 0;

    return function() {
        return new Promise((resolve, reject) => {
            count += 1;
            if(count <= 5) {
                reject("I am Failure API");
            } else {
                resolve("I am Successful API");
            }
        })
    }
}
 
const retry = (fn, retries, failureMessage) => {
    return new Promise((resolve, reject) => {
        fn().then((resp) => {
            resolve(resp);
        }).catch((err) => {
            if(retries == 1) {
                reject(failureMessage);
            }
            retry(fn, retries - 1, failureMessage).then(resolve, reject);
        })
    })
}

retry(testPromise(), 6, "I am failure").then((val) => {
    console.log(val);
  }, (err) => {
    console.error(err);
})