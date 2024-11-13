const campo = document.getElementById('principal')
const botao = document.getElementById('gaveta')
let mostrar_ocultar = false

botao.addEventListener('click', ()=>{
    if(mostrar_ocultar == false){
        principal.style = 'display: none;'
        botao.innerHTML = '▼'
        mostrar_ocultar = true
    } else {
        principal.style = 'display: block;'
        botao.innerHTML = '▲'
        mostrar_ocultar = false
    }
})