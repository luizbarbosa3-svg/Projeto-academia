const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

const hostname = process.env.APP_HOST;
const port = process.env.APP_PORT;

const alunoRotas = require('./routes/aluno');
const pagamentoRotas = require('./routes/pagamento');
const planoRotas = require('./routes/plano');

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'pages')));
app.use(express.json());

// Rota raiz serve o index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.use('/aluno', alunoRotas);
app.use('/pagamento', pagamentoRotas);
app.use('/plano', planoRotas);

app.listen(port, hostname, async () =>{
    console.log(`Rodando em (localhost:3000/) http://${hostname}:${port}/`);
});