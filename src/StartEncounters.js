
var Interactable = require('./Interactable');

PileOfTrashEncounter = {

    CreateEncounter: function (game, resultitem, centerx, centery, sceneradius) {
                    var robot = new Interactable(game, resultitem, centerx, centery, PileOfTrashEncounter.InteractionData, 'actorspritesheet','PileOfTrash.png');
                    game.interactablegroup.add(robot);
                },

    InteractionData: {
                name: 'PileOfJunk',
                findtext: 'You come upon a pile of old junk.',
                allowedinteractions: 
                    {
                    'Any':'Digging through the pile you find {1}.'
                    },
                nointeractiontext: 'You find nothing in the pile of junk.',
                provides: ['Mundane']
            }
};

module.exports = [
    PileOfTrashEncounter
];
