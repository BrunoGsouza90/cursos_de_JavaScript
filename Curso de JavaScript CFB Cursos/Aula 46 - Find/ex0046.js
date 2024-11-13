const p_array = window.document.querySelector('#array')
const txt_pequisar = window.document.querySelector('#txt_pesquisar')
const btnPesquisar = window.document.querySelector('#btnPesquisar')
const resultado = window.document.querySelector('#resultado')

const elementos_array = [10,5,8,2,9,15,20]
p_array.innerHTML = `[${elementos_array}]`

btnPesquisar.addEventListener('click', ()=>{
    let texto = false
    elementos_array.find((elemento, posicao)=>{
        if(elemento == txt_pesquisar.value){
            resultado.innerHTML = `<br>O valor pesquisado foi: <strong>${elemento}</strong>.<br>Está na posição: <strong>${posicao}º</strong>.`
            texto = true
        }
        if(texto == false){
            resultado.innerHTML = `<br>Valor não encontrado.`
        }
    })
})