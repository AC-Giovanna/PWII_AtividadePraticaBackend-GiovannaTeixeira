// Importando o sequelize
const Sequelize = require('sequelize');

// Criando a conexão com o banco de dados
const connection = new Sequelize (
    // Nome do banco
    'produtividade_gameficada',
    // Usuário
    'root',
    // Senha (esta é a padrão)
    '',
    {
        host: 'localhost',
        dialect:'mysql',
        timezone: '-03:00',
        port: '3307'
    }
);

// Exportação
module.exports = connection;