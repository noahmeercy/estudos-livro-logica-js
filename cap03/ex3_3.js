const prompt = require("prompt-sync")(); // adiciona o pacote para entrada de dados

const tempo = Number(prompt("Digite seu tempo de Empresa: ")); // lê o tempo de empresa
const salario = Number(prompt("Digite seu salário: ")); // lê o salário
const quadrienios = Math.floor(tempo / 4); // calcula os quadrienios
const acrescimo = salario * quadrienios / 100; // calcula o acrescimo

console.log(`Quadriênios: ${quadrienios}`) // exibe os quadrienios
console.log(`Salário Final R$ ${(salario+acrescimo).toFixed(2)}` ) // exibe o tempo de empresa