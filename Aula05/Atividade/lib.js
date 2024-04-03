function prompter() {
	var nome = prompt("Digite o seu nome: ");
	var idade = prompt("Digite a sua idade: ");
	alert("nome: " + nome + " Idade: " + idade);

	document.write("nome: " + nome + " Idade: " + idade);
}
function calculadora() {
	var v1 = Number.parseInt(prompt("Digite o valor 1"));
	var v2 = Number.parseInt(prompt("Digite o valor 2"));
	var op = prompt("Digite a operação [+,-]");
	if (op === "+") {
		// Somar
		var soma = v1 + v2;
		document.write("Resultado da Soma: " + soma);
	} else if (op === "-") {
		// Subtração
		var subtracao = v1 - v2;
		document.write("Resultado da Subtração: " + subtracao);
	}
}

function produto() {
	var nome = prompt("Digite o nome do produto: ");
	var valor = Number.parseInt("Digite o valor do produto: ");
	if (valor > 100) {
		document.write("produto maior que 100");
	} else if (valor < 100) {
		document.write("produto menor que 100");
	}
}

function repeat() {
  var nome = prompt("Digite o seu nome: ");
	var idade = prompt("Digite a sua data de nascimento: ");
  for(var i = 0;i<10;i++) {
    document.write(nome);
    document.write(idade)
  }
}

function checker(nome, idade) {
  if(!nome && (idade < 0 || idade > 120)) {
    alert("Existem erros nos dados apontados")
    return
  }
  alert("Sucesso")
}
