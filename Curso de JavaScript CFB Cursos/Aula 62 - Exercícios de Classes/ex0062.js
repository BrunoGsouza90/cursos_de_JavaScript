let input_nome = document.querySelector('#input_nome')
let input_ano = document.querySelector('#input_ano')
let input_portas = document.querySelector('#input_portas')
let input_ligar = document.querySelector('#input_ligar')
let input_municao = document.querySelector('#div_municao')
let input_blindagem = document.querySelector('#div_blindagem')
let adicionar_carro = document.querySelector('#adicionar_carro')
let input_carro_normal = document.querySelector('#input_normal')
let input_carro_militar = document.querySelector('#input_militar')
let adicionar_municao = document.querySelector('#adicionar_municao')
let subtrair_municao = document.querySelector('#subtrair_municao')
let adicionar_blindagem = document.querySelector('#adicionar_blindagem')
let substrair_blindagem = document.querySelector('#subtrair_blindagem')
let campo_militar = document.querySelector('#dados_militar')
let resultado = document.querySelector('#resultado')
let id = 0

input_carro_normal.addEventListener('click', ()=>{
    campo_militar.style = 'display: none;'
})

input_carro_militar.addEventListener('click', ()=>{
    campo_militar.style = 'display: block;'
})

adicionar_municao.addEventListener('click', (event)=>{
    event.preventDefault()
    let quantidade = Number(div_municao.innerHTML)
    if(quantidade < 100){
        quantidade += 1
        div_municao.innerHTML = String(quantidade)
    }
})

subtrair_municao.addEventListener('click', (event)=>{
    event.preventDefault()
    let quantidade = Number(div_municao.innerHTML)
    if(quantidade > 0){
        quantidade -= 1
        div_municao.innerHTML = String(quantidade)
    }
})

adicionar_blindagem.addEventListener('click', (event)=>{
    event.preventDefault()
    let quantidade = Number(div_blindagem.innerHTML)
    if(quantidade < 100){
        quantidade += 1
        div_blindagem.innerHTML = String(quantidade)
    }
})

substrair_blindagem.addEventListener('click', (event)=>{
    event.preventDefault()
    let quantidade = Number(div_blindagem.innerHTML)
    if(quantidade > 0){
        quantidade -= 1
        div_blindagem.innerHTML = String(quantidade)
    }
})

input_ligar.addEventListener('click', ()=>{
    if(input_ligar.checked == false){
        input_ligar.checked == true
    }else if(input_ligar.checked == true){
        input_ligar.checked == false
    }
})

adicionar_carro.addEventListener('click', (event)=>{
    class Carros{
        constructor(pnome, pano, pportas, pligar){
            this.nome = pnome
            this.ano = pano
            this.portas = pportas
            this.ligar = pligar
        }
    }
    
    class Normal extends Carros{
        constructor(nome, ano, portas, ligar){
            super(nome, ano, portas, ligar)
        }
    
        info(){
            if(this.nome === ''){
                paragrafo.innerHTML += `<strong>Nome:</strong> Nome não mencionado.<br>`
            }else{
                paragrafo.innerHTML += `Nome: ${this.nome}.<br>`
            }
        
            if(this.ano == ''){
                paragrafo.innerHTML += `<strong>Ano:</strong> Ano não mencionado.<br>`
            }else{
                paragrafo.innerHTML += `Ano: ${this.ano}.<br>`
            }
        
            if(this.portas == ''){
                paragrafo.innerHTML += `<strong>Portas:</strong> Número de portas não mencionado.<br>`
            }else{
                paragrafo.innerHTML += `Portas: ${this.portas}.<br>`
            }

            paragrafo.innerHTML += `<br>O carro está ${this.ligar}!<br>`
        }
    }

    class Militar extends Carros{
        constructor(nome, ano, portas, ligar, pmunicao, pblindagem){
            super(nome, ano, portas, ligar)
            this.municao = pmunicao
            this.blindagem = pblindagem 
        }

        info(){
            if(this.nome === ''){
                paragrafo.innerHTML += `<strong>Nome:</strong> Nome não mencionado.<br>`
            }else{
                paragrafo.innerHTML += `Nome: ${this.nome}.<br>`
            }
        
            if(this.ano == ''){
                paragrafo.innerHTML += `<strong>Ano:</strong> Ano não mencionado.<br>`
            }else{
                paragrafo.innerHTML += `Ano: ${this.ano}.<br>`
            }
        
            if(this.portas == ''){
                paragrafo.innerHTML += `<strong>Portas:</strong> Número de portas não mencionado.<br>`
            }else{
                paragrafo.innerHTML += `Portas: ${this.portas}.<br>`
            }

            if(this.municao == '0'){
                paragrafo.innerHTML += `<strong>Munição:</strong> Sem munição.<br>`
            }else{
                paragrafo.innerHTML += `Munição: ${this.municao}.<br>`
            }

            if(this.blindagem == '0'){
                paragrafo.innerHTML += `<strong>Blindagem:</strong> Sem blindagem.<br>`
            }else{
                paragrafo.innerHTML += `Blindagem: ${this.blindagem}.<br>`
            }

        }
    }

    event.preventDefault()
    let paragrafo = document.createElement('p')
    paragrafo.setAttribute('id', `p${id}`)
    resultado.appendChild(paragrafo)
    id += 1
    let ligar = ''
    paragrafo.innerHTML = `<br><span style="color: green; font-size: 1.3em"><strong>${id}º Carro:</strong></span><br><br>`

    if(input_ligar.checked == true){
        ligar = '<span style="color: green;"><strong>Ligado</strong></span>'
    }else{
        ligar = '<span style="color: red;"><strong>Desligado</strong></span>'
    }

    if(input_carro_normal.checked){
        let carro = new Normal(input_nome.value, input_ano.value, input_portas.value, ligar)
        carro.info()
    }else if(input_carro_militar.checked){
        let carro = new Militar(input_nome.value, input_ano.value, input_portas.value, ligar, div_municao.innerHTML, div_blindagem.innerHTML)
        carro.info()
    }
})