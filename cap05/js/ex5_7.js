const frm = document.querySelector("form") // obtem os elementos da pagina
const resp = document.querySelector("#outEspacos") // onde será exibido a resposta

frm.addEventListener("submit", (e) => { // escuta evento submit do form
    e.preventDefault() // previne o recarregamento 
    const num = Number(frm.inNumero.value); // obtem o numero informado
    let estrelas = "" // variavel que ira conmcatenar as estrelas/traços
    for (let i = 1; i <= num; i++) { // cria laço de repetição de 1 até num 
        if (i % 2 == 1) {
            estrelas = estrelas + "*" // na posição impar do i : *
        } else {
            estrelas = estrelas + "-" //na posição par do i : -
        }
    }
    resp.innerText = estrelas //exibe as estrelas
})