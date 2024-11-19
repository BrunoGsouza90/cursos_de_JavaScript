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

    constructor(arrayBolas, palco){

        this.tam = Math.floor ( Math.random() *15 ) + 10
        this.r = Math.floor ( Math.random() * 255 )
        this.g = Math.floor ( Math.random() * 255 )
        this.b = Math.floor ( Math.random() * 255 )
        this.px = Math.floor ( Math.random() * ( larguraPalco - this.tam ) )
        this.py = Math.floor ( Math.random() * ( alturaPalco - this.tam ) )
        this.velx = Math.floor ( Math.random() *2 ) + 0.5
        this.dirx = ( Math.random() * 10 ) > 5 ? 1 : -1
        this.diry = ( Math.random() * 10 ) > 5 ? 1 : -1
        this.palco = palco
        this.arrayBolas = arrayBolas
        this.id = Date.now() + "_" + Math.floor ( Math.random() *  100000000000 )
        this.desenhar()
        this.controle = setInterval( this.controlar, 10 )
        this.eu = document.getElementById( this.id )
        numBola ++
        num_objetos.innerHTML = numBola

    }

    minhaPos(){

        return this.arrayBolas.indexOff(this)

    }

    remover(){

        clearInterval( this.controle )
        bolas = bolas.filter((bola)=>{

            if( bola.id != this.id ){
            
                return bola
            
            }

        })

        this.eu.remove()
        numBola --
        num_objetos.innerHTML = numBola

    }

    desenhar(){

        let div = document.createElement('div')
        div.setAttribute('id', this.id)
        div.setAttribute('class', 'bola')
        div.setAttribute('style', `left: ${this.px}; top: ${this.py}; width: ${this.tam}; height: ${this.tam}; background-color: rgb(${this.r}, ${this.g}, ${this.b})`)
        this.palco.appendChild(div)

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