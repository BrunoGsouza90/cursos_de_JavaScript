import { contatos } from "./banco_de_dados.js";

let listaContatos = document.getElementById('listaContatos')

let contato = {

    getTodosContatos:function(){

        console.log(contatos)

    },

    getContato:function(indice){

        return contatos[indice]

    },

    addContato:function(novoContato){

        const cont = {

            nome: novoContato.nome,
            email: novoContato.email,
            telefone: novoContato.telefone
    
        }

        contatos.push(cont)

        const div = document.createElement('div')
        div.setAttribute('class', 'contato')

        const p_nome = document.createElement('p')
        p_nome.innerHTML = `<strong>Nome:</strong> ${cont.nome}`

        const p_email = document.createElement('p')
        p_email.innerHTML = `<strong>Email:</strong> ${cont.email}`

        const p_telefone = document.createElement('p')
        p_telefone.innerHTML = `<strong>Telefone:</strong> ${cont.telefone}`

        const lixeira = document.createElement('i')
        lixeira.setAttribute('class', 'material-icons lixeiras')
        lixeira.innerHTML = 'delete'

        div.appendChild(p_nome)
        div.appendChild(p_email)
        div.appendChild(p_telefone)
        div.appendChild(lixeira)

        listaContatos.appendChild(div)

    },

    removerContato:function(){

        let lixeiras = [...document.querySelectorAll('.lixeiras')]

        lixeiras.forEach((lixeira)=>{

            lixeira.addEventListener('click', ()=>{

                lixeira.parentElement.remove()

            })

        })

    }

}

export { contato }