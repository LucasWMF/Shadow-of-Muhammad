<?php 

$name = $_POST['iname'];
$star = $_POST['istar'];
$description = $_POST['idescription'];

$dbHost = '';
$dbUsername = '';
$dbPassword = '';
$dbName = '';

$conexao = new mysql($dbHost,$dbUsername,$dbPassword,$dbName);

if ($conexao->connection_errno){
    echo "Erro"
}
else {
    echo "Conectado"
}

?>