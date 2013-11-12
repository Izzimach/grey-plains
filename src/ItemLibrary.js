
ItemData = function(name, description, spritename, typetags) {
    this.name = name;
    this.description = description;
    this.spritename = spritename;
    this.tags = typetags;
}

ItemData.prototype = {

}

AllTags = [
// origin
    'Artifact',
    'Psionic',
    'Alien',
// function
    'Combat',
    'Key',
    'Strong',
// misc
}

module.exports = {}
module.exports.ItemData = ItemData;
module.exports.AllItems = [
    new ItemData('Blaster', 'A beat-up blaster pistol. It will probably work long enough to fire a few shots.', 'BlasterPistol.png', ['Technology Artifact','Combat']),
]
