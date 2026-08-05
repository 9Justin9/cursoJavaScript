// 1. Concatena dos strings
const string1 = 'Hello, Viktor. '
const string2 = 'Do you wear wigs?'
console.log(string1 + string2)

// 2. Muestra la longitud de un string
console.log(string1.length)

// 3. Muestra el primer y ultimo carácter de un string
console.log(string2[0]) // Primero
console.log(string2[string2.length - 1]) // Último
console.log(string2.length - 1) // Se pone -1 porque el índice empieza en 0,
console.log(string2.length)     // entonces el último carácter se encuentra en la posición de la longitud del string menos 1.

// 4. Convierte en mayúsculas y minúsculas un string
console.log(string1.toUpperCase())
console.log(string2.toLowerCase('D')) /* Se puede pasar un argumento a toLowerCase y toUpperCase para convertir solo esa letra,
pero no es muy común, la mayoría de las veces se usa sin argumentos para convertir todo el string. */

// 5. Crea un string en varias líneas
const string3 = `Ayo wassup my nigger,
how you doin'?`
console.log(string3)

// 6. Inserta el valor de una variable en un string
let age = 16
console.log(`${string1}You are ${age} years old.`) // Toma dos, payaso

// 7. Remplaza todos los espacios en blanco de un string por guiones
console.log(string2.replaceAll(' ' , '-'))

// 8. Comprueba si un string contiene una palabra en concreto
console.log(string1.includes('Hello'))

// 9. Comprueba si dos strings son iguales
console.log(string1 == string2)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(string1.length)
console.log(string2.length)
console.log(string1.length == string2.length)

/* Cada vez que se utiliza una funcion y se deja en blanco el espacio del imput,
JS entiende que nos referimos a todo el string, por ejemplo en string1.toUpperCase() */
