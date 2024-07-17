var num = 10

if(num > 10){
    console.log(`Primeira tentativa: Numeral maior que 10!`)
}

var num = 100

if(num > 10){
    console.log(`Segunda tentativa: Numeral maior que 10!`)
}

var num = 5

if(num > 10){
    console.log(`Terceira tentativa: Numeral é maior que 10!`)
} else {
    console.log('Terceira tentativa: Numeral menor que 10!')
}

var comida = 'Hamburguer'

if(comida == 'Hot Dog'){
    console.log(`Minha comida predileta é Hot Dog!`)
} else if(comida == 'Strogonoff'){
    console.log(`Minha comida predileta é Strogonoff!`)
} else {
    console.log(`Minha comida predileta é ${comida}!`)
}

let energia = 100
let clima = 'sol'

if (energia > 70 && energia == 'sol'){
    console.log(`Vou a praia!`)
}else {
    console.log(`Vou ver netflix em casa!`)
}

console.log("Fim do progama!")