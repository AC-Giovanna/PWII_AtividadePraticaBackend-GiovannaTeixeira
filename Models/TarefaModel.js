//Importando o Sequelize
const Sequelize = require('sequelize');

//Importando a conexão com o banco de dados
const connection = require('../Databases/Database');

//Criação da tabela e seus campos
const TarefaModel = connection.define(
    'tbl_tarefas',
    {
        id_tarefa: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo_tarefa: {
            type: Sequelize.STRING(500),
            allowNull: false
        },
        descricao_tarefa: {
            type: Sequelize.STRING(2000),
            allowNull: true
        },
        prazo_tarefa: {
            type: Sequelize.DATE,
            allowNull: true
        },
        dificuldade_tarefa: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        recompensa_tarefa: {
            type: Sequelize.DECIMAL,
            allowNull: false,
            defaultValue: 0
        }
    }, {
        freezeTableName: true,
        createdAt: 'dataCriacao',
        updatedAt: 'ultimaModificacao'
    }
);

//Exporatação da model
module.exports = TarefaModel;