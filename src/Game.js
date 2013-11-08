
Game = function (game) {

	//	When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;		//	a reference to the currently running game
    this.add;		//	used to add sprites, text, groups, etc
    this.camera;	//	a reference to the game camera
    this.cache;		//	the game cache
    this.input;		//	the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
    this.load;		//	for preloading assets
    this.math;		//	lots of useful common math operations
    this.sound;		//	the sound manager - add a sound, play one, set-up markers, etc
    this.stage;		//	the game stage
    this.time;		//	the clock
    this.tweens;	//	the tween manager
    this.world;		//	the game world
    this.particles;	//	the particle manager
    this.physics;	//	the physics manager
    this.rnd;		//	the repeatable random number generator

    //	You can use any of these from any function within this State.
    //	But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

};

Game.prototype = {

	create: function () {

		//	Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
        //var mummy = this.game.add.sprite(300,200,'argh');

        var tileset = this.game.add.tileset('maptiles');
        var tilemap = this.game.add.tilemap();

        var mapwidth = 20;
        var mapheight = 20;

        tilemap.create('argh',mapwidth, mapheight);
        tilemap.setLayer(0);
        tilemap.putTile(1,0,0);
        tilemap.putTile(2,1,0);
        tilemap.putTile(1,2,0);
        tilemap.calculateIndexes();
        tilemap.dump();

        var layer = this.game.add.tilemapLayer(0,0,mapwidth * tileset.tileWidth, mapheight * tileset.tileHeight, tileset,tilemap,0);

	},

	update: function () {

		//	Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!

	},

	quitGame: function (pointer) {

		//	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

		//	Then let's go back to the main menu.
		//this.game.state.start('MainMenu');

	}

};

module.exports = Game;
