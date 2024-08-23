var caixa1 = window.document.querySelector('#caixa1')
var btn_c1 = window.document.querySelector('#c1')
var cursos = [...window.document.querySelectorAll('.curso')]

caixa1.addEventListener('click', (evento) =>{
    console.log(evento.target)
})

btn_c1.addEventListener('click', (evento) =>{
    evento.stopPropagation()
})

cursos.map((elemento, passo) => {
    elemento.addEventListener('click', (evento) => {
        evento.stopPropagation()
    })
})