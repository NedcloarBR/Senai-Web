<?php
  include "db.php";

  $sql = "SELECT * FROM Alunos";

  $query = mysqli_query($con,$sql);
  $has_registry = false;
  while($linha = mysqli_fetch_array($query)){
		echo $linha["id"] . " -  " . $linha["nome"] . " ".$linha["idade"] . "<a href='remover_aluno.php?id=" . $linha["id"] . ">Remover</a>" . "<br>";
    $has_registry = true;
  }

  if(!$has_registry) {
    echo "Não existem registros no banco de dados";
  }
?>
