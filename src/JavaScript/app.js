import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import open from 'open';
import { exec } from 'child_process'; // Corrigido aqui

const app = express();
const port = 8081;

// Cria __dirname manualmente para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Atualize o caminho estático para refletir a nova estrutura
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../src')));

app.use('/css', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist/js')));

app.get('/run-php', (req, res) => {
    exec('php PHP/index.php', (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro: ${error.message}`);
            return res.status(500).send('Erro ao executar o script PHP: ' + error.message);
        }
        if (stderr) {
            console.error(`Erro: ${stderr}`);
            return res.status(500).send('Erro ao executar o script PHP: ' + stderr);
        }
        res.send(stdout); // Retorna a saída do script PHP
    });    
});

// Rotas para enviar os arquivos HTML
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../views', 'index.html'));
});

app.get('/historia', function(req, res) {
    res.sendFile(path.join(__dirname, '../../views', 'history.html'));
});

app.get('/sobre', function(req, res) {
    res.sendFile(path.join(__dirname, '../../views', 'about.html'));
});

app.get('/olimpiadas', function(req, res) {
    res.sendFile(path.join(__dirname, '../../views', 'olympics.html'));
});

app.get('/feedback', function(req, res) {
    res.sendFile(path.join(__dirname, '../../views', 'feedback.html'));
});

app.get('/painel', function(req, res) {
    res.sendFile(path.join(__dirname, '../../views/panel.html'));
});

app.get('/test', function(req, res) {
    res.sendFile(path.join(__dirname, '../../views', 'test.html'));
});

app.listen(port, function() {
    console.log(`Servidor conectado na porta ${port}`);
    open(`http://localhost:${port}`);
});