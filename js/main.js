/*
 Nome: Petrônio Oliveira Santos
   RA: 31823361
*/

// QUESTÃO 1
function atualizaNome(){ 
  document.querySelector('title').innerHTML = " Petrônio Oliveira Santos  - 31823361"; 
  document.querySelector('h1').innerHTML = " Petrônio Oliveira Santos  - 31823361";
  document.querySelector('h1').style.color = "#A01D26";
}
// QUESTÃO 3
function calculo() {
	var numero = parseInt(document.getElementById('valor-numerico').value);
	var total = numero * numero;
  document.querySelector("#resultado").value = total;
}