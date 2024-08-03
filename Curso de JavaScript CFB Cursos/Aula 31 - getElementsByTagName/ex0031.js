var colecaoHTML = document.getElementsByTagName('div')
console.log(colecaoHTML)

var colecaoHTML = [...colecaoHTML]
colecaoHTML.map((elemento, passo) => {
    console.log(elemento)
})