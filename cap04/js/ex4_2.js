
//cria a referência ao elemento form
// e ao elemento resp
const frm = document.querySelector("form");
const resp = document.querySelector("#resp");


// ouvinte do evento submit do form
// o evento submit é disparado quando o usuário clicar no botão enviar
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // previne o comportamento padrão do form (que é enviar os dados para o servidor)
    const nome = frm.inNome.value; //obtém  o valor do campo nome
    const masculino = frm.inSexoM.checked; 
    const altura = Number(frm.inAltura.value); // obtém o valor do campo altura e converte para número

    let peso // Declara a variavel peso
    if (masculino) { // se masculino (ou , if masculino == true   )
        peso = 22 * Math.pow(altura, 2); // math.pow eleva a altura ao quadrado
    } else {
        peso = 21 * Math.pow(altura, 2); // math.pow eleva a altura ao quadrado
    }

    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`
    
})

frm.addEventListener("reset", () => {
    resp.innerText = ""; // limpa o campo resposta
})