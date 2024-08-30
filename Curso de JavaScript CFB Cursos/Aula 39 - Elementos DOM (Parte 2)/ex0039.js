const caixa1 = window.document.querySelector('#caixa1')
const btn_c = [...window.document.querySelectorAll('.curso')]

/* Verificando quantos filhos o elemento tem.*/
console.log(caixa1.children)
console.log(`O elemento "caixa1" possui ${caixa1.children.length} filhos.`)

console.log((btn_c[0].children.length > 0) ? 'Possui filhos.' : 'Não possui filhos.')
console.log((caixa1.children.length > 0) ? 'Possui filhos.' : 'Não possui filhos.')

/* Alterando o texto do primeiro elemento filho de "caixa1". */
console.log(caixa1.firstElementChild.innerHTML = 'HTML5')

/* Alterando o texto do segundo elemento filho de "caixa1". */
console.log(caixa1.children[1].innerHTML = 'CSS3')

/* Alterando o texto do último elemento filho de "caixa1". */
console.log(caixa1.lastElementChild.innerHTML = 'PostgreSQL')

/* Descobrindo quem é o elemento pai de "btn_c[0]". */
console.log(btn_c[0].parentNode)

/* Descobrindo quem é o elemento avô de "btn_c[0]". */
console.log(btn_c[0].parentNode.parentNode)