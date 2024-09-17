import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import open from 'open';

const app = express();
const port = 8081;

// Cria __dirname manualmente para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Atualize o caminho estático para refletir a nova estrutura
app.use(express.static(path.join(__dirname, '../../src')));

// Atualize os caminhos para enviar os arquivos
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../pages', 'index.html'));
});

app.get('/historia', function(req, res) {
    res.sendFile(path.join(__dirname, '../../pages', 'historia.html'));
});

app.get('/modalidades', function(req, res) {
    res.sendFile(path.join(__dirname, '../../pages', 'modalidades.html'));
});

app.get('/ranking', function(req, res) {
    res.sendFile(path.join(__dirname, '../../pages', 'ranking.html'));
});

app.get('/feedback', function(req, res) {
    res.sendFile(path.join(__dirname, '../../pages', 'feedback.html'));
});

app.get('/painel', function(req, res) {
    res.sendFile(path.join(__dirname, '../../pages', 'panel.php'));
});

app.listen(port, function() {
    console.log(`Servidor conectado na porta ${port}`);
    open(`http://localhost:${port}`);
});