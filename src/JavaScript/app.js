// import express from 'express';
// import http from 'http';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import open from 'open';
// import axios from 'axios';
// import fs from 'fs';

// const app = express();
// const port = 8081; // Mude para uma porta que não esteja em uso

// const __filename = fileURLToPath(import.meta.url);
// const _dirname = path.dirname(_filename);

// // Configuração de diretórios estáticos
// app.use(express.static(path.join(__dirname, '../../public')));

// // Rota para executar feedback.php
// app.get('/run-feedback', async (req, res) => {
//     const code = `<?php
//     // Seu código PHP aqui
//     echo "Hello World!";
//     ?>`;

//     try {
//         const response = await axios.post('URL_DA_API_AQUI', { code });
//         res.send(response.data); // Retorna a saída do script PHP
//     } catch (error) {
//         console.error(`AAErro ao executar o script PHP: ${error.message}`);
//         return res.status(500).send('Erro ao executar o script PHP: ' + error.message);
//     }
// });

// // Rotas para as páginas HTML
// const sendFile = (filePath) => (req, res) => {
//     res.sendFile(path.join(__dirname, '../../views', filePath));
// };

// app.get('/', sendFile('index.html'));
// app.get('/historia', sendFile('history.html'));
// app.get('/sobre', sendFile('about.html'));
// app.get('/olimpiadas', sendFile('olympics.html'));
// app.get('/feedback', sendFile('feedback.html'));
// app.get('/painel', sendFile('panel.html'));
// app.get('/test', sendFile('test.html'));

// const server = http.createServer(app);

// server.listen(port, () => {
//     console.log(`Servidor conectado na porta ${port}`);
//     open(`http://localhost:${port}`);
// });