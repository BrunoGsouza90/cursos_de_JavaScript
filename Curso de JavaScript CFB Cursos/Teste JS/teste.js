let botao = document.getElementById('btn_gravar')
let listaContatos = document.getElementById('listaContatos')
let contatos = [...document.querySelectorAll('.contato')]

botao.addEventListener('click', (evento)=>{

    evento.preventDefault()

    let nome = document.getElementById('inome').value
    let email = document.getElementById('iemail').value
    let telefone = document.getElementById('itelefone').value

    let div = document.createElement('div')
    div.setAttribute('class', 'contato')

    let div_nome = document.createElement('p')
    div_nome.innerHTML = nome

    let div_email = document.createElement('p')
    div_email.innerHTML = email

    let div_telefone = document.createElement('p')
    div_telefone.innerHTML = telefone

    div.appendChild(div_nome)
    div.appendChild(div_email)
    div.appendChild(div_telefone)
    listaContatos.appendChild(div)

    contatos = [...document.querySelectorAll('.contato')]

})

console.log(contatos)