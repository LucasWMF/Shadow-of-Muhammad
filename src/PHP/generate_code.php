<?php
session_start();
require 'config/conexao.php'; // Conectar ao banco de dados

$data = json_decode(file_get_contents("php://input"));

$email = $data->email;
$codigo = rand(100000, 999999); // Gera um código aleatório

// Armazena o código na sessão para validação futura
$_SESSION['codigo'] = $codigo;

// Envia o código por email
$to = $email;
$subject = "Seu Código de Validação";
$message = "Seu código de validação é: $codigo";
$headers = "From: no-reply@seusite.com";

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}
?>