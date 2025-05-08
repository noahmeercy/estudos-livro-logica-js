// // Cria referencia ao form e aos elementos de resposta 
const frm = document.querySelector("form");
const resp = document.querySelector("#outResp");
const resp2 = document.querySelector("#outResp2");

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado

frm.addEventListener("submit", function (e) {
const titulo = frm.inMed.value; // obtém o conteúdo do campo produto
 resp.innerText = `Promoção do ${titulo}`; // exibe a resposta

 const preco = Number(frm.inPreco.value); // obtém o conteúdo do campo preço e converte para número
 const promo = preco * 2;
resp2.innerText = `Leve 2 por apenas R$: ${Math.floor(promo.toFixed(2))}`; // exibe a resposta

e.preventDefault(); // impede o envio do formulário
frm.inMed.value = ""; // limpa o campo produto
frm.inPreco.value = ""; // limpa o campo preço
})