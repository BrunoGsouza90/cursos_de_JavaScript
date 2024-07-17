var texto = ''
for(let i=0; i < 10; i++){

    if(i % 2 == 0){
        console.log(`O número ${i} é Par!`)
    } else{
        console.log(`O número ${i} é Ímpar!`)
    }

    if(i < 9){
        texto += i + ', '
        }
    
        if(i == 9){
            texto += i + '.'
        }

}
console.log(texto)