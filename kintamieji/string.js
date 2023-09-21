/*
string

Iniciavimas kabutemis: "", '', ``(backtick)

Teksto ilgis: kintamasis.length
Teksto ilgis: vardas.length
*/

console.clear();

const txt1 = "tekstas 1";
console.log(txt1);

const txt2 = 'tekstas 2';
console.log(txt2);

// Vienguba kabute (').
const kabute1 = "Vienguba kabute (').";
console.log(kabute1);

// Dvyguba kabute ("). 
const kabute2 = 'Dvyguba kabute (").';
console.log(kabute2);

// Vienguba (') ir dvyguba (") kabutes.
const kabutes121 = "Vienguba (') ir dvyguba (\") kabutes.";
console.log(kabutes121);

const kabutes122 = 'Vienguba (\') ir dvyguba (\") kabutes.';
console.log(kabutes122);

const kabutes123 = "Vienguba (\') ir dvyguba (\") kabutes.";
console.log(kabutes123);

const  back = '\\';
console.log(back);

// \n = new line (nusileidzia zemyn)
// \r = return (grizta i eilutes pradzia)
const formatuotasTekstas = "Labas \rrytas, \rLietuva!";
console.log(formatuotasTekstas);

/* \n 
Labas 
     rytas
          Lietuva
*/

const gg = 'gggggggggggg \raaa';
console.log(gg);

const lrl = "Labas\n\r\
rytas,\n\r\
Lietuva!";
console.log(lrl);

const backtick = `Labas 
rytas 
Lietuva`;
console.log(backtick);


const vardas = 'Chuck';
console.log(vardas, '=', vardas.length, 'simboliai');

const pavarde = 'Norris';

const pilnasVardas = 'Chuck Norris';
console.log(pilnasVardas, pilnasVardas.length);

const fullname = vardas + ' ' + pavarde;
console.log(fullname);

const labas = 'Labas';
const parosMetas = 'vakaras';
const valstybe = 'Lietuva';

const lrl2 = labas + ' ' + parosMetas + ", " + valstybe + "!";
console.log(lrl2);

const lrl3 = `${labas} ${parosMetas}, ${valstybe}!`;
console.log(lrl3);

console.clear();

const n1 = 5;
console.log(n1);

const n2 = 5 + "7";
console.log(n2);

const n3 = '5' + 7;
console.log(n3);

const n4 = '5' + '7';
console.log(n4);

const n5 = 7 - 5;
console.log(n5);

const n6 = '7' - 5;
console.log(n6);

const n7 = 7 - '5';
console.log(n7);

const n8 = '7' - '5';
console.log(n8);

const n9 = 'Labas' - 5;
console.log(n9);

const n10 = 'Labas' / 5;
console.log(n10);