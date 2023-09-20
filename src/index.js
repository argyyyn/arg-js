import React from "react"
import ReactDOM from "react-dom"
import ToDoList from "./components/ToDoList"

const App = () => {
  const todoData = [
    {label: 'coffee', important: true},
    {label: 'ice-cream', important: false},
  ]

  return <ToDoList todos={todoData}/>
}


ReactDOM.render(<App/>,document.getElementById('root'))