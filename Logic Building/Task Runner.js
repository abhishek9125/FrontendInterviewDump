class TaskRunner {
    constructor(concurrency) {
        this.concurrency = concurrency;
        this.runningTasks = 0;
        this.queue = [];
    }

    async push(task) {
        if (this.runningTasks < this.concurrency) {
            await this.executor(task);
        } else {
            this.queue.push(task);
        }
    }

    async executor(task) {

        this.runningTasks += 1;

        try {
            await task();
        } finally {
            this.runningTasks -= 1;
            if (this.queue.length > 0 && this.runningTasks < this.concurrency) {
                const newTask = this.queue.shift();
                await this.executor(newTask);
            }
        }

    }
}
