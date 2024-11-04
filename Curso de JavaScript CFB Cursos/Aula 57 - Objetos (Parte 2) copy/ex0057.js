let caixa = document.querySelector('#caixa')
let paragrafo = document.createElement('p')
caixa.appendChild(paragrafo)
paragrafo.setAttribute('style', 'text-align: center;')

class Carro{
    constructor(pnome, ptipo){
        this.nome = pnome
        if(ptipo == 1){
            this.tipo = "Esportivo"
            this.velmax = 300
        }else if(ptipo == 2){
            this.tipo = "Utilitário"
            this.velmax = 120
        }else if(ptipo == 3){
            this.tipo = 'Passeio'
            this.velmax = 160
        }else{
            this.tipo = 'Militar'
            this.velmax = 180
        }
    }

    info(){

        paragrafo.innerHTML += `Nome: ${this.nome}<br>`
        paragrafo.innerHTML += `Tipo: ${this.tipo}<br>`
        paragrafo.innerHTML += `Velocidade Máxima: ${this.velmax}km/h.<br><br>`

    }
}

let p1 = new Carro("Rapidão", 1)
let p2 = new Carro("SuperLuxo", 2)
let p3 = new Carro("Bombadão", 3)
let p4 = new Carro("Carrego tudo", 4)

p1.info()
p2.info()
p3.info()
p4.info()