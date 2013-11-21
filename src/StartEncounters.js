
var Interactable = require('./Interactable');

PileOfTrashEncounter = {

    CreateEncounter: function (game, resultitem, centerx, centery, sceneradius) {
                    var robot = new Interactable(game, resultitem, centerx, centery, PileOfTrashEncounter, 'actorspritesheet','PileOfTrash.png');
                    game.interactablegroup.add(robot);
                },

    name: 'PileOfJunk',
    findtext: 'You come upon a pile of old junk.',
    allowedinteractions: 
        {
        'Any':'Digging through the pile you find {1}.'
        },
    nointeractiontext: 'You find nothing in the pile of junk.',
    provides: ['Mundane']
};

RadioactiveGooEncounter = {

    CreateEncounter: function (game, resultitem, centerx, centery, sceneradius) {
                    var robot = new Interactable(game, resultitem, centerx, centery, RadioactiveGooEncounter, 'actorspritesheet','PuddleOfGoo.png');
                    game.interactablegroup.add(robot);
                },

    name: 'Radioactive Goo',
    findtext: 'You come upon a puddle of radioactive goo.',
    allowedinteractions: 
        {
        'Any':'Near the puddle you spot something: a {1}.'
        },
    nointeractiontext: 'You plug your nose and wander away from the stinky goo.',
    provides: ['Mutant']
};

SmashedRobotEncounter = {

    CreateEncounter: function (game, resultitem, centerx, centery, sceneradius) {
                    var robot = new Interactable(game, resultitem, centerx, centery, SmashedRobotEncounter, 'actorspritesheet','RobotWreckage.png');
                    game.interactablegroup.add(robot);
                },

    name: 'Smashed Robot',
    findtext: 'You come upon a the remnants of a destroyed robot.',
    allowedinteractions: 
        {
        'Any':'From the robot wreckage you salvage a {1}.'
        },
    nointeractiontext: 'You leave the robot wreckage alone.',
    provides: ['Artifact']
};

module.exports = [
    SmashedRobotEncounter,
    PileOfTrashEncounter,
    RadioactiveGooEncounter
];
