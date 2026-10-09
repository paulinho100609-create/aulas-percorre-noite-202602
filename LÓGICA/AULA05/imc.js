function imc(peso, altura) {
    return peso/ (altura * altura)
}

let peso = 78
let altura = 1.73
let imc = imc(peso, altura) 

// abaixo do peso <= 18.4
// peso normal de 18.5 a 24 .9
// sobrepeso >= 25 

if(imc <= 18.4){
    console.log("você esta abaixo do peso");
}
else if(imc <= 24.9 ){
    console.log("você esta no peso ideal");
}
    else{
        console.log("você esta acima do peso");
    }