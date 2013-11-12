
var MapManager = require('./MapManager');

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

        var tileset = this.game.add.tileset('maptiles');
        tileset.setCollision(7,true,true,true,true);
        tileset.setCollision(6,true,true,true,true);

        this.worldmap = new MapManager(this.game, 40,40, tileset);

        var player = this.game.add.sprite(100,100,'actorspritesheet', 'PlayerSpriteStand.png');
        //player.animations.add('stand', [1]);
        //player.animations.play('stand');
        player.frameName = 'PlayerSpriteStand.png';
        player.anchor.setTo(0.5,0.5);
        player.body.collideWorldBounds = true;
        player.body.setSize(20,28,6,2);

        this.player = player;
        this.game.camera.follow(this.player);

        this.cursors = this.game.input.keyboard.createCursorKeys();

        var HUDlayer = new Phaser.Group(this.game, null, 'HUD', true);
        HUDlayer.z = 4;
        this.titletext = new Phaser.BitmapText(this.game, 50, 30, 'not here in the castle!', { font: '32px Tabasco', align: 'center'});
        HUDlayer.add(this.titletext);

        Phaser.xgame = this.game;
	},

	update: function () {

        // force HUD group to not scroll


        this.game.physics.collide(this.player, this.worldmap);

        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;

        if (this.cursors.up.isDown)
        {
            this.player.body.velocity.y = -100;
        }
        if (this.cursors.down.isDown)
        {
            this.player.body.velocity.y = +100;
        }
        if (this.cursors.left.isDown)
        {
            this.player.body.velocity.x = -100;
        }
        if (this.cursors.right.isDown)
        {
            this.player.body.velocity.x = +100;
        }
	},

    render: function () {
            this.game.debug.renderCameraInfo(this.game.camera, 32, 32);
            this.game.debug.renderSpriteCorners(this.player);
            //this.game.debug.renderSpriteCollision(this.player, 32, 320);

    },

	quitGame: function (pointer) {

		//	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

		//	Then let's go back to the main menu.
		//this.game.state.start('MainMenu');

	}

};

module.exports = Game;
