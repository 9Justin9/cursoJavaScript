// Operadores

// Operadores aritméticos

let a = 10
let b = 5

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Producto
console.log(a / b) // Cociente
console.log(a % b) // Módulo
console.log(a ** b) // Exponente

a++
console.log(a) // Incremento

b---
console.log(b) // Decremento

// Operadores de asignación

let num = 5
console.log(num)

num += 2
console.log(num)

num -= 2
console.log(num)

num *= 2
console.log(num)

num /= 2
console.log(num)

num **= 2
console.log(num)

num %= 2
console.log(num)

// Operadores de comparación

console.log(7 <        a)
console.log(b > a)
console.log(a == b)
console.log( a >= 5)
console.log(b <= 9)
console.log(4 == b) // Igualdad por valor (==)
console.log('4' == b)
console.log(4 === b) // Igualdad por valor y tipo (===)
console.log('4' === b)
console.log(4 != b) // Diferencia
console.log(5 != b)

/*
Truthy: Natural numbers except 0, non-hollow strings, true boolean
y
Falsy: 0, hollow strings, false boolean, 0n, null, undefined, NaN, 
*/

console.log(0 == '')
console.log(0 === '')
console.log(0 == false)
console.log(0 == true)
console.log(0 == 'Batukam')
console.log(undefined == null)
console.log(undefined == false)
console.log(null == false)
console.log(undefined == 0)
console.log(null == 0)
console.log(1 == true)
console.log("dada" == true)

// Operadores logicos (NO PUEDO PONER TILDES, MALDITO TECLADO INGLES DEL DIABLO)

// and (&)
console.log(10 < 11 && 5 > 4)
console.log(10<11 && 10<9)
console.log(0 == '' && 10!=BigInt)

// or (||)
console.log(9==9||9==0)
console.log(1===0+1||10/2>2)
console.log(1>2||4===8)

// not (!)
console.log(!(10 < 11 && 5 > 4))
console.log(!(1>2||4==8))

// Operadores ternarios (Un SI en excel, lol, to' facil abe pisha no ni na abe. Se cumple (boolean logic): "?", output: ":" para separar respuesta si es true y si es false)
const isRaining = false
isRaining ? console.log("It's rainning") : console.log("It's not rainning")
!(isRaining) ? console.log("It's rainning") : console.log("It's not rainning")