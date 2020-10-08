/**
 * Arquivo: src/routes/stock.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Stock'.
 * Data: 01/10/2020
 * Author Danilsonu Nunes
 */

const router = require("express-promise-router")();
const stockController = require("../controllers/stock.controller");

// ==> Definindo as rotas da API- 'Stock':

// ==> Rota responsável por criar um novo 'Stock': (POST): localhost:3000/api/products
// router.post("/stock", productController.createProduct);

// ==> Rota responsável por listar todos os 'Stock': (GET): localhost:3000/api/stock
router.get("/stock/:polo", stockController.listAllStock);

module.exports = router;
