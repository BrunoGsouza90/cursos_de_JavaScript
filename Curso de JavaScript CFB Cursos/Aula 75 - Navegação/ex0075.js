const url = document.querySelector('#url')
const btn_url = document.querySelector('#btn_url')

btn_url.addEventListener('click', (evento)=>{

    evento.preventDefault()

    /* Neste exemplo ele redireciona para url específica. */
    // window.location = 'https://www.google.com.br/?hl=pt-BR'

    /* Neste exemplo ele redireciona para o url e exclui o histórico anterior de pesquisa. */
    // window.location.replace('https://www.google.com.br/?hl=pt-BR')

    /* Neste exemplo ele redireciona para o url e não exclui o histórico anterior de pesquisa. */
    // window.location.assign('https://www.google.com.br/?hl=pt-BR')

    /* Usado para dar o refresh na página. */
    // window.location.reload()

    /* Usado para voltar uma página no histórico. */
    // window.history.back()

    /* Usado para avançar uma página no histórico. */
    // window.history.forward()

    /* Estamos imprimindo o tamanho do histórico. */
    // console.log(window.history.length

    /* Usado para navegar determinado número de páginas para a frente. */
    // window.history.go(2)

    /* Estamos redirecionando para a página submetida no formulário. */
    window.location = `https://${url.value}.com.br`

})