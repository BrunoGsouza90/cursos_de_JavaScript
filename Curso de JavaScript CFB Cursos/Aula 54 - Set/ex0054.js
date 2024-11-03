let caixa = document.querySelector('#caixa')
let paragrafo = document.createElement('p')
caixa.append(paragrafo)
paragrafo.setAttribute('style', 'text-align: center;')

let musicas = new Set(["musica1", "musica boa", "musica 10"])

console.log(musicas)

musicas.add("musica muito legal")
musicas.add("musica1")
musicas.add("musica1")
musicas.add("musica 10")

/* Aqui percebemos que o "Set" não permitiu entradas duplicadas. */
console.log(musicas)

paragrafo.innerHTML = `<span style="color: red;"><strong>Percorrendo o elemento:</strong></span><br><br>`
musicas.forEach((elemento, passo)=>{
    paragrafo.innerHTML += `${elemento}<br>`
})

paragrafo.innerHTML += `<br><br><span style="color: red;"><strong>Deletando um elemento:</strong></span><br><br>`
musicas.delete("musica1")
for(let musica of musicas){
    paragrafo.innerHTML += `${musica}<br>`
}