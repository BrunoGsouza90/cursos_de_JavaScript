var funcao = function (v1, v2){
    return v1 + v2
}

console.log(funcao(10,5))

var funcao1 = function (...valores){
    resultado = 0
    for(valor of valores){
        resultado += valor
    }
    return resultado
}

console.log(funcao1(5,5,5,5))

var funcao2 = new Function("v1, v2", "return v1 + v2")

console.log(funcao2(5,5))