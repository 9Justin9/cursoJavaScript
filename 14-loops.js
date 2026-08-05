// loops

// for (indice inicio del bucle; condicion; comportamiento tras una vuelta)
for (let i = 1; i < 10; i++) {
    console.log(`Wassup my nigga number ${i}`);
};

const numbers = [1, 2, 3, 4, 5];

for (i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`);
};

for (i = 2; i >= 0; i--) {
    console.log(`I am about to blow in ${numbers[i]} seconds.`);
};

// while (condicion)
i = 0
while (i < 5) {
    console.log(`Hola ${i}`);
    i++;
}; 

/* 
Bucle infinito: while (true) {}
*/

// do while
i = 6;
do {
    console.log(`Nate Higgerson ${i}`);
    i++;
} while (i < 5);

i = 0;
do {
    console.log(`Nate Higgerson ${i}`);
    i++;
} while (i < 5);

// for of
let myArray = [1, 2, 3, 4, 5];

for (let valor of myArray) {
    console.log(valor);
};

let mySet = new Set([6, 7, 8, 9, 10]);

for (valor of mySet) {
    console.log(valor);
};

let myMap = new Map ([
    [1, `Hola`],
    [2, `Nubia`],
    [3, `Como estas?`]
]);
for (valor of myMap) {
    console.log(valor);
};

let myRacistString = "EFN";
for (valor of myRacistString) {
    console.log(valor);
};

// Buenas practicas

// break && continue

/*
POV: No quieres que por el culo te la hinquen
(Hacemos un continue para que el bucle
no se ejecute cuando i sea igual a 5 xd).

Luego el break para parar el bucle, igual
que con switches. Un saludo.
*/

for (i = 0; i <= 10; i++) { 
    if (i == 5) {
        continue;
    } else if (i == 8) {
        break;
    };
    console.log(`Continuando profe ${i}`);
};

do {
    var minString = string.toLowerCase();
    console.log(minString)
} while (minString.includes(vocales) == true) {
    for (let vocal of vocales) {
        if (minString.includes(vocal) == true) {
            suma++;
        };
    };
    } console.log(suma);