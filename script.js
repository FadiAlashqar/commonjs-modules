// importiamo la funzione:

const fullName = require('./modules/names.js');

const myName = fullName('fadi', 'alashqar');

// importiamo la seconda funzione:

const hobby = require('./modules/hobbies.js');

const myHobby = hobby('palestra', 'gaming', 'cinema');

// importiamo la terza funzione:

const nameHobby = require('./modules/people.js');

const myFunction = nameHobby();

console.log(myFunction);
