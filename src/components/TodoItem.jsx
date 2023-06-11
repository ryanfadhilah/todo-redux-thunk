import React from "react";

class TodoItem extends React.Component {

    render() {
        return (
            <li>
                {/* data */}
                <span>{this.props.todoData.id} : {this.props.todoData.activity}  </span>

                {/* completed */}
                <button
                    onClick={() => this.props.completeTodoHandler(this.props.todoData.id)}
                    disabled={this.props.todoData.done}>
                    {this.props.todoData.done ? <em>Completed</em> : <>completed</>}
                </button>

                {/* deleted */}
                <button onClick={() => this.props.deleteTodoHandler(this.props.todoData.id)}>
                    Delete
                </button>
            </li>
        )
    }

}

export default TodoItem