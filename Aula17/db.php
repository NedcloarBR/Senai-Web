<?php
  $server="localhost";
  $base="aula17";
  $user="root";
  $password="";
  $port=3306;

  $con = mysqli_connect($server, $user, $password, $base, $port);
  
  if(!$con){
  	echo "falha na conexão com o banco de dados";
  	return;
  }
?>
