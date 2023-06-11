import React from "react";

const Items = (props) => {

    const deleteButton = (type) => {
        alert(`${type} button clicked`)
    }

    return (
        <li>
            <span>Function : {props.todoData.id} {props.todoData.activity}</span>
            <button>Check</button>
            <button onClick={() => deleteButton("delete")}>delete</button></li>
    )
}

export default Items