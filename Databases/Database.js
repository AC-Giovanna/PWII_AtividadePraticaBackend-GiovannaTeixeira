// Importando o sequelize
const Sequelize = require('sequelize');

// Criando a conexão com o banco de dados
const connection = new Sequelize (
    'produtividade_gameficada',
    'root',
    '',
    {
        host: 'localhost',
        dialect:'mysql,',
        timezone: '-03:00'
    }
);

module.exports = connection;