
var StartEncounters = require('./StartEncounters');
var EndEncounters = require('./EndEncounters');
var Encounters = require('./Encounters');
var ItemLibrary = require('./ItemLibrary');

ScenarioGenerator = function (numencounters)
{
    // we start with all item tags available. Whenever an item is used the tags
    // for that item are 'used' and no longer available so they are removed from this array
    availabletags = ItemLibrary.AllTags;

    // pick a random end encounter

}
