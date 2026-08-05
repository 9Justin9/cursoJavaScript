// if
let age = 16
console.log(age)
if (age == 16) {
    console.log(`You're 16 years old, my nigga`)
}

// (if) else
age = 17
console.log(age)
if (age == 16) {
    console.log(`You're 16 years old, my nigga`)
} else {
    console.log(`You're not 16 years old, my nigga`)
}

// else if
age = 14
console.log(age)
if (age == 14) {
    console.log(`Tienes 14, activa cam`)
} else if (age < 18) {
    console.log(`Hmm, menores, que bueno`)
} else if (age > 18) {
    console.log(`Hmm, mayores, que bueno`)
} else {
    console.log("Tienes 18, no actives cam")
}

// Operador ternario (condición ? valor si es true : valor si es false) (se puede utilizar en vez de un if-else simple)
age = 17
console.log(age)
const message = (age >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad')
console.log(message)

// switch (se puede utilizar en vez de un if-else if-else simple) (una sola variable se compara con diferentes valores)
var day = 1
var dayName
switch (day) {
    case 1:
        dayName = 'Lunes'
        break
    case 2:
        dayName = 'Martes'
        break
    case 3:
        dayName = 'Miércoles'
        break
    case 4:
        dayName = 'Jueves'
        break
    case 5:
        dayName = 'Viernes'
        break
    case 6:
        dayName = 'Sábado'
        break
    case 7:
        dayName = 'Domingo'
        break
    default:
        dayName = 'Día no válido'
} console.log(dayName)