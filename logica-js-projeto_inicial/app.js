alert("Boas-vindas ao jogo do número secreto!");
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
// console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Digite um número entre 1 e ${numeroMaximo}: `);

    if (numeroSecreto == chute) {
        break;
    } else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}.`);
        } else {
            alert(`O número secreto é menor que ${chute}.`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";    // operador ternário

alert(`Isso aí! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}!`);

