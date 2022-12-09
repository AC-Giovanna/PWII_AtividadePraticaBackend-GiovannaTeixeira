// Modelo para a tabela "avatar" do banco de dados

// Importação do Sequelize
const Sequelize = require('sequelize');

// Importação do arquivo de conexão com o banco
// (não é necessário colocar ".js" no nome do arquivo)
const connection = require('../Databases/Database');

// Criação do modelo da categoria
const AvatarModel = connection.define(
    // Nome da tabela seguido de um objeto JSON
    'avatar',
    {
        // Campos da tabela
        id_avatar: {
            // Características dos campos da tabela
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_avatar: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        vida_avatar: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1000
        },
        dinheiro_avatar: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        genero_avatar: {
            type: Sequelize.STRING(30),
            allowNull: true
        },
        descricao_avatar: {
            type: Sequelize.STRING(2000),
            allowNull: true
        },
        imagem_avatar: {
            type: Sequelize.BLOB,
            allowNull: true
        },
    },
);

//AvatarModel.sync({force:true});

// Exportação do modelo
module.exports = AvatarModel;