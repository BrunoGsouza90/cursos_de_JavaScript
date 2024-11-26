let objetos = document.getElementById('objetos')


import getCurso, {cursos, getTodosCursos} from "./js/cursos.js";

objetos.innerHTML += `<br><strong>Cursos:</strong><br>`

cursos.forEach((curso, passo)=>{

    objetos.innerHTML += `${passo + 1} - ${curso}<br>`

})

objetos.innerHTML += getTodosCursos()

objetos.innerHTML += `<br><br><strong>Curso:</strong> ${getCurso(0)}.`