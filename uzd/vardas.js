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
        if(simbolis.includes(neleistiniSimboliai)){
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

console.clear();

function isName(name) {
    if(typeof name !== 'string'){
        return 'Klaida: netinkamas duomens tipas, privalo buti "string".';
    }

    const nameMinLength = 2;
    if(name.length < nameMinLength) {
        return `Klaida: per trumpa vardas; minimum ${nameMinLength} simboliai.`
    }

    const nameMaxLength = 20;
    if(name.length > nameMaxLength) {
        return `Klaida: per ilgas vardas: maximum ${nameMaxLength} simboliu.`
    }

    const pirmaRaide = name[0];
    if(name[0].toUpperCase() !== name[0] ){
        return 'Klaida: pirma raide turi buti didzioji'
    }

    const likusiosRaides = name.slice(1);
    if(likusiosRaides.toLowerCase() !== likusiosRaides){
        return 'Klaida: likusios raides turi buti mazosios';
    }

    // Turime leistinu simboliu sarasa
    const abc = 'abcdefghijklmnoqprstuvwxyz';
    const nameLowerCase = name.toLowerCase();

    // einu per vardo raides
    // pasiimu viena is vardo raidziu
    // paatikrinu ar ta raide yra sarase
    // jeigu yra tesiam darba
    // jei nera - baigiam darba

    for(let i = 0; i < name.length; i++) {
        const raide = nameLowerCase[i];
        if(!abc.includes(raide)) {
            return `Klaida: neleistinas simbolis varde "${raide}".`
        }
    }    
    return name;
}
console.log(isName());
console.log(isName(undefined));
console.log(isName(null));
console.log(isName(13));
console.log(isName(NaN));
console.log(isName(Infinity));
console.log(isName(true));
console.log(isName(false));
console.log(isName([]));
console.log(isName({}));
console.log(isName(isName));

console.log(isName(''));
console.log(isName('L'));
console.log(isName('Liiiiiiiiiiiiiiiiiiiii'));

console.log(isName('maryte'));
console.log(isName('ona'));
console.log(isName('petras'));

console.log(isName('MarYte'));
console.log(isName('OnA'));
console.log(isName('PetrAs'));

console.log(isName('Ma?yte'));
console.log(isName('On4'));
console.log(isName('Petr s'));
console.log(isName('9onas'));

console.log(isName('Li'));
console.log(isName('Liiiiiiiiiiiiiiiiiii'));
console.log(isName('Jonas'));


const miestas = 'Miestas';
let errors = '';

if(miestas.length < 10) {
    errors += 'per trumpas zodis'
}
if(miestas.length > 20) {
    errors += 'per ilgas zodis'
}

console.log(errors);