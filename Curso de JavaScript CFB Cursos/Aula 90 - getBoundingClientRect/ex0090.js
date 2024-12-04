let q1 = document.querySelector('#q1')
let q2 = document.querySelector('#q2')
let posx = document.querySelector('#posx')
let posy = document.querySelector('#posy')
let largura = document.querySelector('#largura')
let altura = document.querySelector('#altura')

let info = (elemento)=>{

    let DOMRect = elemento.getBoundingClientRect()
    posx.innerHTML = `<strong>posx:</strong> ${DOMRect.x}px.`
    posy.innerHTML = `<strong>posy:</strong> ${DOMRect.y}px.`
    largura.innerHTML = `<strong>Largura:</strong> ${DOMRect.width}px.`
    altura.innerHTML = `<strong>Altura:</strong> ${DOMRect.height}px.`

}

q1.addEventListener('click', (evento)=>{

    info(evento.target)

})

q2.addEventListener('click', (evento)=>{

    info(evento.target)

})