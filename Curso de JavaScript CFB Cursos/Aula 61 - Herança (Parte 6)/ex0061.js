let carros = document.querySelector('#carros')
let paragrafo = document.createElement('p')
carros.appendChild(paragrafo)
paragrafo.setAttribute('style', 'text-align:center;')
let carro = 0

class Carros{
    constructor(pnome, pportas, pcor, pvelocidade){
        this.nome = pnome
        this.portas = pportas
        this.ligado = 'Não'
        this.velocidade = pvelocidade
        this.cor = pcor
    }

}

class Militar extends Carros{
    constructor(pblindagem, pmunicao, nome, portas, cor, velocidade){
        super(nome, portas, cor = "Vermelho", velocidade = '50')
        this.blindagem = pblindagem
        this.municao = pmunicao
    }

    atirar = ()=>{
        if(this.municao > 0){
            this.municao--
        } else {
            this.municao = 'Sem munição!'
        }
    }

    info(){
        carro += 1
        paragrafo.innerHTML += `<span style="color: green;"><strong>${carro}º Carro:</strong></span><br><br>`
        paragrafo.innerHTML += `Nome: ${this.nome}<br>`
        paragrafo.innerHTML += `Número de portas: ${this.portas}<br>`
        paragrafo.innerHTML += `Ligado: ${this.ligado}<br>`
        paragrafo.innerHTML += `Velocidade: ${this.velocidade} km/h<br>`
        paragrafo.innerHTML += `Cor: ${this.cor}<br>`
        paragrafo.innerHTML += `Munição: ${this.municao}<br>`
        paragrafo.innerHTML += `Blidagem: ${this.blindagem}<br><br>`
    }

    ligar = ()=>{
        this.ligado = 'Sim'
    }

    desligar = ()=>{
        this.ligado = 'Não'
    }

    setCor = (pcor)=>{
        this.cor = pcor
    }

}

let carro1 = new Militar(100, 1, "Tanque")

carro1.atirar()
carro1.atirar()
carro1.ligar()
carro1.desligar()
carro1.info()