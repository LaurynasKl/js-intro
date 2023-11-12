console.clear();

const skaiciai = [10, 2, 8, 4, 6];

// Vidurkis
let vidurkis = 0;
for (const skaicius of skaiciai) {
    vidurkis += skaicius;
};
const total = vidurkis / skaiciai.length;
console.log(total);


let vidurkis1 = 0;
for(let i = 0; i <skaiciai.length; i++){
    vidurkis1 += skaiciai[i];
}
const totalSum = vidurkis1 / skaiciai.length;
console.log(totalSum);


//   MEDIANA 
const skaiciai1 = [10, 2, 8, 4, 6, 4];

function mediana(skaiciai1){
    const sorted = skaiciai1.sort((a, b) => a - b);
    console.log(sorted);
    const middleIndex = Math.floor(sorted.length / 2);
    
    if(sorted.length % 2 === 0){
        return ((sorted[middleIndex - 1] + sorted[middleIndex]) / 2);
    } else{
        return (sorted[middleIndex]);
    }
}
console.log(mediana(skaiciai1));