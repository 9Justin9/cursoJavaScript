// Array: Estructura de dato que funciona como una variable con capacidad de almacenar varios datos.

// Declaración
let myArray = [] // Método idóneo
console.log(myArray)

let myArray2 = new Array() // Método más ambiguo
console.log(myArray2)

// Inicializacion
myArray = [1]
console.log(myArray) // output: [ 1 ]

myArray2 = new Array (1)
console.log(myArray2) // output: [ <1 empty item> ]

/*
La diferencia es que con la primera sintaxis (idónea), al escribir un número, JS interpreta que se añade al Array un dato de tipo número,
mientras que si se utiliza la sintaxis "let x = new Array()" (más ambigua), JS interpreta que se quiere añadir n slots.
*/

myArray = [1, 2, 7]
console.log(myArray)

myArray2 = new Array (4)
console.log(myArray2)

myArray2[0] = 3

myArray2[1] = 2

myArray2[2] = 1

myArray2[3] = `Boom`

console.log(myArray2)

// Métodos comunes
myArray = []
console.log(myArray)
console.log(`checkpoint 1`)

// Push && pop (funciones)
myArray.push('Victor') // Añande el dato del argumento al último slot del array.
console.log(myArray)

console.log(myArray.push("please")) // Si se imprime un push, devuelve el indice en el que actúa
console.log(myArray)                // y luego el array ya modificado.

console.log('pop:')
console.log(myArray.pop(`Victor`)) // Remueve y devuelve el último dato del array.
console.log(myArray)

// shift && unshift (funciones)
console.log(myArray2)

console.log(myArray2.shift()) // Remueve y devuelve el primer dato del array.
console.log(myArray2)

console.log (myArray2.unshift('Bus')) // Añade los datos indicados al principio del array.
console.log(myArray2)

// lenght (propiedad)
console.log(myArray.length)
console.log(myArray2.length)

// clear
myArray = [] // Recomendado
console.log(myArray)

myArray2.length = 0 // Ambiguo
console.log(myArray2)

// slice
myArray = [1, 2, 3, 4, 5]
console.log(myArray)

console.log(myArray.slice(0)) // myArray.slice(0) devuelve el array entero porque empieza en el primer dato y no termina.
console.log(myArray.slice(1)) // myArray.slice(n) devuelve todo el array desde n porque ahí empieza y no termina.
console.log(myArray.slice(0, 1)) // myArray.slice(a, b) devuelve la tajada del array que va desde el dato a hasta el dato b (sin contarlo).

console.log(myArray)

// splice
myArray2 = ['ah', `apuñalando`, "mano", true, 69]
console.log(myArray2)

console.log(myArray2.splice(0, 1)) // myArray2.splice(0, 1) elimina y devuelve el primer dato del array.
console.log(myArray2)

myArray2 = ['ah', `apuñalando`, "mano", true, 69]
console.log(myArray2.splice(1, 4)) // console.log(myArray2.splice(a, b)) elimina y devuelve los datos entre a y b sin contar b del array.
console.log(myArray2)

myArray2 = ['ah', `apuñalando`, "mano", true, 69]
console.log(myArray2.splice(0, 2, 2)) // myArray2.splice(a, b, c) elimina y devuelve los datos entre a y b sin contar b y los sustituye por c.
console.log(myArray2)