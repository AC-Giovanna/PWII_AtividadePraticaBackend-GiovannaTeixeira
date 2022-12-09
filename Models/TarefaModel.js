//Importando o Sequelize
const Sequelize = require('sequelize');

//Importando a conexão com o banco de dados
const connection = require('../Databases/Database');

//Criação da tabela e seus campos
const TarefaModel = connection.define(
    'tarefa',
    {
        id_tarefa: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: Sequelize.STRING(500),
            allowNull: true
        },
        descricao: {
            type: Sequelize.STRING(2000),
            allowNull: true
        },
        prazo: {
            type: Sequelize.DATE,
            allowNull: true
        },
        dificuldade: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        recompensa_dinheiro: {
            type: Sequelize.DECIMAL,
            allowNull: false,
            defaultValue: 0
        }
    },
);

//Forçando a criação da tabela
//TarefaModel.sync({force:true});

//Exporatação da model
module.exports = TarefaModel;