// Cria a referência para o elemento form	

const frm = document.querySelector("form");
const resp = document.querySelector("#outResp");
const resp2 = document.querySelector("#outResp2");


frm.addEventListener("submit", function (e) {
    const nome = frm.inProduto.value; // obtém o conteúdo do campo nome
    const preco = Number(frm.inPreco.value); // obtém o conteúdo do campo valor e converte para número


    const produto = preco * 2// calcula o dobro do preço
    const promo = preco * 0.5// calcula 50% do preço
    const valorTotal = promo + produto // calcula o valor total

    resp.innerText = `${nome} - Promoção: R$ Leve 3 por R$ ${valorTotal.toFixed(2)}` // exibe o resultado no elemento <p> com id outResp
    resp2.innerText = `O 3º produto custa apenas R$ ${promo.toFixed(2)}` // exibe o resultado no elemento <p> com id outResp2
    
    e.preventDefault(); // impede o envio do formulário
    // frm.inProduto.value = ""; // limpa o campo nome
    // frm.inPreco.value = ""; // limpa o campo valor 
})

