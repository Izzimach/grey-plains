
var MapManager = require('./MapManager');
var Item = require('./Item');
var ItemLibrary = require('./ItemLibrary');
var InventoryWindow = require('./InventoryWindow');
var Encounters = require('./Encounters');
var StartEncounters = require('./StartEncounters');
var ScenarioGenerator = require('./ScenarioGenerator');

Game = function (game) {

};

Game.prototype = {

	create: function () {

        var tileset = this.game.add.tileset('maptiles');
        tileset.setCollision(7,true,true,true,true);
        tileset.setCollision(6,true,true,true,true);

        this.game.gamecompleted = false;

        this.worldmap = new MapManager(this.game, 32,28, tileset);

        this.game.interactablegroup = this.game.add.group(this.game.world,'Interactables');

        var player = this.game.add.sprite(100,200,'actorspritesheet', 'PlayerSpriteStand.png');
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
        this.game.HUDlayer = HUDlayer;

        this.helptext = this.game.add.bitmapText(50, 130, 'Use arrows to move', { font: '32px Tabasco', align: 'center'});
        //this.game.add.existing(this.helptext);

        this.inventory = new InventoryWindow(this.game, HUDlayer);
        this.game.inventory = this.inventory;
        
        //this.inventory.addItem(new Item(this.game, ItemLibrary.AllItems[2]));
        //this.inventory.addItem(new Item(this.game, ItemLibrary.AllItems[3]));

        //Encounters[0].createEncounter(this.game,ItemLibrary.AllItems[0], 300,300,100);
        //StartEncounters[0].createEncounter(this.game,ItemLibrary.AllItems[1], 400,300,100);

        var scenario = ScenarioGenerator(3);
        if (scenario === null)
        {
            this.helptext.setText("Scenario generator failed, please re-load");
            return;
        }

        var encounterlocations = this.worldmap.generateEncounterLocations(4);
        console.log(encounterlocations);

        for (var encounterix=0; encounterix < scenario.length; encounterix++)
        {
            var encounterdata = scenario[encounterix][0];
            var itemdata = scenario[encounterix][1];
            var encounterx = encounterlocations[encounterix][0];
            var encountery = encounterlocations[encounterix][1];

            encounterdata.createEncounter(this.game, itemdata, encounterx, encountery, 100);
        }

        Phaser.xgame = this.game;
	},

	update: function () {

        // force HUD group to not scroll

        this.game.physics.collide(this.player, this.worldmap.tilelayer);
        this.game.physics.collide(this.player, this.game.interactablegroup, this.interactcallback, null, this);

        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;

        if (this.game.gamecompleted === false)
        {
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

            if (this.player.body.velocity.x !== 0 ||
                this.player.body.velocity.y !== 0)
            {
                // remove the 'use arrows to move' help text once the player moves
                this.helptext.visible = false;
            }
        }
	},

    render: function () {

    },

    // called when the player collides with an interactable. we try to invoke the
    // interactable's 'interact' method.
    interactcallback: function(sprite1, sprite2) {
        var nottheplayer = null;
        if (sprite1 === this.player)
        {
            nottheplayer = sprite2;
        }
        else if (sprite2 === this.player)
        {
            nottheplayer = sprite1;
        }
        if (nottheplayer && nottheplayer.interact)
        {
            // try to interact with this thing
            nottheplayer.interact();
        }

    },

	quitGame: function (pointer) {

		//	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

		//	Then let's go back to the main menu.
		//this.game.state.start('MainMenu');

	}

};

module.exports = Game;
