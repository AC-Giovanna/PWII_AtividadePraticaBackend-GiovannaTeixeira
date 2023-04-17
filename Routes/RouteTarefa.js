//Exportação do Express
const express = require('express');

//Imortação da model
const TarefaModel = require('../Models/TarefaModel');

//Gerenciador de rotas
const router = express.Router();

/*
 * Todos os campos da tabela tarefa:
 * id_tarefa, titulo, descricao, prazo, dificuldade, recompensa_dinheiro
 */

//Rota de inserção
router.post('/CadastrarTarefa', (req, res) =>{
    
    console.log(req.body);

    let {titulo_tarefa, descricao_tarefa, prazo_tarefa, dificuldade_tarefa, recompensa_tarefa} = req.body;

    TarefaModel.create(
        {titulo_tarefa, descricao_tarefa, prazo_tarefa, dificuldade_tarefa, recompensa_tarefa}

    )
    .then(
        ()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:"Tarefa cadastrada com sucesso :)"
            })
        }
    )
    .catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"Erro ao cadastrar Tarefa!",
                erroObject:erro
            });
        }
    );
});



//Rota de Listagem sem critério
router.get('/ListarTarefas', (req, res) =>{

    TarefaModel.findAll()
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"Tarefas listadas com sucesso!",
                data: response
            })
        }
    )
    .catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"Erro ao listar Tarefas!",
                erroObject:erro
            });
        }
    )
});

//Rota de listagem por id_tarefa
router.get('/ListarTarefaPK/:id_tarefa', (req, res)=>{
    
    let {id_tarefa} = req.params;

    TarefaModel.findByPk(id_tarefa)
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"Tarefa listado com sucesso!",
                data: response
            })
        }
    )
    .catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"Erro ao listar Tarefa!",
                erroObject:erro
            });
        }
    )
});

//Rota de Alteração
router.put('/AlterarTarefa', (req, res) =>{
    
    const {id_tarefa, titulo_tarefa, descricao_tarefa, prazo_tarefa, dificuldade_tarefa, recompensa_tarefa} = req.body;

    TarefaModel.update(
        {titulo_tarefa, descricao_tarefa, prazo_tarefa, dificuldade_tarefa, recompensa_tarefa},
        {where:{id_tarefa}}
    )
    .then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"Tarefa alterada com sucesso!"
            })
        }
    )
    .catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"Erro ao alterar Tarefa!",
                erroObject:erro
            });
        }
    );
});

//Rota de Exclusão
router.delete('/DeletarTarefa/:id_tarefa', (req, res) =>{

    console.log(req.params);

    let{id_tarefa} = req.params

    TarefaModel.destroy(
        {where:{id_tarefa}}
    )
    .then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"Tarefa excluída com sucesso!"
            })
        }
    )
    .catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"Erro ao excluir Tarefa!",
                erroObject:erro
            });
        }
    );
});

//Exclusão


// Exportação das rotas
module.exports = router;