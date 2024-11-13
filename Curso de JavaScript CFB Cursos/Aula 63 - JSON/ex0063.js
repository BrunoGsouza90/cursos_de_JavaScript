let paragrafo = window.document.querySelector('#paragrafo')

let pessoa = {
    nome: 'Bruno',
    canal: 'CFB Cursos',
    curso: 'JavaScript',
    aulas: {
        aula01: 'Introdução',
        aula02: 'Variáveis',
        aula03: 'Condicional'
    }
}

// ===========================================================

let json = JSON.stringify(pessoa)
paragrafo.innerHTML += `<br><br>FORMATO JSON:<br><br>`
paragrafo.innerHTML += `${json}<br>`
console.log(json)

// ===========================================================

let texto_json = '{"nome":"Bruno","canal":"CFB Cursos","curso":"JavaScript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condicional"}}'

let objeto = JSON.parse(texto_json)
paragrafo.innerHTML += `<br><br>FORMATO OBJETO:<br><br>`

for(let [k, v] of Object.entries(objeto)){
    if(k != 'aulas'){
        paragrafo.innerHTML += `${(`${k.charAt(0).toUpperCase()}${k.slice(1).toLowerCase()}`)} : ${v}.<br>`
    }
    if(k == 'aulas'){
        paragrafo.innerHTML += `<br><br>${`${k.charAt(0).toUpperCase()}${k.slice(1).toLowerCase()}`}:<br><br>`
        for(let [b, c] of Object.entries(v)){
            paragrafo.innerHTML += `${`${b.charAt(0).toUpperCase()}${b.slice(1).toLowerCase()}`} : ${c}.<br>`
        }
    }
}

console.log(objeto)