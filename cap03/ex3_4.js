const prompt = require("prompt-sync")(); // adiciona o pacote para entrada de dados

const pesoKg = Number(prompt("Digite seu peso em kg: ")); // lê o peso em kg
const consumo = Number(prompt("Digite o consumo diário ")); // lê o consumo diário

const pesoGr = pesoKg * 1000; // converte o peso em gramas
const duracao = Math.floor(pesoGr / consumo); // calcula a duração
const sobra = pesoGr % consumo; // calcula a sobra

console.log(`Duração: ${duracao} dias`); // exibe a duração
console.log(`Sobra: ${sobra} gramas`); // exibe a sobra