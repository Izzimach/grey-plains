
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
    provides: ['Mundane', 'Weapon']
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

SlotMachineEncounter = {

    CreateEncounter: function (game, resultitem, centerx, centery, sceneradius) {
                    var slots = new Interactable(game, resultitem, centerx, centery, SlotMachineEncounter, 'actorspritesheet','SlotMachine.png');
                    game.interactablegroup.add(slots);
                },

    name: 'Slot Machine',
    findtext: 'You see a slot machine which, strangely enough, seems to be in working condition.',
    allowedinteractions: 
        {
        'Any':'You pull on the handle to try your luck. You get three cherries and the slot machine spits out a {1}. Further pulls on the handle do nothing.'
        },
    nointeractiontext: 'You leave the slot machine alone.',
    provides: ['Currency', 'Vending']
};


module.exports = [
    SlotMachineEncounter,
    SmashedRobotEncounter,
    PileOfTrashEncounter,
    RadioactiveGooEncounter
];
