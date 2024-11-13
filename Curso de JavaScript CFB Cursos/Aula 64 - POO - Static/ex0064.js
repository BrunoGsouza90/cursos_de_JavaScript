let paragrafo = document.getElementsByTagName('p')[0]

class Npc{

    static alerta = false

    constructor(penergia){
        this.energia = penergia
    }

    info(){
        paragrafo.innerHTML += `Energia: ${this.energia}.<br>`
        paragrafo.innerHTML += `Alerta: ${Npc.alerta == true ? "Sim" : "Não"}.<br><br>`
    }

    static alertar(){
        Npc.alerta = true
    }
}

let npc1 = new Npc(100, true)
let npc2 = new Npc(80, false)
let npc3 = new Npc(30, true)

Npc.alertar()

npc1.info()
npc2.info()
npc3.info()