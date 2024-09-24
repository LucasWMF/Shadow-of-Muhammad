<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário de Avaliação</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/css/bootstrap.min.css">
    <style>
        .star-rating {
            display: flex;
            direction: row-reverse;
            justify-content: flex-end;
        }
        .star-rating input {
            display: none;
        }
        .star-rating label {
            font-size: 2rem;
            cursor: pointer;
            color: lightgray;
        }
        .star-rating input:checked ~ label {
            color: gold;
        }
        .star-rating label:hover,
        .star-rating label:hover ~ label {
            color: gold;
        }
    </style>
</head>
<body>
    <div class="container mt-5">
        <h1 class="mb-4">Formulário de Avaliação</h1>
        <form id="feedbackForm">
            <div class="mb-3">
                <label for="name" class="form-label">Nome</label>
                <input type="text" class="form-control" id="name" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" required>
            </div>
            <div class="mb-3">
                <label class="form-label">Avaliação</label>
                <div class="star-rating">
                    <input type="radio" id="star5" name="rating" value="5">
                    <label for="star5" title="5 estrelas">★</label>
                    <input type="radio" id="star4" name="rating" value="4">
                    <label for="star4" title="4 estrelas">★</label>
                    <input type="radio" id="star3" name="rating" value="3">
                    <label for="star3" title="3 estrelas">★</label>
                    <input type="radio" id="star2" name="rating" value="2">
                    <label for="star2" title="2 estrelas">★</label>
                    <input type="radio" id="star1" name="rating" value="1">
                    <label for="star1" title="1 estrela">★</label>
                </div>
            </div>
            <div class="mb-3">
                <label for="comments" class="form-label">Comentários (máximo 500 caracteres)</label>
                <textarea class="form-control" id="comments" rows="4" maxlength="500" required></textarea>
                <small id="charCount" class="form-text text-muted">500 caracteres restantes</small>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    </div>

    <script>
        const comments = document.getElementById('comments');
        const charCount = document.getElementById('charCount');

        comments.addEventListener('input', () => {
            const remainingChars = 500 - comments.value.length;
            charCount.textContent = `${remainingChars} caracteres restantes`;
        });
    </script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/js/bootstrap.min.js"></script>
</body>
</html>