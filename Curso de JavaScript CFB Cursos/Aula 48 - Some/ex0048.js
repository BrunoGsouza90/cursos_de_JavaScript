const p_array = window.document.querySelector('#array')
const txt_pequisar = window.document.querySelector('#txt_pesquisar')
const btnVerificar = window.document.querySelector('#btnVerificar')
const resultado = window.document.querySelector('#resultado')

const elementos_array = [9,1,10,17,15,13,11,9]
p_array.innerHTML = `[${elementos_array}]`

btnVerificar.addEventListener('click', ()=>{
    const ret = elementos_array.some((elemento, posicao)=>{
        if(elemento < 18){
            resultado.innerHTML = `Array não conforme na posição ${posicao}.`
        }
        return elemento >= 18
    })

    if(ret == true){
        resultado.innerHTML = 'Array em conformidade.'
    }
})