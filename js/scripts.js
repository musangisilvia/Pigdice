// business logic
var player1 = "";
var player2 = "";
var player1win = "";
var player2win = "";

var rollDice = function() {
    return Math.floor(Math.random() * 6) + 1;
}

function Player(activePlayer) {
    this.roll = 0;
    this.tempScore = 0;
    this.scoreTotal = 0;
    this.playerName;
}

// checking if player rolled one
Player.prototype.rollOne = function() {
    if (this.roll === 1) {
        this.tempScore = 0;
        alert("Sorry " + this.playerName + "You rolled ONE, Better luck next time");
        //switchPlayer
    } else {
        this.tempScore += this.roll;
    }
}
// hold
Player.prototype.hold = function() {
    this.scoreTotal += this.tempScore;
    this.tempScore = 0;
    alert(this.playerName + ", You're so kind");
}
// change turn
Player.prototype.changeTurn1 = function() {
    if (this.roll === 1) {
        this.player1 += this.tempScore;
        $("button#rollDice1").prop("disabled", true);
        $("button#hold1").prop("disabled", true);
        $("button#rollDice2").prop("disabled", false);
        $("button#hold2").prop("disabled", false);
    }
};
Player.prototype.changeTurn2 = function() {
    if (this.roll === 1) {
        this.player2 += this.tempScore;
        $("button#rollDice2").prop("disabled", true);
        $("button#hold2").prop("disabled", true);
        $("button#rollDice1").prop("disabled", false);
        $("button#hold1").prop("disabled", false);
    }
};
Player.prototype.checkScore = function() {
    if (Player.scoreTotal >= 100) {
        alert("WE GOT A WINNER!!");
    }
};
Player.prototype.newGame = function() {
    this.roll = 0;
    this.tempScore = 0;
    this.scoreTotal = 0;
    this.playerName = "";
};
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
        player2.playerName = player2Name;


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

    $("button#rollDice1").click(function(event) {
        player1.roll = rollDice();
        $("#rollValue1").text(player1.roll);
        player1.rollOne();
        player1.changeTurn1();
        $("#totalScore1").text(player1.tempScore + player1.scoreTotal);
        player1.checkScore();
    });

    $("button#rollDice2").click(function(event) {
        player2.roll = rollDice();
        $("#rollValue2").text(player2.roll);
        player2.rollOne();
        player2.changeTurn2();
        $("#totalScore2").text(player2.tempScore + player2.scoreTotal);
        player2.checkScore();
    });

    $("button#hold1").click(function(event) {
        player1.hold();
        $("#rollValue1").empty();
        $("#totalScore1").text(player1.scoreTotal + player1.tempScore);
        player1.checkScore();
        $("button#rollDice1").prop("disabled", true);
        $("button#hold1").prop("disabled", true);
        $("button#rollDice2").prop("disabled", false);
        $("button#hold2").prop("disabled", false);
    });

    $("button#hold2").click(function(event) {
        player2.hold();
        $("#rollValue2").empty();
        $("#totalScore2").text(player2.scoreTotal + player2.tempScore);
        player2.checkScore();
        $("button#rollDice2").prop("disabled", true);
        $("button#hold2").prop("disabled", true);
        $("button#rollDice1").prop("disabled", false);
        $("button#hold1").prop("disabled", false);
    });
});
