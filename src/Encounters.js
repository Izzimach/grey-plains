
var Interactable = require('./Interactable');

AncientLockboxEncounter = {

    CreateEncounter: function (game, resultitem, centerx, centery, sceneradius) {
                    var lockbox = new Interactable(game, resultitem, centerx, centery, AncientLockboxEncounter.InteractionData, 'actorspritesheet','AncientLockbox.png');
                    game.interactablegroup.add(lockbox);
                },

    InteractionData: {
                name: 'Ancient Lockbox',
                findtext: 'You find an ancient safe, locked tight.',
                allowedinteractions: 
                    {
                    'Key':'You use the {0} to open the lock, revealing a {1} inside.',
                    'Strong':'Using the {0} you force the box open. Inside is a {1}'
                    },
                nointeractiontext: 'You can\'t open the box. You need some way to unlock the box or something strong enough to force it open.',
                provides: ['Artifact']
            }
};

FriendlyRobotEncounter = {

    CreateEncounter: function (game, resultitem, centerx, centery, sceneradius) {
                    var robot = new Interactable(game, resultitem, centerx, centery, FriendlyRobotEncounter.InteractionData, 'actorspritesheet','FriendlyRobot.png');
                    game.interactablegroup.add(robot);
                },

    InteractionData: {
                name: 'Friendly Robot',
                findtext: 'You come upon a robot wandering the wasteland. It says \'Hello there! I\'m collecting biological scans of rodents in the wasteland. Have you seen any rodents?',
                allowedinteractions: 
                    {
                        'Rodent': 'You show the robot your {0} and it claps with glee. After scanning the {0} it gives you a {1} in thanks '
                    },
                nointeractiontext: 'You don\'t have a rodent, so you leave the robot to it\'s wanderings.',
                provides: ['Artifact', 'Mundane']
            }
};

AngryRobotEncounter = {

    CreateEncounter: function (game, resultitem, centerx, centery, sceneradius) {
                    var robot = new Interactable(game, resultitem, centerx, centery, AngryRobotEncounter.InteractionData, 'actorspritesheet','AngryRobot.png');
                    game.interactablegroup.add(robot);
                },

    InteractionData: {
                name: 'Angry Robot',
                findtext: 'You see a dangerous-looking robot patrolling in circles.',
                allowedinteractions: 
                    {
                    'Combat':'You fight and defeat the robot with your {0}, revealing the {1} it was guarding.'
                    },
                nointeractiontext: 'With no way to fight the robot, you decide to leave it alone.',
                provides: ['Artifact']
            }
};

module.exports = [
    AncientLockboxEncounter,
    FriendlyRobotEncounter,
    AngryRobotEncounter
    ];
