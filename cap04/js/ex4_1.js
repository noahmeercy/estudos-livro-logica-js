const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

frm.addEventListener("submit", function (e) { 

    const nome = frm.inNome.value;
    const nota1 = Number(frm.inNota1.value);
    const nota2 = Number(frm.inNota2.value);
    const media = (nota1 + nota2) / 2;
    resp1.innerText = `Média das Notas ${media.toFixed(2)}`;
    if (media >= 7) {
        resp2.innerText = `${nome} Aprovado(a)`;
        resp2.style.color = "blue";
    } else if (media >= 4) {
        resp2.innerText = `${nome} Você está de Recuperação`;
        resp2.style.color = "green";

    } else {
        resp2.innerText = `${nome} Reprovado(a)`;
        resp2.style.color = "red";
    }
    e.preventDefault(); // Evita o envio do formulário
})