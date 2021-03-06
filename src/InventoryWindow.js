
var INVENTORYX = 20;
var INVENTORYY = 20;
var ITEMSPACING = 40;

InventoryWindow = function(game, hudgroup) {
    this.game = game;
    Phaser.Group.call(this, game, hudgroup, 'InventoryScreen', true);

    var inventoryframe = new Phaser.Sprite(this.game, INVENTORYX, INVENTORYY, 'actorspritesheet','DialogFrame.png');
    inventoryframe.scale.setTo(
        (ITEMSPACING*5)/32,
        (ITEMSPACING*2)/32
        );

    this.add(inventoryframe);

    this.items = [];
};

InventoryWindow.prototype = Object.create(Phaser.Group.prototype);
InventoryWindow.prototype.constructor = InventoryWindow;

Phaser.Utils.extend(InventoryWindow.prototype, {
    addItem: function (item) {
        this.items.push(item);
        this.add(item);
        this.updateLayout();
    },

    removeItem: function(item) {
        var itemindex = this.items.indexOf(item);
        this.items.splice(itemindex,1);
        this.remove(item);
        this.updateLayout();
    },

    updateLayout: function() {
        // place items in a row
        var itemcount = this.items.length;
        for (var ix=0; ix < itemcount; ix++) {
            var curitem = this.items[ix];
            curitem.x = INVENTORYX + ITEMSPACING * (ix+0.5);
            curitem.y = INVENTORYY + ITEMSPACING*0.5;
        }
    }
});

module.exports = InventoryWindow;
