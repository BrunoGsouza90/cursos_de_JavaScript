function texto(p1){
    console.log(p1)
}

texto('Bruno')
texto(2022)
texto(5.2)

function soma(n1=0,n2=0){
    console.log(n1 + n2)
}

soma(10,5)
soma(5)

function soma(n1=5,n2=5){
    return n1 + n2
}

console.log(soma())


const num1 = 5
const num2 = 5

function soma1(n1=num1,n2=num2){
    return n1 + n2
}

console.log(soma1())