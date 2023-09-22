import React from "react"
import ToDoList from "../todo-list"
import TodoListFilter from "../todo-list-filter";

const App = () => {
	const todoData = [
		{label: 'coffee', important: true, id: 1},
		{label: 'ice-cream', important: false, id: 2},
	]

	return (
		<div className="container py-5">
			<TodoListFilter />
			<ToDoList todos={todoData}/>
		</div>
	)
}

export default App