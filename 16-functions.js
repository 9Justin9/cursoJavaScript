// Functions
function myFirstFunction() {
    console.log(`Primera función mi gente, singamos.`);
};

for (let i = 0; i <= 5; i++) {
    myFirstFunction();
};

function mySecondFunction (name) {
    console.log (`Hola, ${name}, singamos.`);
};

let i = 0;
while (i <= 3) {
    mySecondFunction("nigger");
    i++;
};

// Funciones anónimas

const myThirdFunction = function (name) {
    console.log(`I've been in the hills fucking dudes like ${name}.`);
};

myThirdFunction("Victor");

// Arrow functions
let myFourthFunction = (name) => {
    console.log(`Does ${name} know?`);
};

myFourthFunction("this nigga");

let myFifthFunction = (name) => console.log(`Does ${name} know that this is my fifth function?`);

myFifthFunction("he");

/*
Si una arrow function solo ejecuta una línea de código,
se puede escribir en una única línea.
*/

// Parámetros
function mySum (a, b) {
    console.log (a + b);
};

mySum ();
mySum (5);
mySum (5, 10);

// Defaults
function myDefSum (a = 0, b = 0) {
    console.log (a + b);
};

myDefSum ();
myDefSum (5);
myDefSum (5, 10);

// Retorno de valores
function multiplicar (a = 0, b = 0) {
    return (a * b);
};

multiplicar (5, 10);
console.log(multiplicar (5, 10));

let multiplicación = multiplicar (5, 10);
console.log (multiplicación);

// Funciones de orden superior (función dentro de otra función)
function superior (inferior, name) {
    inferior (name);
};

superior (mySecondFunction, "Cotopaxi");

// forEach
let myArray = []
myArray.push(69, "Niggadick", true, undefined)

myArray.forEach((value) => console.log(value))

let myMap = new Map ([
    [1, "Hola"],
    [2, "Adiós"],
    [3, "Nubia"]
]);

myMap.forEach(function (value) {
    console.log(value);
});

let mySet = new Set ([true, false, "Issac", "Ussac", 67, 67]);

mySet.forEach((plo) => console.log(plo));