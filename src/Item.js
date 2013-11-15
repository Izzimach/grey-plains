
Item = function(game, itemdata) {
    
    Phaser.Sprite.call(this, game, 0,0, 'actorspritesheet', itemdata.spritename);

    this.itemdata = itemdata;

    game.add.existing(this);
}

Item.prototype = Object.create(Phaser.Sprite.prototype);
Item.prototype.constructor = Item;

_.extend(Item.prototype, {
    update: function() {
        
    }

});

module.exports = Item;
