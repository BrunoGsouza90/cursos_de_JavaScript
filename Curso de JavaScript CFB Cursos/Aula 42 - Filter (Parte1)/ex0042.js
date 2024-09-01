const idades = [15,21,30,17,18,44,12,50]

maior = idades.filter((valor)=>{
    if(valor >= 18){
        return valor
    }
})

console.log(idades)
console.log(maior)