const nome = "Miguel";
const endereco = "Porto Alegre";

function mostraDados() {
	alert(`nome: ${nome}\nendereço: ${endereco}`);
}

function mostraCaixaTexto() {
  const value = document.getElementById("a02").value
  if(!value) {
    return alert("Digite Algo na caixa");
  }
  alert("Sucesso")
  alert(value);
}

function validarDados() {
  const nome = document.getElementById("a04-nome").value;
  const idade = document.getElementById("a04-idade").value;
  const rg = document.getElementById("a04-rg").value;
  const endereco = document.getElementById("a04-endereco").value;
  if(!nome || !idade || !rg || !endereco) {
    return alert("Algum dado não foi preenchido");
  }
  if(Number.isNaN(idade)) {
    return alert("A idade precisa ser um número");
  }
  if(Number.isNaN(rg)) {
    return alert("O RG precisa ser um número");
  }
  alert("Sucesso");
}

function validarProduto() {
  const nome = document.getElementById("a05-nome").value;
  const preco = document.getElementById("a05-preco").value;
  if(!nome || !preco) {
    alert("Algum dado não foi preenchido");
    return false
  }
  if(Number.isNaN(preco)) {
    alert("O preço precisa ser um número");
    return false
  }
}

function hello() {
  alert("Olá Mundo")
}