var num = [10,20,30,40,50]

for(i=0; i < num.length; i++){
    console.log(i)
}

console.log('')

for(i=0; i < num.length; i++){
    console.log(num[i])
}

console.log('')

for(n in num){
    console.log(n)
}

console.log('')

for(n in num){
    console.log(num[n])
}

console.log('')

for(n of num){
    console.log(n)
}

console.log('')

const objs=document.getElementsByTagName("div")

for(o of objs){
    console.log(o)
}

console.log('')

for(o of objs){
    console.log(o.innerHTML)
}

console.log('')

for(o of objs){
    console.log(o.innerHTML = 'Cursos')
}

console.log('')

for(o in objs){
    console.log(objs[o].innerHTML)
}

console.log('')

for(o in objs){
    console.log(objs[o].innerHTML = 'Bruno')
}