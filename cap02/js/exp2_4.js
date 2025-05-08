// Cria referencia ao form e aos elementos de resposta (form e h3)

const frm = document.querySelector("form");
const resp = document.querySelector("#outResp");


// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado

frm.addEventListener("submit", function (e) {
    const quilo = Number(frm.inQuilo.value); // obtém o conteúdo do campo preço e converte para número
    const peso = Number(frm.inConsumo.value); // obtém o conteúdo do campo preço e converte para número

    const valor = (quilo / 1000) * peso; // calcula o valor (preço por quilo dividido por 1000 vezes o peso)
    resp.innerText = `Valor a pagar: R$: ${valor.toFixed(2)}`; // exibe a resposta
    e.preventDefault(); // impede o envio do formulário
    frm.inQuilo.value = ""; // limpa o campo preço
});

