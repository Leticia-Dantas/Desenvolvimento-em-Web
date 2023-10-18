const express = require('express');
const router = express.Router();  //Olha as rotas e chama a controle de acordo com a rota pedida 

const calculadoraController = require ('../controller/calculadoraController');
router.get("/", calculadoraController.indexCalculadora);
router.post("/calcular", calculadoraController.calcular);

module.exports = router;
