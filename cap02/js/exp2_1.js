// PROGRAMA JAVASCRIPT QUE EXIBE O NOME DIGITADO NO FORMULÁRIO
// Este programa exibe o nome digitado no formulário, utilizando o evento submit

// cria referência para o elemento <form> e <h3>
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um "ouvinte" de evento, acionado quando o botaão submit for clicado

frm.addEventListener("submit", (e) => {
  const nome = frm.inNome.value; // obtém o nome digitado no form
  resp.innerText = `Olá ${nome}`; // exibe a resposta do programa
  e.preventDefault(); // previne o comportamento padrão do form
});
