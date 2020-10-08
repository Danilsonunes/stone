import React, { useState, useEffect } from "react";

import Home from "./Home";

const DaysStock = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/stock/{this.state.searchTerm}`
      );
      const jsonData = await response.json();

      setTodos(jsonData.remainingDays);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const todosElemento = todos.map((todo) => (
    <p key={todo.id}>{todo.dias_de_estoque}</p>
  ));

  return (
    <>
      {"Stock left for days"}
      {todosElemento}
    </>
  );
};
export default DaysStock;
