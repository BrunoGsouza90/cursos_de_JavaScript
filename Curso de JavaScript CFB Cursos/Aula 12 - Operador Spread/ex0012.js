let n1 = [10,20,30]
let n2 = [11,22,33,44,55]
let n3_type = typeof([n1])
let n4_type = typeof([...n1])
let n3 = [n1]
let n4 = [...n1]
let n5 = [n1, n2]
let n6 = [...n1, ...n2]
const jogador1 = {nome: 'Bruno', energia: 100, vidas: 3, magia: 150}
const jogador2 = {nome: 'Bruce', energia: 100, vidas: 5, velocidade: 80}
const jogador3 = {...jogador1,...jogador2}

const soma = (v1,v2,v3)=>{
    return v1 + v2 + v3
}

let valores = [1,5,4]


console.log(`n1 = ${n1}`)
console.log(`n2 = ${n2}`)
console.log(`n3_type = ${n3_type}`)
console.log(`n4_type = ${n4_type}`)
console.log(`n3 = ${n3}`)
console.log(`n4 = ${n4}`)
console.log(`n5 = ${n5}`)
console.log(`n6 = ${n6}`)
console.log(`jogador1 = ${JSON.stringify(jogador1)}`)
console.log(`jogador2 = ${JSON.stringify(jogador2)}`)
console.log(`jogador3 = ${JSON.stringify(jogador3)}`)
console.log(`soma = ${soma(1,5,4)}`)
console.log(`soma = ${soma(valores)}`)
console.log(`soma = ${soma(...valores)}`)


const objs1 = window.document.getElementsByTagName(`div`)
console.log(objs1)

const objs2 = [...window.document.getElementsByTagName(`div`)]
console.log(objs2)

objs2.forEach(element => {
    element.innerHTML = "Curso"
});