let cursos = ["HTML", "CSS", "JavaScript"]

cursos.push('Python')
cursos.pop()

cursos.unshift('Python')
cursos.shift()

cursos.unshift('C++')
cursos.push('Python')

let caixa = window.document.querySelector('#caixa')

let Novo_Paragrafo = window.document.createElement('p')
Novo_Paragrafo.setAttribute('style', 'text-align:center;')

cursos.forEach((curso)=>{
    Novo_Paragrafo.innerHTML += `${curso} <br><br>`
})

caixa.appendChild(Novo_Paragrafo)