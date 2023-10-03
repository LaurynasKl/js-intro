// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
console.clear();

console.log('labas'.length);
console.log('     '.length);
console.log('\n\'\\'.length);

console.log('labas'[0], 'labas'.at(0));
console.log('labas'[1], 'labas'.at(1));
console.log('labas'[2], 'labas'.at(2));
console.log('labas'[3], 'labas'.at(3));
console.log('labas'[4], 'labas'.at(4));
console.log('labas'[5], 'labas'.at(5));
console.log('labas'[-1], 'labas'.at(-1));
console.log('labas'[-2], 'labas'.at(-2));
console.log('labas'[-3], 'labas'.at(-3));
console.log('labas'[-4], 'labas'.at(-4));
console.log('labas'[-5], 'labas'.at(-5));

console.clear();

console.log('a'.charCodeAt(0));
console.log('b'.charCodeAt(0));
console.log('labas'.charCodeAt(0));
console.log('labas'.charCodeAt(1));
console.log('labas'.charCodeAt(2));
console.log('labas'.charCodeAt(3));
console.log('labas'.charCodeAt(4));

const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
console.log(str1 + ' ' + str2);

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];

const start = 'Abecele: ';

let a1 = '';
a1 += start
a1 += abc[0];
a1 += abc[1];
a1 += abc[2];
a1 += abc[3];
a1 += abc[4];
a1 += abc[5];
console.log(a1);

let a3 = start; 
for(let i = 0; i < abc.length; i++) {
    a3 += abc[i];
}
console.log(a3);

console.log();
const a4 = start.concat(...abc);
console.log(a4);

console.clear();
//           0123456         
console.log('Labas rytas'.includes('a'));
console.log('Labas rytas'.includes('A'));
console.log('Labas rytas'.includes(' '));
console.log('Labas rytas'.includes('ab'));
console.log('Labas rytas'.includes('as'));
console.log('Labas rytas'.includes('labas'));
console.log('Labas rytas'.includes('rytas'));

console.log('Labas rytas'.indexOf('a'));
console.log('Labas rytas'.indexOf('A'));
console.log('Labas rytas'.indexOf(' '));
console.log('Labas rytas'.indexOf('ab'));
console.log('Labas rytas'.indexOf('as'));
console.log('Labas rytas'.indexOf('labas'));
console.log('Labas rytas'.indexOf('rytas'));
console.log('----------------');
//           0123456789
console.log('Labas rytas'.indexOf('a',0));
console.log('Labas rytas'.indexOf('a',1));
console.log('Labas rytas'.indexOf('a',2));
console.log('Labas rytas'.indexOf('a',3));
console.log('Labas rytas'.indexOf('a',4));
console.log('Labas rytas'.indexOf('a',10));


console.clear();

console.log('a'.repeat(6));
console.log('labas '.repeat(6));

console.clear();

const r1 = 'labas';
const r2 = r1.replace('a', 'x');
console.log(r1, r2);

const r3 = 'labas rytas';
const r4 = r3.replace('rytas', 'vakaras');
console.log(r3, r4);

const r5 = r3.replace('xxx', 'yyy');
console.log(r3, r5);

const r6 = 'labas';
const r7 = r6.replaceAll('a', '_');
console.log(r6, r7);

let r8 = 'vasara';
r8 = r8.replace('a', 'o');
console.log(r8);

r8 = r8.replace('a', 'o');
console.log(r8);

r8 = r8.replace('a', 'o');
console.log(r8);

console.clear();

/*
//             labas     a
function kiek(tekstas, raide) {
    for(let i = 0; i < tekstas.length; i++){
        if (tekstas[i] === raide) {
        } return i;
    }
}

console.log(kiek('labas', 'a'));
*/
let x = 0;
const word = 'labas';
for(let i = 0; i < word.length; i++) {
    if(word[i] === 'a') {
        x++;
    }
}
console.log(x);

function kiek(tekstas, raide) {
    let x = 0;
    for( let i = 0; i < tekstas.length; i++) {
        if(tekstas[i] === raide) {
            x++;
        } 
    }
    return x;
}
console.log(kiek('vasara', 'v'));

console.clear();

function even(skaiciai) {
    let sum = 0;
    for(let i = 0 ; i < skaiciai.length; i++) {
        if(skaiciai[i] % 2 === 0) {
            sum += skaiciai[i];
        }
    }
    return sum;
}

console.log(even([1, 3, 4, 6 , 8]));

function evenOrOdd(number) {
    let x = 0;
    for(let i = 0; i < number.length; i++) {
      if(number[i] % 2 === 0) {
        x++;
      }
    }
    return x;
}

console.log(evenOrOdd([1, 3, 4, 6 , 8]));

console.clear();

//                01234567
const kopustas = 'kopustas';
console.log(kopustas.slice());
console.log(kopustas.slice(0));
console.log(kopustas.slice(0, 0));
console.log(kopustas.slice(0, 1));
console.log(kopustas.slice(0, 2));
console.log(kopustas.slice(0, 3));
console.log(kopustas.slice(1, 3));
console.log(kopustas.slice(2, 4));
console.log(kopustas.slice(-3));
console.log(kopustas.slice(-3, -1));
console.log(kopustas.slice(-6, -3));
console.log(kopustas.slice(3, 6));

console.clear();

const pvz = 'Labas rytas suraitytas vistos koja parasytas';
console.log(pvz.split('x'));
console.log(pvz.split('a'));
console.log(pvz.split(' '));

const pvz2 = 'vasara';
const pvz2PoSplito = pvz2.split('a');
console.log(pvz2PoSplito);

console.log('sasasasas'.split('a'));
console.log('sasasasas'.split('s'));

console.log(' '.split('x'));
console.log('x'.split('x'));
console.log('asd'.split('asd'));
console.log(''.split(''));
console.log('labas'.split(''));

console.clear();

console.log('Labas'.startsWith('x'));
console.log('Labas'.startsWith('l'));
console.log('Labas'.startsWith('L'));
console.log('Labas'.startsWith('La'));
console.log('Labas'.startsWith('Labs'));
console.log('Labas'.startsWith('Labas'));
console.log('Labas'.startsWith(''));
console.log('------------------');
console.log('Vasara'.endsWith('x'));
console.log('Vasara'.endsWith('a'));
console.log('Vasara'.endsWith('sa'));
console.log('Vasara'.endsWith('ra'));
console.log('Vasara'.endsWith('sara'));
console.log('Vasara'.endsWith('Vasara'));
console.log('Vasara'.endsWith(''));

console.clear();

const pasaka = 'Ryto pasaka: Apie Jonukka ir Gretute';
const pasakatoUpperCase = pasaka.toUpperCase();
const pasakatoLowerCase = pasaka.toLowerCase();
console.log(pasaka);
console.log(pasakatoUpperCase);
console.log(pasaka);
console.log(pasakatoLowerCase);

console.clear();

const tarpai = '       labas    ';
const beTarpu = tarpai.trim();
console.log(`"${tarpai}"`);
console.log(beTarpu);

const tarpai2 = '       labas      rytas    ';
console.log(`${tarpai2}`);
console.log(`${tarpai2.trim()}`);
