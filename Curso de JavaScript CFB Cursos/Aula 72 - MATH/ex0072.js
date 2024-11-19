let mat = document.getElementById('mat')

mat.innerHTML += `<strong>E:</strong> ${Math.E}.<br>`
mat.innerHTML += `<strong>PI:</strong> ${Math.PI}.<br>`
mat.innerHTML += `<strong>Número aleatório decimal (0 - 10):</strong> ${Math.random()*10}.<br>`
mat.innerHTML += `<strong>Número aleatório inteiro (0 - 10):</strong> ${Math.floor(Math.random()*10)}.<br>`

mat.innerHTML += `<br>Teste outros:<br><br>`

mat.innerHTML += `${Math.pow(10, 3)}<br>`