var n = 0
var max = 1000

while(n < max){
    console.log(`CFB Cursos - ${n}`)
    if(n > 10){
        break
    }
    n++
}

var n = 0
var pares = 0
var impares = 0

for(let i = n;i < max; i++){
    if(i % 2 == 0){
        pares++
    }
}

console.log(`Quantidade de pares = ${pares}`)

for(let i = n; i < max; i++){
    if(i % 2 == 0){
        continue
    }
    impares++
}

console.log(`Quantidade de impares = ${impares}`)