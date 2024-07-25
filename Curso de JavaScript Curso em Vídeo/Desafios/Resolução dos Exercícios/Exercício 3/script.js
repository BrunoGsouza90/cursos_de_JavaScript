function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fano.value.lenght == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('raidsex')
        var idade = ano - Number(fano.value)
        if (fsex[0].checked) {
            var genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', './Imagens/Homem bebe.png')
            } else if (idade >= 10 && idade < 50){
                img.setAttribute('src', './Imagens/Homem adulto.png')
            } else {
                img.setAttribute('src', './Imagens/Homem velho.png')
            }
        }else if (fsex[1].checked){
            var genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', './Imagens/Mulher bebe.png')
            } else if (idade >= 10 && idade < 50){
                img.setAttribute('src', './Imagens/Mulher adulta.png')
            } else {
                img.setAttribute('src', './Imagens/Mulher velha.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}