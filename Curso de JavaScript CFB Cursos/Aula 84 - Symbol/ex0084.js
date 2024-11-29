let s1 = Symbol()
let s2 = Symbol()
let s3 = Symbol.for('Bruno')
let s4 = Symbol.for('Bruno')
let s5 = Symbol.for('Lucas')

console.log(s1)
console.log(s2)

/* Símbolos tem valores únicos eles nunca serão iguais. */
console.log(s1 == s2) // false

/* Aqui será retornado verdadeiro (true) pois os dois símbolos tem os indentificadores globais iguais. */
console.log(s3 == s4)

console.log(Symbol.keyFor(s1)) // undefined pois o símbolo não tem um indentificador global.
console.log(Symbol.keyFor(s4))
console.log(Symbol.keyFor(s5))