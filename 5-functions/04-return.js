
let name = fName => {
    return 'Finn'
}

let myName = name();
console.log(myName);


function capitalizeName(name) {
    let capName = '';
    for (l in name) {
        if  (l == 0) {
            capName += name[l].toUpperCase();
        } else {
            capName += name[l].toLowerCase();
        }
    }
    return capName
}

console.log(capitalizeName('daNieLLe'));



//* Challenge

let tipCalc = (total, tipPerc) => {
    return total * tipPerc;
}

let tipFinal = tipCalc(100, .15);
console.log(tipFinal);