<?php
session_start();
include 'config/conexao.php'; // Inclui o arquivo de conexão
require './PHP/PHPMailer/src/PHPMailer.php';
require './PHP/PHPMailer/src/SMTP.php';
require './PHP/PHPMailer/src/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $codigo = $_POST['codigo'];

    // Verifica se o código é válido (a lógica de verificação deve ser implementada)
    if ($codigo == $_SESSION['codigo']) {
        // Código é válido, armazena o feedback
        $rating = $_POST['rating'];
        $mensagem = $_POST['mensagem'];

        $stmt = $conn->prepare("INSERT INTO feedback (nome, email, rating, mensagem) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssis", $nome, $email, $rating, $mensagem);
        $stmt->execute();

        // Feedback salvo com sucesso
        echo "<script>alert('Feedback enviado com sucesso!'); window.location.href='feedback.html';</script>";
    } else {
        echo "<script>alert('Código de validação inválido.');</script>";
    }
}

// Gera um código de validação e envia por email
function enviarCodigo($email) {
    $codigo = rand(100000, 999999); // Gera um código de 6 dígitos
    $_SESSION['codigo'] = $codigo; // Armazena o código na sessão

    // Configuração do PHPMailer
    require 'vendor/autoload.php';
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'shadowofmuhammad.fictitious@gmail.com'; // Seu email
    $mail->Password = 'ParrotMine007'; // Sua senha
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom('shadowofmuhammad@gmail.com', 'Shadow of Muhammad');
    $mail->addAddress($email);
    $mail->Subject = 'Código de Validação';
    $mail->Body = "Seu código de validação é: $codigo";

    if (!$mail->send()) {
        echo 'Erro ao enviar: ' . $mail->ErrorInfo;
    }
}

if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['email'])) {
    enviarCodigo($_GET['email']);
}
?>
