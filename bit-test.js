"use strict";
// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
console.log("1 užduotis:");
compareNumbers(10, 20);
function compareNumbers(a, b) {
    if (a > b) {
        console.log("Didžiausias skaičius", a);
    } else if (a === b) {
        console.log("Abu skaičiai lygūs ", a, " ir ", b);
    } else {
        console.log("Didžiausias skaičius", b);
    }
}
// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
console.log("2 užduotis:")
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
console.log("3 užduotis:")
for (let j = 0; j <= 10; j = j + 2) {
    console.log(j);
}
// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
console.log("4 užduotis:")
for (let k = 1; k <= 5; k++) {
    let res = Math.floor(Math.random() * 10) + 1;
    console.log(k, res);
}
// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
console.log("5 užduotis:")
let res=0;
while (res!=5) {
console.log(res);    
res =Math.floor(Math.random() * 10) + 1;
}
console.log("Iššoko iš ciklo:",res);  


// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
console.log("8 užduotis:")
let res2 = lygineSuma(10,8); 
function lygineSuma(a, b) {
    let suma= a+b;             
    if  (suma % 2 == 0) {
        console.log("Lyginė suma ", suma);
    } else { console.log("Nelyginė suma ", suma);
}
}
