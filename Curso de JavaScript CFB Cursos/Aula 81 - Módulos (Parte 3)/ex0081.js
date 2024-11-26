let objetos = document.getElementById('objetos')

import * as variaveis from "./js/cursos.js";

objetos.innerHTML += `<br><br><strong>Cursos:</strong><br>`

variaveis.cursos.forEach((curso, passo)=>{

    objetos.innerHTML += `${passo + 1} - ${curso}<br>`

})

objetos.innerHTML += `<br><br><strong>Carros:</strong><br>`

variaveis.carros.forEach((carro, passo)=>{

    objetos.innerHTML += `${passo + 1} - ${carro}<br>`

})

objetos.innerHTML += `<br><strong>Curso: </strong>${variaveis.default(0)}.`