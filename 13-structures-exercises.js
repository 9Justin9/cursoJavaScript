// 1. Crea un array que contenga 5 animales.
let animales = [`tortuga`, `canguro`, `miguelangel`, `camello`, `gorila`];
console.log(animales);

// 2. Añade 2 más. Uno al principio y otro al final.
animales.unshift(`girafa`);
console.log(animales);

animales.push(`rata`);
console.log(animales);

// 3. Elimina el que se encuentra en tercera pocisión.
animales.splice(2, 1);
console.log(animales);

// 4. Crea un set que almacene 5 libros.
let libros = new Set([`Berserk`, `La dama del alba`, `Dosis letal`, `Dragon Ball`, `Rebelión en la granja`])
console.log(libros)

// 5. Añade 2 más. Uno de ellos repetido.
libros.add(`Black Water`)

console.log(libros)

libros.add(`Berserk`)
console.log(libros) // Jaja sos re troll

// 6. Elimina uno concreto a tu elección.
libros.delete(`La dama del alba`)
console.log(libros)

// 7. Crea un map que asocie el número del mes a su nombre.
let meses = new Map([
    [1, `Enero`],
    [2, `Febrero`],
    [3, `Marzo`],
    [4, `Abril`],
    [5, `Mayo`],
    [6, `Junio`],
    [7, `Julio`],
    [8, `Agosto`],
    [9, `Septiembre`],
    [10, `Octubre`],
    [11, `Noviembre`],
    [12, `Diciembre`]
])
console.log(meses)

// 8. Comprueba si el mes número 5 existe e imprime su valor.
let existeElMes5 = meses.has(5)
console.log(existeElMes5)

if (existeElMes5 = true) {
    console.log(meses.get(5))
} else {
    console.log(`El mes 5 no existe`)
}

// 9. Añade al mapa una key con un array que almacene los meses del verano.
meses.set(`mesesVerano`, [`Junio`, `Julio`, `Agosto`])
console.log(meses)

// 10. Crea un array, transfórmalo a un set y almacénalo en un map.
let Pedro = [[1, `hola`], [2, `bas`], [3, `king`], [4, `jerk`], [5, `off`]]
console.log(Pedro)

let Javier = new Set(Pedro)
console.log(Javier)

let Samuel = new Map(Javier)
console.log(Samuel)