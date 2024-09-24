<?php
// Inclua a conexão com o banco de dados
include '../config/conexao.php';

// Verifique se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtenha os dados do formulário
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $comments = mysqli_real_escape_string($conn, $_POST['feedback']); // Captura o feedback
    $rating = mysqli_real_escape_string($conn, $_POST['rating']); // Captura a avaliação

    // Defina a data de publicação como a data atual
    $published_date = date('Y-m-d H:i:s');

    // Insira os dados no banco de dados
    $sqlInsert = "INSERT INTO feedback (name, email, rating, comments, published_date) VALUES ('$name', '$email', '$rating', '$comments', '$published_date')";
    
    if (mysqli_query($conn, $sqlInsert)) {
        echo "Feedback enviado com sucesso!";
    } else {
        echo "Erro ao enviar feedback: " . mysqli_error($conn);
    }
}

// Aqui você pode executar sua consulta para obter os feedbacks
$sqlRegistros = mysqli_query($conn, "SELECT * FROM feedback");
?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feedback</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="../public/CSS/index.css">
    <style>
        .star {
            font-size: 30px;
            color: #ccc;
            cursor: pointer;
        }

        .star.selected {
            color: gold;
            /* Estrelas selecionadas em dourado */
        }

        .feedback-text {
            min-height: 100px;
            /* Altura mínima para o texto de feedback */
        }

        .card-feedback {
            margin-bottom: 10px;
            /* Diminui o espaço entre os cards */
            width: 100%;
            /* Largura padrão dos cards */
            height: 250px;
            /* Altura padrão dos cards */
            border-radius: 10px;
            /* Bordas arredondadas */
            background-color: white;
            /* Fundo branco do card */
            border: 1px solid black;
            /* Borda preta fina */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            /* Sombra suave */
        }

        .card-body {
            padding: 15px;
            /* Espaçamento interno do card */
        }

        /* Estilo para o main */
        .main-container {
            display: flex;
            flex-direction: column;
            flex-direction: column;
            /* Define a direção como coluna */
            align-items: center;
            /* Alinha os itens ao centro */
            gap: 10px;
            /* Diminui o espaço entre os itens */
        }

        form {
            width: 100%;
        }
    </style>
</head>

