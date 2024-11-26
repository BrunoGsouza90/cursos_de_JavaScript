const objetos = document.getElementById('objetos')

const computadores = [

    {

        CPU: 'i9',
        RAM: '64gb',
        HD: '2tb'
    
    },

    {

        CPU: 'i7',
        RAM: '32gb',
        HD: '2tb'
    
    },

    {

        CPU: 'i5',
        RAM: '16gb',
        HD: '1tb'
    
    }

]

for(let computador in computadores){

    computadores[computador]['Monitor'] = '22pol'
    computadores[computador]['Placa de Vídeo'] = "rtx"

    delete(computadores[computador].HD)

    objetos.innerHTML += `<br><strong style="display: block;">${Number(computador) + 1}º Computador:</strong>`

    for(let [k, v] of Object.entries(computadores[computador])){

        objetos.innerHTML += `${k} : ${v}<br>`

    }

    objetos.innerHTML += `<br>`

}