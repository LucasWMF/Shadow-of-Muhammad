<?php
// Inclua a biblioteca para o envio de e-mails
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Certifique-se de instalar PHPMailer via Composer

// Função para atualizar a senha do usuário e enviar e-mail com a nova senha
function atualizarSenha($id_administrador, $nova_senha) {
    // Conectar ao banco de dados
    $conn = new mysqli('localhost', 'root', 'sua_senha', 'seu_banco_de_dados');
    if ($conn->connect_error) {
        die("Conexão falhou: " . $conn->connect_error);
    }

    // Criptografar a nova senha
    $senha_hash = password_hash($nova_senha, PASSWORD_BCRYPT);

    // Atualizar a senha no banco de dados
    $sql = "UPDATE administradores SET password_hash = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('si', $senha_hash, $id_administrador);
    $stmt->execute();

    if ($stmt->affected_rows > 0) {
        // Enviar e-mail com a nova senha
        $email_administrador = obterEmailAdministrador($id_administrador, $conn);
        enviarEmail($email_administrador, $nova_senha);
    } else {
        echo "Erro ao atualizar a senha.";
    }

    $stmt->close();
    $conn->close();
}

// Função para obter o e-mail do administrador
function obterEmailAdministrador($id_administrador, $conn) {
    $sql = "SELECT email FROM administradores WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('i', $id_administrador);
    $stmt->execute();
    $stmt->bind_result($email);
    $stmt->fetch();
    $stmt->close();
    return $email;
}

// Função para enviar e-mail com a nova senha
function enviarEmail($email, $nova_senha) {
    $mail = new PHPMailer(true);

    try {
        // Configurações do servidor de e-mail
        $mail->isSMTP();
        $mail->Host = 'smtp.seu_provedor.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'seu_email@seu_provedor.com';
        $mail->Password = 'sua_senha_email';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Destinatário
        $mail->setFrom('seu_email@seu_provedor.com', 'Seu Nome ou Empresa');
        $mail->addAddress($email);

        // Conteúdo do e-mail
        $mail->isHTML(true);
        $mail->Subject = 'Sua nova senha';
        $mail->Body    = 'Sua nova senha é: <b>' . $nova_senha . '</b>';
        $mail->AltBody = 'Sua nova senha é: ' . $nova_senha;

        $mail->send();
        echo 'E-mail com a nova senha enviado com sucesso.';
    } catch (Exception $e) {
        echo 'O e-mail não pôde ser enviado. Erro: ', $mail->ErrorInfo;
    }
}

// Exemplo de uso
$id_administrador = 1; // ID do administrador que terá a senha atualizada
$nova_senha = 'nova_senha_exemplo'; // Nova senha a ser definida
atualizarSenha($id_administrador, $nova_senha);
?>