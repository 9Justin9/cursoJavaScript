// 1. Crea una función que reciba dos números y que devuelva la suma.
let sumar = (a = 0, b = 0) => (a + b); // No  hace falta escribir return

let primeraSuma = sumar (5, 62);
console.log(primeraSuma);

let sumar2 = (a = 0, b = 0) => { // Con return
    let resultado = a + b;
    return resultado;    
};

console.log(sumar2(5, 62));

// 2. Crea una función reciba un array de números y devuelva el mayor de ellos.
var arrayNúmeros = [1, 2, 4, 3, 5, 7, 9, 2, 1];
var elementoAnterior = null;

function númeroMayor () {
    for (var elementoActual of arrayNúmeros) {
        if (elementoAnterior === null) {
            elementoAnterior = elementoActual;
        } else if (elementoActual < elementoAnterior) {
            continue;
        } else if (elementoAnterior == elementoActual) {
            continue;
        } else if (elementoActual > elementoAnterior) {
            elementoAnterior = elementoActual;
        };
    } return(elementoAnterior);
};

console.log(númeroMayor());