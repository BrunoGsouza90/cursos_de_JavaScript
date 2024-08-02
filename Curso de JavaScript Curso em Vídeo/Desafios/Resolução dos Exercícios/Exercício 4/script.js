var resposta = window.document.getElementById('resposta')
function Form(event){
    resposta.innerHTML = ""
    event.preventDefault()
    var inicio = parseInt(window.document.getElementById('inicio').value)
    var fim = parseInt(window.document.getElementById('fim').value)
    var passo = parseInt(window.document.getElementById('passo').value)
    for(var i = inicio; i <= fim; i += passo){
        if(passo > inicio || passo > fim){
            resposta.innerHTML = `O passo não pode ser maior que o ínicio ou o fim.`
            break
        }
        if(i == fim){
            resposta.innerHTML += `${i}. `
        } else {
            resposta.innerHTML += `${i}, `
        }
    }

}