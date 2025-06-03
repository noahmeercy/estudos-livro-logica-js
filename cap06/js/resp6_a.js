const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const clubes = []; // Array para armazenar os clubes globalmente

frm.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita o envio do formulário

  const nome = frm.inClube.value;

  clubes.push(nome); // Adiciona o clube ao array

  frm.btListar.dispatchEvent(new Event("click")); // Dispara o evento de clique no botão de listar
  alert(`Clube ${nome} adicionado com sucesso!`);

  frm.reset(); // Limpa o campo de entrada
  frm.inClube.focus(); // Foca no campo de entrada novamente
});

frm.btListar.addEventListener("click", () => {
  if (clubes.length == 0) {
    alert("Não há clubes na lista...");
    inClube.focus();
    return;
  }

  let lista = "" // variavel para concatenar os clubes 

  for (const clube of clubes) {
    lista += clube + "\n";
  }

  resp.innerText = lista;

});

frm.btMontar.addEventListener("click", () => {
    const tam = clubes.length;
    if (tam == 0 || (tam % 2 == 1)) {
      alert("Número de clubes inválido para montar os jogos.");
      frm.inClube.focus();
      return;
    }
    let jogos = ""; // Variável para armazenar os jogos});

    const ultimo = tam - 1; // Índice do último clube

    for (let i = 0; i < tam; i += 2) {
      jogos += clubes[i] + " x " + clubes[ultimo - i] + "\n"
    }

  resp.innerText = jogos;

});
