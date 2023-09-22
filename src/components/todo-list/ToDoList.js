import React from "react";
import ToDoListItem from "../todo-list-item";
import './ToDoList.css'

const ToDoList = ({todos}) => {
    return  <ul className="list-group">
        {
            todos.map((item, index) => <ToDoListItem {...item} key={'todo-item-' + index} />)
        }
    </ul>
}

export default ToDoList