let caixa_nome = document.querySelector('#caixa_nome')
let caixa_idade = document.querySelector('#caixa_idade')
let adicionar = document.querySelector('#adicionar')
let caixa_resposta = document.querySelector('#caixa_resposta')
let pessoa = 0

function Pessoa(pnome, pidade){

    this.nome = pnome,
    this.idade = pidade,

    this.info = ()=>{
        pessoa += 1
        caixa_resposta.innerHTML += `<span style="color: green;"><strong>${pessoa}º Pessoa:</strong></span><br><br>`
        caixa_resposta.innerHTML += `Nome: ${this.nome}<br>`
        caixa_resposta.innerHTML += `Idade: ${this.idade}<br><br>`
    }
}

adicionar.addEventListener('click', (event)=>{
    event.preventDefault();

    let nome = caixa_nome.value
    let idade = caixa_idade.value

    if(nome == ''){
        nome = 'Nome não mencionado!'
    }

    if(idade == ''){
        idade = 'Idade não mencionada!'
    }

    let p1 = new Pessoa(`${nome}`, `${idade}`)
    p1.info()
})