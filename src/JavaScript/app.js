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
app.use(express.static(path.join(__dirname, '../../public')));

// Atualize os caminhos para enviar os arquivos
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
    res.sendFile(path.join(__dirname, '../../views', 'panel.php'));
});

app.listen(port, function() {
    console.log(`Servidor conectado na porta ${port}`);
    open(`http://localhost:${port}`);
});