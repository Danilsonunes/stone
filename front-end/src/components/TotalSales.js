import React, { useState, useEffect } from "react";

//import "./App.css";

const TotalSales = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/stock");
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
    <p key={todo.id}>{todo.maquinas_vendidas_6_meses}</p>
  ));

  return (
    <>
      {"Sales last 6 monts"}
      {todosElemento}
    </>
  );
};
export default TotalSales;
