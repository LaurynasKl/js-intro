/*
ARRAY - sarasas / kolekcija/ listas/ matrica / masyvas
*/

console.clear();

const tuscias = [];
console.log(tuscias, tuscias.length);

//          index: 0  1  2  3  4  5  6  7
const pazymiai = [10, 2, 8, 4, 6, 9, 7, 5];
console.log(pazymiai,'sudaro', pazymiai.length, 'skaiciai');

const studentai = ['Jonas', "Maryte", `Petras`, 'Ona'];
console.log(studentai);

const pirmasPazymys = pazymiai[0];
console.log(pirmasPazymys);

const antrasPazymys = pazymiai[1];
console.log(antrasPazymys);

const treciasPazymys = pazymiai[2];
console.log(treciasPazymys);

const pazymioPozicija = pazymiai.length -1;
const paskutinisPazymys = pazymiai[pazymioPozicija];
console.log(paskutinisPazymys);

console.clear();


// Masyvas pazymiu.
// suskaiciuoti pazymiu vidurki ir isvesti kaip sakini:
// "Studento pazymiu vidurkis yra 7."

const marks = [10, 2, 8, 4, 6];
//const markSum = marks[0] + marks[1] + marks[2] + marks[3] +marks[4];

// let markSum = 0;
// markSum = markSum + marks[0]; // 0 + 10
// markSum = markSum + marks[1]; // 12 + 2
// markSum = markSum + marks[2]; // 12 + 8
// markSum = markSum + marks[3]; // 20 + 4 
// markSum = markSum + marks[4]; // 24 + 6
//  x = x + y

let markSum = 0;
markSum += marks[0]; // 0 + 10
markSum += marks[1]; // 12 + 2
markSum += marks[2]; // 12 + 8
markSum += marks[3]; // 20 + 4 
markSum += marks[4]; // 24 + 6
// x += y

const markAverage = markSum / marks.length;
const studentMarks = `Studento pazymiu vidurkis yra ${markAverage}. `;
console.log(studentMarks);

// Masyvas vietovardziu.
// Suformuoti sakini:
// "Mano aplankytos vietos: Vieta1, vieta2, vieta3."

const places = ['Siaures asigalis', 'Menulis', 'Pusiaujas'];
//const placesStr = 'Vieta1, vieta2, vieta3.'
//const placesStr = `${places[0]}, ${places[1]}, ${places[2]}`;

// let placesStr = '';
// placesStr = placesStr + places[0];
// placesStr = placesStr + ', ';
// placesStr = placesStr + places[1];
// placesStr = placesStr + ', ';
// placesStr = placesStr + places[2];

let placesStr = '';
placesStr += places[0];
placesStr += ', ';
placesStr += places[1];
placesStr += ', ';
placesStr += places[2];

const placesSentence = `Mano aplankytos vietos: ${placesStr} `;
console.log(placesSentence);

console.clear();

const colors = ['geltona', 'zalia', 'raudona'];
console.log(colors);

console.log(colors[1]);

colors[1] = 777;
console.log(colors);

colors[1]= 'Žalia';
console.log(colors);

const name = 'Chuck';
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
