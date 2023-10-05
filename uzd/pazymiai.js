console.clear();

const marks = [10, 2, 8, 4, 6];
const marks1 = [10, true, 2, false, 8, null, 'a', 4 ,[], {}, 6];
const marks2 = [];
const marks3 = [10, 2, 3.14, -2, -10, 8, 2.727, 0, 80, 99, 120, 4, 6];
const marks4 = [10, 2, NaN, Infinity,-Infinity, 8, 4, 6];
const marks5 = 'labas'
const marks6 = [];


function marksAverage (marksList) {
    if(!Array.isArray(marksList)) {
        return 'Erros: duok masyva';
    }
    if(marksList.length < 1) {
        return 'Error: duok ne tuscia masyva';
    }

    let totalSum = 0;
    let count = 0;

for (let i = 0; i < marksList.length; i++) {
    if (typeof marksList[i] !== 'number'
        || marksList[i] > 10 
        || marksList[i] < 1
        ||!Number.isInteger(marksList[i])) {
        continue;
    }
    
    // '3.14'.includes('.') -> true
    // '3.14'.split('.').length -> ['3','14']
    
    // parseInt('3.14') === 3.14 -> 3
    // parseFloat('3.14') === 3.14 -> true
    
    // !Number.isInteger (marksList[i])
    // ('' + marksList[i]).includes('.')
    
    totalSum += marksList[i];
    count++;
}
    const average = totalSum / count;

    //return count === 0 ? 'Neiskaityta': average;
    //return count > 0 ? average : 'Neiskaityta';
      return count ? average : 'Neiskaityta';
}

console.log(marksAverage(marks) , '--> 6');
console.log(marksAverage(marks1), '--> 6');
console.log(marksAverage(marks2), '--> Neiskaityta');
console.log(marksAverage(marks3));
console.log(marksAverage(marks4));
console.log(marksAverage(marks5));
console.log(marksAverage(marks6));