/**
 * Arquivo: src/routes/stock.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Stock'.
 * Data: 01/10/2020
 * Author Danilson Nunes
 */

const router = require("express-promise-router")();
const stockController = require("../controllers/stock.controller");

// ==> Definindo as rotas da API- 'Stock':

// ==> Rota responsável por criar um novo 'Stock': (POST): localhost:3000/api/stock
router.patch("/stock/:polo", stockController.AddStock);

// ==> Rota responsável por listar  os 'Stock'por polo: (GET): localhost:3000/api/stock/:polo
router.get("/stock/:polo", stockController.listAllStock);

module.exports = router;
