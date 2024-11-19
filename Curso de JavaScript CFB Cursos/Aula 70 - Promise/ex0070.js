const numero = document.getElementById('numero')
const btn_promessa = document.getElementById('btn_promessa')

btn_promessa.addEventListener('click', ()=>{

    numero.innerHTML = "Processando..."

    let promise = new Promise((resultado_ok, resultado_erro)=>{

        let resultado = window.prompt('Deu tudo certo? [Sim\\Não]')
        resultado = resultado.charAt(0).toUpperCase()
    
        setTimeout(()=>{
            if(resultado == 'S'){
                resultado_ok('Deu tudo certo.')
            } else if (resultado == 'N'){
                resultado_erro('Deu tudo errado.')
            } else{
                resultado_erro('Opção Inválida.')
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

})

numero.innerHTML = "Esperando..."