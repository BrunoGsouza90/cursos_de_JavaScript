var colocacao = 5

switch(colocacao){
    case 1:
        console.log(`1º Lugar`)
        break
    case 2:
        console.log(`2º Lugar`)
        break
    case 3:
        console.log(`3º Lugar`)
        break
    case 4: case 5: case 6:
        console.log(`Prêmio de participação!`)
        break
    default:
        console.log(`Não subiu ao pódio!`)
        break
    }