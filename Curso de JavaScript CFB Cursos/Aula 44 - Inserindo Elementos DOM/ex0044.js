let botao = window.document.querySelector('.botao')

botao.addEventListener('click', ()=>{
    let todosRadios = [...window.document.querySelectorAll('input[type=radio]')]
    let RadioSelecionado = todosRadios.filter((elemento)=>{
        return elemento.checked
    })
    let itemSelecionado = (RadioSelecionado[0].previousElementSibling.textContent)

    window.alert(`O curso selecionado foi ${itemSelecionado}!`)
})

// ========================================================

let criarNovoCursoAntes = window.document.querySelector('.botao_antes')
let criarNovoCursoDepois = window.document.querySelector('.botao_depois')
let div_cursos = window.document.querySelector('#cursos')
let indice = 0
let cursos = [... window.document.querySelectorAll('.lista_cursos')]
let texto = window.document.querySelector('#texto_curso')
let novo_lista_cursos = ''
let novo_label = ''
let novo_input = ''
let id = 5


criarNovoCursoAntes.addEventListener('click', () =>{
    
    novo_lista_cursos = window.document.createElement('div')
    novo_lista_cursos.setAttribute('class', 'lista_cursos')

    novo_label = window.document.createElement('label')
    novo_label.setAttribute('for', 'curso')
    novo_label.innerHTML = `${texto.value}`
    
    
    novo_input = window.document.createElement('input')
    novo_input.setAttribute('type', 'radio')
    novo_input.setAttribute('name', 'curso')
    id++
    novo_input.setAttribute('id', `c${id}`)

    novo_lista_cursos.appendChild(novo_label)
    novo_lista_cursos.appendChild(novo_input)

    div_cursos.insertBefore(novo_lista_cursos, div_cursos.firstChild)

})

criarNovoCursoDepois.addEventListener('click', () =>{
    
    novo_lista_cursos = window.document.createElement('div')
    novo_lista_cursos.setAttribute('class', 'lista_cursos')

    novo_label = window.document.createElement('label')
    novo_label.setAttribute('for', 'curso')
    novo_label.innerHTML = `${texto.value}`
    
    
    novo_input = window.document.createElement('input')
    novo_input.setAttribute('type', 'radio')
    novo_input.setAttribute('name', 'curso')
    id++
    novo_input.setAttribute('id', `c${id}`)

    novo_lista_cursos.appendChild(novo_label)
    novo_lista_cursos.appendChild(novo_input)

    div_cursos.appendChild(novo_lista_cursos)
})