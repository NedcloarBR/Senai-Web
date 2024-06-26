<?php
  $nome = "Nome não informado";
  $idade = "Idade não informada";

  if (isset($_GET["nome"])) {
    $nome = $_GET["nome"];
  }

  if (isset($_GET["idade"])) {
    $idade = $_GET["idade"];
  }

  if($nome == "" || $idade == "") {
    echo "Parâmetros não informados na URL";
    return;
  }

  echo "Eu recebi do front-end via GET o valor: " . $nome;
  echo "<br>";
  echo "Eu outro valor do front-end via GET: " . $idade;
?>
