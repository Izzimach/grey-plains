
var Interactable = require('./Interactable');

AncientLockboxEncounter = {

    CreateEncounter: function (game, resultitem, centerx, centery, sceneradius) {
                    var lockbox = new Interactable(game, resultitem, centerx, centery, AncientLockboxEncounter, 'actorspritesheet','AncientLockbox.png');
                    game.interactablegroup.add(lockbox);
                },

    name: 'Ancient Lockbox',
    findtext: 'You find an ancient safe, locked tight.',
    allowedinteractions: 
        {
        'Key':'You use the {0} to open the lock, revealing a {1} inside.',
        'Strong':'Using the {0} you force the box open. Inside is a {1}'
        },
    nointeractiontext: 'You can\'t open the box. You need some way to unlock the box or something strong enough to force it open.',
    provides: ['Artifact']
};

FriendlyRobotEncounter = {

    CreateEncounter: function (game, resultitem, centerx, centery, sceneradius) {
                    var robot = new Interactable(game, resultitem, centerx, centery, FriendlyRobotEncounter, 'actorspritesheet','FriendlyRobot.png');
                    game.interactablegroup.add(robot);
                },
    name: 'Friendly Robot',
    findtext: 'You come upon a robot wandering the wasteland. It says \'Hello there! I\'m collecting biological scans of rodents in the wasteland. Have you seen any rodents?',
    allowedinteractions: 
        {
            'Rodent': 'You show the robot your {0} and it claps with glee. After scanning the {0} it gives you a {1} in thanks '
        },
    nointeractiontext: 'You don\'t have a rodent, so you leave the robot to it\'s wanderings.',
    provides: ['Artifact', 'Mundane']
};

AngryRobotEncounter = {

    CreateEncounter: function (game, resultitem, centerx, centery, sceneradius) {
                    var robot = new Interactable(game, resultitem, centerx, centery, AngryRobotEncounter, 'actorspritesheet','AngryRobot.png');
                    game.interactablegroup.add(robot);
                },

    name: 'Angry Robot',
    findtext: 'You see a dangerous-looking robot patrolling in circles.',
    allowedinteractions: 
        {
        'Combat':'You fight and defeat the robot with your {0}, revealing the {1} it was guarding.'
        },
    nointeractiontext: 'With no way to fight the robot, you decide to leave it alone.',
    provides: ['Artifact']
};

VendingMachineEncounter = {

    CreateEncounter: function (game, resultitem, centerx, centery, sceneradius) {
                    var robot = new Interactable(game, resultitem, centerx, centery, VendingMachineEncounter, 'actorspritesheet','VendingMachine.png');
                    game.interactablegroup.add(robot);
                },

    name: 'Angry Robot',
    findtext: 'You see a dangerous-looking robot patrolling in circles.',
    allowedinteractions: 
        {
        'Combat':'You fight and defeat the robot with your {0}, revealing the {1} it was guarding.',
        },
    nointeractiontext: 'With no way to fight the robot, you decide to leave it alone.',
    provides: ['Vending']
};


BurrowEncounter = {

    CreateEncounter: function (game, resultitem, centerx, centery, sceneradius) {
                    var burrow = new Interactable(game, resultitem, centerx, centery, BurrowEncounter, 'actorspritesheet','Burrow.png');
                    game.interactablegroup.add(burrow);
                },

    name: 'Burrow',
    findtext: 'You see hole in the ground. It appears to be the burrow of a rodent.',
    allowedinteractions: 
        {
        'Food':'Using your {0} you manage to lure out the occupant of the burrow: a {1}.',
        'Psionic':'Using the {0} you telepathically talk to the {1} in the burrow and convince it to join you.'
        },
    nointeractiontext: 'You see and hear nothing in the burrow, so you leave it alone.',
    provides: ['Rodent']
};

module.exports = [
    BurrowEncounter,
    VendingMachineEncounter,
    AncientLockboxEncounter,
    FriendlyRobotEncounter,
    AngryRobotEncounter
    ];
