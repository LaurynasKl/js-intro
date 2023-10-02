// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

console.clear();
//Normalus skaicia
console.log(isFinite(5));
console.log(isFinite(3.14));
console.log(isFinite(-5));

// Nenormalus skaicaiai
console.log(isFinite(NaN));
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));

const a = 7;

if (isFinite(a)){
    console.log('Taip');
} else {
    console.log("Ne");
}
console.clear();

console.log(Number.isInteger(5));
console.log(Number.isInteger(-5));
console.log(Number.isInteger(3.14));
console.log(Number.isInteger(-3.14));
console.log(Number.isInteger(NaN));

console.clear();

const b = 7;

if(isFinite(b) && Number.isInteger(b)) {
    console.log('Sveikasis skaicius');
} else if (isFinite(b) && !Number.isInteger(b)){
    console.log('Desimtainis skaicius');
} else {
    console.log('nenormalus skaicius');
}

if (isFinite(b)) {
    if(Number.isInteger(b)){
    console.log('sveikasis skaicius'); }
    else {
        console.log('Desimtaisnis skaicius');
    }
} else {
    console.log('Ne normaus skaicius');
}
console.clear();

console.log(Number.parseInt(false));
console.log(Number.parseInt([]));
console.log(Number.parseInt(''));
console.log(Number.parseInt('penki'));
console.log(Number.parseInt('123'));
console.log(Number.parseInt('asd123'));
console.log(Number.parseInt('123asd'));
console.log(Number.parseInt('-123asd456'));
console.log(Number.parseInt('123.456'));

console.log('------------');
console.log(parseFloat(''));
console.log(parseFloat('456'));
console.log(parseFloat('456.101'));
console.log(parseFloat('-456.101'));
console.log(parseFloat('Infinity'));
console.log(parseFloat('-456.101'));

console.clear();

console.log(isNaN(5));
console.log(isNaN(3.14));
console.log(isNaN(Infinity));
console.log(isNaN(NaN));

console.clear();

const kaina = 3.14;
console.log(kaina, '3.14');
console.log(kaina.toFixed());
console.log(kaina.toFixed(0));
console.log(kaina.toFixed(1));
console.log(kaina.toFixed(2));
console.log(kaina.toFixed(5));

console.log('---------------------');
const keistasSkaicius = 0.1 + 0.2;
console.log(keistasSkaicius);

const keistasSkaicius2 = keistasSkaicius.toFixed(6);
console.log(keistasSkaicius2);

const keistasSkaicius3 = parseInt(keistasSkaicius2);
console.log(keistasSkaicius3);

const keistasSkaicius4 = parseFloat(keistasSkaicius2);
console.log(keistasSkaicius4);

const keistasSkaicius5 = + '1';
console.log(keistasSkaicius5);

const keistasSkaicius6 = +(keistasSkaicius2);
console.log(keistasSkaicius6);

const c = 6.999999999999999; 
console.log(c);
console.log(c.toFixed(5)); //suapvalinimas

const d = 5.6789;
console.log(d.toFixed(6)); 
console.log(d.toFixed(5));
console.log(d.toFixed(4));
console.log(d.toFixed(3));

const e = 5.6784;
console.log(e.toFixed(6));
console.log(e.toFixed(5));
console.log(e.toFixed(4));
console.log(e.toFixed(3));
