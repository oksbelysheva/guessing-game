class GuessingGame {
    constructor() {
        this.range = [];
        this.l = 0;
        this.r = 0;
        this.m = (this.l + this.r)/2;
    }

    setRange(min, max) {
        this.range = [];
        for (let i = min; i <= max; i++) {
            this.range.push(i);
        }
        this.r = this.range.length - 1;
    }

    guess() {
        this.m = Math.round((this.l + this.r)/2);
        return this.range[this.m];
    }

    lower() {
        this.r = this.m;
    }

    greater() {
        this.l = this.m;
    }
}

module.exports = GuessingGame;
