// Arquivo contendo e exportando as rotas das categorias

// Importação do Express
const express = require('express');

// importação do modelo da tabela/categoria Avatar
const AvatarModel = require('../Models/AvatarModel');

// Importando o gerenciador de rotas do Express
const router = express.Router();


// ROTAS DA CATEGORIA AVATAR (CRUD)

//Rota de cadastro
router.post('/CadastrarAvatar', (req, res) =>{
    // Mensagem para verificação de funcionamento da rota
    res.send('Rota de CADASTRO da categoria Avatar em funcionamento :)');
});

//Rota de Leitura
router.get('/ListarAvatar', (req, res) =>{
    // Mensagem para verificação de funcionamento da rota
    res.send('Rota de LEITURA da categoria Avatar em funcionamento :)');
});

//Rota de Alteração
router.put('/AlterarAvatar', (req, res) =>{
    // Mensagem para verificação de funcionamento da rota
    res.send('Rota de ALTERAÇÃO da categoria Avatar em funcionamento :)');
});

//Rota de Exclusão
router.delete('/DeletarAvatar', (req, res) =>{
    // Mensagem para verificação de funcionamento da rota
    res.send('Rota de EXCLUSÃO da categoria Avatar em funcionamento :)');
});

// Exportação das rotas
module.exports = router;