<body>
    <div class="container-all">
        <header class="main-header">
            <div class="main-title">
                <img src="../public/image/logo.png" alt="" class="main-img-logo">
                <h1 class="main-h1-title">Shadow of Muhammad</h1>
                <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <p>Conteúdos</p>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="history.html">História</a></li>
                                    <li><a class="dropdown-item" href="about.html">Sobre</a></li>
                                    <li><a class="dropdown-item" href="olympics.html">Olímpiadas</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="feedback.php">Feedback</a>
                            </li>
                            <li class="nav-item">
                                <div class="form-select-wrapper">
                                    <select class="form-select" onchange="contentLanguage(this.value)">
                                        <option value="Português" selected>PT-BR</option>
                                        <option value="English">EN</option>
                                        <option value="Français">FR</option>
                                    </select>
                                    <i class="fa-solid fa-chevron-down arrow-select"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

        <main class="main-container main-container-content">
            <h1>Formulário de Feedback</h1>
            <form method="POST" action="feedback.php">
                <div class="mb-3">
                    <label for="name" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="name" name="name" required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" name="email" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">Avaliação</label>
                    <div>
                        <span class="star" data-value="1">★</span>
                        <span class="star" data-value="2">★</span>
                        <span class="star" data-value="3">★</span>
                        <span class="star" data-value="4">★</span>
                        <span class="star" data-value="5">★</span>
                    </div>
                    <input type="hidden" id="rating" name="rating" value="0">
                </div>
                <div class="mb-3">
                    <label for="feedback" class="form-label">Comentários</label>
                    <textarea class="form-control feedback-text" id="feedback" name="feedback" required oninput="updateCharacterCount()"></textarea>
                    <small id="characterCount" class="form-text text-muted">0/500 caracteres</small>
                </div>
                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>

            <h2>Feedbacks Recebidos</h2>
            <div class="row">
                <?php
                include '../config/conexao.php';
                $sqlRegistros = mysqli_query($conn, "SELECT * FROM feedback");
                while ($row = mysqli_fetch_assoc($sqlRegistros)) { ?>
                    <div class="col-12"> <!-- Mudado para col-12 para ocupar toda a largura -->
                        <div class="card card-feedback">
                            <div class="card-body">
                                <h5 class="card-title"><?php echo $row['name']; ?></h5>
                                <p class="card-text"><?php echo $row['comments']; ?></p>
                                <p class="card-text">Avaliação:
                                    <?php for ($i = 0; $i < $row['rating']; $i++) { ?>
                                        <span class="star selected">★</span>
                                    <?php } ?>
                                    <?php for ($i = $row['rating']; $i < 5; $i++) { ?>
                                        <span class="star">★</span>
                                    <?php } ?>
                                </p>
                            </div>
                        </div>
                    </div>
                <?php } ?>
            </div>
        </main>

        <footer class="main-footer">
            <div class="left">
                <div class="footer-logo">
                    <img class="logo" src="../public/image/logo.png" alt="">
                </div>
            </div>
            <div class="right">
                <header class="footer-title">
                    <h1>SHADOW OF MUHAMMAD</h1>
                </header>

                <div class="text-container">
                    <div class="text1">
                        <h1 class="title-footer">SOBRE O SITE</h1>
                        <p class="footer-text">Nossa escola online ensina as regras e modalidades do boxe olímpico, oferecendo
                            conhecimento e treino para iniciantes e entusiastas.</p>
                    </div>
                    <div class="text2">
                        <h1 class="title-footer">REDES SOCIAIS</h1>

                        <div class="social-container">
                            <a href="" class="social-button">
                                <i class="bi bi-telephone"></i>
                            </a>

                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shadowofmuhamamd@gmail.com"
                                target="_blank" class="social-button">
                                <i class="fa-light fa-at"></i>
                            </a>

                            <a href="https://www.youtube.com" target="_blank" class="social-button"
                                alt="Acesse o Youtube">
                                <i class="fa-brands fa-youtube"></i>
                            </a>

                            <a href="https://www.instagram.com" target="_blank" class="social-button"
                                alt="Acesse o Instagram">
                                <i class="fa-brands fa-instagram"></i>
                            </a>

                            <a href="https://www.facebook.com/?locale=pt_BR" target="_blank" class="social-button"
                                alt="Acesse o Facebook">
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>

                            <a href="https://wa.me/XXXXXXXXXXXXXX?text=Olá,%20gostaria%20de%20falar%20sobre"
                                target="_blank" class="social-button" alt="Entre em contato">
                                <i class="fa-solid fa-map"></i>
                            </a>
                        </div>
                    </div>
                    <div class="text3">
                        <h1 class="title-footer">ABAS</h1>
                        <ul class="list-pages">
                            <li class="item-list-pages"><a href="index.html">HOME</a></li>
                            <li class="item-list-pages"><a href="history.html">HISTÓRIA</a></li>
                            <li class="item-list-pages"><a href="about.html">SOBRE</a></li>
                            <li class="item-list-pages"><a href="olympics.html">OLÍMPIADAS</a></li>
                            <li class="item-list-pages"><a href="feedback.php">FEEDBACK</a></li>
                        </ul>
                    </div>
                </div>
                <div class="text-copy">
                    <p>Copyright (c) 2024 Shadow Of MuhammadTodos os direitos reservados Este produto é protegido por
                        direitos autorais e distribuído sob licenças que restringem cópia, distribuição e descompilação.
                    </p>
                </div>
            </div>
        </footer>
    </div>

    <script>
        const stars = document.querySelectorAll('.star');
        const ratingInput = document.getElementById('rating');

        stars.forEach(star => {
            star.addEventListener('click', () => {
                const value = star.getAttribute('data-value');
                ratingInput.value = value;
                updateStarSelection(value);
            });
        });

        function updateStarSelection(selectedValue) {
            stars.forEach(star => {
                if (star.getAttribute('data-value') <= selectedValue) {
                    star.classList.add('selected');
                } else {
                    star.classList.remove('selected');
                }
            });
        }

        function updateCharacterCount() {
            const feedbackInput = document.getElementById('feedback');
            const characterCount = document.getElementById('characterCount');
            characterCount.innerText = `${feedbackInput.value.length}/500 caracteres`;
        }
    </script>
</body>

</html>
<script src="../public/JavaScript/main.js"></script>
<script src="../public/JavaScript/language.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"