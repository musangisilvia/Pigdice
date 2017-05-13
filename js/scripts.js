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
// hold
Player.prototype.hold = function() {
    this.scoreTotal += this.tempScore;
    this.tempScore = 0;
    // change turn
    alert(this.playerName + ", your time has passed let someone else play");
}
Player.prototype.newGame = function() {
    this.roll = 0;
    this.tempScore = 0;
    this.totalScore = 0;
    this.playerName = "";
}
var clearValues = function() {
    $(".player1Name").val("");
    $(".player2Name").val("");
}
// user interface
$(document).ready(function() {
    $("button#start").click(function(event) {
        player1 = new Player(true);
        player2 = new Player(false);
        $(".players").show();
        $(".start-menu").hide();

        var player1Name = $("input.player1Name").val();
        $("#player1Name").text(player1Name);
        var player2Name = $("input.player2Name").val();
        $("#player2Name").text(player2Name);

        player1.playerName = player1Name;
        player2.player2Name = player2Name;

    });

    $("button#newGame").click(function(event) {
        $(".players").hide();
        clearValues();
        player1.newGame();
        player2.newGame();
        $("#rollValue1").empty();
        $("#totalScore1").empty();
        $("#rollValue2").empty();
        $("#totalScore2").empty();

        $(".start-menu").show();
    });
});
