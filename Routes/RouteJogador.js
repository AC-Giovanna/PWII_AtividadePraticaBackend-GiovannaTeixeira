//Importando o Express
const express = require('express');

//Importação da model
const JogadorModel = require('../Models/JogadorModel');

//Gerenciador de rotas
const router = express.Router();

/*
 * Todos os campos da tabela jogador:
 * id_jogador, email, nome_usuario, senha, pronome
 */

//Rota de inserção
router.post('/CadastrarJogador', (req, res) =>{
    
    console.log(req.body);

    let {email, nome_usuario, senha, pronome} = req.body;

    JogadorModel.create(
        {email, nome_usuario, senha, pronome}

    )
    .then(
        ()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:"Jogador cadastrado com sucesso :)"
            })
        }
    )
    .catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"Erro ao cadastrar Jogador!",
                erroObject:erro
            });
        }
    );
});



//Rota de Listagem sem critério
router.get('/ListarJogadores', (req, res) =>{

    JogadorModel.findAll()
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"Jogadores listados com sucesso!",
                data: response
            })
        }
    )
    .catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"Erro ao listar Jogadores!",
                erroObject:erro
            });
        }
    )
});

//Rota de Alteração
router.put('/AlterarJogador', (req, res) =>{
    
    const {id_jogador, email, nome_usuario, senha, pronome} = req.body;

    JogadorModel.update(
        {email, nome_usuario, senha, pronome},
        {where:{id_jogador}}
    )
    .then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"Jogador alterado com sucesso!"
            })
        }
    )
    .catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"Erro ao alterar Jogador!",
                erroObject:erro
            });
        }
    );
});

//Rota de Exclusão
router.delete('/DeletarJogador/:id_jogador', (req, res) =>{

    console.log(req.params);

    let{id_jogador} = req.params

    JogadorModel.destroy(
        {where:{id_jogador}}
    )
    .then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"Jogador excluído com sucesso!"
            })
        }
    )
    .catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"Erro ao excluir Jogador!",
                erroObject:erro
            });
        }
    );
});

// Exportação das rotas
module.exports = router;