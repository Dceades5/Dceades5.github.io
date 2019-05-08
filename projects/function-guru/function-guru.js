//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var array = []

    for (var key in object) {
        array.push(object[key])
    }
    return array;
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    /*
    IOCE
    Inputs: [Object] - any object
    Outputs: [String] - keys from object in a string separated with a space
    Constructs: 
    - methods
    Object.keys()
    array.join()

    
    Edge Cases:
    
    */

    var arr = Object.keys(object)
    var result = arr.join(" ");

    return result;




    // first collect in an Array, then use .join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    /*
    IOCE
    Inputs: [Object] - any object
    Outputs: [String] - String values from object in a string separated with a space
    Constructs (methods, functions, ifs, loops/iteration):
        Array to hold the values
        iterate over object
        if (value is a string) { add it }
        else { don't add it }
        array.join()
        return
    
    Edge Cases:
        - only values from object that are Strings can be added 
    */
    var array = []
    for (var key in object) {
        if (typeof object[key] === "string") {
            array.push(object[key]);
        }
    }
    return array.join(" ");

}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return "array"
    }
    else if (typeof collection === "object") {
        return "object"
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1)
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    string = string.split(" ")
    var array = []
    for (var i = 0; i < string.length; i++) {
        array.push(string[i][0].toUpperCase() + string[i].slice(1))
    }
    return array.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return "Welcome " + capitalizeWord(object.name) + "!"
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return capitalizeWord(object.name) + " is a " + capitalizeWord(object.species)
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (object["noises"] && object["noises"].length > 0) {
        return object["noises"].join(" ")
    }
    else { return "there are no noises" }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    string = string.split(" ")
    for (var i = 0; i < string.length; i++) {
        if (word === string[i]) {
            return true
        }
    }
    return false
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend(name, object) {
    object.friends[object.friends.length] = name
    return object
}


//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if (object.friends) {
        for (var i = 0; i < object.friends.length; i++) {
            if (object.friends[i] === name) {
                return true
            }

        }
    }

    return false
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value
    return object
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* 
var data = {a: "one", b: "two", "hokey": false};

removeProperties(data, ["a","hokey"]);

assert.deepEqual(data, {b: "two"});
*/

function removeProperties(object, keys) {
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        delete object[key];
    }

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    /*
    create a new array
    
    for loop to iterate over array
        if the value has been seen before
            don't push the value into the array
        else 
            push new value into new array
            
    return new array
    */
    var deduped = [];
    for (var i = 0; i < array.length; i++) {
        if ( !deduped.includes(array[i]) ){
            deduped.push(array[i]);
        }
    }
    return deduped;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}