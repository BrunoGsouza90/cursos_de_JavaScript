let valor = window.document.querySelector('#valor')
let botao_zerar = window.document.querySelector('#botao_zerar')
let botao_0 = window.document.querySelector('#botao_0')
let botao_1 = window.document.querySelector('#botao_1')
let botao_2 = window.document.querySelector('#botao_2')
let botao_3 = window.document.querySelector('#botao_3')
let botao_4 = window.document.querySelector('#botao_4')
let botao_5 = window.document.querySelector('#botao_5')
let botao_6 = window.document.querySelector('#botao_6')
let botao_7 = window.document.querySelector('#botao_7')
let botao_8 = window.document.querySelector('#botao_8')
let botao_9 = window.document.querySelector('#botao_9')

let botao_apagar = window.document.querySelector('#botao_apagar')
let botao_dividir = window.document.querySelector('#botao_dividir')
let botao_multiplicar = window.document.querySelector('#botao_multiplicar')
let botao_subtrair = window.document.querySelector('#botao_subtrair')
let botao_somar = window.document.querySelector('#botao_somar')
let botao_total = window.document.querySelector('#botao_total')

botao_zerar.addEventListener('click', ()=>{
    valor.innerHTML = '0'
})

botao_0.addEventListener('click', ()=>{
    if(valor.innerHTML == '0'){
        valor.innerHTML = 0
    } else {
        valor.innerHTML += 0
    }
})

botao_1.addEventListener('click', ()=>{
    if(valor.innerHTML == '0'){
        valor.innerHTML = 1
    } else {
        valor.innerHTML += 1
    }
})

botao_2.addEventListener('click', ()=>{
    if(valor.innerHTML == '0'){
        valor.innerHTML = 2
    } else {
        valor.innerHTML += 2
    }
})

botao_3.addEventListener('click', ()=>{
    if(valor.innerHTML == '0'){
        valor.innerHTML = 3
    } else {
        valor.innerHTML += 3
    }
})

botao_4.addEventListener('click', ()=>{
    if(valor.innerHTML == '0'){
        valor.innerHTML = 4
    } else {
        valor.innerHTML += 4
    }
})

botao_5.addEventListener('click', ()=>{
    if(valor.innerHTML == '0'){
        valor.innerHTML = 5
    } else {
        valor.innerHTML += 5
    }
})

botao_6.addEventListener('click', ()=>{
    if(valor.innerHTML == '0'){
        valor.innerHTML = 6
    } else {
        valor.innerHTML += 6
    }
})

botao_7.addEventListener('click', ()=>{
    if(valor.innerHTML == '0'){
        valor.innerHTML = 7
    } else {
        valor.innerHTML += 7
    }
})

botao_8.addEventListener('click', ()=>{
    if(valor.innerHTML == '0'){
        valor.innerHTML = 8
    } else {
        valor.innerHTML += 8
    }
})

botao_9.addEventListener('click', ()=>{
    if(valor.innerHTML == '0'){
        valor.innerHTML = 9
    } else {
        valor.innerHTML += 9
    }
})

botao_virgula.addEventListener('click', ()=>{
    let verdadeiro = false
    let quantidade_virgulas = 0
    for(v of valor.innerHTML){
        if(v == ','){
            quantidade_virgulas += 1
        }
    }

    for(v of valor.innerHTML){
        if(v == '+'){
            verdadeiro == true
        } else if(v == '-'){
            verdadeiro == true
        } else if(v == 'x'){
            verdadeiro == true
        } else if(v == '÷'){
            verdadeiro == true
        }
    }

    if(verdadeiro == false && valor.innerHTML.slice(-1) != ',' && quantidade_virgulas < 2){
        valor.innerHTML += ','
    } else if(verdadeiro == true && quantidade_virgulas < 2){
        valor.innerHTML += ','
    }

})

botao_apagar.addEventListener('click', ()=>{
    if(valor.innerHTML.length == '1'){
        valor.innerHTML = '0'
    } else {
        valor.innerHTML = valor.innerHTML.slice(0, -1)
    }
})

