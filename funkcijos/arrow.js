console.clear();

const n1 = 7;
const n2 = 5;

// function declaration
function suma(a, b) {
    return a + b;
}
console.log(`${n1} + ${n2} = ${suma(n1, n2)}`);


// kintamajam priskirti anoninimine funkcija
const skirtumas = function (a, b) {
    return a - b;
}
console.log(`${n1} - ${n2} = ${skirtumas(n1, n2)}`);


// arrow (rodykline) function
const sandauga = (a, b) => {
    return a * b;
}
console.log(`${n1} * ${n2} = ${sandauga(n1, n2)}`);


// arrow function
// jeigu, logikos bloke yra tik 1 procedura (statement)
// tai galime nerasyti: { return }
const dalmuo = (a, b) => a / b;
console.log(`${n1} / ${n2} = ${dalmuo(n1, n2)}`);


// arrow function
// jeigu parametru bloke yra tik 1 parametras
// tai galime nrasyti: ()
const kvadratu = a => a ** 2;
console.log(`${n1} ** 2 = ${kvadratu(n1)}`);
console.log(`${n2} ** 2 = ${kvadratu(n2)}`);



console.clear();

function firstLetter(str) {
    if(typeof str !== 'string') {
        return 'Error: first param has to be string';
    }

    if (str.length === 0) { 
        return 'Error: first param has to be non-empty';
    }
    return str[0];
}

const firstLetter2 = function (str) {
    if(typeof str !== 'string') {
        return 'Error: first param has to be string';
    }

    if (str.length === 0) { 
        return 'Error: first param has to be non-empty';
    }
    return str[0];
}

const firstLetter3 = (str) => {
    if(typeof str !== 'string') {
        return 'Error: first param has to be string';
    }

    if (str.length === 0) { 
        return 'Error: first param has to be non-empty';
    }
    return str[0];
}
const firstLetter4 = str => {
    if(typeof str !== 'string') {
        return 'Error: first param has to be string';
    }

    if (str.length === 0) { 
        return 'Error: first param has to be non-empty';
    }
    return str[0];
}

console.log(firstLetter('Labas'));
console.log(firstLetter2('Labas'));
console.log(firstLetter3('Labas'));
console.log(firstLetter4('Labas'));
