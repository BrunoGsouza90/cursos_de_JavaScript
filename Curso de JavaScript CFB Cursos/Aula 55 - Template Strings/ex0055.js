let caixa = document.querySelector('#caixa')
let paragrafo = document.createElement('p')
caixa.appendChild(paragrafo)
paragrafo.setAttribute('style', 'text-align: center;')

let curso = `<span style="color: green">JavaScript</span>`
let canal = `<span style="color: green">CFB Cursos</span>`
let frase = `Esse é o curso de ${curso} do canal ${canal}!`

paragrafo.innerHTML = frase