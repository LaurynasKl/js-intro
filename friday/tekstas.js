console.clear();

const tekstas0 = 'mama';
const tekstas1 = 'vasara';
const tekstas2 = 'pavasaris';
const tekstas3 = 'labas rytas';
const tekstas4 = 'pipiriukai';
const tekstas5 = 'aaabbbccddeefghijklmn';

// kuri raide tekste pasikartoja dazniausiai?

const abc = {};

for(const letter of tekstas5){
    if(abc[letter]){
        abc[letter] += 1;
    } else{
        abc[letter] = 1;
    }
}

let maxLetter = '';
let maxCount = 0; 

for(const letter in abc){
    if(abc[letter] > maxCount){
        maxLetter = letter;
        maxCount = abc[letter]
    }
}
console.log(maxLetter, maxCount);

let letters = [];

for(const letter in abc){
    if(abc[letter] === maxCount){
        letters.push(letter);
    }
}

console.log(letters);