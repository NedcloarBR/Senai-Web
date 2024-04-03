// Isso é um comentario em JS

function mostraDados(texto) {
  alert("Olá " + texto);
}

function escreveTela() {
  var index = 0;
  for(index = 0; index < 5; index++) {
    document.write("<b>Ola mundo</b></br>")
  }
}

function numeroParOuImpar() {
  var index = 0;
  
  for(index = 0; index <= 10; index++) {
    if(index % 2 == 0) {
      document.write("<h2>Este número é PAR: " + index + "</h2>");
    } else {
      document.write("<h4>Este número é IMPAR: " + index + "</h4>");
    }

    console.info("Executando n." + index);
  }
}

function calculadora() {
  while(true) {
    var v1 = prompt("Digite o valor 1");
    var v2 = prompt("Digite o valor 2");
    var op = prompt("Digite a operação [+,-,sair]");
    if(op == "+") { // Somar
      var soma = +v1 + +v2
      alert("Resultado da Soma: " + soma);
    } else if(op == "-") { // Subtração
      var subtracao = +v1 - +v2;
      alert("Resultado da Subtração: " + subtracao);
    } else if(op == "sair") {
      break;
    }
     else {
      alert("Opção invalida")
    }
  }
}
