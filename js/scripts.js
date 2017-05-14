// business logic
var player1 = "";
var player2 = "";

var rollDice = function() {
    return Math.floor(Math.random() * 6) + 1;
}

function Player(activePlayer) {
    this.roll = 0;
    this.tempScore = 0;
    this.scoreTotal = 0;
    this.activePlayer = 1,
        this.playerName;
}

// checking if player rolled one
Player.prototype.rollOne = function() {
    if (this.roll === 1) {
        this.tempScore = 0;
        this.changeTurn();
        alert("Sorry " + this.playerName + "You rolled ONE, Better luck next time")
        //switchPlayer
    } else {
        this.tempScore += this.roll;
    }
}
// hold
Player.prototype.hold = function() {
    this.changeTurn();
    this.scoreTotal += this.tempScore;
    this.tempScore = 0;
    alert(this.playerName + ", You're so kind");
}
// change turn
Player.prototype.changeTurn = function() {
    if (this.activePlayer === 1) {
        this.player1 += this.tempScore;
        this.activePlayer = 2;
    } else {
        this.player2 += this.tempScore;
        this.activePlayer = 1;
    }
}
Player.prototype.newGame = function() {
    this.roll = 0;
    this.tempScore = 0;
    this.scoreTotal = 0;
    this.playerName = "";
}
var clearValues = function() {
    $(".player1Name").val("");
    $(".player2Name").val("");
}
var checkPlayer = function() {
    var player = Player.activePlayer;
    if (player === 1) {
        $("h3#player1Name").css('color', 'green');
        $("h3#player2Name").css('color', 'blue');
    } else {
        $("h3#player2Name").css('color', 'green');
        $("h3#player1Name").css('color', 'blue');
    }
};

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

    checkPlayer();

    $("button#rollDice1").click(function(event) {
        player1.roll = rollDice();
        $("#rollValue1").text(player1.roll);
        player1.rollOne();
        $("#totalScore1").text(player1.tempScore + player1.scoreTotal);
    });

    $("button#rollDice2").click(function(event) {
        player2.roll = rollDice();
        $("#rollValue2").text(player2.roll);
        player2.rollOne();
        $("#totalScore2").text(player2.tempScore + player2.scoreTotal);
    });

    $("button#hold1").click(function(event) {
        player1.hold();
        $("#rollValue1").empty();
        $("#totalScore1").text(player1.scoreTotal + player1.tempScore);
    });

    $("button#hold2").click(function(event) {
        player2.hold();
        $("#rollValue2").empty();
        $("#totalScore2").text(player2.scoreTotal + player2.tempScore);
    });
});
