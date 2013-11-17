
function GetWidthHeight(/* Phaser.Tilemap */ tilemap)
{
    var width = tilemap.layers[tilemap.currentLayer].width;
    var height = tilemap.layers[tilemap.currentLayer].height;

    return [width, height];    
}

MapManager = function(game, mapwidth, mapheight, tileset) {
    this.game = game;
    this.tileset = tileset;


    var tilemap = this.game.add.tilemap();

    tilemap.create('argh',mapwidth, mapheight);
    tilemap.setLayer(0);
    this.generateBasicMap(tilemap);

    tilemap.setLayer(0);
    tilemap.dump();

    this.tilelayer = this.game.add.tilemapLayer(0,0,mapwidth * tileset.tileWidth, mapheight * tileset.tileHeight, tileset,tilemap,0);
    this.tilelayer.fixedToCamera = false;
    this.tilelayer.resizeWorld();

    this.tilemap = tilemap;
};

MapManager.prototype = {

    generateBasicMap: function (tilemap)
    {
        var wh = GetWidthHeight(tilemap);
        var width = wh[0];
        var height = wh[1];

        // set all tiles to some reasonable default
        for (var ix=0; ix < width; ix++)
        {
             for (var iy=0; iy < height; iy++)
             {
                var tileindex = this.game.rnd.integerInRange(1,8);
                tilemap.putTile(tileindex,ix,iy);
             }
        }
        tilemap.calculateIndexes();
    }

};

module.exports = MapManager;

