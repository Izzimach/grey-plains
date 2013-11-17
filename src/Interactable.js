
var DialogWindow = require('./DialogWindow');



Interactable = function(game, x,y, interactiondata, spritesheet, spritename) {
    Phaser.Sprite.call(this, game, x,y, spritesheet, spritename);

    this.body.immovable = true;
    this.interactiondata = interactiondata;
    this.notinteractedcount = 0;
    this.interactiondialog = null;
}

Interactable.prototype = Object.create(Phaser.Sprite.prototype);
Interactable.prototype.constructor = Interactable;

Phaser.Utils.extend(Interactable.prototype, {
    update: function()
    {
        if (this.interactiondialog === null ||
            this.interactiondialog.group === null)
        {
            this.notinteractedcount += 1;
        }
    },

    interact: function()
    {
        // put in some debouncing here, so that after interacting with this thing,
        // the player has to pull away before they can interact again.
        if (this.notinteractedcount > 5)
        {
            // create the dialog if it doesn't exist yet
            if (this.interactiondialog == null)
            {
                this.interactiondialog = new DialogWindow(this.game, this.game.HUDlayer, this.interactiondata.findtext);
            }
            else

            {
                this.game.HUDlayer.add(this.interactiondialog);
            }
            this.interactiondialog.setDialogText(this.interactiondata.findtext);
        }
        this.notinteractedcount = 0;
    }
});

module.exports = Interactable;
