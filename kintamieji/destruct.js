console.clear();

const marks = [10, 2, 8, 4, 6, 4, 3, 9];

const marks1 = marks[0];
const marks2 = marks[1];
const otherMarks = [
    marks[3],
    marks[4],
]

console.log(marks1,otherMarks);

const [m1, m2, m3, ...otherMs] = marks;

console.log(m1, m2, m3, otherMs);


const user = {
    name:'Jonas',
    age: 99,
    isMarried: true,
    children: [
        {
            name: 'Maryte',
            age: 88,
        },
        {
            name: 'Petras',
            age: 88,
        }
    ]
};


const {name, age, children} = user;

console.log(name, age);
console.log(children);

const zip = 12345;
const street = 'Gedemino g.';
const houseNr = 7;

const address = {zip, street, houseNr };

console.log(address);
