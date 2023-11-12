console.clear();

const tekstas0 = 'mama';
const tekstas1 = 'vasara';
const tekstas2 = 'pavasaris';
const tekstas3 = 'labas rytas';
const tekstas4 = 'pipiriukai';

// kuri raide tekste pasikartoja dazniausiai?

const abc = {};

for(const letter of tekstas4){
    if(abc[letter]){
        abc[letter] += 1;
    } else{
        abc[letter] = 1;
    }
}

console.log(abc);

let maxLetter = '';
let maxCount = 0; 

for(const letter in abc){
    if(abc[letter] > maxCount){
        maxLetter = letter;
        maxCount = abc[letter]
    }
}
console.log(maxLetter, maxCount);