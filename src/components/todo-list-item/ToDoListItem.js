import React, {Component} from "react";

export default class ToDoListItem extends Component {

    state = {
        done: false
    }

    onLabelClick = () => {
        console.log(this.props.label)
    }

    render () {
        const {label, important} = this.props
        const {done} = this.state
        let classNames = 'todo-list-i'

        const style = {
            color: important ? 'red' : 'black'
        }

        return <li className="list-group-item" style={style} onClick={this.onLabelClick}>{label}</li>
    }
}