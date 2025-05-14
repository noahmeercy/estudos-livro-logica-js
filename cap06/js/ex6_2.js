const frm = document.querySelector("form");
const respErros = document.querySelector("#outErros");
const respChances = document.querySelector("#outChances");
const respDica = document.querySelector("#outDica");

const erros = []; // vetor de escopo globas com números já apostados
const sorteado = Math.floor(Math.random() * 100) + 1; // número aleatório entre 1 e 100
const CHANCES = 6; // número de tentativas

frm.addEventListener("submit", (e) => {
  e.preventDefault(); // previne o envio do formulário
  const numero = Number(frm.inNumero.value); // lê o número apostado
  if (numero == sorteado) {
    respDica.innerText = `Você acertou! O número sorteado foi ${sorteado}`;
    frm.btSubmit.disabled = true; // desabilita o botão
    frm.btNovo.className = "exibe"; // exibe o botão de novo jogo
  } else {
    if (erros.includes(numero)) {
      alert(`Você já apostou o número ${numero}. Tente outro!`);
    } else {
      erros.push(numero); // adiciona o número apostado ao vetor de erros
      const numErros = erros.length; // conta o número de erros
      const numChances = CHANCES - numErros; // calcula o número de chances restantes
      //exibe os numeros de erros e conteudo do vetor chances
      respErros.innerText = `${numErros} (${erros.join(", ")})`;
      respChances.innerText = numChances;
      if (numChances == 0) {
        alert("Suas chances acabaram!");
        frm.btSubmit.disabled = true; // desabilita o botão
        frm.btNovo.className = "exibe"; // exibe o botão de novo jogo
        respDica.innerText = `Game Over!! Número sorteado: ${sorteado}`;
      } else {
        //usa o operador ternario para mensagem da dica
        const dica = numero < sorteado ? "maior" : "menor";
        respDica.innerText = `Dica: O número sorteado é ${dica} que ${numero}`;
      }
    }
  }
  frm.inNumero.value = ""; // limpa o campo de entrada
  frm.inNumero.focus(); // posiciona o cursor no campo de entrada

  // Evento para o botão de novo jogo
  frm.btNovo.addEventListener("click", () => {
    location.reload(); // recarrega a página
  });
});
