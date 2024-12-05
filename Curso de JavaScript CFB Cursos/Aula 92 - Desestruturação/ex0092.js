let paragrafo = document.getElementById('paragrafo')

let a, b, c, d

({a, b, c, d} = {
    a: 'Verde', 
    b: 'Amarelo', 
    c: 'Azul', 
    d: 'Branco'
})

paragrafo.innerHTML += `${a}.<br>`
paragrafo.innerHTML += `${b}.<br>`
paragrafo.innerHTML += `${c}.<br>`
paragrafo.innerHTML += `${d}.<br><br>`

let [e, f = 0, g = 0, h = 0] = [10]

paragrafo.innerHTML += `${e}.<br>`
paragrafo.innerHTML += `${f}.<br>`
paragrafo.innerHTML += `${g}.<br>`
paragrafo.innerHTML += `${h}.<br><br>`

let numeros = () =>{

    return [10, 20, 30, 40]

}

let [i, j, k, l] = numeros()

paragrafo.innerHTML += `${i}.<br>`
paragrafo.innerHTML += `${j}.<br>`
paragrafo.innerHTML += `${k}.<br>`
paragrafo.innerHTML += `${l}.<br><br>`

// ===========================================================

numeros = [10 , 20, 30, 40, 50, 60, 70, 80, 90];
[a, b, c, ...d] = numeros

paragrafo.innerHTML += `${a}.<br>`
paragrafo.innerHTML += `${b}.<br>`
paragrafo.innerHTML += `${c}.<br>`
paragrafo.innerHTML += `${d}.<br><br>`

let nome, canal

({nome, canal} = {

    nome: 'Bruno',
    canal: 'CFB Cursos'

})

paragrafo.innerHTML += `${nome}.<br>`
paragrafo.innerHTML += `${canal}.<br>`