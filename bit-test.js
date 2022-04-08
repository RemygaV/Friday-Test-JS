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
// // 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
console.log("2 užduotis:")
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// // 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
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
let res = 0;
while (res != 5) {
    res = Math.floor(Math.random() * 10) + 1;
    console.log(res);
}
// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
console.log("6 užduotis:");
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(Math.random() * (max - min) + min);
}
let arr3 = [];
for (let i = 1; i <= 10; i++) {
    arr3.push(getRandomInt(10, 30));
}
console.log(arr3);

function largest(arr3) {
    let i;
    let max = arr3[0];
    for (i = 1; i < arr3.length; i++) {
        if (arr3[i] > max)
            max = arr3[i];
    }
    return max;
}
console.log("Didžiausia masyvo reikšmė: " + largest(arr3));
// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
console.log("7 užduotis:")
let suskaiciuoti = [],
    array = [],
    letters;
for (let f = 0; f < 100; f++) {
    letters = Math.floor(Math.random() * (4 - 1 + 1) + 1);
    if (letters == 1) {
        array.push("A");
    }
    else if (letters == 2) {
        array.push("B");
    }
    else if (letters == 3) {
        array.push("C");
    }
    else if (letters == 4) {
        array.push("D");
    }
}
console.log(array);
array.forEach(iteam => {
    suskaiciuoti[iteam] = (suskaiciuoti[iteam] || 0) + 1;
});
console.log(suskaiciuoti);

// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
console.log("8 užduotis:")
let res2 = lygineSuma(10, 7);
function lygineSuma(a, b) {
    let suma = a + b;
    if (suma % 2 == 0) {
        console.log("Lyginė suma: ", suma);

    } else {
        console.log("Nelyginė suma: ", suma);
    }
}
// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
//     skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
console.log("9 užduotis:")
function pirminisSkaicius(a) {
    if (a <= 1 || typeof a !== "number") {
        console.log(a, " - tai nera skaicius")
        return false;
    }
    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            console.log(a, '- skaicius yra ne pirmis');
            return false;
        }
    }
    console.log(a, '-skaicius yra pirmis');
    return true;
}
let ivestis = pirminisSkaicius(4);
console.log(ivestis);

// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu -
// "(XXX) XXX-XXXX". (10 taškų)


