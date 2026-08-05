// Crea una variable para cada operación aritmética
let a = 1 + 1
console.log(a)
let b = 5 - 1
console.log(b)
let c = 5 * 5
console.log(c)
let d = 5 / 5
console.log(d)
let e = 4 ** 4
console.log(e)
let f = 10 % 5
console.log(f)
let x = a++
console.log(x)
let y = b--
console.log(y)

// Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las variables aritméticas
let g = a
console.log(g)
let h = a += c
console.log(h)
let i = a -= b
console.log(i)
let j = a *= d
console.log(j)
let k = e **= f
console.log(k)
let l = c %= d
console.log(l) 
let m = e /= f
console.log(m) 

// Imprime 5 comparaciones verdaderas con operadores de comparación
console.log("victor" === 'victor')
console.log('dreamyBull' == "dreamyBull")
console.log(10 === 10)
console.log('10' == 10)
console.log(9 <= 10)

// Imprime 5 comparaciones falsas con operadores de comparación
console.log('10' === 10)
console.log(10 > 11)
console.log(10 <= 9)
console.log('amba' == 'tukam')
console.log( 5 != 5)

// Utiliza el operador lógico and
console.log(a == b && c < d)

// Utiliza el operador lógico or
console.log( a === b || c != d)

// Combina ambos operadores lógicos
console.log(a >= b || c != d && e === f)

// Añade alguna negación
console.log(!(a >= b) || c != d && e === f)

// Utiliza el operador ternario
const samuel = true
samuel ? console.log('abaTenat') : console.log('niggerDick')

// Combina operadores aritméticos, de comparación y lógicos
console.log(a % b > c / d || e - f <= g * h && i + 2 != j--)

//  Ejercicio de Sami: Imprimir el tipo de dato de una variable
let cum = 10
console.log(typeof(cum))
