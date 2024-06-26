<?php
  $nome = "Nome não informado";
  $idade = "Idade não informada";

  if( isset($_POST["nome"])) {
    $nome = $_POST["nome"];
  }

  if(isset($_POST["idade"])) {
    $idade = $_POST["idade"];
  }

  echo "Eu recebi do front-end o valor " . $nome;
  echo "<br>";
  echo "Eu recebi outro valor do front-end " . $idade;
?>
