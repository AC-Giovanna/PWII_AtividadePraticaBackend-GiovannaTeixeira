// Arquivo inicial da API

// Importação do Express e do Sequelize
const express = require('express');
const connection = require('./Databases/Database')

//Importação das rotas da categoria, ou tabela, "avatar"
const RouteAvatar = require('./Routes/RouteAvatar');

//Importação das rotas da categoria, ou tabela, "tarefa"
const RouteTarefa = require('./Routes/RouteTarefa');

//Importação das rotas da categoria, ou tabela, "jogador"
const RouteJogador = require('./Routes/RouteJogador');

//Forçar criação de todas as tabelas
//connection.sync({ force: true });

// Tornando o Express executável
const app = express ();

//Tornando possível ler JSON e formulários
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Utilização das rotas
app.use('/', RouteAvatar);
app.use('/', RouteTarefa);
app.use('/', RouteJogador);



// Criação do webserver para requisições HTTP
app.listen(3000, ()=>{
    console.log('Servidor rodando!');
});