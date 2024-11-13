let caixa = document.querySelector('#caixa')
let paragrafo = document.createElement('p')
paragrafo.setAttribute('style', 'text-align: center;')

caixa.appendChild(paragrafo)

let mapa = new Map()

mapa.set("curso", "JavaScript")
mapa.set(10, "CFB Cursos")
mapa.set(1, 100)
mapa.set("canal", 200)

console.log(mapa)

mapa.forEach((elemento, passo)=>{
    paragrafo.innerHTML += `${elemento} <br>`
})

/* Imprimindo um conteúdo. */
paragrafo.innerHTML = mapa.get("curso")

/* Verificando a existência do conteúdo. */
if(mapa.has("canal")){
    paragrafo.innerHTML = `Essa chave existe na coleção e é:`
    paragrafo.innerHTML += `<br><br>${mapa.get("canal")}`
} else{
    paragrafo.innerHTML = `Este elemento não existe na coleção!`
}

/* Verificando a quantidade de elementos. */
paragrafo.innerHTML = `O tamanho da coleção é <span style="color: red;"><strong>${mapa.size}</strong></span> !`

/* Deletando elementos. */
mapa.delete("curso")
paragrafo.innerHTML = mapa.size

/* Imprimindo as chaves dos elementos. */
paragrafo.innerHTML = `Chaves:<br><br>`
for(chave of mapa.keys()){
    paragrafo.innerHTML += `${chave} <br>`
}

/* Imprimindo os valores dos elementos. */
paragrafo.innerHTML = `Valores: <br><br>`
for(valor of mapa.values()){
    paragrafo.innerHTML += `${valor}<br>`
}

/* Imprimindo as chaves e valores dos elementos. */
paragrafo.innerHTML = `Chaves e Valores:<br><br>`
for(let [chave, valor] of mapa.entries()){
    paragrafo.innerHTML += `${chave} - ${valor}<br>`
}