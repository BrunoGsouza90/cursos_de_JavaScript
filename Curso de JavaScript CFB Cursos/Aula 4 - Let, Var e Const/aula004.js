"use strict"

if(true){
    var nome = "Bruno"
    let nome1 = "Maria"
}

console.log(nome)
/*console.log(nome1)  Não irá funcionar pois a variável "nome1" vem de let 
                    
    está fora dentro de outro bloco. */

function teste(){
    let nome2 = "Bruno"
    var nome3 = "Eduardo"
    if(true){
        console.log(`Dentro de teste: ${nome2} !`)
    }
    console.log(`Dentro de outro teste: ${nome2} !`)
}

teste()

/* console.log(nome3)   Erro pois a variável "nome3" está dentro de uma
                            
    função. */

const curso = "CFB Cursos"

console.log(curso)

/* const curso = "Curso de JavaScript"      Erro pois não é possível alterar
                                                
    o valor de uma constante. */