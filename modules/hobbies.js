// inizializzo una variabile:
let hobbyArray = [];

// definisco la funzione:
function hobby(hobbyOne, hobbyTwo, hobbyThree) {
    
    hobbyArray.push(hobbyOne, hobbyTwo, hobbyThree)
    
    return hobbyArray;
};

// esporto la funzione:
module.exports = hobby;
