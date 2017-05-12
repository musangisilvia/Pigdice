// back-end
var Pig = {
    player1: 0,
    player2: 0,
    turn: 0,
    activePlayer: 1,
    rollDice: function() {
        var die = Math.floor(Math.random() * 6) + 1;
        if (roll === 1) {
            this.turn = 0;
            this.switchPlayer();
        } else {
            this.turn += die;
        }
        return die;
    },
    hold: function() {
        this.switchPlayer();
        this.currentScore = 0;
    },

    switchPlayer: function() {
        if (this.activePlayer === 1) {
            this.player1 += this.turn;
            this.activePlayer = 2;
        } else {
            this.player2 += this.turn;
            this.activePlayer = 1;
        }
    }
};


// front-end
$(document).ready(function() {
    $("button#rollDice").click(function() {
        rollDice();
    })
});
