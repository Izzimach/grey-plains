var Interactable = require('./Interactable');

InterdimensionalPortalEncounter = {

    CreateEncounter: function (game, resultitem, centerx, centery, sceneradius) {
                    var portal = new Interactable(game, resultitem, centerx, centery, InterdimensionalPortalEncounter, 'actorspritesheet','Vortex.png');
                    game.interactablegroup.add(portal);
                },
    name: 'Interdimensional Portal',
    findtext: 'You come upon a swirling multihued vortex.',
    allowedinteractions: 
        {
        'Interdimensional':'You use the {0} to stabilize the vortex, making it safe to approach. ' +
                            'You take one last look at the barren lands behind you and step through into what you hope is a better world.'
        },
    nointeractiontext: 'The vortex seems unstable and dangerous, so you leave it alone. Perhaps you can find some gizmo to stabilize it.',
    provides: ['COMPLETED']
};

OldGuyByTheFireEncounter = {

    CreateEncounter: function (game, resultitem, centerx, centery, sceneradius) {
                    var oldguy = new Interactable(game, resultitem, centerx, centery, OldGuyByTheFireEncounter, 'actorspritesheet','OldGuyByFire.png');
                    game.interactablegroup.add(oldguy);
                    
                    // campfire
                    //var campfire = new Interactable(game, resultitem, centerx-23, centery, OldGuyByTheFireEncounter.InteractionData, 'actorspritesheet','Campfire.png');
                    game.add.sprite(centerx-23, centery, 'actorspritesheet', 'Campfire.png');
                },

    name: 'Old Guy by the Fire',
    findtext: 'You see and wizened traveller warming himself by a fire. He asks if you have any food.',
    allowedinteractions: 
        {
        'Food':'You sit down by the fire and share your {0} with the old man. He tells you stories of fabulous glittering cities and horrifying wars. ' +
                'You wake up in the morning and find the traveller gone. However, he left a map showing a pass over the nearby mountains to a thriving village. ' +
                'You get up and start walking the path that will take you out of these barren wastelands forever.'
        },
    nointeractiontext: 'You have no food at the moment. The old man says "Well then, come back sometime when you do and I\'ll tell you some stories."',
    provides: ['COMPLETED']
};

module.exports = [
    InterdimensionalPortalEncounter,
    OldGuyByTheFireEncounter
];
