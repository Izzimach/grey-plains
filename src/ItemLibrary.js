
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
// origin - usually result tags of an encounter
    'Mundane',
    'Artifact',
    'Mutant',
    'Vending',
// function - usually an interaction tag of an encounter
    'Combat',
    'Key',
    'Strong',
// misc - can be either result or interaction tags of an encounter, usually used for special encounter sequences
    'Currency',
    'Insect',
    'Rodent',
    'Food',
    'Psionic',
    'Alien',
    'Interdimensional',
    'Weapon',
    'Destructobot'
];

module.exports.AllItems = [
    new ItemData('Destructobot 5000','Ready to destroy things at your command.', 'Destructobot5000.png', ['Artifact','Combat','Destructobot']),

    new ItemData('Bag of Cheese Crisps', 'Even now you can ruin your digestive system.', 'CheeseCrisps.png', ['Vending', 'Mundane', 'Food']),
    new ItemData('Old Beef Jerky', 'Still chewy and tasty.', 'BeefJerky.png', ['Vending', 'Mundane', 'Food']),
    new ItemData('Super-Brain Bubble Gum','Pop some gum and explore your newfound mental powers!','SuperBrainGum.png', ['Vending', 'Psionic']),
    new ItemData('Interdimensional Keychain','Enabling Interdimensional Travel since 2077!','InterdimensionalKeychain.png', ['Vending', 'Artifact', 'Interdimensional']),

    new ItemData('Ancient Coin','A coin from the ancient days. Still looks shiny.','Currency.png', ['Artifact', 'Currency']),

    new ItemData('Blaster', 'A beat-up blaster pistol. It will probably work long enough to fire a few shots.', 'BlasterPistol.png', ['Artifact','Weapon','Combat']),
    new ItemData('Big Club', 'It\'s nothing fancy, but it can still do a good job bashing things.', 'BigClub.png', ['Mundane','Weapon','Combat']),
    new ItemData('Flamespitting Hamster', 'Don\'t look at her the wrong way or she\'ll set you on fire.', 'FlameHamster.png', ['Mutant','Combat','Rodent']),

    new ItemData('Lockpicks','You\'re not sure how these could have survived so long.', 'Lockpicks.png', ['Mundane','Key']),
    new ItemData('Vibro-Key','Opens locks using overlapping vibrational waves.', 'VibroKey.png', ['Artifact','Key']),
    new ItemData('Telekinetic Beetle','This beetle can see inside locks and open them telekinetically.','TKBeetle.png', ['Mutant','Insect','Key']),

    new ItemData('Hydraulic Car Jack','Amazingly the hydraulics are stil intact.', 'CarJack.png',['Mundane','Strong']),
    new ItemData('Kinetic Field Generator','Can move and lift large objects.', 'KineticField.png', ['Artifact','Strong']),
    new ItemData('Mutant Capybara', 'Super strong but not a good fighter.', 'GammaCapybara.png',['Mutant','Strong','Rodent'])
];
