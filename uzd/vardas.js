console.clear();


/*
Duodamas vardas ... ar bent tai jau galvojam ...
ka daryti?
- reikia nustatyti, ar dave varda, ar ne?
*/

// Jonas -> true
// Maryte -> true
// 12345 -> false
// labas -> false
// Azuolas -> true
// Egle -> true

function looksLikeName(text) {
    // jeigu, pirma raide nera didzioji
    // graziname: false
    if (text[0] !==text[0].toUpperCase()) {
        return false;  }

    // jeigu visi kiti simboliai apart pirmojo, 
    // nera mazosios raides
    // graziname: false
    const likusiosRaides = text.slice(1);
    if(likusiosRaides !== likusiosRaides.toLowerCase()) {
        return false;  }

    // jeigu, yra simbolis 1, 2, 3... (skaitmuo)
    // graziname: false
    const neleistiniSimboliai = '0123456789_';
    for( let i = 0 ; i < neleistiniSimboliai.length; i++) {
        const simbolis = neleistiniSimboliai[i];
        if(text.includes(simbolis)){
            return `Klaida: ${simbolis} nera leistinas simbolis`;
        }
    }

    return true;
}

console.log(looksLikeName('Jonas'), true);
console.log(looksLikeName('Maryte'), true);
console.log(looksLikeName('labas'), false);
console.log(looksLikeName('Labas'), true);
console.log(looksLikeName('AZUOLAS'), false);
console.log(looksLikeName('Azuolas'), true);
console.log(looksLikeName('AzuolAs'), false);
console.log(looksLikeName('5Azuolas'), false);
console.log(looksLikeName('Azuola7s'), false);
console.log(looksLikeName('Azuolas5'), false);
console.log(looksLikeName('Eg_le'), false);