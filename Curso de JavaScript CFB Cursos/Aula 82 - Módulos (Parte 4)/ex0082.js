let objetos = document.getElementById('objetos')
let botao_escolher = document.querySelector('#botao_escolher')
let botao_adicionar = document.querySelector
('#botao_adicionar')
let botao_renomear = document.querySelector('#botao_renomear')
let botao_remover = document.querySelector('#botao_remover')
let botao_limpar = document.querySelector('#botao_limpar')
let id = 0

import * as variaveis from "./js/cursos.js";

function visualizar_cursos(){

    objetos.innerHTML = ''

    variaveis.Curso.getTodosCursos().forEach((curso, passo)=>{

        objetos.innerHTML += `${passo + 1} - ${curso}<br>`
    
    })

    if(id == 0){

        objetos.innerHTML += `<br><strong>Curso Selecionado:</strong> Nenhum curso selecionado.`
        id = 0
    
    } else if (id > variaveis.Curso.getTodosCursos().length || variaveis.Curso.getCurso(id - 1) == undefined){

        objetos.innerHTML += `<br><strong>Curso Selecionado:</strong> Esse curso não existe.`
        id = 0

    } else {

        objetos.innerHTML += `<br><strong>Curso Selecionado:</strong> ${variaveis.Curso.getCurso(id - 1)}`

    }

}

visualizar_cursos()

botao_escolher.addEventListener('click', ()=>{

    id = window.prompt('Digite o ID do curso:')
    
    visualizar_cursos()

})

botao_adicionar.addEventListener('click', ()=>{

    let novo_curso = window.prompt('Digite o nome do novo curso:')
    if(novo_curso.length == 0){

        window.alert('O nome não pode ser vazio!')

    } else {

        variaveis.Curso.addCurso(novo_curso)

    }

    visualizar_cursos()

})

botao_renomear.addEventListener('click', ()=>{

    let id_renomear = window.prompt('Digite o ID do curso deseja renomear?')

    if(id_renomear <= 0 || id_renomear > variaveis.Curso.getTodosCursos().length || isNaN(id_renomear)){

        window.alert('Esse curso não existe!')

    } else {

        let novo_nome = window.prompt('Qual o novo nome do curso?')

        variaveis.Curso.renomearCurso(id_renomear - 1, novo_nome)

    }

    visualizar_cursos()
    
})

botao_remover.addEventListener('click', ()=>{

    let deletar_curso = window.prompt('Qual o ID do curso que deseja remover?')

    if(deletar_curso == 0 || deletar_curso > variaveis.Curso.getTodosCursos().length || isNaN(deletar_curso) == true){

        window.alert('Esse curso não existe!')

    } else {

        variaveis.Curso.removerCurso(deletar_curso - 1)

    }

    visualizar_cursos()

})

botao_limpar.addEventListener('click', ()=>{

    variaveis.Curso.apagarCursos()
    id = 0

    visualizar_cursos()

})