<?php 
  function mostrarDados() {
    $i = 0;
    $nome = "Miguel";
    $cidade = "Guaíba";
    
    while($i < 10) {
      echo "Meu nome é ". $nome ." nasci em ". $cidade;
      $i++;
    }
  }

  mostrarDados();
?>