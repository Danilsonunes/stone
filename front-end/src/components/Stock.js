import React, { useState, useEffect } from "react";

//import props from "./Home";

const Stock = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/stock/MANAUS`);
      const jsonData = await response.json();

      setTodos(jsonData.all);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const todosElemento = todos.map((todo) => (
    <p key={todo.stock}>{todo.stock}</p>
  ));

  return <>{todosElemento}</>;
};
export default Stock;
