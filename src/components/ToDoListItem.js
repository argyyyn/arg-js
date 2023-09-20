import React from "react";
const ToDoListItem = ({label, important = false}) => {
    const style = {
        color: important ? 'red' : 'black'
    }
    return <li style={style}>{label}</li>
}

export default ToDoListItem