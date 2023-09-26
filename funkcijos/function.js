/*
FUNCTION = funkcija

perpanaudojamas logikos blokas
*/

console.clear();

function tuscia() {
   //tuscias logikos blokas
}

console.log(tuscia());
console.log(tuscia());

function tuscia2() {
    return undefined;
}

console.log(tuscia2());
console.log(tuscia2());

function tuscia3() {
    return;
}

console.log(tuscia3());

function duokPenkis() {
    // duok penkis
    return 5;
}

console.log(duokPenkis());

console.clear();
// 1)###########

const userName1 = 'Jonas';
const userAge1 = 99;

 // Jonas turejo 9 jubilieju/-s!
const user1Jubiliejus = (userAge1 - userAge1 % 10) / 10;
const user1Str = `${userName1} turejo ${user1Jubiliejus} jubilieju/-s!`;
console.log(user1Str);

// 2)###########

const userName2 = 'Maryte';
const userAge2 = 88;

// Maryte turejo 8 jubilieju/-s!
const user2Jubiliejus = (userAge2 - userAge2 % 10) / 10;
const user2Str = `${userName2} turejo ${user2Jubiliejus} jubilieju/-s!`;
console.log(user2Str);

// 3)###########

const userName3 = 'Petras';
const userAge3 = 55;

// Petras turejo 5 jubiliejus

const user3Jubiliejus = (userAge3 - userAge3 % 10) / 10;
const user3Str = `${userName3} turejo ${user3Jubiliejus} jubilieju/-s!`;
console.log(user3Str);

// 4)###########

const userName4 = 'Ona';
const userAge4 = 44;

const user4Jubiliejus = (userAge4 - userAge4 % 10) / 10;
const user4Str = `${userName4} turejo ${user4Jubiliejus} jubilieju/-s!`;
console.log(user4Str);

console.clear();

function jubiliejai(username, age) {
    const count = (age - age % 10) / 10;
    return `${username} turejo ${count} jubilieju/-s`;
}

console.log(jubiliejai('Jonas', 99));
console.log(jubiliejai('Maryte', 88));
console.log(jubiliejai('Petras', 35));
console.log(jubiliejai('Ona', 18));

console.clear();

function studentAverage(name, marks) {
    let totalSum = 0;
    let i =  0;
    //totalSum += marks[i++];
    //totalSum += marks[2];
    //totalSum += marks[3];
    //totalSum += marks[4];

    const average = totalSum / marks.length;
    return `${name}: pazymiu vidurkis yra ${average}.`;
}

console.log(studentAverage('Jonas' [10, 2, 8, 4, 6]));
console.log(studentAverage('Maryte' [10, 9, 8, 7, 6]));
console.log(studentAverage('Petras' [5, 6, 7, 8, 9]));
console.log(studentAverage('Ona' [9, 9, 9, 9, 9]));