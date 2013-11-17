
var DIALOGX = 100;
var DIALOGY = 100;
var DIALOGW = 500;
var DIALOGH = 400;
var LINELENGTH=30;

var Item = require('./Item');

DialogWindow = function(game, hudgroup, text) {
    Phaser.Group.call(this, game, hudgroup, 'DialogWindow', true);

    this.dialogframe = new Phaser.Sprite(this.game, DIALOGX, DIALOGY, 'actorspritesheet','SquareFrame.png');
    this.dialogframe.width = DIALOGW;
    this.dialogframe.height = DIALOGH;

    var formattedtext = Item.prototype.ptext(text, LINELENGTH);
    this.dialogtext = new Phaser.BitmapText(this.game, DIALOGX+20, DIALOGY+20, formattedtext, { font: '15px Tabasco', align: 'left'});

    this.add(this.dialogframe);
    this.add(this.dialogtext);
}

DialogWindow.prototype = Object.create(Phaser.Group.prototype);
DialogWindow.prototype.constructor = DialogWindow;

Phaser.Utils.extend(DialogWindow.prototype, {
    setDialogText: function(text) {
        var formattedtext = Item.prototype.ptext(text, LINELENGTH);
        this.dialogtext.setText(formattedtext);
    }
});

module.exports = DialogWindow;
