function somar_Dois(num){
    return num + 2
}

lista = [1,2,3,4,5,6].map(somar_Dois)
console.log(lista)

var multiplicar_Dois = (num) => {
    return num * 2
}

console.log([2,4,6,8,10].map(multiplicar_Dois))