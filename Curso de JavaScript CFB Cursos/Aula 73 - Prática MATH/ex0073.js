let olhos = [...document.querySelectorAll('.olho')]
let posicao_x = document.querySelector('#posicao_x')
let posicao_y = document.querySelector('#posicao_y')

let posx_mouse = 0
let posy_mouse = 0

window.addEventListener('mousemove', (evento)=>{

    posx_mouse = evento.clientX
    posy_mouse = evento.clientY

    olhos.forEach((elemento)=>{

        const rect = elemento.getBoundingClientRect()
        const centro_x = rect.left + rect.width / 2
        const centro_y = rect.top + rect.height / 2

        const angulo = Math.atan2(posy_mouse - centro_y, posx_mouse - centro_x)

        const rotacao = angulo * (180 / Math.PI)

        elemento.style.transform = `rotate(${rotacao}deg)`

    })

    posicao_x.innerHTML = `<strong>Posição X:</strong> ${posx_mouse}px.`
    posicao_y.innerHTML = `<strong>Posição Y:</strong> ${posy_mouse}px.`
    
})