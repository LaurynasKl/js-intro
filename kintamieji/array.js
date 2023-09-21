/*
ARRAY - sarasas / kolekcija/ listas/ matrica
*/

console.clear();

const tuscias = [];
console.log(tuscias, tuscias.length);

//          index: 0  1  2  3  4  5  6  7
const pazymiai = [10, 2, 8, 4, 6, 9, 7, 5];
console.log(pazymiai,'sudaro', pazymiai.length, 'skaiciai');

const studentai = ['Jonas', 'Maryte', 'Petras', 'Ona'];
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


// Masyvas pazymiu.
// suskaiciuoti pazymiu vidurki ir isvesti kaip sakini:
// "Studento pazymiu vidurkis yra 7."

// Masyvas vietovardziu.
// Suformuoti sakini:
// "mano aplankytos vietos: Vieta1, vieta2, vieta3."