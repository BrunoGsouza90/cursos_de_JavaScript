import { contato } from './js/contatos.js'

const btn_gravar = document.getElementById('btn_gravar')

btn_gravar.addEventListener('click', (evento)=>{

    evento.preventDefault()

    const cont = {

        nome: document.getElementById('inome').value,
        email: document.getElementById('iemail').value,
        telefone: document.getElementById('itelefone').value

    }

    contato.addContato(cont)

    contato.getTodosContatos()

    contato.removerContato()

})