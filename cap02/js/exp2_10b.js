// cria referência ao form e ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form");
const resp = document.querySelector("#outValor");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", function (e) {
    const valor = Number(frm.inValor.value); // obtém o conteúdo do campo valor e converte para número
    const tempo = Number(frm.inTempo.value); // obtém o conteúdo do campo tempo e converte para número


const result = Math.ceil(tempo / 15)   // calcula o resultado arredondando para cima
const valorFinal =  result * valor; // calcula o valor final multiplicando por 2
    resp.innerText = `Valor a pagar: R$: ${valorFinal.toFixed(2)}`; // exibe a resposta

    e.preventDefault(); // impede o envio do formulário
})