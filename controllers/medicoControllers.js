// Importar biblioteca
const Sequelize = require('sequelize');

// Importar módulos
const database = require('../config/dbConfig');
const medicoModels = require('../models/medicoModels')
const atletaModels = require('../models/atletaModels')

class medicoControllers{

        
    static async verDado_solicitado_ou_nao(req, res){
        let arrayDados = []
        await database.sync()
        let dados = await medicoModels.findAll({where: {nome: 'dr_consulta'},
            attributes: [
              'nome', 'cpf', 'idmedico'
            ]
          })
        dados.forEach((dado) => {
            arrayDados.push(dado.dataValues)
        })
        res.status(200).json(arrayDados)
    } 

    static async verNome(req, res){
        let arrayDados = []
        await database.sync()
        let dados = await atletaModels.findAll({
            attributes: [
              'nome',
              'cpf',
              'situacao'
            ]
          })
        dados.forEach((dado) => {
            arrayDados.push(dado.dataValues)
        })
        res.status(200).json(arrayDados)
    }  

}

module.exports = medicoControllers;