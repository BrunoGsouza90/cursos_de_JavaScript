function* cores(){
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

var itc = cores()

console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)

function* perguntas(){
    var nome = yield 'Qual seu nome?'
    var esporte = yield 'Qual seu esporte favorito?'
    return `Seu nome é ${nome} e seu esporte favorito é ${esporte}!`
}

var itc = perguntas()

console.log(itc.next('').value)
console.log(itc.next('Bruno').value)
console.log(itc.next('Skateboard').value)

function* contador(){
    let i = 0
    while(true){
        yield i++
    }
}

var itc = contador()

console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)

console.log('')

function* contador(){
    let i = 0
    while(true){
        yield i++
        if(i > 5){
            break
        }
    }
}

var itc = contador()

for(let c of itc){
    console.log(c)
}