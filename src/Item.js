
// show tooltips if the pointer hovers for this amount of time
var TOOLTIPMS = 500;

// need to split the description into lines of a given maximum length
function partitiontext(text, linelength)
{
    var maxlinelength = linelength || 15;
    var partitionedtext = [];
    var re = /\s+/; // split by whitespace
    var textwords =text.split(re);
    var curline = [];
    var curlinelength = 0;
    while (textwords.length > 0)
    {
        var curword = textwords.splice(0,1)[0];
        if (curlinelength + curword.length > maxlinelength)
        {
            // start a new line
            partitionedtext.push(curline.join(" "));
            curline = [curword];
            curlinelength = curword.length;
        }
        else
        {
            curline.push(curword);
            curlinelength += curword.length;
        }
    }
    if (curline.length > 0)
    {
        partitionedtext.push(curline.join(" "));
    }
    return partitionedtext.join('\n');
}


Item = function(game, itemdata) {
    
    Phaser.Sprite.call(this, game, 0,0, 'actorspritesheet', itemdata.spritename);

    this.itemdata = itemdata;
    this.inputEnabled = true; // for tooltips
    this.showingtooltip = false;
    this.tooltipframe = new Phaser.Sprite(this.game, 0,0, 'actorspritesheet', 'SquareFrame.png');

    var formatteddescription = partitiontext(this.itemdata.description,20);
    //console.log(this.itemdata.description);
    //console.log(formatteddescription);
    this.tooltip = new Phaser.BitmapText(this.game, 0, 0, '{' + this.itemdata.name + '}\n' + formatteddescription, { font: '20px Tabasco', align: 'left'});

    //game.add.existing(this);
}
Item.prototype = Object.create(Phaser.Sprite.prototype);
Item.prototype.constructor = Item;

Phaser.Utils.extend(Item.prototype, {
    ptext: partitiontext,

    update: function() {
        var curpointer = this.input.activePointer;

        if (this.showingtooltip == false)
        {
            // not showing tooltip yet, check to see if we should display
            if (this.input.pointerOver(curpointer) && this.input.overDuration(curpointer) > TOOLTIPMS)
            {
                this.tooltip.x = this.x + 5;
                this.tooltip.y = this.y + 40;
                this.tooltipframe.x = this.x;
                this.tooltipframe.y = this.y + 35;

                // dive into the PIXI.js stuff since we have no other way to figure out how big the text area is...
                this.tooltipframe.width = this.tooltip.width + 10;
                this.tooltipframe.height = this.tooltip.height + 10;

                if (this.group)
                {
                    this.group.add(this.tooltipframe);
                    this.group.add(this.tooltip);
                }
                this.showingtooltip = true;
            }
        }
        else
        {
            // showing a tooltip, remove it when the pointer leaves
            if (this.input.pointerOver(curpointer) == false)
            {
                if (this.group)
                {
                    this.group.remove(this.tooltipframe);
                    this.group.remove(this.tooltip);
                }
                this.showingtooltip = false;
            }
        }
    }

});

module.exports = Item;
