const p_array = window.document.querySelector('#array')
const txt_pequisar = window.document.querySelector('#txt_pesquisar')
const btnReduzir = window.document.querySelector('#btnReduzir')
const resultado = window.document.querySelector('#resultado')

const elementos_array = [1,2,3,4,5]
let anterior = []
let atual = []

p_array.innerHTML = `[${elementos_array}]`

btnReduzir.addEventListener('click', ()=>{
    resultado.innerHTML = elementos_array.reduce((elemento_anterior ,elemento_atual, posicao)=>{
        anterior.push(elemento_anterior)
        atual.push(elemento_atual)
        return elemento_atual + elemento_anterior
    })

    resultado.innerHTML += `<br>Valor anterior: ${anterior}.<br>Valor atual: ${atual}.`
})