<?php
session_start();

$message = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = trim($_POST['nome']);
    $rating = isset($_POST['rating']) ? $_POST['rating'] : null; // Verifica se a chave existe
    $mensagem = isset($_POST['mensagem']) ? trim($_POST['mensagem']) : ''; // Verifica se a chave existe

    if (!empty($nome) && !empty($rating) && !empty($mensagem) && strlen($mensagem) <= 500) {
        $message = 'Feedback enviado com sucesso! Obrigado pela sua participação.';
        // Aqui você pode salvar os dados no banco de dados ou realizar outras ações desejadas.
    } else {
        $message = 'Todos os campos são obrigatórios e a mensagem deve ter até 500 caracteres.';
    }
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feedback</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h2>Feedback</h2>
        <?php if (!empty($message)) : ?>
            <div class="alert alert-info"><?php echo $message; ?></div>
        <?php endif; ?>
        <form action="" method="POST">
            <div class="mb-3">
                <label for="nome" class="form-label">Nome</label>
                <input type="text" class="form-control" id="nome" name="nome" required>
            </div>
            <div class="mb-3">
                <label for="rating" class="form-label">Avaliação</label>
                <div class="estrelas">
                    <span class="estrela" data-rating="1">★</span>
                    <span class="estrela" data-rating="2">★</span>
                    <span class="estrela" data-rating="3">★</span>
                    <span class="estrela" data-rating="4">★</span>
                    <span class="estrela" data-rating="5">★</span>
                </div>
                <input type="hidden" name="rating" id="rating" value="">
            </div>
            <div class="mb-3">
                <label for="mensagem" class="form-label">Mensagem</label>
                <textarea class="form-control" id="mensagem" name="mensagem" rows="3" maxlength="500" required></textarea>
                <div class="form-text">
                    <span id="charCount">0</span>/500 caracteres
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Enviar Feedback</button>
        </form>

        <?php if (!empty($nome) && !empty($rating) && !empty($mensagem)) : ?>
            <div class="card mt-4">
                <div class="card-body">
                    <h5 class="card-title"><?php echo htmlspecialchars($nome); ?></h5>
                    <p class="card-text">Avaliação: <?php echo str_repeat('★', $rating) . str_repeat('☆', 5 - $rating); ?></p>
                    <p class="card-text"><?php echo nl2br(htmlspecialchars($mensagem)); ?></p>
                </div>
            </div>
        <?php endif; ?>
    </div>

    <script>
        // Atualiza o contador de caracteres
        const mensagemInput = document.getElementById('mensagem');
        const charCountDisplay = document.getElementById('charCount');

        mensagemInput.addEventListener('input', function() {
            const currentLength = mensagemInput.value.length;
            charCountDisplay.textContent = currentLength;
        });

        document.querySelectorAll('.estrela').forEach(star => {
            star.addEventListener('click', function() {
                const ratingValue = this.getAttribute('data-rating');
                document.getElementById('rating').value = ratingValue;
                document.querySelectorAll('.estrela').forEach(s => s.classList.remove('selected'));
                for (let i = 1; i <= ratingValue; i++) {
                    document.querySelector(`.estrela[data-rating="${i}"]`).classList.add('selected');
                }
            });
        });
    </script>

    <style>
        .estrela {
            font-size: 30px;
            cursor: pointer;
            color: gray;
        }
        .estrela.selected {
            color: gold;
        }
    </style>
</body>
</html>
