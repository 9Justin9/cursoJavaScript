// Sets

/*
Se diferencian de los arrays porque:
1. No tienen indice de los datos, registra un hash para cada uno.
2. No admite duplicados.
*/

// Declaración
let mySet = new Set()
console.log(mySet)

// Inicialización
mySet = new Set([`JL`, "09", 'niggers', "miguelAngelGay"])
console.log(mySet)

// Métodos comúnes

// add && delete
mySet.add(941) // Add es el equivalente de push de array en set.
console.log(mySet)

mySet.delete(`09`) // Delete no es equivalente a pop de array porque
console.log(mySet) /* solamente elimina el dato seleccionado en el argumento
y si esta vacío, no hace nada, no es como pop que requiere que esté vacío para
hacer su función de borrar el último dato */

// has (boolean)
console.log(mySet.has('09'))

console.log(mySet.has(`JL`))

// size (propiedad)
console.log(mySet)
console.log(mySet.size)

// Convertir set a array
mySet = Array.from(mySet)
console.log(mySet)

// Convertir array a set
let myNewSet = []
myNewSet = new Set(mySet)
console.log(myNewSet)