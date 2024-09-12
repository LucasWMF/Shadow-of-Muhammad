const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.get('/historia', function(req, res) {
    res.sendFile(path.join(__dirname, 'pages', 'historia.html'));
});

app.get('/modalidades', function(req, res) {
    res.sendFile(path.join(__dirname, 'pages', 'modalidades.html'));
});

app.get('/ranking', function(req, res) {
    res.sendFile(path.join(__dirname, 'pages', 'ranking.html'));
});

app.get('/feedback', function(req, res) {
    res.sendFile(path.join(__dirname, 'pages', 'feedback.html'));
});

app.get('/painel', function(req, res) {
    res.sendFile(path.join(__dirname, 'pages', 'panel.php'));
});

app.listen(8081, function() {
    console.log('Servidor conectado na porta 8081');
});