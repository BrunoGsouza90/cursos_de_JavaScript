let carro = document.getElementById('carro')
let btn_esquerda = document.getElementById('btn_esquerda')
let btn_direita = document.getElementById('btn_direita')

carro.style.position = 'relative'
carro.style.left = '0px'

btn_esquerda.addEventListener('click', ()=>{

    let posicao = parseInt(carro.style.left)
    posicao -= 10
    carro.style.left = `${posicao}px`

})

btn_direita.addEventListener('click', ()=>{

    let posicao = parseInt(carro.style.left)
    posicao += 10
    carro.style.left = `${posicao}px`
    
})