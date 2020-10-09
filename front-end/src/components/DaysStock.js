import React, { useState, useEffect } from "react";

//import props from "./Home";

const DaysStock = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/stock/MANAUS`);
      const jsonData = await response.json();
      console.log(jsonData);

      setTodos(jsonData.remainingDays);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const todosElemento = todos.map((todo) => (
    <p key={todo.dias_de_estoque}>{todo.dias_de_estoque}</p>
  ));

  return <>{todosElemento}</>;
};
export default DaysStock;
