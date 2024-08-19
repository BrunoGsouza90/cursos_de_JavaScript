function tabuada(){
    var num = window.document.getElementById('txtn')
    var tab = window.document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        var contador = 1
        tab.innerHTML = ''
        while(contador <= 10){
            var item = document.createElement('option')
            item.text = `${n} x ${contador} = ${n * contador}`
            item.value = `Valor ${contador}`
            tab.appendChild(item)
            contador++
        }
    }
}