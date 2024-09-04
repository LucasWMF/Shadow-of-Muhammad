<?php 

$name = $_POST['iname'];
$star = $_POST['istar'];
$description = $_POST['idescription'];

$dbHost = '';
$dbUsername = 'root';
$dbPassword = '';
$dbName = '';

$conexao = new mysql($dbHost,$dbUsername,$dbPassword,$dbName);

if ($conexao->connect_errno){
    echo "Erro";
} else {
    echo "Conectado";
}

?>