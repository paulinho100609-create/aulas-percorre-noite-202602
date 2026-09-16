// Avaliador de entregas

//Para estruturar decisões no código ultilizamos a família if else
// if=se
// else=senão
// else if=senão se
// o if pede uma condição e se ela for atendida, executa o código que está entre {}
// js o else serve para entender os casos que não contemple as condições anteriores
// se tivermos mais de uma condição, como no exemplo abaixo, é necessario ultilizaro else if, que nega o if anterior e propõe uma nova condição
// por exemplo, se não for nota 5, mas se for nota 4, o programa escreve melhoras! na tela

let nota = 98

if (nota == 5) {
    console.log("AURA!👀");
}
else if (nota == 4) {
    console.log("melhoras !😑" );
    
}

else if (nota == 3) {
    console.log("estava bem embalado🗣");
    
}

else if (nota == 2) {
    console.log("minha vó é melhor que você 💀");
    
}

else if (nota == 1) {
    console.log("vai trabalhar de CLT pelo resto da eternidade...👀");
    
}
else{
    console.log("INSIRA UMA NOTA VALIDA DE 1 A 5!!!");
}