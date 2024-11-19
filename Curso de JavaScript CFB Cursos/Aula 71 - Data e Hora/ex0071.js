let paragrafo = document.querySelector('#paragrafo')
let relogio = document.querySelector('#relogio')
let body = document.querySelector('body')
body.style = 'background-color: white;'
let alarme = 'off'
let ativar = document.getElementById('ativar')
let desativar = document.getElementById('desativar')
let hora_alarme = document.getElementById('hora_alarme')
let audio_alarme = document.getElementById('audio_alarme')
let hora = ''
let minuto = ''
let segundo = ''

let data = new Date()
let json = data.toJSON()
let date = data.getDate()

let dia = data.getDay()
switch(dia){
    case 0:
        dia = 'Domingo'
        break
    case 1:
        dia = 'Segunda-Feira'
        break
    case 2:
        dia = 'Terça-Feira'
        break
    case 3:
        dia = 'Quarta-Feira'
        break
    case 4:
        dia = 'Quinta-Feira'
        break
    case 5:
        dia = 'Sexta-Feira'
        break
    case 6:
        dia = 'Sabádo'
        break
    default:
        dia = 'Dia Inválido'
        
}

let ano = data.getFullYear()
let horas = data.getHours()

/* Teste outros aqui... */
let outros = data.toString()

paragrafo.innerHTML += `<strong>JSON:</strong> ${json}.<br>`
paragrafo.innerHTML += `<strong>DIA DO MÊS:</strong> ${date}.<br>`
paragrafo.innerHTML += `<strong>DIA DA SEMANA: </strong> ${dia}.<br>`
paragrafo.innerHTML += `<strong>ANO: </strong> ${ano}.<br>`
paragrafo.innerHTML += `<strong>HORAS: </strong> ${horas}.<br><br>`
paragrafo.innerHTML += `<strong>Outros: </strong> ${outros}.<br>`

let atualizarHora = () =>{
    data = new Date()
    let relogio_hora = data.toLocaleTimeString()
    relogio.innerHTML = relogio_hora
}

ativar.addEventListener('click', ()=>{

    let erro = false

    hora = window.prompt('Horas?')
    if(hora.length == 1){
        hora = `0${hora}`
    } else if(hora.length > 2 || hora.length < 1){
        erro = true
        hora = 0
    }
    minuto = window.prompt('Minutos?')
    if(minuto.length == 1){
        minuto = `0${minuto}`
    } else if(minuto.length > 2 || minuto.length < 1){
        erro = true
        minuto = 0
    }
    segundo = window.prompt('Segundos?')
    if(segundo.length == 1){
        segundo = `0${segundo}`
    } else if(segundo.length > 2 || segundo.length < 1){
        erro = true
        minuto = 0
    }

    horario = `${hora}:${minuto}:${segundo}`

    if(erro == true){
        hora_alarme.innerHTML = `<span style="color: red;">Horário Inválido.</span>`
    } else if (erro == false){
        hora_alarme.innerHTML = `O alarme será ativado ás: <span style="color: green;"><strong>${hora}:${minuto}:${segundo}</strong></span>.`
    }
    
})

desativar.addEventListener('click', ()=>{

    alarme = 'off'
    hora_alarme.innerHTML = ''
    audio_alarme.pause()
    body.style.background = 'white'

})

let atualizarCor = () =>{

    data = new Date()

    if(data.toLocaleTimeString() == horario){
        alarme = 'on'
    }

    if(alarme == 'on'){
        audio_alarme.play()
        if(body.style.background == 'rgba(0, 128, 0, 0.5)'){
            body.style.background = 'rgba(255, 0, 0, 0.397)'
        } else if(body.style.background = 'rgba(255, 0, 0, 0.397)'){
            body.style.background = 'rgba(0, 128, 0, 0.5)'
        }
    }
}

setInterval(atualizarHora, 1000)

setInterval(atualizarCor, 1500)