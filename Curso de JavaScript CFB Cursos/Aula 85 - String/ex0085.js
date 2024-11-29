let paragrafo = document.querySelector('#paragrafo')

let nome = 'Bruno'

paragrafo.innerHTML += `<strong>Tipo:</strong> ${typeof(nome)}.<br>`

let nome1 = new String('Bruno Gonçalves de Souza')

paragrafo.innerHTML += `<strong>Nome:</strong> ${nome} - ${nome1}.<br>`

paragrafo.innerHTML += `<strong>1º Posição do nome:</strong> ${nome[0]}.<br>`

paragrafo.innerHTML += `<strong>Caracter na 2º Posição:</strong> ${nome.charAt(1)}.<br>`

let a = 'a'

paragrafo.innerHTML += `<strong>Código do caracter "a":</strong> ${a.charCodeAt(0)}.<br>`

let canal = new String('CFB ')
let canal1 =  new String('Cursos')

paragrafo.innerHTML += `<strong>Strings concactenadas:</strong> ${canal.concat(canal1)}.<br>`

paragrafo.innerHTML += `<strong>Posição da 1º Letra "a":</strong> ${nome1.indexOf('a')}.<br>`

paragrafo.innerHTML += `<strong>Posição da última letra "a":</strong> ${nome1.lastIndexOf('a')}`