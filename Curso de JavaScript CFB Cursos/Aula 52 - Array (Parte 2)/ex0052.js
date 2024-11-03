let valores = [2,2,2,2]

let caixa = window.document.querySelector('#caixa')
let item = window.document.createElement('p')
item.setAttribute('style', 'text-align:center; font-size: 1.3em;')
caixa.appendChild(item)

const operacao = [
    (valor)=>{
        let res = 0
        for(v in valor){
            res += valor[v]
        }

        return res
    },

    (valor)=>{
        let res = 1
        for(v of valor){
            res *= v
        }

        return res
    },

    (valor)=>{
        for(v in valor){
            console.log(valor[v])
        }
    }
]

item.innerHTML = operacao[0](valores)