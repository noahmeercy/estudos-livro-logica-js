const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const pacientes = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita o envio do formulário

  const nome = frm.inPaciente.value; // obtem o valor do campo inPaciente
  pacientes.push(nome); // adiciona o nome ao array pacientes
  let lista = ""; // inicializa a variável lista

  for (let i = 0; i < pacientes.length; i++) {
    // percorre o array pacientes
    lista += `${i + 1} - ${pacientes[i]}\n`; // adiciona o nome e o índice à lista
  }

  respLista.innerText = lista; // exibe a lista no elemento pre
  frm.inPaciente.value = ""; // limpa o campo de entrada
  frm.inPaciente.focus(); // coloca o foco no campo de entrada
});

frm.btUrgencia.addEventListener("click", (e) => {
  e.preventDefault(); // Evita o envio do formulário

  // Verifica se o campo inPaciente está vazio (no caso , paciente is required)
  if (!frm.checkValidity()) {
    alert("Informe o nome do paciente a ser atendido em caráter de urgência!");
    frm.inPaciente.focus(); // coloca o foco no campo de entrada
    return; // retorna ao formulário
  }
  const nome = frm.inPaciente.value; // obtem o valor do campo inPaciente
  pacientes.unshift(nome); // adiciona o nome ao início do array pacientes
  let lista = ""; // inicializa a variável lista
  //forEach aplicado sobre o array pacientes
  forEach((pacientes, i) => (lista += `${i + 1} - ${pacientes}\n`)); // adiciona o nome e o índice à lista
  respLista.innerText = lista; // exibe a lista no elemento pre
  frm.inPaciente.value = ""; // limpa o campo de entrada
  frm.inPaciente.focus(); // coloca o foco no campo de entrada
});

frm.btAtender.addEventListener("click", (e) => {
    e.preventDefault(); // Evita o envio do formulário
    // Verifica se o campo inPaciente está vazio (no caso , paciente is required)
    if (pacientes.length == 0) {
        alert("Não há pacientes na fila!");
        frm.inPaciente.focus(); // coloca o foco no campo de entrada
        return; // retorna ao formulário
    }

    const atender = pacientes.shift(); // remove o primeiro paciente do array
    respNome.innerText = atender; // exibe o nome do paciente atendido no elemento span
    let lista = ""; // inicializa a variável lista
    pacientes.forEach((paciente, i) => (lista += `${i + 1} - ${paciente}\n`)); // adiciona o nome e o índice à lista
    respLista.innerText = lista; // exibe a lista no elemento pre       

});