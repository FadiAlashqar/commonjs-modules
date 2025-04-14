// importiamo la funzione:

const fullName = require('./modules/names.js');

const myName = fullName('fadi', 'alashqar');

console.log(myName);

// importiamo la seconda funzione:

const hobby = require('./modules/hobbies.js');

const myHobby = hobby('palestra', 'gaming', 'cinema');

console.log(myHobby);

// importiamo la terza funzione:

const nameHobby = require('./modules/people.js');

const myFunction = nameHobby();

console.log(myFunction);
