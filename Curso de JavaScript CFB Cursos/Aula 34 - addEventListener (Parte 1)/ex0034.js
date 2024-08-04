function euGosto(){
    window.alert('Eu gosto de programar em HTML!')
}

window.document.getElementsByTagName('div')[1].addEventListener('dblclick', clicou = () => {
    window.alert('Cliquei em CSS!')
})

window.document.getElementsByTagName('div')[2].addEventListener('click', (cliquei) =>{
    window.alert('Cliquei em JavaScript!')
})

var clicar = window.document.getElementsByTagName('div')[2]

addEventListener('oncontextmenu', clicar)

function clicar(){
    window.alert('Eu gosto de programar em PHP!')
}

var divs = [...window.document.getElementsByTagName('div')]
var texto = window.document.getElementsByTagName('p')[0]

divs.map((elemento) => {
    elemento.addEventListener('click', function clicarTodos(){
        texto.innerHTML = `Cliquei em ${elemento.innerHTML}!`
    })
})