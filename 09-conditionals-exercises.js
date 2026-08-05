// 1. Imprime tu nombre si una variable toma su valor
let name = 'Justin';
if (name == 'Justin') {
    console.log('Your name is Justin.');
} else {
    console.log(`Your name isn't Justin.`);
};

// 2. Imprime un mensaje si el usuario y contraseña son correctos
let user = 'JL';
let password = '0412';
if (user == 'JL' && password == '0412') {
    console.log('Login successful.');
    console.log()
} else {
    console.log("Login failed.");
};

// 3. Verifica si un número es positivo, negativo o cero
let num = 0;
if (num < 0) {
    console.log('The number is negative.');
} else if (num > 0) {
    console.log('The number is positive.');
} else {
    console.log('The number is 0.');
};

// 4. Verifica si una persona es mayor o igual de 18 años e indica cantos años le faltan para ser mayor de edad
let edad = 17;
if (edad >= 18) {
    console.log('You are an adult.');
} else {
    let espera = 18 - edad;
    if (espera == 1) {
        console.log(`You are under age, so you have to wait 1 year more.`);
    } else {
         console.log(`You are under age, so you have to wait ${espera} years more.`);
    };
};

// Revisión de Disney:
edad = 16;
console.log(edad);
if (edad >= 18) {
    console.log('You are an adult.');
} else {
    let espera = 18 - edad;
     console.log(espera == 1 ? 'You are under age, so you have to wait 1 year more.' : `You are under age, so you have to wait ${espera} years more.`);
};

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad de una persona
edad = 18;
legal = (edad >= 18 ? 'Adulto.' : 'Menor.');
console.log(legal);

// 6. Muestra la estación del año dependiendo del mes
let mes = 'October';
console.log(mes);
if (mes == 'December') {
    console.log('Winter.');
} else if (mes == 'January') {
    console.log('Winter.');
} else if (mes == 'February') {
    console.log('Winter.');
} else if (mes == 'March') {
    console.log('Spring.');
} else if (mes == 'April') {
    console.log('Spring.');
} else if (mes == 'May') {
    console.log('Spring.');
} else if (mes == 'June') {
    console.log('Summer.');
} else if (mes == 'July') {
    console.log('Summer.');
} else if (mes == 'August') {
    console.log('Summer.');
} else if (mes == 'September') {
    console.log('Autumn.');
} else if (mes == 'October') {
    console.log('Autumn.');
} else if (mes == 'November') {
    console.log('Autumn.');
} else {
    console.log('No valid month selected.');
};

// 7. Muestra el número de días que tiene un mes dependiendo del valor de la variable "mes" anteriormente creada
mes = 'February';
console.log(mes);
if (mes == 'January') {
    console.log(31);
} else if (mes == 'February') {
    console.log(28);
} else if (mes == 'March') {
    console.log(31);
} else if (mes == 'April') {
    console.log(30);
} else if (mes == 'May') {
    console.log(31);
} else if (mes == 'June') {
    console.log(30);
} else if (mes == 'July') {
    console.log(31);
} else if (mes == 'August') {
    console.log(31);
} else if (mes == 'September') {
    console.log(30);
} else if (mes == 'October') {
    console.log(31);
} else if (mes == 'November') {
    console.log(30);
} else if (mes == 'December') {
    console.log(31);
} else { 
    console.log('No valid month selected');
};

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma seleccionado (español, inglés, francés, etc.)
let language = 'español';
let saludo;
switch (language) {
    case 'español' :;
        saludo = 'Hola.';
        break;
    case 'english' :;
        saludo = 'Hello.';
        break;
    case 'deutsch' :;
        saludo = 'Hallo.';
    default :;
        saludo = 'No valid language selected.';
} console.log(saludo);

// 9. Usa un switch para hacer de nuevo el ejercicio 6
mes = 'October';
var season;
switch (mes) {
    case 'January' :;
    case 'February' :;
    case 'December' :;
        season = 'Winter.';
        break;
    case 'March' :;
    case 'April' :;
    case 'May' :;
        season = 'Spring.';
        break;
    case 'June' :;
    case 'July' :;
    case 'August' :;
        season = 'Summer.';
        break;
    case 'September' :;
    case 'October' :;
    case 'November' :;
        season = 'Autumn.';
        break;
    default :;
        season = 'No valid month selected.';
} console.log(season);

// 10. Usa un switch para hacer de nuevo el ejercicio 7
mes = 'June';
var days;
switch (mes) {
    case 'November' :;
    case 'September' :;
    case 'April' :;
    case 'June' :;
        days = 30;
        break;
    case 'January' :;
    case 'March' :;
    case 'May' :;
    case 'July' :;
    case 'August' :;
    case 'October' :;
    case 'December' :;
        days = 31;
        break;
    case 'February' :;
        days = 28;
        break;
    default :;
        days = 'No valid month selected.';
} console.log(days);
