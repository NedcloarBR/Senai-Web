<?php
  include "db.php";

  $nome=$_POST["nome"];
  $idade=$_POST["idade"];

  $sql = "INSERT INTO Alunos (nome, idade) VALUES (" . $nome . "," . $idade . ")";
  
  if(mysqli_query($con, $sql)){
    header("listar_aluno.php");
  	// echo "inserido registro no banco de dados";
  }else{
  	echo "erro ao inserir registro no banco de dados.";
  }
?>
