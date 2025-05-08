//PROGRAMA JS QUE CONVERTE A DURAÇÃO DE UM FILME EM HORAS E MINUTOS
// Esse programa tem como objetivo receber o título e a duração de um filme em minutos, e exibir a duração em horas e minutos.
// O programa utiliza o evento submit para capturar os dados do formulário e exibir a resposta na tela.
// O evento submit é acionado quando o botão de enviar do formulário é clicado.
// O programa utiliza o método preventDefault() para evitar que o formulário seja enviado e a página seja recarregada.
// O programa utiliza o método Math.floor() para arredondar o número de horas para baixo, e o operador % para calcular o resto da divisão entre a duração e 60 minutos.
// O programa utiliza o método innerText para exibir a resposta na tela.
// O programa utiliza o método querySelector() para selecionar os elementos do DOM.
// O programa utiliza o método Number() para converter a duração digitada pelo usuário em um número.
// O programa utiliza o método addEventListener() para adicionar um ouvinte de evento ao formulário.
// O programa utiliza o método value para obter o valor digitado pelo usuário nos campos de entrada do formulário.
// O programa utiliza o método innerText para exibir a resposta na tela.
// O programa utiliza o método preventDefault() para evitar que o formulário seja enviado e a página seja recarregada.


// Cria a referência para o form e os elementos h1 e h2
const frm = document.querySelector("form");
const respFilme = document.querySelector("h1");
const respDuracao = document.querySelector("h2");


// cria um "ouvinte" de evento, acionado quando o botaão submit for clicado
frm.addEventListener("submit", (e) => {
    const Titulo = frm.inTitulo.value; // obtém o filme digitado no form
    const Duracao = Number(frm.inDuracao.value); // obtém a duração digitada no form
    
    const horas = Math.floor(Duracao / 60); // calcula a quantidade de horas e arredonda com (Math.floor); é um arredondamento para baixo.
    const minutos = Duracao % 60; // calcula a quantidade de minutos o % pega o resto da divisão entre duracao e 60 que é o número de minutos

    respFilme.innerText = Titulo; // exibe a resposta do programa
    respDuracao.innerText = `Duração do filme: ${horas} hora e ${minutos} minutos` // exibe a resposta do programa
    e.preventDefault(); // previne o comportamento padrão do form

}) 