let botao = window.document.querySelector('#botao')

botao.addEventListener('click', ()=>{
    let todosRadios = [...window.document.querySelectorAll('input[type=radio]')]
    let RadioSelecionado = todosRadios.filter((elemento)=>{
        return elemento.checked
    })
    let itemSelecionado = (RadioSelecionado[0].previousElementSibling.textContent)

    window.alert(`O curso selecionado foi ${itemSelecionado}!`)
})