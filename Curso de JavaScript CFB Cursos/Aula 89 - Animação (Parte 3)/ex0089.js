let carro = document.getElementById('carro')
let btn_esquerda = document.getElementById('btn_esquerda')
let btn_direita = document.getElementById('btn_direita')
let btn_parar = document.getElementById('btn_parar')

carro.style.position = 'relative'
carro.style.left = '0px'
carro.style.width = '100px'

let animacao = null
let tamanhoMaximo = window.innerWidth - 30 - parseInt(carro.style.width)

let mover = (direcao)=>{

    if(direcao == 1){

        if(parseInt(carro.style.left) <= tamanhoMaximo){

            carro.style.left = `${parseInt(carro.style.left) + (10 * direcao)}px`

            animacao = setTimeout(mover, 20, direcao)

        } else {

            mover(-1)

        }

    } else if(direcao == -1){
        
        if(parseInt(carro.style.left) >= 18){

            carro.style.left = `${parseInt(carro.style.left) + (10 * direcao)}px`

            animacao = setTimeout(mover, 20, direcao)

        } else {

            clearTimeout(animacao)
            mover(1)

        }

    }

}

btn_esquerda.addEventListener('click', ()=>{

    clearTimeout(animacao)
    carro.style.background = 'green'
    mover(-1)


})

btn_direita.addEventListener('click', ()=>{

    clearTimeout(animacao)
    carro.style.background = 'green'
    mover(1)
    
})

btn_parar.addEventListener('click', ()=>{

    clearTimeout(animacao)
    carro.style.background = 'red'

})

window.addEventListener('resize', ()=>{

    tamanhoMaximo = window.innerWidth - parseInt(carro.style.width)
    
})