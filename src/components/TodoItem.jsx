import React from "react";
import './TodoItem.css'

class TodoItem extends React.Component {

    render() {
        return (
            <li className="todo-item-list">
                {/* data */}
                <div className="todo-items-result">
                    <span>{this.props.todoData.id} : {this.props.todoData.activity}  </span>
                </div>


                {/* completed */}
                <div className="todo-items-button">
                    <button
                        className="completed"
                        onClick={() => this.props.completeTodoHandler(this.props.todoData.id)}
                        disabled={this.props.todoData.done}>
                        {this.props.todoData.done ? <em className="done">Completed</em> : <>Completed</>}
                    </button>

                    {/* deleted */}
                    <button className="deleted" onClick={() => this.props.deleteTodoHandler(this.props.todoData.id)}>
                        Delete
                    </button>
                </div>
            </li>
        )
    }

}

export default TodoItem