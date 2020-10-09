/**
 * Archivo: server.js
 * Descriocion: archiivo responsable por toda a configuracion y execucion de la aplicacion
 * Fecha: 01/10/2020
 * Autor: Danilson Nunes
 */

const app = require("./src/app");

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("Aplicação executando na porta ", port);
});
