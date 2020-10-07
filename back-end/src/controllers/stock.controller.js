const db = require("../config/database");


// ==> Método responsável por listar todos os 'Stocks':

exports.listAllStock = async (req, res) => {
  const allStock = await db.query(
    "SELECT stock FROM estoque WHERE polo = 'AM - MANAUS'"
  );
  const manausStock = await db.query(
    "SELECT count(maquinas) maquinas_vendidas_6_meses FROM atendimentos WHERE fecha > '2020-04-09' AND polo = 'AM - MANAUS'"
  );
  const porcentaje6Meses = await db.query(
    "SELECT count(maquinas) / 180 AS promedio_X_dia FROM atendimentos WHERE fecha > '2020-04-09' AND polo = 'AM - MANAUS'"
  );
  const normal = await db.query(
    "SELECT count(maquinas) / 180 * 14 AS estoque_normal_14_dias FROM atendimentos WHERE fecha > '2020-04-09' AND polo = 'AM - MANAUS'"
  );
  const dias = await db.query(
    "SELECT stock / (SELECT COUNT(*) / 180 AS estoque_normal_14_dias FROM atendimentos WHERE fecha > '2020-04-09' AND polo = 'AM - MANAUS') AS dias_de_estoque FROM estoque WHERE polo = 'AM - MANAUS'"
  );
  res.status(200).send({
    all: allStock.rows,
    ventas: manausStock.rows,
    ventasXdia: porcentaje6Meses.rows,
    stockNormal: normal.rows,
    remainingDays: dias.rows,
  });
};
