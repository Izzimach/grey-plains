

var Boot = require('./Boot');
var Game = require('./Game');

StartGame = function ()
{
    //  Create your Phaser game and inject it into the gameContainer div.
    //  We did it in a window.onload event, but you can do it anywhere (requireJS load, anonymous function, jQuery dom ready, etc - whatever floats your boat)
    var game = new Phaser.Game(800,600, Phaser.AUTO, 'gameContainer');

    //  Add the States your game has.
    //  You don't have to do this in the html, it could be done in your Boot state too, but for simplicity I'll keep it here.
    game.state.add('Boot', Boot);
    game.state.add('Game', Game);
    //game.state.add('Preloader', BasicGame.Preloader);
    //game.state.add('MainMenu', BasicGame.MainMenu);

    //  Now start the Boot state.
    game.state.start('Boot');


};
