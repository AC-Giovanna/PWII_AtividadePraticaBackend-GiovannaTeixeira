// Arquivo contendo e exportando as rotas das categorias

// Importação do Express
const express = require('express');

// importação do modelo da tabela/categoria Avatar
const AvatarModel = require('../Models/AvatarModel');

// Importando o gerenciador de rotas do Express
const router = express.Router();


// ROTAS DA CATEGORIA AVATAR (CRUD)

//Rota de cadastro
router.post('/CadastrarAvatar', (req, res) =>{
    
    console.log(req.body);

    let {nome_avatar, genero_avatar, descricao_avatar, imagem_avatar} = req.body;

    AvatarModel.create(
        {nome_avatar, genero_avatar, descricao_avatar, imagem_avatar}

    )
    .then(
        ()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:"Avatar cadastrado com sucesso :)"
            })
        }
    )
    .catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"Erro ao cadastrar Avatar!",
                erroObject:erro
            });
        }
    );
});



//Rota de Listagem sem critério
router.get('/ListarAvatar', (req, res) =>{

    AvatarModel.findAll()
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"Avatares listados com sucesso!",
                data: response
            })
        }
    )
    .catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"Erro ao listar os Avatares!",
                erroObject:erro
            });
        }
    )
});

//Rota de listagem por id_Avatar
router.get('/ListarAvatarPK/:id_avatar', (req, res)=>{
    
    let {id_avatar} = req.params;

    AvatarModel.findByPk(id_avatar)
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"Avatar listado com sucesso!",
                data: response
            })
        }
    )
    .catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"Erro ao listar Avatar!",
                erroObject:erro
            });
        }
    )
});

//Rota de listagem por nome_avatar
router.get('/ListarAvatarNome/:nome_avatar', (req, res)=>{

    let {nome_avatar} = req.params;

    AvatarModel.findOne({where:{nome_avatar}})

    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"Avatar listado com sucesso!",
                data:response
            })
        }
    )
    .catch(
        (erro)=>{
            return res.status(400).jason({
                erroStatus:true,
                mensagemStatus:"Erro ao listar Avatar!",
                erroObject:erro
            });
        }
    )
});

//Rota de Alteração
router.put('/AlterarAvatar', (req, res) =>{
    
    const {id_avatar, nome_avatar, genero_avatar, descricao_avatar, imagem_avatar} = req.body;

    AvatarModel.update(
        {nome_avatar, genero_avatar, descricao_avatar, imagem_avatar},
        {where:{id_avatar}}
    )
    .then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"Avatar alterado com sucesso!"
            })
        }
    )
    .catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"Erro ao alterar Avatar!",
                erroObject:erro
            });
        }
    );
});

//Rota de Exclusão
router.delete('/DeletarAvatar/:id_avatar', (req, res) =>{

    console.log(req.params);

    let{id_avatar} = req.params

    AvatarModel.destroy(
        {where:{id_avatar}}
    )
    .then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"Avatar excluído com sucesso!"
            })
        }
    )
    .catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"Erro ao excluir avatar!",
                erroObject:erro
            });
        }
    );
});

// Exportação das rotas
module.exports = router;