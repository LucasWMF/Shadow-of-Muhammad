<?php
session_start();

$data = json_decode(file_get_contents("php://input"));

$email = $data->email;
$codigo = $data->codigo;

// Verifica se o código está correto
if (isset($_SESSION['codigo']) && $_SESSION['codigo'] == $codigo) {
    echo json_encode(['valid' => true]);
} else {
    echo json_encode(['valid' => false]);
}
?>
