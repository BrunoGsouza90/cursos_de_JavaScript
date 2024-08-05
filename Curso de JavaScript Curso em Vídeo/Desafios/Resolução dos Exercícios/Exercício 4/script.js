var resposta = window.document.getElementById('resposta')
function Form(event){
    resposta.innerHTML = ""
    event.preventDefault()
    var inicio = parseInt(window.document.getElementById('inicio').value)
    var fim = parseInt(window.document.getElementById('fim').value)
    var passo = parseInt(window.document.getElementById('passo').value)
    
    if(inicio < fim){
        for(var i = inicio; i <= fim; i += passo){
            if(passo > fim){
                resposta.innerHTML = `O passo não pode ser maior que o ínicio ou o fim.`
                break
            }
            if(i == fim){
                resposta.innerHTML += `${i}&nbsp; &#x1F3C1; `
            } else {
                resposta.innerHTML += `${i}&nbsp; &#x1F449; &nbsp; `
            } 
        }
    } else if(fim < inicio){
        for(var i = inicio; i >= fim; i -= passo){
            if(passo > inicio){
                resposta.innerHTML = `O passo não pode ser maior que o ínicio.`
                break
            }
            if(i == fim){
                resposta.innerHTML += `${i}&nbsp; &#x1F3C1;`
            } else {
                resposta.innerHTML += `${i}&nbsp; &#x1F449; &nbsp;`
            }
        }
    } else {
        resposta.innerHTML = `O ínicio não pode ser igual o fim.`
    }

}