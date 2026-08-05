// 1. Crea un bucle que imprima los numeros del 1 al 20
console.log(`FOR`);
for (let i = 1; i <= 20; i++) {
    console.log(i);
};

console.log(`WHILE`);
i = 1
while (i <= 20) {
    console.log(i);
    i++;
};

console.log("DO WHILE");
i = 1;
do {
    console.log(i);
    i++;
} while (i <= 20);

console.log("FOR OF");
i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (let number of i) {
    console.log(number);
};

// 2. Crea un bucle que sume todos los numeros del 1 al 100 y muestre el resultado
console.log("FOR")
let j = 0
for (i = 1, j = 0; i <= 100; i++) {
    j += i;
} console.log(j);

console.log("WHILE");
while (i <= 100) {
    i++;
    j += i;
} console.log(j);

// 3. Crea un bucle que imprima todos los numeros pares entre 1 y 50.
console.log(`FOR`);
for (i = 2; i <= 50; i += 2) {
    if (i > 50) {
        break;
    };
    console.log(i);
};

console.log(`WHILE`);
i = 0;
while (i < 50) {
    i += 2;
    console.log(i);
    if (i > 50) {
        break;
    };
};

// 4. Dado un array de nombres, imprime cada nombre en la consola.
let nombres = [`Justin`, `Samuel`, `Miguel Angel`, `Mario`, `Al-David`];
console.log("FOR OF")
for (let valores of nombres) {
    console.log(valores);
};

// 5. Escribe un bucle que cuente el numero de vocales de un string.
const vocales = ["a", "e", "i", "o", "u"];
var string = `I FUCKING HATE NIGGERS, I LOVE 9/11`;
console.log(`FOR OF`);

i = 0;
let minString = string.toLowerCase();

for (var searchMinString of minString) {
    if (vocales.includes(searchMinString)) {
        i++;
    };
} console.log(i);

// 6. Dado un array de numeros, usa un bucle para multiplicar todos los numeros y mostrar el producto.
let numeros = [1, 2, 3, 4, 5];
var producto = 1;
console.log(`FOR OF`);

for (var i of numeros) {
    producto *= i;
} console.log(producto);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5.
console.log(`FOR`)
for (let i = 1; i <= 10; i++) {
    console.log(i * 5);
};

console.log(`WHILE`)
i = 1
while (i <= 10) {
    console.log(i * 5);
    i++;
};

console.log(`DO WHILE`)
i = 1
do {
    console.log(i * 5);
    i++;
} while (i <= 10);

// 8. Usa un bucle para invertir una cadena de texto.
console.log(`FOR OF`);
i = 1;
let myString = `Bitch fein`;
let myNewString = ``;

for (let value of myString) {
    myNewString = value + myNewString;
} console.log(myNewString);

// 9. Usa un bucle para generar los primeros 10 numeros de la secuencia de Fibonacci
console.log(`WHILE`);
i = 0;
j = 1;
let aux = 0;

while (aux < 22) {
    aux = i; // 0
    i = aux + j; // 1
    j = aux; // 0
    console.log(aux);
};

// 10. Dado un array de numeros, usa un bucle para crear un nuevo array que contenga solo los numeros mayores de 10
console.log(`FOR OF`);
numeros = [1, 2, 3, 4, 5, 6, 6, 8, 12, 14, 16, 18, 20, 30, 100];
var newNumeros = [];

for (var valor of numeros) {
    if (valor > 10) {
        newNumeros.push(valor);
    };
} console.log(newNumeros);