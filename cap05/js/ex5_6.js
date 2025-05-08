const frm = document.querySelector("form") // obtem os elementos da página
const resp = document.querySelector("h3") 

frm.addEventListener("submit", (e) =>{ //escuta evento submit do form 
    e.preventDefault() //evita o envio do form
    const num = Number(frm.inNumero.value) // obtem número informado 
    let numDivisores = 0 // declara e inicializa contador
    for (let i = 1; i <= num; i++) { // percorre todos os possiveis divisores de num
        if (num % i == 0) { // verifica se i (1, 2, 3..) é divisor do num
            numDivisores++ // se é, incrementa contador
        }
    }
    if (numDivisores == 2) { // se possui apenas 2 divisores, é primo
        resp.innerText = `${num} è Primo`
    } else {
        resp.innerText = `${num} Não é primo`
    }
})