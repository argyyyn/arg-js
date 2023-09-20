import React from "react";
import ToDoListItem from "./ToDoListItem";

const ToDoList = ({todos}) => {
    return  <ul>
        {
            todos.map((item, index) => <ToDoListItem {...item} key={index} />)
        }
    </ul>
}

export default ToDoList