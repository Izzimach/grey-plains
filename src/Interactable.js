
var DialogWindow = require('./DialogWindow');



Interactable = function(game, resultitemdata, x,y, interactiondata, spritesheet, spritename) {
    Phaser.Sprite.call(this, game, x,y, spritesheet, spritename);

    this.body.immovable = true;
    this.interactiondata = interactiondata;
    this.resultitemdata = resultitemdata;
    this.notinteractedcount = 0;
    this.interactiondialog = null;
}

Interactable.prototype = Object.create(Phaser.Sprite.prototype);
Interactable.prototype.constructor = Interactable;

Phaser.Utils.extend(Interactable.prototype, {
    update: function()
    {
        if (this.interactiondialog === null ||
            this.interactiondialog.isopen === false)
        {
            this.notinteractedcount += 1;
        }
        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
        {
            this.interactiondialog.forEach(function(x) { x.visible=false; });
            this.interactiondialog.isopen = false;
        }
    },

    interact: function()
    {
        // put in some debouncing here, so that after interacting with this thing,
        // the player has to pull away before they can interact again.
        if (this.notinteractedcount > 10 && this.resultitemdata != null)
        {
            // create the dialog if it doesn't exist yet
            if (this.interactiondialog == null)
            {
                this.interactiondialog = new DialogWindow(this.game, null, this.interactiondata.findtext);
            }
            else
            {
                this.interactiondialog.forEach(function(x) {x.visible=true; });
            }
            // does the player have something that can interact with this?
            var interactableitem = this.findInteractionItem(this.game.inventory);
            if (interactableitem !== null)
            {
                var useitem = interactableitem[0];
                var usetag = interactableitem[1];
                var rawinteractiontext = this.interactiondata.allowedinteractions[usetag];
                var interactiontext = rawinteractiontext.replace(/\{0\}/, function(m) { return useitem.itemdata.name;});
                var resultitemtext = this.resultitemdata.name;
                this.interactiondialog.setDialogText(this.interactiondata.findtext + '\n' + interactiontext + '\n' + resultitemtext);

                // add the item to the player's inventory and remove this interactable
                this.game.inventory.addItem(new Item(this.game, this.resultitemdata));
                //this.game.interactablegroup.remove(this);
                this.exists = false;
                this.resultitemdata = null; // no result left
            }
            else
            {
                this.interactiondialog.setDialogText(this.interactiondata.findtext + '\n' + this.interactiondata.nointeractiontext);
            }

            this.interactiondialog.isopen = true;
        }
        this.notinteractedcount = 0;
    },

    findInteractionItem: function(inventory) {
        var allowedtags = Object.keys(this.interactiondata.allowedinteractions);
        var isallowedtag = function(tag) { return allowedtags.some(function(allowedtag) { return tag === allowedtag; })};

        var interactionitem = null;
        inventory.items.forEach(function (curitem) {
            curitem.itemdata.tags.forEach(function(tag)
            {
                if (isallowedtag(tag))                
                {
                    interactionitem =  [curitem, tag];
                }
            })
        });

        // no match
        return interactionitem;
    }
});

module.exports = Interactable;
