import React from "react"
import { createRoot } from 'react-dom/client';
import ToDoList from "./components/ToDoList"

const App = () => {
  const todoData = [
    {label: 'coffee', important: true, id: 1},
    {label: 'ice-cream', important: false, id: 2},
  ]

  return <ToDoList todos={todoData}/>
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)