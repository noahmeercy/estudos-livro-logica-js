const frm = document.querySelector("form");
const resp = document.querySelector("#outResp");



const itens = [10,10,10] // array para armazenar os produtos


frm.addEventListener("submit", (e) => {
    e.preventDefault();

let soma = 0; // variável para armazenar a soma dos produtos
 itens.forEach(num => soma += num); // soma os produtos do array
   
console.log(soma); // imprime a soma no console


});
