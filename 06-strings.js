// Concatenation
let myName = 'JL'
let greetings = 'Hi, ' + myName + '.'

console.log(greetings)

// Lenght
console.log(greetings.length)

// Character access 
console.log(greetings[0])
console.log(greetings[1])
console.log(greetings[4])

// Common methods (funciones)
console.log(greetings.toUpperCase()) // Mays

console.log(greetings.toLowerCase()) // Mins

console.log(greetings.indexOf('JL')) // Where is?
console.log(greetings.indexOf('no')) 

console.log(greetings.includes('JL')) // Is there?
console.log(greetings.includes('Miguel'))

console.log(greetings.slice(0 , 4)) // A slice of the string
console.log(greetings.slice(0 , 10))

console.log(greetings.replace('JL' , 'Sr-JL')) // Literally replace, bruh
console.log(greetings.replace('.' , '!'))

// Template literals
let message = `Hello,
suck it.` 

console.log(message) // Lined string

console.log(`Hello, ${myName}.`) // String inside other string

let myAge = 16

console.log(`Hello, ${myName}. Your age is: ${myAge}.`)
