const db = require("../config/database");

// ==> Método responsável por criar um novo 'Product':

// exports.createProduct = async (req, res) => {
//   const { product_name, quantity, price } = req.body;
//   const {
//     rows,
//   } = await db.query(
//     "INSERT INTO products (product_name, quantity, price) VALUES ($1, $2, $3)",
//     [product_name, quantity, price]
//   );

//   res.status(201).send({
//     message: "Product added successfully!",
//     body: {
//       product: { product_name, quantity, price },
//     },
//   });
// };

// ==> Método responsável por listar todos os 'Stocks':

exports.listAllStock = async (req, res) => {
  const response = await db.query(
    "SELECT stock FROM estoque WHERE polo = 'AM - MANAUS';SELECT city FROM atendimentos WHERE polo = 'AM - MANAUS'"
  );
  res.status(200).send(response.rows);
};

exports.listMaquinasMeses = async (req, res) => {
  const response2 = await db.query(
    "SELECT count(maquinas) maquinas_vendidas_6_meses FROM atendimentos WHERE fecha > '2020-04-09' AND polo = 'AM - MANAUS'"
  );
  res.status(200).send(response2.rowCount);
};
