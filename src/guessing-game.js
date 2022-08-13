class GuessingGame {
    constructor(minNum, maxNum) {
        this.minNum;
        this.maxNum;
}

setRange(min, max) {
        this.minNum = min;
        this.maxNum = max;
}

guess() {
        return Math.round(((this.maxNum - this.minNum) / 2) + this.minNum);
}

lower() {
    this.maxNum = Math.round(((this.maxNum - this.minNum) / 2) + this.minNum);
}

greater() {
    this.minNum = Math.round(((this.maxNum - this.minNum) / 2) + this.minNum);
}
}

module.exports = GuessingGame;