botao_somar.addEventListener('click', ()=>{

    let numeros = valor.innerHTML
    let p1 = ''
    let p2 = ''
    let soma = 0

    let verdadeiro = false
    let operador = ''

    for(v of valor.innerHTML){
        if((v == '+' || v == 'x' || v == '-' || v == '÷') && valor.innerHTML.slice(-1) != '+' && valor.innerHTML.slice(-1) != '-' && valor.innerHTML.slice(-1) != 'x' && valor.innerHTML.slice(-1) != '÷'){
            verdadeiro = true
            operador = v
        }
    }

    if(verdadeiro == true){
        if(operador == '+'){
            [p1, p2] = numeros.split('+')
            soma = parseFloat(p1.replace(',', '.')) + parseFloat(p2.replace(',', '.'))
        } else if(operador == '-'){
            [p1, p2] = numeros.split('-')
            soma = parseFloat(p1.replace(',', '.')) - parseFloat(p2.replace(',', '.'))
        } else if(operador == 'x'){
            [p1, p2] = numeros.split('x')
            soma = parseFloat(p1.replace(',', '.')) * parseFloat(p2.replace(',', '.'))
        } else if(operador == '÷'){
            [p1, p2] = numeros.split('÷')
            soma = parseFloat(p1.replace(',', '.')) / parseFloat(p2.replace(',', '.'))
        }
        valor.innerHTML = String(soma)
    }

    if(valor.innerHTML.slice(-1) != '÷' && valor.innerHTML.slice(-1) != 'x' && valor.innerHTML.slice(-1) != '+' && valor.innerHTML.slice(-1) != '-' && valor.innerHTML.slice(-1) != '+' && valor.innerHTML.slice(-1) != ','){
        valor.innerHTML += '+'
    } else if (valor.innerHTML.slice(-1) == '+'){
        valor.innerHTML = valor.innerHTML.slice(0, -1)
        valor.innerHTML += '+'
    } else if (valor.innerHTML.slice(-1) == '-'){
        valor.innerHTML = valor.innerHTML.slice(0, -1)
        valor.innerHTML += '+'
    } else if (valor.innerHTML.slice(-1) == 'x'){
        valor.innerHTML = valor.innerHTML.slice(0, -1)
        valor.innerHTML += '+'
    } else if (valor.innerHTML.slice(-1) == '÷'){
        valor.innerHTML = valor.innerHTML.slice(0, -1)
        valor.innerHTML += '+'
    } else if (valor.innerHTML.slice(-1) == ','){
        valor.innerHTML = valor.innerHTML.slice(0, -1)
        valor.innerHTML += '+'
    }
})

botao_subtrair.addEventListener('click', ()=>{
    let numeros = valor.innerHTML
    let p1 = ''
    let p2 = ''
    let soma = 0

    let verdadeiro = false
    let operador = ''

    for(v of valor.innerHTML){
        if((v == '+' || v == 'x' || v == '-' || v == '÷') && valor.innerHTML.slice(-1) != '+' && valor.innerHTML.slice(-1) != '-' && valor.innerHTML.slice(-1) != 'x' && valor.innerHTML.slice(-1) != '÷'){
            verdadeiro = true
            operador = v
        }
    }

    if(verdadeiro == true){
        if(operador == '+'){
            [p1, p2] = numeros.split('+')
            soma = Number(p1.replace(',', '.')) + Number(p2.replace(',', '.'))
        } else if(operador == '-'){
            [p1, p2] = numeros.split('-')
            soma = Number(p1.replace(',', '.')) - Number(p2.replace(',', '.'))
        } else if(operador == 'x'){
            [p1, p2] = numeros.split('x')
            soma = Number(p1.replace(',', '.')) * Number(p2.replace(',', '.'))
        } else if(operador == '÷'){
            [p1, p2] = numeros.split('÷')
            soma = Number(p1.replace(',', '.')) / Number(p2.replace(',', '.'))
        }
        valor.innerHTML = String(soma)
    }

    if(valor.innerHTML.slice(-1) != '÷' && valor.innerHTML.slice(-1) != 'x' && valor.innerHTML.slice(-1) != '+' && valor.innerHTML.slice(-1) != '-' && valor.innerHTML.slice(-1) != '+' && valor.innerHTML.slice(-1) != ','){
        valor.innerHTML += '-'
    } else if (valor.innerHTML.slice(-1) == '+'){
        valor.innerHTML = valor.innerHTML.slice(0, -1)
        valor.innerHTML += '-'
    } else if (valor.innerHTML.slice(-1) == '-'){
        valor.innerHTML = valor.innerHTML.slice(0, -1)
        valor.innerHTML += '-'
    } else if (valor.innerHTML.slice(-1) == 'x'){
        valor.innerHTML = valor.innerHTML.slice(0, -1)
        valor.innerHTML += '-'
    } else if (valor.innerHTML.slice(-1) == '÷'){
        valor.innerHTML = valor.innerHTML.slice(0, -1)
        valor.innerHTML += '-'
    } else if (valor.innerHTML.slice(-1) == ','){
        valor.innerHTML = valor.innerHTML.slice(0, -1)
        valor.innerHTML += '-'
    }
})

