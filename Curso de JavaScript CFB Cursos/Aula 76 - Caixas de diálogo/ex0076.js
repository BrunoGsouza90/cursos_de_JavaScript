const btn_alert = document.getElementById("btn_alert")
const btn_confirm = document.getElementById("btn_confirm")
const btn_prompt = document.getElementById("btn_prompt")

btn_alert.addEventListener('click', ()=>{

    alert('Está uma caixa de alerta!')

})

btn_confirm.addEventListener('click', ()=>{

    confirm('Está uma caixa e confirmação. Certo?')

})

btn_prompt.addEventListener('click', ()=>{

    let nome = prompt('Qual é o seu nome?')

    alert(`Essa era uma caixa de prompt ${nome}.`)

})