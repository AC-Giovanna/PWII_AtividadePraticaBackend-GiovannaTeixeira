// Arquivo inicial da API


// Importação do Express
const express = require('express');

//Importação das rotas da categoria, ou tabela, "avatar"
const RouteAvatar = require('./Routes/RouteAvatar');

//Importação das rotas da categoria, ou tabela, "tarefa"
const RouteTarefa = require('./Routes/RouteTarefa');

//Importação das rotas da categoria, ou tabela, "jogador"
const RouteJogador = require('./Routes/RouteJogador');



// Tornando o Express executável
const app = express ();

app.use(express.json());

//Utilização das rotas
app.use('/', RouteAvatar);
app.use('/', RouteTarefa);
app.use('/', RouteJogador);



// Criação do webserver para requisições HTTP
app.listen(3000, ()=>{
    console.log('Testado com sucesso!');
});