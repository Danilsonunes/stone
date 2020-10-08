﻿const db = require("../config/database");

// ==> Método responsável por listar todos os 'Stocks':

exports.listAllStock = async (req, res) => {
  const polo = req.params.polo;
  const allStock = await db.query(
    "SELECT stock FROM estoque WHERE polo LIKE '%' || $1 || '%'",
    [polo]
  );
  const manausStock = await db.query(
    "SELECT count(maquinas) maquinas_vendidas_6_meses FROM atendimentos WHERE fecha > '2020-04-09' AND polo LIKE '%' || $1 || '%'",
    [polo]
  );
  const porcentaje6Meses = await db.query(
    "SELECT count(maquinas) / 180 AS promedio_X_dia FROM atendimentos WHERE fecha > '2020-04-09' AND polo LIKE '%' || $1 || '%'",
    [polo]
  );
  const normal = await db.query(
    "SELECT count(maquinas) / 180 * 14 AS estoque_normal_14_dias FROM atendimentos WHERE fecha > '2020-04-09' AND polo LIKE '%' || $1 || '%'",
    [polo]
  );
  const dias = await db.query(
    "SELECT stock / (SELECT COUNT(*) / 180 AS estoque_normal_14_dias FROM atendimentos WHERE fecha > '2020-04-09' AND polo LIKE '%' || $1 || '%') AS dias_de_estoque FROM estoque WHERE polo LIKE '%' || $1 || '%'",
    [polo]
  );
  res.status(200).send({
    all: allStock.rows,
    ventas: manausStock.rows,
    ventasXdia: porcentaje6Meses.rows,
    stockNormal: normal.rows,
    remainingDays: dias.rows,
  });
};
