var cursosTodos = [...window.document.getElementsByClassName('curso')]

console.log(cursosTodos)

for(var c = 0; c < cursosTodos.length; c++){
    console.log(cursosTodos[c])
}

cursosTodos.map((elemento, passo) => {
    console.log(elemento)
})