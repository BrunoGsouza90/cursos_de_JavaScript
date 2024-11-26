let objetos = document.getElementById('objetos')

import { cursos, carros } from "./js/cursos_carros.js";

objetos.innerHTML += `<br><strong>Cursos:</strong><br>`

cursos.forEach((curso, passo)=>{

    objetos.innerHTML += `${passo + 1} - ${curso}<br>`

})

objetos.innerHTML += `<br><strong>Carros:</strong><br>`

carros.forEach((carro, passo)=>{

    objetos.innerHTML += `${passo + 1} - ${carro}<br>`

})