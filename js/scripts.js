// business logic
var player1 = "";
var player2 = "";

var rollDice = function() {
    return Math.floor(Math.random() * 6) + 1;
}

function Player(turn) {
    this.roll = 0;
    this.tempScore = 0;
    this.scoreTotal = 0;
    this.turn = turn;
    this.playerName;
}

// checking if player rolled one
Player.prototype.rollOne = function() {
    if (this.roll === 1) {
        this.tempScore = 0;
        alert("Sorry " + this.playerName + "You rolled ONE, Better luck next time")
        //switchPlayer
    } else {
        this.tempScore += this.roll;
    }
}
