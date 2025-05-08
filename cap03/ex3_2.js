const prompt = require("prompt-sync")(); // adiciona o pacote para entrada de dados
const veiculo = prompt("Veículo: "); // lê o veículo
const preco = Number(prompt("Preço: ")); // lê o preço
const entrada = preco * 0.5; // calcula a entrada
const parcelas = preco * 0.5 / 12; // calcula as parcelas
console.log(`Promoção: ${veiculo}`) // exibe o veículo
console.log(`Entrada: R$: ${entrada.toFixed(2)}`) // exibe a entrada
console.log(`+12x de R$: ${parcelas.toFixed(2)}`) // exibe as parcelas