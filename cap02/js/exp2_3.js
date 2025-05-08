
//Cria a referência ao form e aos elementos de resposta (Pelo ID)
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

// cria um "ouvinte" de eveneto , acinado quando o botaão submit for cliado
frm.addEventListener("submit", function (e) {
    const veiculo = frm.inVeiculo.value;
    const preco = Number(frm.inPreco.value); // obtém o conteúdo do campo preço e converte para número

    const entrada = preco * 0.5; // calcula a entrada (50% do preço)
    const parcela = (preco * 0.50) / 12; // calcula o valor da parcela (50% do preço dividido por 12 meses)

    resp1.innerText = `Promoção: ${veiculo}`; // exibe a resposta
    resp2.innerText = `Entrada: R$: ${entrada.toFixed(2)}`; // exibe a resposta
    resp3.innerText = `+12 parcelas de R$: ${parcela.toFixed(2)}`; // exibe a resposta

    e.preventDefault(); // impede o envio do form
    frm.inVeiculo.value = ""; // limpa o campo de entrada
    frm.inPreco.value = ""; // limpa o campo de entrada

});


