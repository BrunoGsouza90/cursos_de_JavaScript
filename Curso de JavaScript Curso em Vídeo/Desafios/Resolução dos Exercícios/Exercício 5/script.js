window.document.getElementById('botao').addEventListener('click', (tabuada) => {
    tabuada.preventDefault()
    var numero = Number(window.document.getElementById('numero').value)
    var resultado = window.document.getElementById('Resultado')
    resultado.value = ''
    for(var i = 0; i < 10; i++){
        resultado.value += `${numero} x ${i} = ${i * numero}\n\n`
    }
})