const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit" , (e) => {
    e.preventDefault() // evita o envio do form

const numero = Number(frm.inNumero.value) //obtem número informado
let resposta = `Entre${numero} e 1: ` // String para montar a resposta

for (let i = numero; i > 1; i--) { // cria um for decrescente
    resposta = resposta + i + "," // resposta acumula numeros e virgulas
}
resp.innerText = resposta + "1."
})