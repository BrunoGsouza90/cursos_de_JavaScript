const caixa1 = window.document.querySelector('#caixa1')
const btn_c = [...window.document.querySelectorAll('.curso')]
const deletar = window.document.querySelectorAll('.deletar')

deletar.forEach((elemento)=>{
    elemento.addEventListener('click', ()=>{
        var item = elemento.id[1] - 1
        console.log(elemento.id)
        caixa1.removeChild(btn_c[item])
    })
})