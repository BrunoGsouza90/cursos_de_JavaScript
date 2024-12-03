let paragrafo = document.querySelector('#paragrafo')

let nome = new String('Bruno Gonçalves de Souza')

paragrafo.innerHTML += `<strong>Nome:</strong> ${nome}.<br>`

paragrafo.innerHTML += `<strong>Posição inicial do sobrenome:</strong> ${nome.search('Gonçalves')}.<br>`

paragrafo.innerHTML += `<strong>Mudamos o comportamente da posição "search" retirando o Case Sensitive:</strong> ${nome.search(/gonçalves/i)}.<br>`

paragrafo.innerHTML += `<strong>Retornando todos os caractéres na string:</strong> ${nome.match(/o/g)}.<br>`

paragrafo.innerHTML += `<strong>Expressão Regular no "replace":</strong> ${nome.replace(/gonçalves/i, 'Pinho')}.<br>`

// =========================================================

nome = 'Bruno Pinho Campos 1978'
let email = 'bruno@bruno.com.br'

paragrafo.innerHTML += `<strong>Padrão em Expressão Regular:</strong> ${nome.match(/[OA]/ig)}.<br>`

paragrafo.innerHTML += `<strong>Retornando caractéres do "a" até o "m" e do "0" até o "9":</strong> ${nome.match(/[a-m | 0-9]/ig)}.<br>`

paragrafo.innerHTML += `<strong>Retorna os números:</strong> ${nome.match(/\d/ig)}.<br>`

paragrafo.innerHTML += `<strong>Retorna os espaços:</strong> ${nome.match(/\s/ig)}.<br>`

paragrafo.innerHTML += `<strong>Retorna os caractéres alfanuméricos:</strong> ${nome.match(/\bCampos/ig)}.<br>`

nome = 'Brunooo Pinhooo Campooosss'

paragrafo.innerHTML += `<strong>Buscando todas as letras de cada palavra da String:</strong> ${nome.match(/o+|s+/ig)}.<br>`

let numeros = '1,  10, 100, 1000'

paragrafo.innerHTML += `<strong>Quantificador geral:</strong> ${numeros.match(/10*/ig)}.<br>`

paragrafo.innerHTML += `: ${numeros.match(/10?/ig)}.<br>`