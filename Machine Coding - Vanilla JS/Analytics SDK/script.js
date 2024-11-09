// Write an analytics SDK that exposes logEvent, it takes in analytics events and queues them
// - pass a function sendAnalyticsEvent as a parameter(implement a stub function that resolves in 1 second and fails every n%10 times)
// - send the next event to sendAnalyticsEvent when only after it resolves
// - when the failure occurs attempt a retry

const SDK = function() {
    this.logs = [];
    this.count = 1;

    this.log = function(event) {
        this.logs.push(event);
    }

    this.wait = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            if(this.count % 5 === 0) {
                reject();
            } else {
                resolve();
            }
        }, 1000);
    })

    this.sendAnalyticsEvent = async function () {

        if(this.logs.length == 0) return;

        const current = this.logs.shift();

        try {
            await this.wait();
            console.log("Logged: ", current);
            this.count++;
        } catch(error) {
            console.log("---------------");
            console.log("Failed : ", current);
            console.log("Retrying : ", current);
            console.log("---------------");
            this.count = 1;
            this.logs.unshift(current);
        } finally {
            this.sendAnalyticsEvent();
        }
    }
}
  
const sdk = new SDK();
sdk.log("Event 1");
sdk.log("Event 2");
sdk.log("Event 3");
sdk.log("Event 4");
sdk.log("Event 5");
sdk.log("Event 6");
sdk.log("Event 7");
sdk.log("Event 8");
sdk.log("Event 9");
sdk.log("Event 10");
sdk.log("Event 11");
sdk.log("Event 12");
sdk.log("Event 13");
sdk.log("Event 14");
sdk.log("Event 15");
sdk.sendAnalyticsEvent();