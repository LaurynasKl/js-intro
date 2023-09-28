/*
FOR - "for" ciklas
bazinis is visu galimu ciklu
*/

console.clear();

console.log('START');

for (let i = 0; i < 5; i++) {
    console.log(i, 'pirmas');
}

console.log('PAUSE');

for (let i = -3; i <= 7; i++) {
    console.log(i, 'antras');
}
console.log('FINISH');

console.clear();

for (let f = 0; f < 5; f++) {
    const sentence = `The number is: ${f}.`;
    console.log(sentence);
}

console.clear();

// Skaiciai intervale nuo 3 iki 8 imtimai yra: 3 4 5 6 7 8.
const start = 3;
const finish = 8;
let numberSequence = '';

for (let i = start; i <= finish; i++) {
    numberSequence += ' ' + i;
}
const numberLine = `Skaiciai intervale nuo ${start} iki ${finish} imtimai yra:${numberSequence}.`;

console.log(numberLine); 

// Skaiciai intervale nuo 3 iki 8 imtimai yra: 3, 4, 5, 6, 7, 8.
//const numberSequence2 = '3, 4, 5, 6, 7, 8';
let numberSequence2 = start;

for (let i = start + 1; i <= finish; i++) {
    numberSequence2 += ', ' + i;
}

numberSequence2 += finish;

const numberLine2 = `Skaiciai intervale nuo ${start} iki ${finish} imtimai yra: ${numberSequence2}.`;

console.log(numberLine2);


console.clear();

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) { 
        console.log(i, 'lyginiai'); 
    } else {
        console.log(i, 'ne');
    }
}

for (let i = 0; i <= 8; i += 1) {
    console.log(i);
}

console.clear();

function arTestiCikla(index) {
    if (index <= 10) {
        return true;
    } else {
        return false;
    }
}

let i = 0;

for (; arTestiCikla(i);) {
    console.log(i, 'ciklas');
    
    i += 2;
}

console.log(i, 'uz ciklo');


console.clear();


const word = 'zodelis';

// Raide: z;
// Raide: o;
// Raide: d;
// Raide: i;
// Raide: s;

console.log(`Raide: ${word[0]}`);
console.log(`Raide: ${word[1]}`);
console.log(`Raide: ${word[2]}`);
console.log(`Raide: ${word[3]}`);
console.log(`Raide: ${word[4]}`);

for (let i = 0; i < word.length; i++) {
    console.log(i, `Raide: ${word[i]}`);
}

console.clear();

const marks = [10, 2, 8, 4, 6];

let totalSum = 0;
const amount = marks.length;

for (let i = 0; i < amount; i++) {
    const mark = marks[i];
    totalSum += mark;
    console.log(`${i})`, marks[i], '=', totalSum);
}

const average = totalSum / amount;
console.log(marks, 'average is:', average);
