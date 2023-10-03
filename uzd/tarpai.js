console.clear();

/*
Duodamas tekstas.
Jame yra tarpai.
Ka reikia padaryti?
- pradzioje yra tarpai;
- pabaigoje yra tarpai;
- jeigu  tarp zodziu yra is eiles einanciu daugiau nei vienas 
tarpas, tai turi likti tik vienas tarpas;
*/


const str1 = '     labas    ';
const ats1 = 'labas';
const bandymas1 = str1.trim();

const str3 = 'ka   tu?       ka vakare?';
const ats3 = 'ka tu? ka vakare?';

const str2 = '  labas             rytas    tau ';
const ats2 = 'labas rytas';
// const bandymas2 = str2.trim().replaceAll('  ', ' ');
let bandymas2 = str2.trim();

for( ; bandymas2.includes('  '); ) {
    bandymas2 = bandymas2.replaceAll('  ', ' ');
}
console.log(`"${bandymas2}"`, ats2);




function isvalymas(text) {
    let ats = text.trim();
    for( ; ats.includes('  '); ) {
        ats = ats.replaceAll('  ', ' ')
    }
    return ats;
}
console.log(isvalymas(str1));
console.log(ats1);
console.log('-----------');
console.log(isvalymas(str2));
console.log(ats2);
console.log('--------');
console.log(isvalymas(str3));
console.log(ats3);