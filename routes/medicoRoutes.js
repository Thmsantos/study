const Express = require('express');

const medicoControllers = require('../controllers/medicoControllers');

const router = Express.Router();

// Definir o home page route
router
  .get("/get", medicoControllers.verDado_solicitado_ou_nao)
  .get("/get_nome", medicoControllers.verNome)
  
// Exportar módulos
module.exports = router;