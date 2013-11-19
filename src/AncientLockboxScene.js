
var Interactable = require('./Interactable');

AncientLockboxScene = {}

AncientLockboxScene.CreateScene = function (game, resultitem, centerx, centery, sceneradius) {
    var lockbox = new Interactable(game, resultitem, centerx, centery, AncientLockboxScene.InteractionData, 'actorspritesheet','AncientLockbox.png');
    game.interactablegroup.add(lockbox);
}

AncientLockboxScene.InteractionData = {
    name: 'Ancient Lockbox',
    findtext: 'You find an ancient safe, locked tight.',
    allowedinteractions: 
        {
        'Key':'You use the {0} to open the lock, revealing what\'s inside:',
        'Strong':'Using the {0} you force the box open. Inside is:'
        },
    nointeractiontext: 'You can\'t open the box. You need some way to unlock the box or something strong enough to force it open.',
    provides: ['Artifact']
};

module.exports = AncientLockboxScene;
