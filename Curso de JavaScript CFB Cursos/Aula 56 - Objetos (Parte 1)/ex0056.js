let caixa = document.querySelector('#caixa')
let paragrafo = document.createElement('p')
caixa.appendChild(paragrafo)
paragrafo.setAttribute('style', 'text-align: center;')

class Pessoa{
    constructor(pnome){
        this.nome = pnome
    }
}

let p1 = new Pessoa("Bruno")
let p2 = new Pessoa("Asdervardson")
let p3 = new Pessoa("Brenasclartel")

paragrafo.innerHTML = `Nome: ${p1.nome}<br>`
paragrafo.innerHTML += `Nome: ${p2.nome}<br>`
paragrafo.innerHTML += `Nome: ${p3.nome}<br>`