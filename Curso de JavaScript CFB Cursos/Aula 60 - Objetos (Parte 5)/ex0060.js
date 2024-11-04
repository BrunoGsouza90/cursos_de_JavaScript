let caixa = document.querySelector('#caixa')
let paragrafo = document.createElement('p')
caixa.appendChild(paragrafo)
paragrafo.setAttribute('style', 'text-align:center;')

let pessoas = [
    {
        nome:'Bruno',
        idade:'25 anos'
    },
    {
        nome:'Raiani',
        idade:'24 anos'
    },
    {
        nome:'Barnabé',
        idade:'55 anos'
    }
]

for(pessoa in pessoas){
    paragrafo.innerHTML += `<span style = "color: green;"><strong>${Number(pessoa) + 1}º Pessoa:</strong></span><br><br>`
    paragrafo.innerHTML += `Nome: ${pessoas[pessoa].nome}<br>`
    paragrafo.innerHTML += `Idade: ${pessoas[pessoa].idade}<br><br>`
}