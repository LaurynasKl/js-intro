/*
OBJECT  - objektas
*/

console.clear();

// vartotojas: vardas, amzius, ar vedes

// key value
const jonas = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};
const maryte = {
    name: 'Maryte',
    age: 88,
    isMarried: false,
};

console.log(jonas);
console.log(jonas['name']);
console.log(jonas['age']);
console.log(jonas['isMarried']);

jonas.age++;
console.log(jonas);

console.log(maryte);
console.log(maryte.name);
console.log(maryte.age);
console.log(maryte.isMarried);