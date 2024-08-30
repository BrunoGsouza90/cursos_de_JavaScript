const caixa1 = window.document.querySelector('#caixa1')
const btn_c = [...window.document.querySelectorAll('.curso')]
const c1_2 = window.document.querySelector('#c1_2')

/* Aqui estamos criando um novo elemento. */
const novoElemento = window.document.createElement('div')

/* Anexando o novo elemento dentro de caixa1. */
caixa1.appendChild(novoElemento)

/* Alterando o conteúdo, class e id do novo elemento. */
novoElemento.setAttribute('id','c7')
novoElemento.setAttribute('class', 'curso curso_c1')
novoElemento.innerHTML = 'PostgreSQL'