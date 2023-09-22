import React, {Component} from "react";

export default class ToDoListItem extends Component {

    constructor() {
        super();

        this.onLabelClick = () => {
            console.log(this.props.label)
        }
    }

    render () {
        const {label, important} = this.props

        const style = {
            color: important ? 'red' : 'black'
        }

        return <li className="list-group-item" style={style} onClick={this.onLabelClick}>{label}</li>
    }
}