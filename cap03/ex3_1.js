const prompt = require("prompt-sync")(); // adiciona o pacote para entrada de dados
const num1 = Number(prompt("Digite o primeiro número: ")); // lê o primeiro número
const num2 = Number(prompt("Digite o segundo número: ")); // lê o segundo número

const soma = num1 + num2; // soma os números
console.log(`A soma é ${soma}`); // exibe o resultado