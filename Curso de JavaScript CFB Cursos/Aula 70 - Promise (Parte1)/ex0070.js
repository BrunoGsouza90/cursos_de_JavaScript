const numero = document.getElementById('numero')

let promise = new Promise((resultado_ok, resultado_erro)=>{

    /* Altere aqui para "true" ou "false". */
    let resultado = false

    setTimeout(()=>{
        if(resultado == true){
            resultado_ok('Deu tudo certo.')
        } else if (resultado == false){
            resultado_erro('Deu tudo errado.')
        }
    }, 3000)

})

promise.then((retorno)=>{

    numero.innerHTML = retorno
    numero.classList.remove("erro")
    numero.classList.add('ok')

})

promise.catch((retorno)=>{

    numero.innerHTML = retorno
    numero.classList.remove("ok")
    numero.classList.add('erro')

})

numero.innerHTML = "Processando..."