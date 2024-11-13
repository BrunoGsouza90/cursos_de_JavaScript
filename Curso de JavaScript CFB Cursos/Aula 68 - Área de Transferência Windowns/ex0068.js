const texto = document.getElementById('texto')
const copiar_texto = document.getElementById('copiar_texto')

const iinput = document.getElementById('iinput')
const copiar_input = document.getElementById('copiar_input')

copiar_texto.addEventListener('click', ()=>{
    iinput.select()
    iinput.setSelectionRange(0,99999)
    navigator.clipboard.writeText(texto.innerHTML)
})

copiar_input.addEventListener('click', ()=>{
    iinput.select()
    iinput.setSelectionRange(0,99999)
    navigator.clipboard.writeText(iinput.value)
})