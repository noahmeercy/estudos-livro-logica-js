const frm = document.querySelector("form"); // obtém o elementos da página
const resp = document.querySelector("pre"); // aonde será carregada a resposta do evento

frm.addEventListener("submit", (e) => { //"escuta" o evento submit do form
  e.preventDefault(); // previne o envio do form 
  const numero = Number(frm.inNumero.value); // obtém o número informado
  let resposta = ""; // variavel do tipo string, para concatenar a resposta



  // cria um laço de repetição (i começa em 1 e é incrementado até 10)
  for (let i = 1; i <= 10; i++) {
    // a variavel resposta vai acumulando os novos conteudos
    resposta = `${resposta}${numero} x ${i} = ${numero * i}\n`;
  }

  // o conteudo da tag pre é alterado para exibir a tabuada do número
  resp.innerText = resposta
});
