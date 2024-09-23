<?php
session_start();
require 'config/conexao.php'; // Conectar ao banco de dados

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $codigo = $_POST['codigo'];
    $rating = $_POST['rating'];
    $mensagem = $_POST['mensagem'];

    // Aqui você pode adicionar código para inserir os dados no banco de dados

    // Limpar a sessão após o envio do feedback
    unset($_SESSION['codigo']);

    echo "Feedback enviado com sucesso!";
    // Você pode redirecionar para uma página de agradecimento ou mostrar uma mensagem.
}
?>