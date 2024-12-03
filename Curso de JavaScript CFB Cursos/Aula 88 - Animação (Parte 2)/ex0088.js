let carro = document.getElementById('carro')
let btn_esquerda = document.getElementById('btn_esquerda')
let btn_direita = document.getElementById('btn_direita')
let btn_parar = document.getElementById('btn_parar')

let animacao = null

carro.style.position = 'relative'
carro.style.left = '0px'

let mover = (direcao)=>{

    carro.style.left = `${parseInt(carro.style.left) + (10 * direcao)}px`

}

btn_esquerda.addEventListener('click', ()=>{

    clearInterval(animacao)
    animacao = setInterval(mover, 40, -1)

})

btn_direita.addEventListener('click', ()=>{

    clearInterval(animacao)
    animacao = setInterval(mover, 40, 1)
    
})

btn_parar.addEventListener('click', ()=>{

    clearInterval(animacao)

})