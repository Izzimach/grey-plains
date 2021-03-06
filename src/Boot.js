Boot = function (game) {
};

Boot.prototype = {

	preload: function () {

		//	Here we load the assets required for our preloader (in this case a background and a loading bar)
		//this.load.image('preloaderBackground', 'assets/images/cactuar.png');
		//this.load.image('preloaderBackground', 'assets/images/cactuar.png');
		this.load.tileset('maptiles', 'assets/images/MapSprites.png', 32, 32);
		this.load.atlas('actorspritesheet', 'assets/images/ActorSpriteSheet.png', 'assets/images/ActorSpriteSheet.json');

		this.load.bitmapFont('Tabasco', 'assets/fonts/SystemFont_0.png', 'assets/fonts/SystemFont.fnt');
	},

	create: function () {

		//	Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
		this.game.input.maxPointers = 1;

		//	Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
		this.game.stage.disableVisibilityChange = true;

		if (this.game.device.desktop)
		{
			//	If you have any desktop specific settings, they can go in here
			this.game.stage.scale.pageAlignHorizontally = true;
		}
		else
		{
			//	Same goes for mobile settings.
			//	In this case we're saying "scale the game, no lower than 480x260 and no higher than 1024x768"
			this.game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
			this.game.stage.scale.minWidth = 480;
			this.game.stage.scale.minHeight = 260;
			this.game.stage.scale.maxWidth = 1024;
			this.game.stage.scale.maxHeight = 768;
			this.game.stage.scale.forceLandscape = true;
			this.game.stage.scale.pageAlignHorizontally = true;
			this.game.stage.scale.setScreenSize(true);
		}

		this.game.input.keyboard.addKeyCapture(Phaser.Keyboard.SPACEBAR);

		// By this point the preloader assets have loaded to the cache, we've set the game settings
		// So now let's start the real preloader going
		this.game.state.start('Game');
	}
};

module.exports = Boot;

