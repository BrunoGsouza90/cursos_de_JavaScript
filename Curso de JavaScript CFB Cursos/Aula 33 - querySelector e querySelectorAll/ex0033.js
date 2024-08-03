var cursoCompleto = window.document.querySelector('div#c1')

cursoCompleto.innerHTML += ' - Completo'

var cursoCompleto = window.document.querySelector('div.curso_c2')

cursoCompleto.innerHTML += ' - Completo'

var cursoCompleto = [...window.document.querySelectorAll('div.curso_c1')]

cursoCompleto.map((elemento, passo) => {
    elemento.innerHTML += ' - Completo'
})