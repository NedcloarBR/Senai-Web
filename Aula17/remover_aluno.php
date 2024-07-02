<?php
  include "db.php";

  $id = $_GET["id"];
  $sql = "DELETE FROM Alunos WHERE id = " . $id;

  if(mysqli_query($con, $sql)) {
    header("listar_aluno.php");
  } else {
    echo "erro ao remover registro no banco de dados.";
  }
?>
