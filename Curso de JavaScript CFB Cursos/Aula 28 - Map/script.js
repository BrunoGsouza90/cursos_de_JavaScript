var elemento = window.document.getElementsByTagName('div')
var elemento = [...elemento]
elemento.map((elemento, posicao) => {
    console.log(elemento.innerHTML)
})
console.log(elemento)

var elemento = window.document.getElementsByTagName('div')
var valores = Array.prototype.map.call(elemento, ({innerHTML}) => 
    innerHTML
)

console.log(valores)

var converterInt = (elemento) => parseInt(elemento)

var num = ['1', '2', '3', '4', '5'].map(converterInt)

console.log(num)

var dobrar = (elemento) => elemento * 2

var num = ['1', '2', '3', '4', '5'].map(dobrar)

console.log(num)
