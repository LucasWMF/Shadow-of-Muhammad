<?php
// Conexão com o banco de dados
$servername = "localhost"; // ou o endereço do seu servidor
$username = "root"; // seu usuário do banco
$password = ""; // sua senha do banco
$dbname = "bdShadowOfMuhammad"; // nome do seu banco de dados

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Variável para controle de mensagem
$message = "";

// Lógica de envio do feedback
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'] ?? '';
    $rating = $_POST['rating'] ?? 0;
    $mensagem = $_POST['mensagem'] ?? '';

    // Verifica se os campos foram preenchidos
    if (!empty($email) && !empty($rating) && !empty($mensagem)) {
        // Prepara e vincula
        $stmt = $conn->prepare("INSERT INTO feedback (email, rating, mensagem) VALUES (?, ?, ?)");
        if ($stmt) {
            $stmt->bind_param("sis", $email, $rating, $mensagem);

            if ($stmt->execute()) {
                $message = "Feedback enviado com sucesso!";
            } else {
                $message = "Erro ao enviar o feedback: " . $stmt->error;
            }
            $stmt->close();
        } else {
            $message = "Erro na preparação da declaração: " . $conn->error;
        }
    } else {
        $message = "Todos os campos são obrigatórios.";
    }
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feedback</title>
</head>
<body>
    <h2>Feedback</h2>
    <?php if (!empty($message)): ?>
        <p><?php echo htmlspecialchars($message); ?></p>
    <?php endif; ?>
    <form method="POST" action="">
        <label for="email">E-mail:</label>
        <input type="email" name="email" required>

        <label>Avaliação:</label>
        <div id="stars">
            <span class="star" data-value="1">★</span>
            <span class="star" data-value="2">★</span>
            <span class="star" data-value="3">★</span>
            <span class="star" data-value="4">★</span>
            <span class="star" data-value="5">★</span>
        </div>
        <input type="hidden" name="rating" id="rating" required>

        <label for="mensagem">Mensagem:</label>
        <textarea name="mensagem" id="mensagem" maxlength="500" required></textarea>
        <p id="charCount">0/500</p>

        <button type="submit">Enviar Feedback</button>
    </form>

    <h2>Feedbacks Recebidos</h2>

    <?php
    // Consulta para buscar os feedbacks
    $sql = "SELECT email, rating, mensagem, created_at FROM feedback ORDER BY created_at DESC";
    $result = $conn->query($sql);
    ?>

    <?php if ($result && $result->num_rows > 0): ?>
        <ul>
            <?php while ($row = $result->fetch_assoc()): ?>
                <li>
                    <strong>Avaliação:</strong> <?php echo str_repeat('★', $row['rating']); ?><br>
                    <strong>E-mail:</strong> <?php echo htmlspecialchars($row['email']); ?><br>
                    <strong>Mensagem:</strong> <?php echo htmlspecialchars($row['mensagem']); ?><br>
                    <small><?php echo date('d/m/Y H:i', strtotime($row['created_at'])); ?></small>
                </li>
            <?php endwhile; ?>
        </ul>
    <?php else: ?>
        <p>Nenhum feedback encontrado.</p>
    <?php endif; ?>

    <?php $conn->close(); ?>

    <script>
        // Contador de caracteres
        const mensagemInput = document.getElementById('mensagem');
        const charCount = document.getElementById('charCount');

        mensagemInput.addEventListener('input', function() {
            const length = this.value.length;
            charCount.textContent = length + "/500";
        });

        // Seleção de estrelas
        const stars = document.querySelectorAll('.star');
        stars.forEach(star => {
            star.addEventListener('click', function() {
                const rating = this.getAttribute('data-value');
                document.getElementById('rating').value = rating;

                stars.forEach(s => {
                    s.classList.remove('selected');
                });
                for (let i = 0; i < rating; i++) {
                    stars[i].classList.add('selected');
                }
            });
        });
    </script>
</body>
</html>
