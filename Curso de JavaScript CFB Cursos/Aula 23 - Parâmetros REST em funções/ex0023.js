function soma(...valores){
    return valores.length
}

console.log(soma(10,5,2,15,8))

function soma1(...valores){
    let res = 0
    for(i = 0; i < valores.length; i++){
        res +=  valores[i]
    }
    return res
}

console.log(soma1(10,5,2,15,8))

function soma2(...valores){
    let res = 0
    for(valor in valores){
        res += valores[valor]
    }
    return res
}

console.log(soma2(10,5,2,15,8))

function soma2(...valores){
    let res = 0
    for(valor of valores){
        res += valor
    }
    return res
}

console.log(soma2(10,5,2,15,8))