botao_multiplicar.addEventListener('click', ()=>{
    let numeros = valor.innerHTML
    let p1 = ''
    let p2 = ''
    let soma = 0

    let verdadeiro = false
    let operador = ''

    for(v of valor.innerHTML){
        if((v == '+' || v == 'x' || v == '-' || v == '÷') && valor.innerHTML.slice(-1) != '+' && valor.innerHTML.slice(-1) != '-' && valor.innerHTML.slice(-1) != 'x' && valor.innerHTML.slice(-1) != '÷'){
            verdadeiro = true
            operador = v
        }
    }

    if(verdadeiro == true){
        if(operador == '+'){
            [p1, p2] = numeros.split('+')
            soma = Number(p1.replace(',', '.').replace(',', '.').replace(',', '.')) + Number(p2.replace(',', '.').replace(',', '.').replace(',', '.'))
        } else if(operador == '-'){
            [p1, p2] = numeros.split('-')
            soma = Number(p1.replace(',', '.').replace(',', '.').replace(',', '.')) - Number(p2.replace(',', '.').replace(',', '.').replace(',', '.'))
        } else if(operador == 'x'){
            [p1, p2] = numeros.split('x')
            soma = Number(p1.replace(',', '.').replace(',', '.').replace(',', '.')) * Number(p2.replace(',', '.').replace(',', '.').replace(',', '.'))
        } else if(operador == '÷'){
            [p1, p2] = numeros.split('÷')
            soma = Number(p1.replace(',', '.').replace(',', '.').replace(',', '.')) / Number(p2.replace(',', '.').replace(',', '.').replace(',', '.'))
        }
        valor.innerHTML = String(soma)
    }

    if(valor.innerHTML.slice(-1) != '÷' && valor.innerHTML.slice(-1) != 'x' && valor.innerHTML.slice(-1) != '+' && valor.innerHTML.slice(-1) != '-' && valor.innerHTML.slice(-1) != '+' && valor.innerHTML.slice(-1) != ','){
        valor.innerHTML += 'x'
    } else if (valor.innerHTML.slice(-1) == '+'){
        valor.innerHTML = valor.innerHTML.slice(0, -1)
        valor.innerHTML += 'x'
    } else if (valor.innerHTML.slice(-1) == '-'){
        valor.innerHTML = valor.innerHTML.slice(0, -1)
        valor.innerHTML += 'x'
    } else if (valor.innerHTML.slice(-1) == 'x'){
        valor.innerHTML = valor.innerHTML.slice(0, -1)
        valor.innerHTML += 'x'
    } else if (valor.innerHTML.slice(-1) == '÷'){
        valor.innerHTML = valor.innerHTML.slice(0, -1)
        valor.innerHTML += 'x'
    } else if (valor.innerHTML.slice(-1) == ','){
        valor.innerHTML = valor.innerHTML.slice(0, -1)
        valor.innerHTML += 'x'
    }
})

