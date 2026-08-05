// Maps

// Características

/*
1. Al igual que los Sets, no acepta duplicados.
2. Se puede designar cualquier dato primitivo como key y valor.
*/

// Declaración
let myMap = new Map()
console.log(myMap)

// Inicialización
myMap = new Map([
    ['name', `JL`],
    ['nubia', true],
    ['age', 16]
])
console.log(myMap)

// Métodos y propiedades

// set (Actualiza un dato si ya existe una llave para él, de otro modo, crea uno nuevo)
myMap.set(67, ['hola', 'adios'])
console.log(myMap)

myMap.set('name', 'Justin')
console.log(myMap)

// get (En el argumento va una key que se busca, lo que devuelve es el valor o undefinded si no existe)
console.log(myMap.get(67))

console.log(myMap.get('gay'))

// has (lo mismo que en sets)
console.log(myMap.has('name'))

console.log(myMap.has(1))

// delete (igual que en sets)
myMap.delete('nubia')
console.log(myMap)

// keys && values && entries
console.log(myMap.keys())

console.log(myMap.values())

console.log(myMap.entries())

// clear (delete global)
myMap.clear()
console.log(myMap)