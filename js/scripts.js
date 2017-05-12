function Game(name, turn) {
    this.name = name;
    this.turn = turn;
    this.scoreMax = "";
};
Game.prototype.rollDie = function() {
    var die = (Math.floor(Math.random() * 6) + 1);
    return die;
}
