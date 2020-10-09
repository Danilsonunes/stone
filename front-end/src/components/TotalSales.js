import React, { useState, useEffect } from "react";

//import props from "./Home";

const TotalSales = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/stock/MANAUS`);
      const jsonData = await response.json();

      setTodos(jsonData.ventas);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const todosElemento = todos.map((todo) => (
    <p key={todo.maquinas_vendidas_6_meses}>{todo.maquinas_vendidas_6_meses}</p>
  ));

  return <>{todosElemento}</>;
};
export default TotalSales;
