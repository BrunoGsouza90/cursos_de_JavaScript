var menu1 = window.document.querySelector('#menu1')
var adicionar_curso = window.document.querySelector('#opcao1')
var texto1 = window.document.querySelector('#texto1')
var botao1 = window.document.querySelector('#botao1')

var menu2 = window.document.querySelector('#menu2')
var remover_curso = window.document.querySelector('#opcao2')
var texto2 = window.document.querySelector('#texto2')
var botao2 = window.document.querySelector('#botao2')

var menu3 = window.document.querySelector('#menu3')
var renomear_curso = window.document.querySelector('#opcao3')
var texto3 = window.document.querySelector('#texto3')
var texto4 = window.document.querySelector('#texto4')
var botao3 = window.document.querySelector('#botao3')

var form_adicionar = window.document.querySelector('#form_adicionar')
var lista_cursos = window.document.querySelector('.cursos')
var cursos = window.document.querySelector('.cursos')

var curso = [...window.document.querySelectorAll('.curso')]
var botao = [...window.document.querySelectorAll('.botao')]

var mensagem = window.document.querySelector('#mensagem')

var nomes_curso = [...window.document.querySelectorAll('.curso p')]

var sem_cursos = window.document.querySelector('#sem_cursos')

function atualizarCurso(){
    return [...window.document.querySelectorAll('.curso p')]
}

let id = '1'
let erro = true
let erro1 = true

adicionar_curso.addEventListener('click', ()=>{
    texto1.style.display = 'block'
    texto1.style.width = '200px'
    texto1.style.height = '20px'
    botao1.style.display = 'block'
    botao1.style.width = '120px'
    botao1.style.height = '50px'
    texto4.style.display = 'none' 
    texto4.style.width = '0px'
    texto4.style.height = '0px'

    texto2.style.display = 'none'
    texto2.style.width = '0px'
    texto2.style.height = '0px'
    botao2.style.display = 'none'
    botao2.style.width = '0px'
    botao2.style.height = '0px'
    texto4.style.display = 'none' 
    texto4.style.width = '0px'
    texto4.style.height = '0px'

    texto3.style.display = 'none'
    texto3.style.width = '0px'
    texto3.style.height = '0px'
    botao3.style.display = 'none'
    botao3.style.width = '0px'
    botao3.style.height = '0px'
    texto4.style.display = 'none' 
    texto4.style.width = '0px'
    texto4.style.height = '0px'

    remover_curso.checked = false
    renomear_curso.checked = false

    mensagem.style.display = 'none'
})

remover_curso.addEventListener('click', ()=>{
    texto1.style.display = 'none'
    texto1.style.width = '0'
    texto1.style.height = '0px'
    botao1.style.display = 'none'
    botao1.style.width = '0px'
    botao1.style.height = '0px'
    texto4.style.display = 'none' 
    texto4.style.width = '0px'
    texto4.style.height = '0px'

    texto2.style.display = 'block'
    texto2.style.width = '200px'
    texto2.style.height = '20px'
    botao2.style.display = 'block'
    botao2.style.width = '120px'
    botao2.style.height = '50px'
    texto4.style.display = 'none' 
    texto4.style.width = '0px'
    texto4.style.height = '0px'

    texto3.style.display = 'none'
    texto3.style.width = '0px'
    texto3.style.height = '0px'
    botao3.style.display = 'none'
    botao3.style.width = '0px'
    botao3.style.height = '0px'
    texto4.style.display = 'none' 
    texto4.style.width = '0px'
    texto4.style.height = '0px'

    adicionar_curso.checked = false
    renomear_curso.checked = false

    mensagem.style.display = 'none'
})

renomear_curso.addEventListener('click', ()=>{
    texto1.style.display = 'none'
    texto1.style.width = '0'
    texto1.style.height = '0px'
    botao1.style.display = 'none'
    botao1.style.width = '0px'
    botao1.style.height = '0px'
    texto4.style.display = 'none' 
    texto4.style.width = '0px'
    texto4.style.height = '0px'

    texto2.style.display = 'none'
    texto2.style.width = '0px'
    texto2.style.height = '0px'
    botao2.style.display = 'none'
    botao2.style.width = '0px'
    botao2.style.height = '0px'
    texto4.style.display = 'none' 
    texto4.style.width = '0px'
    texto4.style.height = '0px'

    texto3.style.display = 'block'
    texto3.style.width = '200px'
    texto3.style.height = '20px'
    botao3.style.display = 'block'
    botao3.style.width = '120px'
    botao3.style.height = '50px'
    texto4.style.display = 'block' 
    texto4.style.width = '200px'
    texto4.style.height = '20px'

    adicionar_curso.checked = false
    remover_curso.checked = false

    mensagem.style.display = 'none'
})

