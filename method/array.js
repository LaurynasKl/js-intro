// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
console.clear();

console.log([10, 2, 8, 4, 6]);
console.log([10, 2, 8, 4, 6].length);
console.log([10, 2, 8, 4, 6][0]);
console.log([10, 2, 8, 4, 6][1]);
console.log([10, 2, 8, 4, 6][2]);
console.log([10, 2, 8, 4, 6][-1]);

console.log([10, 2, 8, 4, 6].at(0));
console.log([10, 2, 8, 4, 6].at(1));
console.log([10, 2, 8, 4, 6].at(-1));
console.log([10, 2, 8, 4, 6].at(-2));


const a1 = [1, 2];
const a2 = [3, 4];
const a3 = [4, 5];
const a4 = [6, 7];

const a12 = a1.concat(a2);
const a123 = a1.concat(a2, a3);
const a1234 = a1.concat(a2, a3, a4);
console.log(a1, a2, a12);
console.log(a1);
console.log(a12);
console.log(a123);
console.log(a1234);

const a11 = a1.concat(a1, a1);
console.log(a11);

console.clear();

const marks = [10, 2, 8, 4, 6];
console.log(marks.includes(10));
console.log(marks.includes(-10));

const student = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(student.includes('jonas'));
console.log(student.includes('Jonas'));

console.log(marks.indexOf(10));
console.log(marks.indexOf(2));
console.log(marks.indexOf(8));
console.log(marks.indexOf(4));
console.log(marks.indexOf(6));
console.log(marks.indexOf(-6));

console.log(student.indexOf('Maryte'));
console.log(student.indexOf('maryte'));


console.clear();

console.log(typeof 5);
console.log(typeof 'asd');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);

console.log(Array.isArray(5));
console.log(Array.isArray('asd'));
console.log(Array.isArray(true));
console.log(Array.isArray(undefined));
console.log(Array.isArray(null));
console.log(Array.isArray({}));
console.log(Array.isArray([]));

console.clear();

const abc = ['a', 'b', 'c', 'd'];
const abcJoin = abc.join();
const abcJoin2 = abc.join('-');
const abcJoin3 = abc.join(', ');
const abcJoinHip = abc.join(' -==- ');

console.log(abcJoin, typeof abcJoin);
console.log(abcJoin2);
console.log(abcJoin3);
console.log(abcJoinHip);