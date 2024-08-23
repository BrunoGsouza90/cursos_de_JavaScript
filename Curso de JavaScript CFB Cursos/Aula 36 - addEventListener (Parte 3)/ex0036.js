const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btn = document.querySelector('#btn_copiar')
const btn2 = document.querySelector('#btn_copiar2')
const todosCursos = [...document.querySelectorAll('.curso')]
const todosCursoss = document.querySelectorAll('.curso')
var selecionar = window.document.getElementById('selecionar')
var selecionar2 = window.document.getElementById('selecionar2')

todosCursos.map((elemento, passo) => {
    elemento.addEventListener('click', (evento) => {
        const curso = evento.target
        curso.classList.toggle('selecionado')
    })
})

btn.addEventListener('click', function (){
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    cursosSelecionados.map ((elemento, passo) => {
        if(caixa1.contains(elemento)){
            caixa2.appendChild(elemento)
            selecionar2.checked = true
            selecionar.checked = false
        } else {
            caixa1.appendChild(elemento)
            selecionar.checked = true
            selecionar2.checked = false
        }
    })
})

selecionar.addEventListener('click', function (){
    todosCursoss.forEach( function(elemento){
        if(selecionar.checked && caixa1.contains(elemento)){
            elemento.classList.add('selecionado')
        } else if(!(selecionar.checked) && caixa1.contains(elemento)){
            elemento.classList.remove('selecionado')
        }
    })
})

selecionar2.addEventListener('click', () => {
    todosCursoss.forEach((elemento)=>{
        if(selecionar2.checked && caixa2.contains(elemento)){
            elemento.classList.add('selecionado')
        } else if(!(selecionar2.checked) && caixa2.contains(elemento)){
            elemento.classList.remove('selecionado')
        }
    })
})

todosCursos.some((elemento) => {
    if(elemento.classList('selecionado') && caixa1.contains(elemento)){
        selecionar.checked = false
        return true
    }
    return false
})