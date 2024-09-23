import express from 'express';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import open from 'open';
import { exec } from 'child_process';

const app = express();
const port = 8081;

// Configuração de __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuração de diretórios estáticos
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../src')));

// Rota para executar PHP
app.get('/run-php', (req, res) => {
    exec('php PHP/index.php', { cwd: __dirname }, (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro ao executar o script PHP: ${error.message}`);
            return res.status(500).send('Erro ao executar o script PHP: ' + error.message);
        }
        if (stderr) {
            console.error(`Erro na execução do PHP: ${stderr}`);
            return res.status(500).send('Erro ao executar o script PHP: ' + stderr);
        }
        res.send(stdout); // Retorna a saída do script PHP
    });
});

// Rotas para enviar os arquivos HTML
const sendFile = (filePath) => (req, res) => {
    res.sendFile(path.join(__dirname, '../../views', filePath));
};

app.get('/', sendFile('index.html'));
app.get('/historia', sendFile('history.html'));
app.get('/sobre', sendFile('about.html'));
app.get('/olimpiadas', sendFile('olympics.html'));
app.get('/feedback', sendFile('feedback.html'));
app.get('/painel', sendFile('panel.html'));
app.get('/test', sendFile('test.html'));

// Criação do servidor com http utilizando o Express
const server = http.createServer(app);

// Inicialização do servidor
server.listen(port, () => {
    console.log(`Servidor conectado na porta ${port}`);
    open(`http://localhost:${port}`);
});