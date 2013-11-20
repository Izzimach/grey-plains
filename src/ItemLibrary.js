
ItemData = function(name, description, spritename, typetags) {
    this.name = name;
    this.description = description;
    this.spritename = spritename;
    this.tags = typetags;
}

ItemData.prototype = {

}

module.exports = {}
module.exports.ItemData = ItemData;
module.exports.AllTags = [
// origin
    'Mundane',
    'Artifact',
    'Mutant',
// function
    'Combat',
    'Key',
    'Strong',
// misc
    'Rodent',
    'Food',
    'Psionic',
    'Alien',
    'Interdimensional'
];

module.exports.AllItems = [
    new ItemData('Blaster', 'A beat-up blaster pistol. It will probably work long enough to fire a few shots.', 'BlasterPistol.png', ['Artifact','Combat']),
    new ItemData('Big Club', 'It\'s nothing fancy, but it can still do a good job bashing things.', 'BigClub.png', ['Mundane','Combat']),
    new ItemData('Flamespitting Hamster', 'Don\'t look at her the wrong way or she\'ll set you on fire.', 'FlameHamster.png', ['Mutant','Combat','Rodent']),

    new ItemData('Lockpicks','You\'re not sure how these could have survived so long.', 'Lockpicks.png', ['Mundane','Key']),
    new ItemData('Vibro-Key','Opens locks using overlapping vibrational waves.', 'VibroKey.png', ['Artifact','Key']),
    new ItemData('Floating Eye','This eye can see inside locks and open them telekinetically.','FloatingEye.png', ['Mutant','Key']),

    new ItemData('Hydraulic Car Jack','Amazingly the hydraulics are stil intact.', 'CarJack.png',['Mundane','Strong']),
    new ItemData('Kinetic Field Generator','Can move and lift large objects.', 'KineticField.png', ['Artifact','Strong']),
    new ItemData('Gamma Capybara', 'Super strong but not a good fighter.', 'GammaCapybara.png',['Mutant','Strong','Rodent'])
];
