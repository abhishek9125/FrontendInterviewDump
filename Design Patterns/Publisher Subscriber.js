function Events() {
    const subscriptionList = new Map();
    const subscribeOnceList = new Map();
    const subscribeOnceAsyncList = new Map();

    const addCallback = (list, name, callback) => {
        if (!list.has(name)) {
            list.set(name, [callback]);
        } else {
            list.get(name).push(callback);
        }
    };

    const handleCallbacks = (callbacks, data, clearAfter = false) => {
        if (callbacks) {
            callbacks.forEach(callback => callback(data));
            if (clearAfter) callbacks.length = 0;
        }
    };

    this.subscribe = function (name, callback) {
        addCallback(subscriptionList, name, callback);
        return {
            remove: () => {
                const callbacks = subscriptionList.get(name) || [];
                subscriptionList.set(name, callbacks.filter(cb => cb !== callback));
            }
        };
    };

    this.subscribeOnce = function (name, callback) {
        addCallback(subscribeOnceList, name, callback);
    };

    this.subscribeOnceAsync = function (name) {
        return new Promise(resolve => {
            addCallback(subscribeOnceAsyncList, name, resolve);
        });
    };

    this.publish = function (name, data) {
        handleCallbacks(subscriptionList.get(name), data);
        handleCallbacks(subscribeOnceList.get(name), data, true);
        handleCallbacks(subscribeOnceAsyncList.get(name), data, true);
    };

    this.publishAll = function (data) {
        subscriptionList.forEach(callbacks => handleCallbacks(callbacks, data));
        subscribeOnceList.forEach(callbacks => handleCallbacks(callbacks, data, true));
        subscribeOnceAsyncList.forEach(callbacks => handleCallbacks(callbacks, data, true));
    };
}

const notificationCenter = new Events();

const generalNews = notificationCenter.subscribe("general-news", (message) => {
    console.log(`General News: ${message}`);
});

const welcomeMessage = notificationCenter.subscribe("new-user", (name) => {
    console.log(`Welcome message sent to: ${name}`);
});

notificationCenter.publish("new-user", "Alice");

notificationCenter.subscribeOnce("special-event", (announcement) => {
    console.log(`Special Event Announcement: ${announcement}`);
});

notificationCenter.publish("special-event", "Launching New Feature!");

notificationCenter.publish("special-event", "Another Launch!");

notificationCenter.subscribeOnceAsync("exclusive-news").then((news) => {
    console.log(`Exclusive News Alert: ${news}`);
});

notificationCenter.publish("exclusive-news", "Breaking News!");

notificationCenter.publish("general-news", "Our platform just hit 1M users!");

notificationCenter.publishAll("End of Day Recap");
