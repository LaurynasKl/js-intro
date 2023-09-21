/*
BOOLEAN - logine reiksme

Galimos reiksmes: true (1) / false (0);

Operacijos:
- && (and) visi turi buti "true" jog gauti "true"
- || (or) bent viena turi buti "true"
*/

console.clear();

 const arPilnatis = true
 const arLyja = false;

 const isSunnyDay = true;
 const isNight = false;

 console.log(isSunnyDay);
 console.log(isNight);

const count1 = false + false + true + true + false;
console.log('>>>', count1);

const count2 =(true +false + true + true) + (true + true + false);
console.log(count2);

const a = true && true;
console.log('a:', a);

const b = true || true;
console.log('b:', b);

const c = true || false;
console.log('c:', c);

const d = true && false;
console.log('d:',d);

const e = true && (false || true);
//const e = true && (true);
//const e = true;
console.log('e', e);

const f = true && false || true;
//const f = true || (true);
//const f = true;
console.log('f',f);