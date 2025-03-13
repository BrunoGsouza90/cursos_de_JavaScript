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

paragrafo.innerHTML += `<strong>Posição da última letra "a":</strong> ${nome1.lastIndexOf('a')}.<br>`

// ===========================================================

nome = new String('Bruno')
nome1 = new String('Bruno')

paragrafo.innerHTML += `<br><strong>Comparação de Objetos Strings:</strong> ${nome.localeCompare(nome1) == 0 ? 'Strings iguais.' : 'Strings diferentes.'}.<br>`

paragrafo.innerHTML += `<strong>Substituindo conteúdo da String:</strong> ${nome.replace('Bruno', 'Bruno Gonçalves de Souza')}.<br>`

paragrafo.innerHTML += `<strong>Posição da Letra "B" com Expressão Regular:</strong> ${nome.search('B')}.<br>`

nome = 'Bruno Gonçalves de Souza'

paragrafo.innerHTML += `<strong>Cortando a String:</strong> ${nome.slice(6, 15)}.<br>`

paragrafo.innerHTML += `<strong>Divisão do nome por espaço:</strong> ${nome.split(' ')}.<br>`

// ===========================================================

paragrafo.innerHTML += `<strong>Parte de uma String:</strong> ${nome.substring(0,5)}.<br>`

paragrafo.innerHTML += `<strong>Nome em letras maísculas:</strong> ${nome.toUpperCase()}.<br>`

paragrafo.innerHTML += `<strong>Nome em letras minúsculas:</strong> ${nome.toLowerCase()}.<br>`

paragrafo.innerHTML += `<strong>Valor da variável String:</strong> ${nome.valueOf()}.<br>`

let num = 10

paragrafo.innerHTML += `<strong>Conversão de um valor para o tipo String:</strong> ${typeof(num.toString())}.<br>`

// ==========================================================

nome = 'Bruno Gonçalves de Souza'

paragrafo.innerHTML += `<strong>Verifica se a String começa com um determinado valor:</strong> ${nome.startsWith('Bruno') ? 'Sim' : 'Não'}.<br>`

paragrafo.innerHTML += `<strong>Verifica se a String termina com um determiando valor:</strong> ${nome.endsWith('Souza') ? 'Sim' : 'Não'}.<br>`

paragrafo.innerHTML += `<strong>Verifica se a String compõem determinado valor:</strong> ${nome.includes('Gonçalves') ? 'Sim' : 'Não'}.<br>`

paragrafo.innerHTML += `<strong>Repetindo a String:</strong> ${nome.repeat(4)}.<br>`

paragrafo.innerHTML += `<strong>Retorna a tecla de determinado "CodePoint":</strong> ${String.fromCodePoint(97)}.<br>`