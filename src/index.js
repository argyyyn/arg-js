import React from "react"
import ReactDOM from "react-dom"

const ToDoList = () => {
  return <ul>
      <li>this is how we do</li>
    </ul>

}

const el = (
  <div>
    <h1>ToDo list</h1>
    <input type="text" placeholder="search"/>
    <ul>
      <li>learn React</li>
      <li>learn TS</li>
      <ToDoList/>
    </ul>
  </div>
)

console.log(el)
console.log(ToDoList())

ReactDOM.render(el,document.getElementById('root'))