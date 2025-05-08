const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
e.preventDefault(); // Previne o comportamento padrão do formulário

let chin = Number(frm.inChin.value); // Obtém o valor do campo chin
const anos = Number(frm.inAnos.value); // Obtém o valor do campo anos


//cria a variavel do tipo string que irá concatenar aas respostas
let resposta = ""; // Inicializa a variável de resposta
let total = chin; // Inicializa a variável total

//define o laço de repetição para calcular a quantidade de chinchilas
for (let i = 1; i <= anos; i++) {
    resposta = resposta + i + "º ano: " + total + " chinchilas\n"; // Adiciona o resultado do ano atual à resposta
    total = total * 3; // Atualiza o total de chinchilas para o próximo ano
}
resp.innerHTML = resposta; // Exibe todas as respostas acumuladas

});
