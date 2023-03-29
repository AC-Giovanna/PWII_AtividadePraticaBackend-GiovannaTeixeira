//Importação do Sequelize
const Sequelize = require('sequelize');

//Imortação da conexão com o banco
const connection = require('../Databases/Database');

//Criação da tabela e de seus campos
const JogadorModel = connection.define(
    'tbl_jogadores',
    {
        id_jogador: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email_usuario: {
            type: Sequelize.STRING(50),
            allowNull:false
        },
        nome_usuario: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        senha_usuario: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        pronome_usuario: {
            type: Sequelize.STRING(30),
            allowNull: true
        }
    }, {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false
    }
);

//Exportação da model
module.exports = JogadorModel;