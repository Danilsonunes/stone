import React, { useState, useEffect } from "react";

//import "./App.css";

const PercentDay = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/stock");
      const jsonData = await response.json();

      setTodos(jsonData.ventasXdia);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const todosElemento = todos.map((todo) => (
    <p key={todo.id}>{todo.promedio_x_dia}</p>
  ));

  return (
    <>
      {"Percent by day"}
      {todosElemento}
    </>
  );
};
export default PercentDay;