botao_dividir.addEventListener('click', ()=>{
    let numeros = valor.innerHTML
    let p1 = ''
    let p2 = ''
    let soma = 0

    let verdadeiro = false
    let operador = ''

    for(v of valor.innerHTML){
        if((v == '+' || v == 'x' || v == '-' || v == '÷') && valor.innerHTML.slice(-1) != '+' && valor.innerHTML.slice(-1) != '-' && valor.innerHTML.slice(-1) != 'x' && valor.innerHTML.slice(-1) != '÷'){
            verdadeiro = true
            operador = v
        }
    }

    if(verdadeiro == true){
        if(operador == '+'){
            [p1, p2] = numeros.split('+')
            soma = Number(p1.replace(',', '.').replace(',', '.')) + Number(p2.replace(',', '.').replace(',', '.'))
        } else if(operador == '-'){
            [p1, p2] = numeros.split('-')
            soma = Number(p1.replace(',', '.').replace(',', '.')) - Number(p2.replace(',', '.').replace(',', '.'))
        } else if(operador == 'x'){
            [p1, p2] = numeros.split('x')
            soma = Number(p1.replace(',', '.').replace(',', '.')) * Number(p2.replace(',', '.').replace(',', '.'))
        } else if(operador == '÷'){
            [p1, p2] = numeros.split('÷')
            soma = Number(p1.replace(',', '.').replace(',', '.')) / Number(p2.replace(',', '.').replace(',', '.'))
        }
        valor.innerHTML = String(soma)
    }

    if(valor.innerHTML.slice(-1) != '÷' && valor.innerHTML.slice(-1) != 'x' && valor.innerHTML.slice(-1) != '+' && valor.innerHTML.slice(-1) != '-' && valor.innerHTML.slice(-1) != '+' && valor.innerHTML.slice(-1) != ','){
        valor.innerHTML += '÷'
    } else if (valor.innerHTML.slice(-1) == '+'){
        valor.innerHTML = valor.innerHTML.slice(0, -1)
        valor.innerHTML += '÷'
    } else if (valor.innerHTML.slice(-1) == '-'){
        valor.innerHTML = valor.innerHTML.slice(0, -1)
        valor.innerHTML += '÷'
    } else if (valor.innerHTML.slice(-1) == 'x'){
        valor.innerHTML = valor.innerHTML.slice(0, -1)
        valor.innerHTML += '÷'
    } else if (valor.innerHTML.slice(-1) == '÷'){
        valor.innerHTML = valor.innerHTML.slice(0, -1)
        valor.innerHTML += '÷'
    } else if (valor.innerHTML.slice(-1) == ','){
        valor.innerHTML = valor.innerHTML.slice(0, -1)
        valor.innerHTML += '÷'
    }
})

botao_total.addEventListener('click', ()=>{
    let numeros = valor.innerHTML
    let p1 = ''
    let p2 = ''
    let soma = 0

    let verdadeiro = false
    let operador = ''

    for(v of valor.innerHTML){
        if((v == '+' || v == 'x' || v == '-' || v == '÷') && valor.innerHTML.slice(-1) != '+' && valor.innerHTML.slice(-1) != '-' && valor.innerHTML.slice(-1) != 'x' && valor.innerHTML.slice(-1) != '÷'){
            verdadeiro = true
            operador = v
        }
    }

    if(verdadeiro == true){
        if(operador == '+'){
            [p1, p2] = numeros.split('+')
            soma = Number(p1.replace(',', '.')) + Number(p2.replace(',', '.'))
        } else if(operador == '-'){
            [p1, p2] = numeros.split('-')
            soma = Number(p1.replace(',', '.')) - Number(p2.replace(',', '.'))
        } else if(operador == 'x'){
            [p1, p2] = numeros.split('x')
            soma = Number(p1.replace(',', '.')) * Number(p2.replace(',', '.'))
        } else if(operador == '÷'){
            [p1, p2] = numeros.split('÷')
            soma = Number(p1.replace(',', '.')) / Number(p2.replace(',', '.'))
        }
        valor.innerHTML = String(soma)
    }
})