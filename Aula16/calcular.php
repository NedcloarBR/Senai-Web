<?php

  $v1;
  $v2;
  $op;

  if(isset($_POST["v1"]) && isset($_POST["v2"]) && isset($_POST["op"])) {

    $v1 = $_POST["v1"];
    $v2 = $_POST["v2"];
    $op = $_POST["op"];

    if($v1 == "" || $v2 == "") {
      echo "favor digitar os campos";
      return;
    }

    if($op == "+") {
      $soma = $v1 + $v2;
      echo "a soma foi " . $soma;
    } elseif($op == "-") {
      $subtracao = $v1 - $v2;
      echo "A subtração foi ". $subtracao;
    } else {
      echo "operação desconhecida"
    }
  } else {
    echo "erro no processamento da pagina"
    die();
  }
?>
