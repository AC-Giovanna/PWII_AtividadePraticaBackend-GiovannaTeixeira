// Arquivo inicial da API

// Importação do Express
const express = require('express');

//Importação das rotas da categoria, ou tabela, "Avatar"
const RouteAvatar = require('./Routes/RouteAvatar');

// Tornando o Expresse executável
const app = express ();




app.use('/', RouteAvatar);




// Criação do webserver para requisições HTTP
app.listen(3000, ()=>{
    console.log('Testado com sucesso!');
});