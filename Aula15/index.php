<html>

<div>Isso é HTML<br><br><br><br><br></div>

<?php
  // Comentario em PHP
  echo "ola mundo</br>aqui sigo com php";
  echo "<br><h1>brasil</h1><br>";
  echo "<table border='1'><tr><td>nome</td></tr></table>";

  $nome = "Miguel";
  $idade = 19;
  $cidade = "Guaíba";
  echo "meu nome é: " . $nome;
  echo "<br>";
  echo "minha idade é: " . $idade;
  echo "<br>";
  echo "moro em: " . $cidade;

  echo "<br>";
  echo "<br>";
  echo "<br>";
  echo "<br>";
  
  $v1 = 10;
  $v2 = 30;
  $soma = $v1 + $v2;
  $valor_maximo = 100;
  if($soma > $valor_maximo) {
    echo "<b>Valor maior que " . $valor_maximo . "</b>";
  } else {
    echo "<b>Valor menor que " . $valor_maximo . "</b>";
  }
  
?>

<script>
  document.write("<br><br><br><br><br> Isso é JavaScript");
</script>
</html>
