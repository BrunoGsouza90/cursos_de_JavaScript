function contar(){
    let ini = Number(window.document.getElementById('txti').value)
    let fim = Number(window.document.getElementById('txtf').value)
    let passo = Number(window.document.getElementById('txtp').value)

    let res = window.document.getElementById('res')

    if(ini == ' ' || fim == ' ' || passo == ' '){
        res.innerHTML = 'Todos os campos são obrigatórios.</br> É impossível contar!'
        res.style.background = '#ff00005d'
    } else {
        res.innerHTML = 'Contando: '
        if(ini < fim){
            for(let c = ini; c <= fim; c += passo){
                res.innerHTML += `${c} &nbsp; &#x1F449; `
            }
            
        } else {
            for(let c = ini; c >= fim; c -= passo){
                res.innerHTML += `${c} &nbsp; &#x1F449; `
            }
        }
        res.innerHTML += `&nbsp; &#x1F3C1;` 
    }
}