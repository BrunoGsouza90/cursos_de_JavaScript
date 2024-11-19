let palco = document.querySelector('#palco')
let num_objetos = document.querySelector('#num_objetos')
let txt_qtde = document.querySelector('#txt_qtde')
let btn_add = document.querySelector('#btn_add')
let btn_remover = document.querySelector('#btn_remover')

/* Aqui estamos visualizando a largura e altura vísivel do espaço de um determinado elemento. */
let larguraPalco = palco.offsetWidth 
let alturaPalco = palco.offsetHeight

let bolas = []
let numBola = 0

class Bola{
    constructor(){
        this.tam = Math.floor(Math.random()*15)+10
        this.r = Math.floor(Math.random()*255)
        this.g = Math.floor(Math.random()*255)
        this.b = Math.floor(Math.random()*255)
        this.px = Math.floor(Math.random()*(larguraPalco - this.tam))
        this.py = Math.floor(Math.random()*(alturaPalco - this.tam))
    }
}

window.addEventListener('resize', (evento)=>{

    larguraPalco = palco.offsetWidth 
    alturaPalco = palco.offsetHeight
    
})

btn_add.addEventListener('click', (evento)=>{
    let qtde = txt_qtde.value
    for(let i = 0; i < qtde; i++){

    }
})

btn_remover.addEventListener('click', (evento)=>{
    bolas.forEach((elemento, passo)=>{
        
    })
})