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

jonas.age++;
jonas.isMarried = false;
jonas.name = 'John';
console.log(jonas);

console.log(jonas);
console.log(jonas['name']);
console.log(jonas['age']);
console.log(jonas['isMarried']);

console.log('---------');

const maryte = {
    name: 'Maryte',
    age: 88,
    isMarried: false,
};

console.log(maryte);
console.log(maryte.name);
console.log(maryte.age);
console.log(maryte.isMarried);

const arr = [1, 2, 3, 4];
console.log(arr);

arr[0] = 111;
console.log(arr);

console.clear();

let a = 1;
let b = a;
console.log('a:', a, 'b:', b);

a = 2;
console.log('a:', a, 'b:', b);

b = 3;
console.log('a:', a, 'b:', b);

const c = [1, 2];
const d = c;
console.log('c:', c, 'd:', d);

c[0] = 111;
console.log('c:', c, 'd:', d);

c[1] = 222;
console.log('c:', c, 'd:', d);

d[0] = 333;
console.log('c:', c, 'd:', d);

d[1] = 444;
console.log('c:', c, 'd:', d);


const e = { name: "Edgaras", age: 99};
const f = e;
console.log('e', e);
console.log('f', f);

e.name = 'Fiona';
e.age = 30;
console.log('e:', e);
console.log('f:', f);
