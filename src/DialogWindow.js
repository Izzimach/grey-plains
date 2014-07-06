
var DIALOGX = 100;
var DIALOGY = 100;
var DIALOGW = 500;
var DIALOGH = 400;
var LINELENGTH=45;

var Item = require('./Item');

DialogWindow = function(game, hudgroup, text) {
    Phaser.Group.call(this, game, hudgroup, 'DialogWindow', false);

    this.dialogframe = new Phaser.Sprite(this.game, DIALOGX, DIALOGY, 'actorspritesheet','SquareFrame.png');
    this.dialogframe.width = DIALOGW;
    this.dialogframe.height = DIALOGH;

    var formattedtext = Item.prototype.ptext(text, LINELENGTH);
    this.dialogtext = new Phaser.BitmapText(this.game, DIALOGX+30, DIALOGY+30, formattedtext, { font: '19px Tabasco', align: 'left'});
    this.setDialogText(text);

    this.dismisstext = new Phaser.BitmapText(this.game, DIALOGX+DIALOGW*0.5, DIALOGY+DIALOGH-30, "Press spacebar to dismiss", { font:'14px Tabasco', align:'center'});

    this.add(this.dialogframe);
    this.add(this.dialogtext);
    this.add(this.dismisstext);
};

DialogWindow.prototype = Object.create(Phaser.Group.prototype);
DialogWindow.prototype.constructor = DialogWindow;

Phaser.Utils.extend(DialogWindow.prototype, {
    setDialogText: function(text) {
        var hardlines = text.split("\n");
        var formatoneline = function(x) { return Item.prototype.ptext(x, LINELENGTH); };
        var formattedlines = hardlines.map(formatoneline);
        var formattedtext = formattedlines.join("\n");
        this.dialogtext.setText(formattedtext);
    },

    setDismissText: function(dismisstext) {
        var formattedtext = Item.prototype.ptext(dismisstext, LINELENGTH);
        this.dismisstext.setText(formattedtext);
    }
});

module.exports = DialogWindow;
