
var StartEncounters = require('./StartEncounters');
var EndEncounters = require('./EndEncounters');
var Encounters = require('./Encounters');
var ItemLibrary = require('./ItemLibrary');

// randomly picks one element out of an array
function PickElement(arrayofthings)
{
    var thingcount = arrayofthings.length;
    var pickindex = Math.floor(Math.random() * thingcount);
    return arrayofthings[pickindex];
}

// given an array of encounters, builds a new array which contains only encounters that
// provide at least one of the required tags and have at least one interaction that
// isn't a forbidden tag
function FilterEncounters(sourceencounters, requiredtags, forbiddentags)
{
    var filterresult = [];
    sourceencounters.forEach(function (encounter) {
        var encounterinteractiontags = Object.keys(encounter.InteractionData.allowedinteractions);
        var encounterresulttags = encounter.InteractionData.provides;

        var providesrequiredtag = requiredtags.some(function(tag) { return encounterresulttags.indexOf(tag) >= 0;});
        var hasforbiddentags = forbiddentags.some(function(tag) { return encounterinteractiontags.indexOf(tag) >= 0;});

        if (providesrequiredtag && !hasforbiddentags)
        {
            filterresult.push(encounter);
        }
    });

    return filterresult;
}

// given an array of item data, builds a new array which contains only items that contain
// at least one of the required tags and none of the forbidden tags
function FilterItems(sourceitemdata, requiredtags, forbiddentags)
{
    var filterresult = [];
    sourceitemdata.forEach(function(itemdata) {
        var itemtags = itemdata.tags;
        var hasrequiredtags = itemtags.some(function (tag) { return requiredtags.indexOf(tag) >= 0; });
        var hasforbiddentags = itemtags.some(function (tag) { return forbiddentags.indexOf(tag) >= 0; });
        if (hasrequiredtags && !hasforbiddentags)
        {
            filterresult.push(itemdata);
        }
    });

    return filterresult;
}

// add tags of the allowed interactions of this to the given array. This is used to maintain
// a list of tags already 'in use' which cannot be used when generating further encounters or items.
function AddTagsFromEncounter(tagarray, encounter)
{
    var oldtags = tagarray.slice();
    var tags = Object.keys(encounter.InteractionData.allowedinteractions);
    tags.forEach(function (tag) {
        // add this tag if it's not already in there
        if (oldtags.indexOf(tag) < 0) { oldtags.push(tag); }
    });
    return oldtags;
}

function AccumulateEncounter(encounters, items, availableencounters, unavailabletags, numencountersleft)
{
    // basically this function works by adding a new encounter 'in front of' the earliest
    // encounter. This newly-added encounter becomes the earliest, so we add another encounter in front
    // of that one. And so on, until we reach the requested number of encounters

    // the 'earliest' encounter is the last one in the encounter array
    var earliestencounter = encounters[encounters.length-1];

    var leadingtags = Object.keys(earliestencounter.InteractionData.allowedinteractions);
    var possibleitems = FilterItems(ItemLibrary.AllItems, leadingtags, unavailabletags);
    if (possibleitems.length === 0)
    {
        console.log('No available items!');
        console.log('leading tags: ' + leadingtags);
        console.log('unavailabletags: ' + unavailabletags);
    }

    var chosenitemdata = PickElement(possibleitems);
    console.log('chose item: ' + chosenitemdata.name);

    items.push(chosenitemdata);

    unavailabletags = AddTagsFromEncounter(unavailabletags, earliestencounter);

    // choose an encounter to lead into this item

    // if there is only one encounter left to add, we should use one of the start encounters
    var encounterpool = availableencounters;
    if (numencountersleft === 1)
    {
        // use a shallow copy since it will get modified
        encounterpool = StartEncounters.slice();
    }

    var possibleencounters = FilterEncounters(encounterpool, chosenitemdata.tags, unavailabletags);
    if (possibleencounters.length === 0)
    {
        console.log('No available encounters!');
        console.log('item tags: ' + chosenitemdata.tags);
        console.log('unavailabletags: ' + unavailabletags);
    }
    var chosenencounter = PickElement(possibleencounters);
    console.log('chose encounter: ' + chosenencounter.InteractionData.name);

    encounters.push(chosenencounter);

    return AccumulateEncounter(encounters, items, availableencounters, unavailabletags, numencountersleft-1);
}

ScenarioGenerator = function (numencounters)
{
    // we start with all item tags available. Whenever an item is used the tags
    // for that item are 'used' and no longer available

    // use a shallow copy since it will be modified during the scenario generationn
    var unavailabletags = [];

    // pick a random end encounter
    var endencounter = PickElement(EndEncounters);

    console.log("End Encounter is " + endencounter.InteractionData.name);

    // initially all 'middle' encounters are available
    // we use a shallow copy since we don't want to modify the original
    var encounterpool = Encounters.slice();

    var allencounters = AccumulateEncounter([endencounter], [null], encounterpool, unavailabletags, 3);

    allencounters.forEach(function (encounter) {
        console.log(encounter.InteractionData.name);
    });
}



module.exports = ScenarioGenerator;

