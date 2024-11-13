let paragrafo = document.getElementsByTagName('p')[0]

class Base{
    constructor(){

        /* Linha 89. */
        if(this.constructor === Base){
            window.alert('Está classe não pode ser instânciada!')
            throw new TypeError("Está classe não pode ser instânciada!")
        }

        /* Linha 49. */
        if(this.ligar === undefined){
            window.alert("É obrigatório implementar o método ligar!")
            throw new TypeError("É obrigatório implementar o método ligar!")
        }

        /* Linha 60. */
        if(this.desligar === undefined){
            window.alert("É obrigatório implementar o método desligar!")
            throw new TypeError("É obrigatório implementar o método desligar!")
        }

        this.rodas = 4
        this.portas = 4
        this.ligado = false
    }
}

class Carro extends Base{
    constructor(ptipo, pturbo){
        super()
        this.turbo =  new Turbo(pturbo)
        if(ptipo == 1){
            this.velMax = 120
            this.nome = 'Normal'
        } else if(ptipo == 2){
            this.velMax = 160
            this.nome = 'Esportivo'
        } else if(ptipo == 3){
            this.velMax = 200
            this.nome = 'Super Esportivo'
        }
        this.velMax += this.turbo.potencia
    }

    info(){
        paragrafo.innerHTML += `Nome: ${this.nome}.<br>`
        paragrafo.innerHTML += `Velocidade Máxima: ${this.velMax}.<br>`
        paragrafo.innerHTML += `Turbo: ${this.turbo.potencia}.<br>`
        paragrafo.innerHTML += `Ligado/Desligado: ${this.ligado ? "Sim" : "Não"}.<br>`
        paragrafo.innerHTML += `Quantidade de rodas: ${this.rodas}.<br>`
        paragrafo.innerHTML += `Quantidade de portas: ${this.portas}.<br><br>`
    }

    // ligar(){

    // }

    // desligar(){

    // }

}

class Turbo{
    constructor(e){
        if(e == 1){
            this.potencia = 50
        } else if(e == 2){
            this.potencia = 75
        } else if(e == 3){
            this.potencia = 100
        } else{
            this.potencia = 0
        }
    }
}

class CarroEspecial extends Carro{
    constructor(tipo, turbo, nome, velMax){
        super(tipo = 1, turbo = 3, nome, velMax)
        this.nome = "Carro especial"
        this.velMax = 300 + this.turbo.potencia
    }

    info(){
        paragrafo.innerHTML += `<strong>Outros Modelos:</strong> <br>`
        paragrafo.innerHTML += `Nome: ${this.nome}.<br>`
        paragrafo.innerHTML += `Velocidade Máxima: ${this.velMax}.<br>`
        paragrafo.innerHTML += `Turbo: ${this.turbo.potencia}.<br>`
        paragrafo.innerHTML += `Ligado/Desligado: ${this.ligado ? "Sim" : "Não"}.<br>`
        paragrafo.innerHTML += `Quantidade de rodas: ${this.rodas}.<br>`
        paragrafo.innerHTML += `Quantidade de portas: ${this.portas}.<br><br>`
    }
}

let c1 = new Carro(1, 0)
let c2 = new Carro(1, 0)
let c3 = new CarroEspecial(3)
// let c4 = new Base()

c1.info()
c2.info()
c3.info()