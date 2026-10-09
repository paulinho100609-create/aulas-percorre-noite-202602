let nome = "Paulo"
let soma = 5 + 5

// Exibição  do valor armazenado dos variáveis
console.log(nome);
console.log(soma);

// 
if (soma > 5){
    console.log("A soma é maior que 5");
}
else{
    console.log("A soma é menor que 5");

    //laço de repetição  
}
for ( let i = 0; i < 10; i++) {
    console.log("O valor de i é: " + i);
}

// função se refere a uma lógica que é repetida mais de uma vez, mas diferente de um laço de repetição a função é para ser invocada quando o programador escolher, independentes de um contador .
function somador(a, b) {
    return a + b
}

// A função pode ser invocada para passar o valor a uma variavel, como no exemplo abaixo. observe que a e b da criação da função foram substituidas pelos valores a ser somados, assim como variaveis da matemarica 
let total = somador(5, 4)
console.log(total);

let total12 = somador(6, 7)
console.log(total12);

// A função tambem pode ser invocada dentro de outras funções ou métodos, como no exemplo abaixo, onde invocamos a função somador dentro de console.log()
console.log(somador(15, 25));