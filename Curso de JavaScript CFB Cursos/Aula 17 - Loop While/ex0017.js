let n = 0

while(n <= 10){
    window.document.write(`${n} `)
    n++
}

window.document.write(`</br>`)

var fatorial = 5
var num = fatorial - 1

while(num > 0){
    if(num == 4){
        window.document.write(`5 x 4 x `)
    } else if(num == 1){
        window.document.write(` 1 = `)
    } else {
        window.document.write(`${num} x `)
    }
    fatorial *= num
    num--
}

window.document.write(`${fatorial}`)

window.document.write(`</br>`)

var pessoas = []
var c = 1
while(true){
    var nome = window.prompt(`Digite o ${c}° nome: `).trim()
    var nome = nome[0].toUpperCase() + nome.slice(1).toLocaleLowerCase()
    var idade = window.prompt(`Digite a ${c}° idade: `)
    var c = c + 1
    var idade = Number(idade)
    var dicionario = {'Nome': nome, 'Idade': idade}
    pessoas.push(dicionario)
    var resposta = window.prompt('Quer cadastrar mais uma pessoa? [S/N] ').toLocaleUpperCase().charAt(0).trim()
    while(resposta != 'S' && resposta != 'N' ){
        window.alert('Opção Inválida!')
        var resposta = window.prompt('Quer cadastrar mais uma pessoa? [S/N] ').toLocaleUpperCase().charAt(0).trim()
    }
    if(resposta == 'N') {
        window.alert('Volte Sempre!')
        break
    }
}

for(pessoa in pessoas){
    window.document.write(`${pessoas[pessoa].Nome} tem ${pessoas[pessoa].Idade} anos.</br>`)
}