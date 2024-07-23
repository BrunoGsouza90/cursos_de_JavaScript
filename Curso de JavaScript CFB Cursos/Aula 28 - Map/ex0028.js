var cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React']

cursos.map((elemento, posicao) => {
    console.log(`Curso ${elemento} - Posição do curso ${posicao}!`)
})

var curso = cursos.map((elemento, posicao) => {
    return `<div>${elemento}</div>`
})

console.log(curso)