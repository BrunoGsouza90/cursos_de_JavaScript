const p_array = window.document.querySelector('#array')
const txt_pequisar = window.document.querySelector('#txt_pesquisar')
const btnVerificar = window.document.querySelector('#btnVerificar')
const resultado = window.document.querySelector('#resultado')

const elementos_array = [21,25,16,20,18,18,22]
p_array.innerHTML = `[${elementos_array}]`

btnVerificar.addEventListener('click', ()=>{
    elementos_array.every((elemento, posicao)=>{
        if(elemento < 18){
            resultado.innerHTML = `Array não conforme na posição ${posicao}.`
        }
        return elemento >= 18
    })
})