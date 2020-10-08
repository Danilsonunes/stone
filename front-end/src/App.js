import React, { Fragment, useState, useEffect } from "react";
//import { Switch, Route, Link } from "react-router-dom";

//import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//import TutorialsList from "./components/tutorial-list.component";

const App = () => {
  const [todos, setTodos] = useState([])
  let resultado = []
  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/stock')
      const jsonData = await response.json()



      setTodos(jsonData.all)


      resultado = resultado.concat(jsonData.all, jsonData.ventas)

      console.log(resultado) // Agora sim concatena tudo e salva de volta no `resultado`

    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])




  const todosElemento = todos.map(todo => (
    <p key={todo.id}>
      {todo.stock}
    </p>

  ))


  return (
    <>
      {'algo'}
      {todosElemento}

    </>
  )
}

// const App = () => {

//   const [todos, setTodos] = useState([])

//   const getTodos = async () => {
//     try {

//       const response = await fetch('http://localhost:4000/api/stock')
//       const jsonData = await response.json();

//       setTodos(jsonData.all)
//       console.log(jsonData)
//     } catch (err) {
//       console.error(err.message)
//     }

//   }


//   useEffect(() => {
//     getTodos();
//   }, [])

//   console.log(todos)
//   return (
//     <Fragment>
//       {"algo"}
//       {todos.map(todo => (
//         <p>
//           {todo.all}
//         </p>
//       ))}
//     </Fragment>
//   )
// }
// <div>
//   <nav className="navbar navbar-expand navbar-dark bg-dark">
//     <a href="/stock" className="navbar-brand">
//       bezKoder
//     </a>
//     <div className="navbar-nav mr-auto">
//       <li className="nav-item">
//         <Link to={"/stock"} className="nav-link">
//           Tutorials
//         </Link>
//       </li>
//     </div>
//   </nav>

//   <div className="container mt-3">
//     <Switch>
//       <Route exact path={["/", "/stock"]} component={TutorialsList} />
//     </Switch>
//   </div>
// </div>

export default App;