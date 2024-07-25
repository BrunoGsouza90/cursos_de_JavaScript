var div1 = window.document.getElementById('c1')
var div2 = window.document.getElementById('c2')
var div3 = window.document.getElementById('c3')
var div4 = window.document.getElementById('c4')
var div5 = window.document.getElementById('c5')
var div6 = window.document.getElementById('c6')

var lista = [div1, div2, div3, div4, div5, div6]
console.log(div1)
console.log(div1.id)
console.log(div1.innerHTML)
div1.innerHTML = 'CFB Cursos'
console.log(lista)

for(div in lista){
    lista[div].innerHTML = 'CFB Cursos'
}

lista.map((elemento, passo) => {
    console.log(elemento)
    elemento.innerHTML = 'Alterei usando map'
})