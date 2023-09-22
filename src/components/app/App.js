import React from "react"
import ToDoList from "../todo-list"

const App = () => {
	const todoData = [
		{label: 'coffee', important: true, id: 1},
		{label: 'ice-cream', important: false, id: 2},
	]

	return <ToDoList todos={todoData}/>
}

export default App