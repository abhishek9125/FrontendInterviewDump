// Promise.all()

const dummyAPI = (time, status = true) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            status ?
            resolve(time) : reject('Failed');
        }, time);
    })
}

const taskArray = [dummyAPI(1000), dummyAPI(4000), dummyAPI(2000), dummyAPI(3000)];

const AllPromise = (taskArray) => {
    return new Promise((resolve, reject) => {
        const output = [];
        let completedPromises = 0;
        taskArray.map((promise, idx) => {
            promise.then((data) => {
                completedPromises += 1
                output[idx] = data;
                if(completedPromises == taskArray.length) resolve(output)
            }).catch((err) => reject(err))
        })
    })
}


AllPromise(taskArray).then((resp) => console.log('resp', resp)).catch((err) => console.log('err', err))