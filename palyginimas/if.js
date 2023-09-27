/*
IF - palyginimo sakinys/salyga

Palyginimo operatoriai:
- visi: >, <, ==, ===, >=, <=, !=, !==
- naudotini:  >, <, ===, >=, <=, !==
- nenaudotini: ==, !=

Loginiai operatoriai:
&&, ||, !(priesingai reiskmiai gauti)

Kodo sablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} ... else if () {}
if () {} ... else if () {} ... else {}
*/

console.clear();

if(4 > 2) {
    console.log('4 yra daugiau uz 2');
}

if (5 < 0) {
    console.log('5 yra maziau uz 0');
}

if (true) {
    console.log(true);
}

if(false) {
    console.log(false);
}


const a = 7;
const b = 5;

if (a > b) {
    console.log('A yra daugiau uz B');
} else {
    console.log('A nera daugiau uz B');
}

const day = 1;

//  0+1   2   3   4   5   6   7 
//  7+1   9  10  11  12  13  14
// 14+1  16  17  18  19  20  21
// 21+1  23  24  25  26  27  28

if ( day % 7  == 1){
    console.log('Pirmadienis');
} else if ( day % 7  == 2) {
    onsole.log('Antradienis');
} else if ( day % 7  == 3){
    console.log('Treciadienis');
} else if ( day % 7  == 4){
    console.log('Ketvirtadienis');
} else if ( day % 7  == 5){
        console.log('Penktadienis');
} else if ( day % 7  == 6){
    console.log('Sestadienis');
} else if ( day % 7  == 0){
    console.log('Sekmadienis');
} else {
    console.log('Tokia diena neegzistuoja');
}

console.clear();

// Kodo nestinimas

const diena = 1;

if (diena === 1) {
    console.log('Pirmadienis');
} else {
    if (diena === 2) {
        console.log('Antradienis');
    } else { 
        if (diena === 3) {
            console.log('Treciadienis');
        } else {
            if (diena === 4) {
                console.log('Ketvirtadienis');
            } else {
                if(diena === 5) {
                    console.log('Penktadienis');
                } else {
                    if (diena === 6) {
                        console.log('Sestadienis');
                    } else {
                        if (diena === 7) {
                            console.log('Sekmadienis');
                        } else {
                            console.log('Tokia diena neegzistuoja');
                        }
                    }
                }
            }
        }
    }
}

/* 
Gali buti:
- diena/ naktis
- lyja / nelyja
*/
console.clear();


 const parosMetas = 'diena';
const arLyja = true;
const temp = 5;
const kadaSilta = 20;
const arAsSuStriukes = true;


if (parosMetas === 'diena' && arLyja && temp >= kadaSilta && arAsSuStriukes) {
    console.log('Lietinga diena, bet su striuke gerai');
} else if(parosMetas === 'diena' && arLyja && temp < kadaSilta && arAsSuStriukes) {
    console.log('Lyja ir salta, gerai kad turiu striuke');    
} else if(parosMetas === 'diena' && arLyja && temp >= kadaSilta && !arAsSuStriukes) {
        console.log('Silta diena tai striukes nereikia');  
} else if(parosMetas === 'diena' && arLyja && temp < kadaSilta && !arAsSuStriukes) {
    console.log(' su striuke silciau'); 
    
} else if (parosMetas === 'diena' && !arLyja && temp >= kadaSilta){
    console.log('Grazi diena, eisiu i lauka pasivaikscioti, nes nustojo lyti ir yra silta, tai striukes neimsiu');

}  else if (parosMetas === 'diena' && !arLyja && temp < kadaSilta) {
    console.log('Grazi diena, eisiu i lauka nes nustojo lyti, bet yra salta, tai pasiimsiu striuke');


} else if (parosMetas === 'naktis' && arLyja && temp >= kadaSilta) {
    console.log('Eisiu pasivaikscioti per lietu nakti');
} else if (parosMetas === 'naktis' && arLyja && temp < kadaSilta) {
    console.log('Eisiu miegoti');
} else if (parosMetas === 'naktis' && !arLyja && temp >= kadaSilta) {
    console.log('Grazus vakaras ir eisiu pasivaikscioti');
} else if (parosMetas === 'naktis' && !arLyja && temp < kadaSilta) {
    console.log('Saltas vakaras, niekur neisiu');
}

/*
if (parosMetas === 'diena') {
    if(arLyja) {
        if(temp >= kadaSilta) {
            console.log('Grazi diena, eisiu i lauka pasivaikscioti nors lyja');
        } else {
            console.log('Grazi diena, bet niekur neisiu, nes lyja ir salta');
        }
    } else {
        if(!arLyja) {
            if (temp < kadaSilta) {
            console.log('Grazi diena, niekur neisiu nors nustojo lyti, ir yra salta'); 
        } else {
            console.log('Grazi diena, eisiu i lauka pasivaikscioti, nes nustojo lyti ir yra silta'); }
        }
    }
} else {
    if(arLyja) {
        if(temp >= kadaSilta) {
            console.log('Eisiu pasivaikscioti per lietu nakti');
        } else {
            console.log('Eisiu miegoti');
        }
    } else {
        if(!arLyja) {
            if (temp < kadaSilta) {
            console.log('Saltas vakaras, niekur neisiu'); 
        } else {
            console.log('Grazus vakaras ir eisiu pasivaikscioti'); }
        }
    }
}
*/
/*
console.clear();

const g = 7;
const h = 5;

if (g >= h) {
    console.log('Daugiau arba lygu');
} else {
    console.log('Maziau');
    console.log('Ne daugiau ir ne lygu');
}

// !== vs !=
// === vs ==

if (7 === '7') {
    console.log('aaaaaaaaaa');
} else {
    console.log('bbbbbbbbbbb');
}

// ... ? < A < B < C <... a < b < c < d... < z  
// (ascii)

const w = 'abc';
const e = 'aba';

if (w > e) {
    console.log(`${w} yra daugiau uz ${e}`);
} else {
    console.log(`${w} yra maziau uz ${e}`);
}


// (ne)!true
// (ne)!false
if (!true) {
    console.log('gg');
} else {
    console.log('fail...');
}

*/