form_adicionar.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    erro = false
    nomes_curso = atualizarCurso()
    
    nomes_curso.forEach((elemento)=>{
        console.log(elemento.innerHTML)
        if(elemento.innerHTML == texto1.value){
            erro = true
        }
    })

    if(erro == false){
        let novoParagrafo = window.document.createElement('p')
        novoParagrafo.innerHTML = texto1.value

        let novoBotao = window.document.createElement('button')
        novoBotao.innerHTML = 'Deletar'
        novoBotao.setAttribute('id', `d${id}`)
        novoBotao.setAttribute('class', 'botao')

        let novoElemento = window.document.createElement('div')
        novoElemento.setAttribute('id', `c${id}`)
        novoElemento.setAttribute('class', 'curso')
        novoElemento.appendChild(novoParagrafo)
        novoElemento.appendChild(novoBotao)
        lista_cursos.appendChild(novoElemento)
        
        id = (parseInt(id) + 1).toString()
        texto1.value = ''
        
        novoBotao.addEventListener('click', ()=>{
            cursos.removeChild(novoElemento);
            adicionar_curso.checked = false
            remover_curso.checked = false
            renomear_curso.checked = false
            mensagem.style.display = 'none'
            texto1.style.display = 'none'
            botao1.style.display = 'none'
            texto2.style.display = 'none'
            botao2.style.display = 'none'
            texto3.style.display = 'none'
            texto4.style.display = 'none'
            botao3.style.display = 'none'
            nomes_curso = atualizarCurso()
            if(nomes_curso.length > 0){
                sem_cursos.style.display = 'none'
            } else{
                sem_cursos.style.display = 'block'
            }
        })

        mensagem.innerHTML = 'Curso registrado com sucesso.'
        mensagem.style.display = 'block'
        mensagem.style.background = 'rgba(120, 253, 120, 0.486)'
        sem_cursos.style.display = 'none'
        nomes_curso = atualizarCurso()
    } else {
        mensagem.innerHTML = 'Curso já existente!'
        mensagem.style.display = 'block'
        mensagem.style.background = 'rgba(255, 2, 2, 0.486)'
        erro = false
        nomes_curso = atualizarCurso()
    }
})

form_remover.addEventListener('submit', (evento)=>{
    evento.preventDefault()
    erro = true
    nomes_curso = atualizarCurso()
    console.log(nomes_curso)

    nomes_curso.forEach((elemento)=>{
        if(elemento.innerHTML === texto2.value){
            erro = false
        }
    })

    if(erro == false){
        nomes_curso.forEach((novoElemento)=>{
            if(novoElemento.innerHTML == texto2.value){
                cursos.removeChild(novoElemento.parentNode)
                texto2.value = ''          
            }
        })
        mensagem.innerHTML = 'Curso deletado com sucesso.'
        mensagem.style.display = 'block'
        mensagem.style.background = 'rgba(120, 253, 120, 0.486)'
        erro = true
        nomes_curso = atualizarCurso()
        if(nomes_curso.length > 0){
            sem_cursos.style.display = 'none'
        } else{
            sem_cursos.style.display = 'block'
        }
    } else {
        mensagem.innerHTML = 'Esse curso não existe!'
        mensagem.style.display = 'block'
        mensagem.style.background = 'rgba(255, 2, 2, 0.486)'
        erro = false
        nomes_curso = atualizarCurso()
    }
})

form_renomear.addEventListener('submit', (evento)=>{
    evento.preventDefault()
    erro = true
    erro1 = false
    nomes_curso = atualizarCurso()

    nomes_curso.forEach((elemento)=>{
        console.log(elemento.innerHTML)
        if(elemento.innerHTML == texto3.value){
            erro = false
        } else if(elemento.innerHTML == texto4.value){
            erro1 = true
        }
    })

    if(erro == false && erro1 == false){
        nomes_curso.forEach((novoElemento)=>{
            if(novoElemento.innerHTML == texto3.value){
                novoElemento.innerHTML = texto4.value
                texto3.value = ''
                texto4.value = ''
            }
        })
        erro = true
        erro1 = true
        mensagem.innerHTML = 'Curso renomeado com sucesso.'
        mensagem.style.display = 'block'
        mensagem.style.background = 'rgba(120, 253, 120, 0.486)'
        nomes_curso = atualizarCurso()
    } else if(erro == true){
        mensagem.innerHTML = 'Esse curso não existe!'
        mensagem.style.display = 'block'
        mensagem.style.background = 'rgba(255, 2, 2, 0.486)'
        erro = false
        erro1 = false
        nomes_curso = atualizarCurso()
    } else if(erro1 == true){
        mensagem.innerHTML = 'O novo nome de curso já existe!'
        mensagem.style.display = 'block'
        mensagem.style.background = 'rgba(255, 2, 2, 0.486)'
        erro = false
        erro1 = false
        nomes_curso = atualizarCurso()
    }
})