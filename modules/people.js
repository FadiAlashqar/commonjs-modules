// importiamo le funzioni:

const fullName = require('./names.js');

const myName = fullName('fadi', 'alashqar');

const hobby = require('./hobbies.js');

const myHobby = hobby('palestra', 'gaming', 'cinema');

function nameHobby() {
    return {
        fullName: myName,
        hobbies: myHobby,
    }
};

// esportiamo la funzione:

module.exports = nameHobby;