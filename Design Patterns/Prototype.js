class Robot {
    constructor(name) {
        this.name = name;
    }

    fire() {
        return 'phew phew';
    }
};

const robo1 = new Robot('RoboCop');
const robo2 = new Robot('AutoBot');

Robot.prototype.report = function() {
    console.log(`${this.name} reporting sir`);
}

robo1.report();
robo2.report();