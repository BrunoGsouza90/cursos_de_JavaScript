let caixa = document.querySelector('#caixa')
let paragrafo = document.createElement('p')
paragrafo.setAttribute('style', 'text-align: center;')

caixa.appendChild(paragrafo)

let mapa = new Map()

mapa.set("curso", "JavaScript")
mapa.set(10, "CFB Cursos")
mapa.set(1, 100)
mapa.set("canal", 200)

// mapa.forEach((elemento, passo)=>{
//     paragrafo.innerHTML += `${elemento} <br>`
// })

// paragrafo.innerHTML = mapa.get("curso")

// if(mapa.has("canal")){
//     paragrafo.innerHTML = `Essa chave existe na coleção e é:`
//     paragrafo.innerHTML += `<br><br>${mapa.get("canal")}`
// } else{
//     paragrafo.innerHTML = `Este elemento não existe na coleção!`
// }

// paragrafo.innerHTML = `O tamanho da coleção é <span style="color: red;"><strong>${mapa.size}</strong></span> !`

// mapa.delete("curso")
// paragrafo.innerHTML = mapa.size

// paragrafo.innerHTML = `Chaves:<br><br>`
// for(chave of mapa.keys()){
//     paragrafo.innerHTML += `${chave} <br>`
// }

// paragrafo.innerHTML = `Valores: <br><br>`
// for(valor of mapa.values()){
//     paragrafo.innerHTML += `${valor}<br>`
// }

// paragrafo.innerHTML = `Chaves e Valores:<br><br>`
// for(let [chave, valor] of mapa.entries()){
//     paragrafo.innerHTML += `${chave} - ${valor}<br>`
// }