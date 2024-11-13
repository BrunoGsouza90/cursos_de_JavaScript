let paragrafo = document.getElementsByTagName('p')[0]

let Nave = function(penergia){
    this.energia = penergia
    this.disparos = 100
}

let n1 = new Nave('Decolar')

console.log(Nave)
console.log(n1)
console.log(`Energia: ${n1.energia}.\nDisparos: ${n1.disparos}.`)

Nave.prototype.vidas = 3

console.log(`Vidas: ${n1.vidas}.`)

Nave.prototype.disparar = function(){
    if(this.disparos > 0){
        this.disparos--
    }
}

n1.disparar()
console.log(`Disparos: ${n1.disparos}.`)