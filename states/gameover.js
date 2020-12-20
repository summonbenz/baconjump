var GameOver = function(game) {};

GameOver.prototype = {

  // init: function(score) {
  //   this.score = score;
  // },

  preload: function () {
    this.optionCount = 1;
  },

  addMenuOption: function(text, callback) {
    var optionStyle = { font: '15pt Jelly Donuts', fill: '#FFF', align: 'left', stroke: 'rgba(0,0,0,0)', srokeThickness: 4};
    var txt = game.add.text(game.world.centerX, (this.optionCount * 60) + 440, text, optionStyle);
    txt.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    txt.anchor.setTo(0.5);
    txt.stroke = "rgba(0,0,0,0";
    txt.strokeThickness = 4;
    var onOver = function (target) {
      target.fill = "#FEFFD5";
      target.stroke = "rgba(200,200,200,0.5)";
      txt.useHandCursor = true;
    };
    var onOut = function (target) {
      target.fill = "white";
      target.stroke = "rgba(0,0,0,0)";
      txt.useHandCursor = false;
    };
    //txt.useHandCursor = true;
    txt.inputEnabled = true;
    txt.events.onInputUp.add(callback, this);
    txt.events.onInputOver.add(onOver, this);
    txt.events.onInputOut.add(onOut, this);

    this.optionCount ++;
  },

  create: function () {
    music.stop();

    game.add.sprite(0, 0, 'gameover-bg');
    var titleStyle = { font: '30pt Jelly Donuts', fill: '#253064', align: 'center'};
    var text = game.add.text(game.world.centerX, 60, "Game Over", titleStyle);
    text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    text.anchor.set(0.5);

    var titleStyle2 = { font: '20pt Jelly Donuts', fill: '#FFF', align: 'center'};
    var text_score = game.add.text(game.world.centerX, 140, "Your Score", titleStyle2);
    text_score.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    text_score.anchor.set(0.5);
    var styleScore = { font: '40pt Jelly Donuts', fill: '#FFF', align: 'center'};
    var text_score2 = game.add.text(game.world.centerX, 220, score, styleScore);
    text_score2.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    text_score2.anchor.set(0.5);

    this.addMenuOption('Play Again', function (e) {
      this.game.state.start("Game");
    });
    this.addMenuOption('Main Menu', function (e) {
      this.game.state.start("GameMenu");
    })
  }
};