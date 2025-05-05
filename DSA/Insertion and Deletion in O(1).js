class Dice {

    constructor() {
        this.MAX_SIZE = 1000;
        this.dice = [];
        this.exists = new Array(this.MAX_SIZE + 1).fill(false);
        this.positions = new Array(this.MAX_SIZE + 1).fill(-1);
    }

    increaseDiceFace(value) {
        if(this.exists[value]) {
            console.log("Number already exists");
            return;
        }
        this.exists[value] = true;
        this.dice.push(value);
        this.positions[value] = this.dice.length - 1;
    }

    decreaseDiceFace(value) {
        if(this.dice.length == 0 || !this.exists[value]) {
            console.log("Dice already empty");
            return;
        }
        
        const index = this.positions[value];
        const lastIndex = this.dice.length - 1;
        
        this.dice[index] = this.dice[lastIndex];
        this.positions[this.dice[lastIndex]] = index;
        
        this.dice.pop();
        this.exists[value] = false;
        this.positions[value] = -1;
    }   

    rollDice() {
        const randomIndex = Math.floor(Math.random() * this.dice.length);
        return this.dice[randomIndex];
    }

};
const dice = new Dice();
dice.increaseDiceFace(1);
dice.increaseDiceFace(2);
dice.increaseDiceFace(3);
dice.increaseDiceFace(4);
dice.decreaseDiceFace(2);
console.log(dice.rollDice())

