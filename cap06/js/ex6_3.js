const frm = document.querySelector("form"); // obtém os elementos do formulário
const resp = document.querySelector("pre");
const carros = []; // declara o vetor global

// escuta o evento de submit do formulário
frm.addEventListener("submit", (e) => {
  e.preventDefault(); // previne o comportamento padrão do formulário
  const modelo = frm.inModelo.value; // obtém o valor do campo modelo
  const preco = Number(frm.inPreco.value); // obtém o valor do campo preço
  carros.push({ modelo, preco }); // adiciona o carro ao vetor
  frm.inModelo.value = ""; // limpa o campo modelo
  frm.inPreco.value = ""; // limpa o campo preço
  frm.inModelo.focus(); // posiciona o cursor no campo modelo
  frm.btListar.dispatchEvent(new Event("click")); // dispara o evento de click do botão listar
});

frm.btListar.addEventListener("click", (e) => {
  // escuta o evento de click do botão listar"
  if (carros.length == 0) {
    // se tamanho do vetor é igual a 0
    alert("Não há carros cadastrados!");
    return;
  }
  const lista = carros.reduce(
    (acumulador, carro) =>
      acumulador + carro.modelo + "- R$: " + carro.preco.toFixed(2) + "\n",
    ""
  );
  resp.innerText = `Lista dos Carros Cadastrado\n${"-".repeat(40)}\n${lista}`;
});


frm.btFiltrar.addEventListener("click", (e) => {
  // escuta o evento de click do botão filtrar
  const maximo = Number(
    prompt("Qual valor máximo que o cliente deseja pagar?")
  );
  if (maximo == 0 || isNaN(maximo)) {
    // se não informou ou valor inválido
    return; // ... retorna
  }
  //cria um novo vetor com os objetos que atendem a condição de filtro
  const carrosFilter = carros.filter((carro) => carro.preco <= maximo);
  if (carrosFilter.length == 0) {
    alert("Não há carros com o preço inferior ou igual ao solicitado!");
    return;
  }
  let lista = "";
  for (const carro of carrosFilter) {
    lista += `${carro.modelo} - R$ ${carro.preco.toFixed(2)}\n`;
  }
  resp.innerText = `Carros Até R$: ${maximo.toFixed(2)}\n${"-".repeat(
    40
  )}\n${lista}`;
});


frm.btSimular.addEventListener("click", (e) => {
    const desconto = Number(prompt("Qual o percentual de desconto: "))
    if (desconto == 0 || isNaN(desconto)) {
        return
    }
    const carrosDesc = carros.map(aux => ({
        modelo: aux.modelo,
        preco: aux.preco - (aux.preco * desconto / 100)
    }))
    let lista = ""
    for (const carro of carrosDesc) {
        lista += `${carro.modelo} - R$ ${carro.preco.toFixed(2)}\n`
    }
    resp.innerText = `Carros com desconto de ${desconto}%\n${"-".repeat(40)}\n${lista}`
})