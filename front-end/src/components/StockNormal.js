import React, { useState, useEffect } from "react";

//import "./App.css";

const StockNormal = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/stock");
      const jsonData = await response.json();

      setTodos(jsonData.stockNormal);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const todosElemento = todos.map((todo) => (
    <p key={todo.id}>{todo.estoque_normal_14_dias}</p>
  ));

  return (
    <>
      {"Normal Stock"}
      {todosElemento}
    </>
  );
};
export default StockNormal;
