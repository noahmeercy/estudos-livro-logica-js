const prompt = require("prompt-sync")()
const valor = Number(prompt("Valor R$: ")) // le o valor do produto
const num = Number(prompt("Nº de Parcelas: ")) // numero das parcelas
const valorParcelas = Math.floor(valor / num) // calcula valor sem decimais
const valorFinal = valorParcelas +(valor % num) // calcula parcela final

for (let i = 1; i < num; i++) { // enquanto i < num 
    console.log(`${i}ª parcela: R$ ${valorParcelas.toFixed(2)}`)
}
console.log(`${num}ª parcela: R$ ${valorFinal.toFixed(2)}`)