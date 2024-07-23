var soma = (...valores) => {
    var somar = valores => {
        var resultado = 0
        for(valor of valores){
            resultado += valor
        }
        return resultado
    }
    return somar(valores)
}

console.log(soma(5,5,5,5))